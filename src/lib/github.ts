export interface GitHubRepoData {
  name: string;
  description: string | null;
  language: string | null;
  languages: Record<string, number>; // from languages endpoint
  stars: number;
  forks: number;
  openIssues: number;
  lastCommitDate: string;
  lastCommitMessage: string;
  totalCommits: number;
  createdAt: string;
  updatedAt: string;
  isPrivate: boolean;
}

const GITHUB_API = 'https://api.github.com';

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

const fetchOptions: RequestInit = {
  headers: getHeaders(),
  next: { revalidate: 3600 },
};

async function githubFetch(endpoint: string): Promise<Response> {
  return fetch(`${GITHUB_API}${endpoint}`, {
    headers: getHeaders(),
    next: { revalidate: 3600 },
  });
}

/**
 * Fetches repo data from GitHub API.
 * Returns null if API fails (site works without GitHub connection).
 */
export async function getRepoData(
  repoFullName: string
): Promise<GitHubRepoData | null> {
  try {
    // Fetch repo info, languages, and last commit in parallel
    const [repoRes, langRes, commitsRes] = await Promise.all([
      githubFetch(`/repos/${repoFullName}`),
      githubFetch(`/repos/${repoFullName}/languages`),
      githubFetch(`/repos/${repoFullName}/commits?per_page=1`),
    ]);

    if (!repoRes.ok) {
      console.warn(`GitHub API: repo fetch failed for ${repoFullName} (${repoRes.status})`);
      return null;
    }

    const repo = await repoRes.json();
    const languages: Record<string, number> = langRes.ok
      ? await langRes.json()
      : {};

    let lastCommitDate = repo.pushed_at || repo.updated_at;
    let lastCommitMessage = '';
    let totalCommits = 0;

    if (commitsRes.ok) {
      const commits = await commitsRes.json();
      if (Array.isArray(commits) && commits.length > 0) {
        lastCommitDate = commits[0].commit?.author?.date || lastCommitDate;
        lastCommitMessage = commits[0].commit?.message || '';
      }

      // Try to extract total commit count from Link header
      const linkHeader = commitsRes.headers.get('link');
      if (linkHeader) {
        const lastPageMatch = linkHeader.match(
          /page=(\d+)>;\s*rel="last"/
        );
        if (lastPageMatch) {
          totalCommits = parseInt(lastPageMatch[1], 10);
        }
      }
    }

    return {
      name: repo.name,
      description: repo.description,
      language: repo.language,
      languages,
      stars: repo.stargazers_count ?? 0,
      forks: repo.forks_count ?? 0,
      openIssues: repo.open_issues_count ?? 0,
      lastCommitDate,
      lastCommitMessage,
      totalCommits,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      isPrivate: repo.private ?? false,
    };
  } catch (error) {
    console.warn(`GitHub API error for ${repoFullName}:`, error);
    return null;
  }
}

/**
 * Fetches weekly commit activity for the last 4 weeks.
 * Returns null if API fails.
 */
export async function getCommitActivity(
  repoFullName: string
): Promise<{ week: string; count: number }[] | null> {
  try {
    const res = await githubFetch(
      `/repos/${repoFullName}/stats/commit_activity`
    );

    if (!res.ok) {
      console.warn(
        `GitHub API: commit activity failed for ${repoFullName} (${res.status})`
      );
      return null;
    }

    const data = await res.json();

    // GitHub returns 52 weeks of data; take last 4
    if (!Array.isArray(data) || data.length === 0) return null;

    const last4Weeks = data.slice(-4);
    return last4Weeks.map(
      (week: { week: number; total: number }) => ({
        week: new Date(week.week * 1000).toLocaleDateString('es-AR', {
          day: 'numeric',
          month: 'short',
        }),
        count: week.total,
      })
    );
  } catch (error) {
    console.warn(`GitHub API activity error for ${repoFullName}:`, error);
    return null;
  }
}

/**
 * Formats a date string into a relative "time ago" string in Spanish.
 */
export function formatRelativeDate(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return 'justo ahora';
  if (diffMinutes < 60) return `hace ${diffMinutes} min`;
  if (diffHours < 24) return `hace ${diffHours}h`;
  if (diffDays === 1) return 'ayer';
  if (diffDays < 7) return `hace ${diffDays} dias`;
  if (diffDays < 30) return `hace ${Math.floor(diffDays / 7)} sem`;
  if (diffDays < 365) return `hace ${Math.floor(diffDays / 30)} meses`;
  return `hace ${Math.floor(diffDays / 365)} anos`;
}

/**
 * Returns a percentage breakdown of languages.
 */
export function getLanguagePercentages(
  languages: Record<string, number>
): { name: string; percentage: number; color: string }[] {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  if (total === 0) return [];

  const colorMap: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Python: '#3572A5',
    Rust: '#dea584',
    Go: '#00ADD8',
    Shell: '#89e051',
    SCSS: '#c6538c',
    MDX: '#fcb32c',
  };

  return Object.entries(languages)
    .map(([name, bytes]) => ({
      name,
      percentage: Math.round((bytes / total) * 1000) / 10,
      color: colorMap[name] || '#8b949e',
    }))
    .sort((a, b) => b.percentage - a.percentage);
}

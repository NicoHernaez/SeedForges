import {
  type GitHubRepoData,
  formatRelativeDate,
  getLanguagePercentages,
} from '@/lib/github';

interface GitHubStatsProps {
  repos: GitHubRepoData[];
}

export default function GitHubStats({ repos }: GitHubStatsProps) {
  if (repos.length === 0) return null;

  // Merge languages across all repos
  const mergedLangs: Record<string, number> = {};
  for (const repo of repos) {
    for (const [lang, bytes] of Object.entries(repo.languages)) {
      mergedLangs[lang] = (mergedLangs[lang] || 0) + bytes;
    }
  }
  const langs = getLanguagePercentages(mergedLangs);

  // Find most recent commit
  const sortedByDate = [...repos].sort(
    (a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime()
  );
  const latest = sortedByDate[0];
  const totalCommits = repos.reduce((sum, r) => sum + r.totalCommits, 0);
  const totalIssues = repos.reduce((sum, r) => sum + r.openIssues, 0);

  return (
    <div
      className={[
        'relative rounded-2xl',
        'bg-[var(--color-sf-forest)]/40 backdrop-blur-md',
        'border border-[var(--color-sf-emerald)]/10',
        'p-6 space-y-5',
      ].join(' ')}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-[var(--color-sf-cream)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-sf-cream)]">
            {repos.length === 1 ? 'Repositorio' : `${repos.length} Repositorios`}
          </h3>
        </div>
        <div className="flex gap-2">
          {repos.map((repo) => (
            <span
              key={repo.name}
              className={[
                'text-[10px] font-[family-name:var(--font-mono)] px-2 py-0.5 rounded-full uppercase tracking-wider',
                repo.isPrivate
                  ? 'bg-[var(--color-sf-gold)]/10 text-[var(--color-sf-gold)]'
                  : 'bg-[var(--color-sf-emerald)]/10 text-[var(--color-sf-emerald)]',
              ].join(' ')}
            >
              {repo.name}
            </span>
          ))}
        </div>
      </div>

      {/* Language bar */}
      {langs.length > 0 && (
        <div className="space-y-2">
          <div className="flex rounded-full overflow-hidden h-2">
            {langs.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                }}
                title={`${lang.name} ${lang.percentage}%`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {langs.slice(0, 5).map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-sf-muted)]">
                  {lang.name}{' '}
                  <span className="text-[var(--color-sf-cream)]/60">
                    {lang.percentage}%
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        {totalCommits > 0 && (
          <div className="space-y-0.5">
            <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
              Commits
            </p>
            <p className="text-[var(--color-sf-cream)] text-sm font-[family-name:var(--font-mono)] font-medium">
              {totalCommits.toLocaleString()}
            </p>
          </div>
        )}
        <div className="space-y-0.5">
          <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Ultimo update
          </p>
          <p className="text-[var(--color-sf-emerald)] text-sm font-[family-name:var(--font-mono)] font-medium">
            {formatRelativeDate(latest.lastCommitDate)}
          </p>
        </div>
        <div className="space-y-0.5">
          <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Issues abiertas
          </p>
          <p className="text-[var(--color-sf-cream)] text-sm font-[family-name:var(--font-mono)] font-medium">
            {totalIssues}
          </p>
        </div>
      </div>

      {/* Last commit */}
      {latest.lastCommitMessage && (
        <div className="space-y-1">
          <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Ultimo commit ({latest.name})
          </p>
          <p className="text-[var(--color-sf-cream)]/80 text-sm font-[family-name:var(--font-mono)] truncate">
            {latest.lastCommitMessage.split('\n')[0]}
          </p>
        </div>
      )}
    </div>
  );
}

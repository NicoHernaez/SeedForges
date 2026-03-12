import {
  type GitHubRepoData,
  formatRelativeDate,
  getLanguagePercentages,
} from '@/lib/github';

interface GitHubActivityProps {
  repoData: GitHubRepoData | null;
  activity: { week: string; count: number }[] | null;
}

export default function GitHubActivity({
  repoData,
  activity,
}: GitHubActivityProps) {
  if (!repoData) return null;

  const langs = getLanguagePercentages(repoData.languages);
  const maxCommits = activity
    ? Math.max(...activity.map((w) => w.count), 1)
    : 1;

  return (
    <div
      className={[
        'relative rounded-2xl',
        'bg-[var(--color-sf-forest)]/40 backdrop-blur-md',
        'border border-[var(--color-sf-emerald)]/10',
        'p-6 space-y-6',
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
          <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)]">
            Actividad del Repositorio
          </h3>
        </div>
        <span
          className={[
            'text-xs font-[family-name:var(--font-mono)] px-2 py-0.5 rounded-full uppercase tracking-wider',
            repoData.isPrivate
              ? 'bg-[var(--color-sf-gold)]/10 text-[var(--color-sf-gold)]'
              : 'bg-[var(--color-sf-emerald)]/10 text-[var(--color-sf-emerald)]',
          ].join(' ')}
        >
          {repoData.isPrivate ? 'Privado' : 'Publico'}
        </span>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {repoData.totalCommits > 0 && (
          <StatBox label="Commits" value={repoData.totalCommits.toLocaleString()} />
        )}
        <StatBox
          label="Ultimo update"
          value={formatRelativeDate(repoData.lastCommitDate)}
          highlight
        />
        <StatBox label="Issues abiertas" value={String(repoData.openIssues)} />
        <StatBox
          label="Creado"
          value={new Date(repoData.createdAt).toLocaleDateString('es-AR', {
            month: 'short',
            year: 'numeric',
          })}
        />
        <StatBox label="Stars" value={String(repoData.stars)} />
        <StatBox label="Forks" value={String(repoData.forks)} />
      </div>

      {/* Language breakdown */}
      {langs.length > 0 && (
        <div className="space-y-3">
          <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Lenguajes
          </p>
          <div className="flex rounded-full overflow-hidden h-2.5">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {langs.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full inline-block flex-shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-sf-muted)]">
                  {lang.name}
                </span>
                <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-sf-cream)]/60 ml-auto">
                  {lang.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Commit activity chart */}
      {activity && activity.length > 0 && (
        <div className="space-y-3">
          <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Actividad semanal (ultimas 4 semanas)
          </p>
          <div className="flex items-end gap-2 h-24">
            {activity.map((week, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[var(--color-sf-cream)] text-xs font-[family-name:var(--font-mono)]">
                  {week.count}
                </span>
                <div
                  className="w-full rounded-t-sm bg-[var(--color-sf-emerald)]/60 transition-all duration-500"
                  style={{
                    height: `${Math.max((week.count / maxCommits) * 100, 4)}%`,
                  }}
                />
                <span className="text-[var(--color-sf-muted)] text-[10px] font-[family-name:var(--font-mono)]">
                  {week.week}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Last commit */}
      {repoData.lastCommitMessage && (
        <div className="space-y-1 pt-2 border-t border-[var(--color-sf-emerald)]/10">
          <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Ultimo commit
          </p>
          <p className="text-[var(--color-sf-cream)]/80 text-sm font-[family-name:var(--font-mono)]">
            {repoData.lastCommitMessage.split('\n')[0]}
          </p>
        </div>
      )}
    </div>
  );
}

function StatBox({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="bg-[var(--color-sf-dark)]/50 rounded-lg p-3 space-y-1">
      <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
        {label}
      </p>
      <p
        className={[
          'text-sm font-[family-name:var(--font-mono)] font-medium',
          highlight ? 'text-[var(--color-sf-emerald)]' : 'text-[var(--color-sf-cream)]',
        ].join(' ')}
      >
        {value}
      </p>
    </div>
  );
}

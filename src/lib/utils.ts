import type { ProjectStatus } from './projects';

/**
 * Simple classnames merger using template literals.
 * Filters out falsy values and joins with a space.
 */
export function cn(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Returns a human-readable display label for a project status.
 */
export function formatStatus(status: ProjectStatus): string {
  const labels: Record<ProjectStatus, string> = {
    mvp: 'MVP Activo',
    development: 'En Desarrollo',
    concept: 'Concepto',
  };
  return labels[status];
}

/**
 * Returns Tailwind color classes (text + border) for a project status.
 */
export function getStatusColor(status: ProjectStatus): string {
  const colors: Record<ProjectStatus, string> = {
    mvp: 'text-emerald border-emerald',
    development: 'text-gold border-gold',
    concept: 'text-muted border-muted',
  };
  return colors[status];
}

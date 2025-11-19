import { projects } from './getProjects';

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

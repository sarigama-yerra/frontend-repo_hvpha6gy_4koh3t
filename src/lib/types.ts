export interface ProjectSection { heading: string; content: string; }
export interface ProjectItem {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  featuredImage: string;
  sections: ProjectSection[];
}

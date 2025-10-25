export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  website?: string;
  featured: boolean;
  date: string;
  relatedProjects?: string[]; // IDs of related projects for cross-linking
}

export const projects: Project[] = [
  // Add your projects here!
  // Example structure:
  // {
  //   id: "example-project",
  //   title: "Example Project",
  //   description: "A short one-line description for the card view",
  //   longDescription: "A detailed description explaining what this project does, why you built it, and how it works. This helps AI understand your project.",
  //   tags: ["web", "tool", "open-source"],
  //   techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   github: "https://github.com/yourusername/project",
  //   demo: "https://demo.example.com",
  //   featured: true,
  //   date: "2025-10",
  //   relatedProjects: ["another-project-id"]
  // }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getRelatedProjects(projectId: string): Project[] {
  const project = getProjectById(projectId);
  if (!project || !project.relatedProjects) return [];

  return project.relatedProjects
    .map(id => getProjectById(id))
    .filter((p): p is Project => p !== undefined);
}

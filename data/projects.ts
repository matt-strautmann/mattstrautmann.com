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
  {
    id: "sbdk",
    title: "SBDK - Software Builder Development Kit",
    description: "A comprehensive development kit for building software projects faster and more efficiently",
    longDescription: `SBDK (Software Builder Development Kit) is a powerful toolkit designed to streamline the software development process. It provides reusable components, utilities, and patterns that help developers build better software faster.

The kit includes pre-configured setups for common development tasks, best-practice implementations, and tools that reduce boilerplate code. SBDK is built with TypeScript for excellent developer experience and type safety.

Key features include:
- Modular architecture for easy customization
- TypeScript-first with full type definitions
- Comprehensive documentation and examples
- Active development and community support
- Integration with popular frameworks and tools

Whether you're starting a new project or enhancing an existing one, SBDK provides the building blocks you need to accelerate development while maintaining code quality.`,
    tags: ["developer-tools", "typescript", "open-source", "sdk"],
    techStack: ["TypeScript", "Node.js"],
    github: "https://github.com/sbdk-dev/sbdk-dev",
    website: "https://sbdk.dev",
    featured: true,
    date: "2025-10",
  },
  {
    id: "portfolio-website",
    title: "AEO-Optimized Portfolio",
    description: "A modern, maintainable portfolio website built for AI search engine discoverability",
    longDescription: `This portfolio website is built with Answer Engine Optimization (AEO) as a core principle. It uses Schema.org structured data to help AI search engines like ChatGPT, Perplexity, and Google's AI understand my projects.

The site features automatic sitemap generation, semantic HTML structure, and comprehensive metadata for each project. All projects are managed through a single data file, making it incredibly easy to maintain and update.

Built with Next.js 16 for optimal performance, the site uses static generation to ensure fast load times and excellent SEO. The clean, modern design uses gradients and smooth animations to create an engaging experience while maintaining professionalism.

Special features:
- llms.txt file for AI crawler optimization
- Complete Schema.org markup on every page
- Automatic sitemap and robots.txt generation
- Mobile-first responsive design
- Lightning-fast static generation
- Easy content management through a single data file`,
    tags: ["web", "portfolio", "open-source", "seo", "aeo"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/matt-strautmann/mattstrautmann.com",
    featured: true,
    date: "2025-10",
    relatedProjects: ["sbdk"],
  },
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

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
    title: "SBDK - Local Data Pipeline Development Kit",
    description: "Open source local-first data pipeline toolkit for rapid development of enterprise-grade data processing systems",
    longDescription: `SBDK is a local-first data pipeline toolkit that enables data engineers to build, test, and iterate on data pipelines on their local machines in seconds—without cloud dependencies or infrastructure costs.

Built on industry-standard tools (DLT, dbt, and DuckDB), SBDK provides a complete ETL environment that initializes in 30 seconds with hot-reload development for instant feedback. The toolkit achieves 396K+ operations per second with a sub-500MB memory footprint—dramatically lighter than traditional cloud-based data stacks.

Key features include:
- Complete data pipeline setup in 30 seconds
- Local processing with full data sovereignty
- Real-time pipeline monitoring through visual terminal UI
- Hot-reload development with automatic re-execution
- Built-in synthetic data generation and query helpers
- 11x faster installation than pip using uv package manager
- Zero monthly costs compared to cloud alternatives

MIT-licensed and permanently free for core functionality, SBDK serves data engineers, analytics teams, startups, and enterprises seeking to avoid vendor lock-in while maintaining development velocity and compliance requirements.`,
    tags: ["data-engineering", "python", "open-source", "etl", "developer-tools"],
    techStack: ["Python", "DuckDB", "dbt", "DLT"],
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

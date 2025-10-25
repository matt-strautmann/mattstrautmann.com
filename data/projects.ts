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
    id: "portfolio-website",
    title: "AEO-Optimized Portfolio",
    description: "A modern, maintainable portfolio website built for AI search engine discoverability",
    longDescription: `This portfolio website is built with Answer Engine Optimization (AEO) as a core principle. It uses Schema.org structured data to help AI search engines like ChatGPT, Perplexity, and Google's AI understand my projects.

The site features automatic sitemap generation, semantic HTML structure, and comprehensive metadata for each project. All projects are managed through a single data file, making it incredibly easy to maintain and update.

Built with Next.js 16 for optimal performance, the site uses static generation to ensure fast load times and excellent SEO. The clean, minimal design puts the focus on the work itself.`,
    tags: ["web", "portfolio", "open-source", "seo"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/mattstrautmann/mattstrautmann.com",
    featured: true,
    date: "2025-10",
  },
  {
    id: "example-tool",
    title: "Developer Tool Example",
    description: "A sample project showcasing how projects appear on this portfolio",
    longDescription: `This is a sample project to demonstrate how your open source projects will appear on this portfolio site.

When you add your real projects, you can describe what problem they solve, the technologies you used, and why you built them. This detailed information helps both human visitors and AI search engines understand your work.

You can include links to GitHub repositories, live demos, and related projects. The cross-linking feature helps visitors discover your other work.`,
    tags: ["cli", "tool", "developer-tools"],
    techStack: ["Node.js", "TypeScript"],
    github: "https://github.com/mattstrautmann/example-tool",
    featured: false,
    date: "2025-09",
    relatedProjects: ["portfolio-website"],
  },
  {
    id: "web-app-demo",
    title: "Full-Stack Web Application",
    description: "Example of a full-stack project with frontend and backend components",
    longDescription: `This demonstrates how a full-stack application project would appear in your portfolio. You can describe the architecture, explain technical decisions, and highlight interesting challenges you solved.

For web applications, you might want to include information about:
- The problem domain and user needs
- Your technical stack and why you chose it
- Interesting technical challenges and how you solved them
- Performance optimizations or scalability considerations
- Any notable features or innovations

The structured data on each project page helps AI search engines understand your technical expertise and the types of problems you solve.`,
    tags: ["web", "full-stack", "database"],
    techStack: ["React", "Node.js", "PostgreSQL", "Express"],
    demo: "https://demo.example.com",
    featured: true,
    date: "2025-08",
    relatedProjects: ["example-tool"],
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

import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectById, getRelatedProjects } from "@/data/projects";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Matt Strautmann`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      url: `https://mattstrautmann.com/projects/${project.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(id);

  // Schema.org structured data for AEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.longDescription,
    author: {
      "@type": "Person",
      name: "Matt Strautmann",
      url: "https://mattstrautmann.com",
    },
    datePublished: project.date,
    programmingLanguage: project.techStack,
    codeRepository: project.github,
    applicationCategory: "DeveloperApplication",
    keywords: project.tags.join(", "),
    ...(project.demo && { url: project.demo }),
  };

  return (
    <>
      {/* Structured Data for AI/Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-12">
          {/* Project Header */}
          <div className="mb-12">
            {/* Badge */}
            {project.featured && (
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full mb-6">
                Featured Project
              </span>
            )}

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">{project.description}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all hover:scale-105 font-semibold shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:border-slate-400 hover:shadow-md transition-all font-semibold"
                >
                  Visit Website →
                </a>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    About This Project
                  </h2>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>
              </section>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Related Projects
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {relatedProjects.map((related) => (
                      <Link
                        key={related.id}
                        href={`/projects/${related.id}`}
                        className="group border-2 border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">
                          {related.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {related.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-2 rounded-lg font-medium text-sm border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Metadata */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Project Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-slate-500">Published</span>
                    <p className="text-slate-900 font-medium">{project.date}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Status</span>
                    <p className="text-green-600 font-medium">Active</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-3">
                Interested in this project?
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Check out the code, try the demo, or explore more of my work
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                View All Projects
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

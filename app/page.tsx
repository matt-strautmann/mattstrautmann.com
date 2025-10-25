import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  // Schema.org structured data for Person (AEO optimization)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matt Strautmann",
    jobTitle: "Software Engineer",
    url: "https://mattstrautmann.com",
    sameAs: [
      "https://github.com/mattstrautmann",
    ],
    knowsAbout: projects.map(p => p.title),
    description: "Software engineer building open source projects and tools. Portfolio showcasing experiments in software development.",
  };

  return (
    <>
      {/* Structured Data for AI/Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Matt Strautmann</h1>
          <p className="text-gray-600 mt-2">Software Engineer</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            I build open source projects and tools. This portfolio showcases my work
            and experiments in software development. Each project includes detailed
            documentation, source code, and insights into the problems they solve.
          </p>
        </section>

        {/* Projects Grid */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Projects</h2>

          {projects.length === 0 ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-600 mb-4">No projects yet!</p>
              <p className="text-sm text-gray-500">
                Add your projects in <code className="bg-gray-100 px-2 py-1 rounded">data/projects.ts</code>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    {project.github && (
                      <span className="text-gray-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        GitHub
                      </span>
                    )}
                    {project.demo && (
                      <span className="text-blue-600">Live Demo →</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            Interested in my work? Get in touch or check out my code.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/mattstrautmann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            {/* Add more contact links as needed */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Matt Strautmann. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}

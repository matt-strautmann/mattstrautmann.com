import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Resources - Matt Strautmann",
  description: "Curated resources, tools, and recommendations for software developers. My personal tech stack, favorite tools, and helpful resources for building better software.",
  openGraph: {
    title: "Developer Resources - Matt Strautmann",
    description: "Curated resources, tools, and recommendations for software developers.",
    url: "https://mattstrautmann.com/resources",
  },
};

interface Resource {
  name: string;
  description: string;
  url: string;
  category: string;
  why?: string;
}

const resources: Resource[] = [
  // Development Tools
  {
    name: "SBDK",
    description: "Software Builder Development Kit - comprehensive toolkit for streamlining development",
    url: "https://sbdk.dev",
    category: "Development Tools",
    why: "My own project - built to solve the problems I encountered building software projects repeatedly"
  },
  {
    name: "Next.js",
    description: "React framework for production-grade applications",
    url: "https://nextjs.org",
    category: "Development Tools",
    why: "Best developer experience for building modern web apps with great performance out of the box"
  },
  {
    name: "TypeScript",
    description: "JavaScript with syntax for types",
    url: "https://www.typescriptlang.org",
    category: "Development Tools",
    why: "Catch errors before runtime and get better IDE support - worth the initial learning curve"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    url: "https://tailwindcss.com",
    category: "Development Tools",
    why: "Rapid UI development without leaving your HTML - consistent design systems made easy"
  },

  // SEO & Discoverability
  {
    name: "llms.txt Standard",
    description: "Protocol for making websites discoverable to AI search engines",
    url: "https://llms-txt.io",
    category: "SEO & AI",
    why: "Essential for being found by ChatGPT, Claude, and Perplexity - the future of search"
  },
  {
    name: "Schema.org",
    description: "Structured data vocabulary for the web",
    url: "https://schema.org",
    category: "SEO & AI",
    why: "Helps search engines and AI understand your content - critical for AEO"
  },

  // Learning Resources
  {
    name: "Justin Welsh's Content Strategy",
    description: "Learn how to build a personal brand and grow your audience",
    url: "https://www.justinwelsh.me",
    category: "Personal Brand",
    why: "Clear, proven strategies for getting attention and building an audience as a creator"
  },

  // Open Source
  {
    name: "GitHub",
    description: "Where the world builds software",
    url: "https://github.com",
    category: "Open Source",
    why: "Essential for collaboration, portfolio building, and contributing to the developer community"
  },
];

const categories = Array.from(new Set(resources.map(r => r.category)));

export default function ResourcesPage() {
  // Schema.org for the resources page
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Developer Resources by Matt Strautmann",
    description: "Curated collection of developer tools, resources, and recommendations",
    author: {
      "@type": "Person",
      name: "Matt Strautmann",
      url: "https://mattstrautmann.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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
          {/* Page Header */}
          <div className="mb-16">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Curated Resources
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Tools & Resources I{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Actually Use
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
              My curated list of development tools, frameworks, and resources that help me build better software.
              Everything here is something I actually use and recommend.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-slate-700">
                <strong className="text-blue-700">Note:</strong> These are my personal recommendations based on real experience.
                Your mileage may vary - pick what works for your projects and team.
              </p>
            </div>
          </div>

          {/* Resources by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <section key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-slate-900">{category}</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {resources
                    .filter(r => r.category === category)
                    .map((resource) => (
                      <a
                        key={resource.name}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {resource.name}
                          </h3>
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>

                        <p className="text-slate-600 mb-3">
                          {resource.description}
                        </p>

                        {resource.why && (
                          <div className="bg-slate-50 rounded-lg p-4 border-l-2 border-blue-500">
                            <p className="text-sm text-slate-700">
                              <strong className="text-blue-700">Why I use it:</strong> {resource.why}
                            </p>
                          </div>
                        )}
                      </a>
                    ))}
                </div>
              </section>
            ))}
          </div>

          {/* Tech Stack Section */}
          <section className="mt-16 pt-16 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-900">My Current Stack</h2>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Next.js + React</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    Backend & Tools
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Node.js</li>
                    <li>• Git & GitHub</li>
                    <li>• Vercel (deployment)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Planning & Design
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Notion (docs & planning)</li>
                    <li>• Figma (when needed)</li>
                    <li>• Linear (project management)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    SEO & Discovery
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Schema.org markup</li>
                    <li>• llms.txt standard</li>
                    <li>• Semantic HTML</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Have a resource to recommend?
                </h2>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  I'm always looking for great tools and resources. Connect with me on LinkedIn or GitHub.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:scale-105 transition-transform"
                  >
                    View Projects
                  </Link>
                  <a
                    href="https://linkedin.com/in/mattstrautmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

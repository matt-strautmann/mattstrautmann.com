import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  // Schema.org structured data for Person (AEO optimization)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matt Strautmann",
    jobTitle: "Open Source Developer & Data Leader",
    worksFor: {
      "@type": "Organization",
      name: "PostPilot"
    },
    url: "https://mattstrautmann.com",
    sameAs: [
      "https://github.com/matt-strautmann",
      "https://linkedin.com/in/mattstrautmann",
      "https://sbdk.dev"
    ],
    alumniOf: [
      { "@type": "Organization", "name": "Airbnb" },
      { "@type": "Organization", "name": "Braze" },
      { "@type": "Organization", "name": "Good Money" },
      { "@type": "Organization", "name": "Conversant" }
    ],
    knowsAbout: ["Open Source", "Developer Tools", "Artificial Intelligence", "Machine Learning", "Data Platforms", "Software Development Kits"],
    description: "Open source developer tools with 10+ years of enterprise experience from Airbnb, Braze, and PostPilot. Production-ready SDKs and data platforms. Free, MIT licensed, no vendor lock-in. Stop rebuilding - start shipping.",
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <>
      {/* Structured Data for AI/Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Header - Simplified */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                  Matt Strautmann
                </h1>
                <p className="text-slate-600 mt-1 font-medium">Free Data & ML SDKs from Airbnb/Braze - Skip 6 Months of Setup</p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/resources"
                  className="hidden md:flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Resources
                </Link>
                <a
                  href="https://github.com/matt-strautmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/mattstrautmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section - Mission First */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          <section className="mb-24">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Open Source Developer Tools
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Stop reinventing the wheel.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Start building what matters.
                </span>
              </h2>

              <p className="text-2xl font-semibold text-slate-900 mb-6 border-l-4 border-blue-600 pl-6">
                Skip 6 months of infrastructure work. Start with enterprise-grade tools built at Airbnb and Braze.
                <span className="block text-blue-600 mt-2 font-bold">Free forever. No signup required.</span>
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                I've spent 10+ years building data and ML platforms at Airbnb, Braze, and now PostPilot.
                Every company faces the same problems. Every team rebuilds the same solutions.
              </p>

              <p className="text-xl text-slate-900 font-semibold leading-relaxed mb-8">
                So I'm packaging those solutions as open source. All code public. All learnings shared.
                No more wasted cycles on solved problems.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="https://sbdk.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  Explore SBDK
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="https://github.com/matt-strautmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold border-2 border-slate-300 hover:border-slate-900 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Projects First - What I'm Building NOW */}
          {featuredProjects.length > 0 && (
            <section className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-slate-900">What I'm Building</h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                Active projects solving real problems. Built in public, shared with everyone.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-xs font-bold text-green-700 uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          Open Source
                        </span>
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 mb-6 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        {project.github && (
                          <span className="flex items-center gap-1.5 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            View Source
                          </span>
                        )}
                        {project.demo && (
                          <span className="flex items-center gap-1.5 text-blue-600 font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Vision Section - Where the Industry is Going */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border-2 border-blue-200">
              <div className="mb-6">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  What I Believe
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Every company will be a software company. Every team will need better tools.
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  We're in the middle of a fundamental shift. AI isn't just changing how we build software—it's changing who can build software and what's possible to build.
                </p>
                <p>
                  But most teams are stuck rebuilding the same infrastructure over and over. Data pipelines. ML platforms. Developer tooling. Monitoring systems. Every company solves these problems slightly differently, but 90% of the code is identical.
                </p>
                <p className="text-xl font-semibold text-blue-700">
                  → That's what I'm changing. Open source tools that package enterprise-grade solutions, so teams can skip the boilerplate and build what actually matters.
                </p>
              </div>
            </div>
          </section>

          {/* Brief Credibility Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Built at Scale</h2>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                <p className="text-lg text-slate-700 mb-6">
                  I've built these systems before—at companies you've heard of. Now I'm open sourcing what works.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Airbnb (HotelTonight)</p>
                      <p className="text-sm text-slate-600">Director of Data Science - Multi-million dollar revenue impact through ML/forecasting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Braze</p>
                      <p className="text-sm text-slate-600">Sr Manager, Data & AI - 80% efficiency gains, 6 days to 30 seconds for exec reporting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">PostPilot</p>
                      <p className="text-sm text-slate-600">Head of Data - Leading AI/ML strategy and platform development</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Open Source</p>
                      <p className="text-sm text-slate-600">Building SBDK and sharing everything publicly</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <a
                    href="https://linkedin.com/in/mattstrautmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold"
                  >
                    Full background on LinkedIn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-slate-900">More Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-200"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {projects.length === 0 && (
            <section>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-16 text-center bg-white">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-xl text-slate-700 font-semibold mb-3">No projects yet!</p>
                <p className="text-slate-500">
                  Add your projects in <code className="bg-slate-100 px-3 py-1 rounded text-blue-600 font-mono text-sm">data/projects.ts</code>
                </p>
              </div>
            </section>
          )}

          {/* CTA Section - Action Oriented */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Start Building
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stop rebuilding. Start shipping.
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Try SBDK. Follow the work on GitHub. Read what I'm thinking on LinkedIn. Let's build the future together.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a
                    href="https://sbdk.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 hover:bg-blue-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Try SBDK
                  </a>
                  <a
                    href="https://github.com/matt-strautmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Follow on GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mattstrautmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 hover:bg-slate-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 mt-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <p className="text-sm text-slate-500 text-center">
              © {new Date().getFullYear()} Matt Strautmann. Built with Next.js, optimized for AI search engines.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

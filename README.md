# Matt Strautmann - Portfolio Website

> **Live Site**: [mattstrautmann.com](https://mattstrautmann.com)

My personal portfolio showcasing open source projects and career experience. Built with Next.js, TypeScript, and Tailwind CSS, optimized for both AI search engines (AEO) and traditional SEO.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

---

## 🎯 About

I'm an AI & Data executive (Head of Data @ PostPilot, former Airbnb/Braze) who builds open source developer tools. This portfolio showcases my work and makes it easy for AI assistants to understand and recommend my projects.

**Why open source this portfolio?**
- Share the AEO optimization techniques I learned
- Help others build AI-friendly portfolios
- Practice what I preach: building in public
- Accept contributions and improvements

---

## ✨ Features

### 🤖 **AI-Optimized (AEO)**
- **Schema.org structured data** - Person & SoftwareSourceCode schemas
- **llms.txt** - AI crawler optimization file (helps ChatGPT/Claude discover you)
- **Semantic HTML** with proper heading hierarchy
- **AI-friendly content structure** for better understanding
- Automatic **sitemap.xml** and **robots.txt**

### 🚀 **Easy to Maintain**
- **Single source of truth**: Edit `data/projects.ts` to add projects
- **Automatic routing**: New projects auto-generate pages
- **Cross-linking**: Related projects link to each other
- **Type-safe**: Full TypeScript coverage

### 💎 **Modern Stack**
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Static Generation** for speed
- **Vercel deployment** ready

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repo
git clone https://github.com/matt-strautmann/mattstrautmann.com.git
cd mattstrautmann.com

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📝 Adding Projects

All projects are managed in **one file**: `data/projects.ts`

```typescript
// data/projects.ts
{
  id: "my-project",                    // URL slug
  title: "My Awesome Project",         // Display name
  description: "One-line description", // Card preview
  longDescription: `
    Detailed description here.

    Explain what it does, why you built it, and how it works.
    This helps both humans AND AI understand your project.
  `,
  tags: ["open-source", "typescript", "tool"],
  techStack: ["TypeScript", "Node.js", "React"],
  github: "https://github.com/username/project",
  demo: "https://demo.com",            // Optional
  website: "https://website.com",      // Optional
  featured: true,                      // Show on homepage
  date: "2025-10",                     // YYYY-MM
  relatedProjects: ["other-project"]   // Optional
}
```

**That's it!** Your project automatically gets:
- ✅ Homepage card
- ✅ Detail page at `/projects/my-project`
- ✅ Schema.org markup
- ✅ Sitemap inclusion
- ✅ Full SEO metadata

---

## 🤖 AI Discoverability (llms.txt)

This portfolio includes an `llms.txt` file at `/public/llms.txt` - a proposed standard for helping AI crawlers understand your site.

**What it does:**
- Tells ChatGPT, Claude, Perplexity how to present you
- Provides structured info about your work
- Guides AI on your primary vs secondary identity
- Improves accuracy in AI-generated responses about you

**Based on:** [Jeremy Howard's llms.txt proposal](https://llmstxt.org/)

---

## 📂 Project Structure

```
mattstrautmann.com/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Homepage (executive bio + projects)
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Crawler instructions
│   ├── projects/
│   │   └── [id]/page.tsx       # Dynamic project pages
│   └── resources/
│       └── page.tsx            # Tools & resources page
├── data/
│   └── projects.ts             # 👈 PROJECT DATA (edit this!)
├── public/
│   └── llms.txt                # AI crawler optimization
└── package.json
```

---

## 🎨 Customization

### Update Your Information

**1. Homepage** (`app/page.tsx`)
- Update name, bio, and achievements
- Change LinkedIn/GitHub links
- Modify experience section

**2. Metadata** (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  // ...
}
```

**3. llms.txt** (`public/llms.txt`)
- Update with your career details
- Change how AI presents you
- Add your expertise areas

### Styling

Built with Tailwind CSS. Key color variables:
- **Primary**: `blue-600` (links, accents)
- **Text**: `slate-900`, `slate-600`
- **Backgrounds**: `white`, `slate-50`
- **Success**: `green-600` (open source badges)

Search and replace color classes to rebrand.

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub** ✅ (You're already here!)
2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select this repository
   - Click Deploy
3. **Done!** Auto-deployed with HTTPS + CDN

### Other Platforms

Works on any Next.js host:
- Netlify
- Cloudflare Pages
- Railway
- AWS Amplify
- Any Node.js hosting

---

## 🎯 AEO Best Practices

This portfolio implements best practices for AI discoverability:

### 1. Structured Data (Schema.org)
- **Person schema** on homepage (who you are)
- **SoftwareSourceCode schema** on project pages
- Includes tech stack, dates, repository links

### 2. Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Descriptive meta tags
- Clear content structure
- Meaningful anchor text

### 3. Content Strategy
Each project page answers:
- **What?** Clear title and description
- **Why?** Problem it solves
- **How?** Tech stack and implementation
- **Where?** Links to code, demo, website

### 4. Technical SEO
- Fast loading (Next.js static generation)
- Mobile responsive
- Auto-generated sitemap.xml
- Proper robots.txt
- Open Graph + Twitter cards
- HTTPS (via deployment)

---

## 📊 SEO Checklist

- ✅ Schema.org structured data
- ✅ Semantic HTML markup
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt
- ✅ Mobile responsive design
- ✅ Fast loading times
- ✅ HTTPS enabled
- ✅ llms.txt for AI crawlers

---

## 📚 Documentation

**Comprehensive guides available in [`/docs`](./docs):**
- **[Setup Checklist](./docs/SETUP_CHECKLIST.md)** - Complete GitHub optimization guide
- **[Contributing Guidelines](./docs/CONTRIBUTING.md)** - How to contribute
- **[LinkedIn Optimization](./docs/LINKEDIN_OPTIMIZATION_GUIDE.md)** - Grow your LinkedIn presence
- **[Backlink Strategy](./docs/BACKLINK_STRATEGY.md)** - SEO backlink acquisition
- **[GitHub README Template](./docs/GITHUB_README_EXECUTIVE.md)** - Profile README example

---

## 🤝 Contributing

This is my personal portfolio, but I'm happy to accept:
- **Bug fixes** - If something's broken, please fix it!
- **AEO improvements** - Better ways to optimize for AI?
- **Feature suggestions** - Open an issue to discuss
- **Documentation** - Help others understand AEO

**See [Contributing Guidelines](./docs/CONTRIBUTING.md) for full details.**

---

## 💡 Using This as a Template?

Feel free! This is open source under MIT license.

**To use as your own:**
1. Fork this repo
2. Update `data/projects.ts` with your projects
3. Update `app/page.tsx` with your bio
4. Update `public/llms.txt` with your info
5. Update `app/layout.tsx` metadata
6. Deploy to Vercel

**Please:**
- ⭐ Star the repo if you find it useful
- 🔗 Link back to this repo in your README
- 📝 Share what you learned about AEO

---

## 🔗 Links

- **Live Site**: [mattstrautmann.com](https://mattstrautmann.com)
- **LinkedIn**: [linkedin.com/in/mattstrautmann](https://linkedin.com/in/mattstrautmann)
- **GitHub Profile**: [@matt-strautmann](https://github.com/matt-strautmann)
- **SBDK Project**: [sbdk.dev](https://sbdk.dev)

---

## 📚 Resources

**Learn about AEO:**
- [llms.txt Standard](https://llmstxt.org/) by Jeremy Howard
- [Schema.org Documentation](https://schema.org/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)

**Built with:**
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

**TL;DR**: Use this however you want. Attribution appreciated but not required.

---

## 👨‍💻 About the Author

**Matt Strautmann**
Head of Data @ PostPilot | Former Airbnb, Braze
AI & Data Leader building open source developer tools

- 80% efficiency gains in enterprise ML platforms
- $100K+ revenue impact through data-driven solutions
- 10+ years leading data teams at top tech companies

Now building [SBDK](https://sbdk.dev) - open source local data pipeline toolkit for rapid development.

---

<div align="center">

**Questions?** Open an issue | **Like it?** Star the repo ⭐

Built with ❤️ and optimized for 🤖 AI

</div>

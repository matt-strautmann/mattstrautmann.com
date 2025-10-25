# Matt Strautmann - Portfolio Website

A clean, minimal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for AI search engines (AEO) and traditional SEO.

## Features

- **AEO Optimized**: Built with Answer Engine Optimization in mind
  - Schema.org structured data (Person & SoftwareSourceCode schemas)
  - Semantic HTML with proper heading hierarchy
  - AI-friendly content structure
  - Automatic sitemap.xml and robots.txt

- **Easy to Maintain**: Update one file to add projects
- **Cross-linking**: Automatically link related projects
- **Responsive Design**: Mobile-first, works on all devices
- **Fast & Modern**: Next.js 16 with static generation
- **Clean Design**: Minimal, professional aesthetic

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Build for Production

```bash
npm run build
npm start
```

## Adding Projects (The Easy Way!)

All your projects are managed in a single file: **`data/projects.ts`**

### Step 1: Open the file

```bash
data/projects.ts
```

### Step 2: Add your project to the array

```typescript
{
  id: "my-awesome-project",           // URL-friendly slug
  title: "My Awesome Project",        // Display name
  description: "A short one-line description",  // For cards/meta
  longDescription: `
    A detailed description of your project.

    Explain what it does, why you built it, and how it works.
    This helps AI understand and recommend your work.

    You can use multiple paragraphs here.
  `,
  tags: ["web", "tool", "open-source"],     // Categories
  techStack: ["Next.js", "TypeScript", "React"],  // Technologies used
  github: "https://github.com/yourusername/project",  // Optional
  demo: "https://demo.example.com",         // Optional
  website: "https://website.com",           // Optional
  featured: true,                           // Show as featured?
  date: "2025-10",                         // YYYY-MM format
  relatedProjects: ["another-project-id"]  // Optional cross-linking
}
```

### Step 3: Save and refresh

That's it! Your project will automatically appear on:
- Homepage projects grid
- Individual project page at `/projects/my-awesome-project`
- Sitemap.xml
- Schema.org structured data

## AEO Best Practices Implemented

This site is built to be easily understood by AI search engines:

### 1. Structured Data (Schema.org)
- **Person Schema** on homepage: Tells AI who you are
- **SoftwareSourceCode Schema** on project pages: Describes each project
- Includes: name, description, tech stack, repository links, dates

### 2. Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Descriptive meta tags
- Clear content structure
- Alt text for images (when you add them)

### 3. Content Optimization
Each project page answers:
- **What?** (title, description)
- **Why?** (in longDescription)
- **How?** (tech stack)
- **Where?** (GitHub, demo links)

### 4. Technical SEO
- Fast loading (Next.js optimization)
- Mobile responsive
- sitemap.xml (auto-generated)
- robots.txt
- Open Graph tags
- Twitter cards

## Customization

### Update Your Info

**In `app/layout.tsx`**: Update metadata
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description here",
  // ...
}
```

**In `app/page.tsx`**: Update homepage content
- Update your name in the header
- Update the About section
- Update contact links

### Styling

The site uses Tailwind CSS. Colors and styles can be adjusted:
- **Main text**: `text-gray-900`, `text-gray-600`
- **Links**: `text-blue-600`
- **Backgrounds**: `bg-white`, `bg-gray-100`
- **Borders**: `border-gray-200`

Change these throughout the files for a different look.

### Adding More Sections

Want to add a blog, resume, or other pages? Create new folders in `app/`:

```
app/
  blog/
    page.tsx      (Blog listing)
    [slug]/
      page.tsx    (Individual blog post)
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Deploy!

Your site will be live with automatic HTTPS and global CDN.

### Other Platforms

This is a standard Next.js app and works on:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## Project Structure

```
mattstrautmann.com/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Auto-generated sitemap
│   ├── robots.ts            # Robots.txt config
│   └── projects/
│       └── [id]/
│           └── page.tsx     # Dynamic project pages
├── data/
│   └── projects.ts          # 👈 ADD YOUR PROJECTS HERE
└── public/                  # Static files (images, etc.)
```

## Tips for Maximum AEO Impact

1. **Be Descriptive**: Use natural language in `longDescription`
2. **Use Keywords**: Include relevant terms in descriptions and tags
3. **Link to GitHub**: Always include your repo link
4. **Keep it Updated**: Regular updates signal active development
5. **Cross-link**: Use `relatedProjects` to show project relationships
6. **Add Demos**: Live demos help AI understand your work

## SEO Checklist

- ✅ Schema.org structured data
- ✅ Semantic HTML
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ HTTPS (via Vercel)

## Questions?

This is a static site generator using Next.js. Every project you add to `data/projects.ts` automatically gets:
- A card on the homepage
- A detail page with full info
- Proper SEO metadata
- Schema.org markup for AI
- Inclusion in sitemap

Just edit one file, commit, and deploy. That's it!

## License

MIT - Feel free to use this as a template for your own portfolio.

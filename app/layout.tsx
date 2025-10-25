import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Strautmann - Portfolio",
  description: "Portfolio of open source projects by Matt Strautmann. Software engineer building tools and applications.",
  metadataBase: new URL('https://mattstrautmann.com'),
  openGraph: {
    title: "Matt Strautmann - Portfolio",
    description: "Portfolio of open source projects by Matt Strautmann. Software engineer building tools and applications.",
    url: 'https://mattstrautmann.com',
    siteName: 'Matt Strautmann Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Matt Strautmann - Portfolio",
    description: "Portfolio of open source projects by Matt Strautmann.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

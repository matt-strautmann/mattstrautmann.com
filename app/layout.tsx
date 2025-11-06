import type { Metadata } from "next";
import "./globals.css";
import { PHProvider, PostHogPageView } from "./providers/posthog";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Matt Strautmann - Building Open Source Developer Tools",
  description: "Stop reinventing the wheel. I'm packaging 10+ years of enterprise data/ML experience from Airbnb, Braze, and PostPilot into open source tools. All code public. All learnings shared.",
  metadataBase: new URL('https://mattstrautmann.com'),
  verification: {
    google: 'MEH2NpqfcfafbioMPzOqGdXM8h0ty6uHiQYfG5R_P48',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Matt Strautmann - Building Open Source Developer Tools",
    description: "Packaging 10+ years of enterprise data/ML experience into open source tools. SBDK and more. Built in public.",
    url: 'https://mattstrautmann.com',
    siteName: 'Matt Strautmann',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Matt Strautmann - Building Open Source Developer Tools",
    description: "Stop reinventing the wheel. Enterprise-grade data/ML tools, open sourced. Building SBDK and sharing everything.",
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
        <PHProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}

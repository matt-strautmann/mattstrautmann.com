import type { Metadata } from "next";
import "./globals.css";
import { PHProvider, PostHogPageView } from "./providers/posthog";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Matt Strautmann - Free Open Source Developer Tools & SDKs",
  description: "Production-ready SDKs from 10+ years at Airbnb, Braze & PostPilot. Free, MIT licensed, zero vendor lock-in. Skip 6 months of infrastructure work - start shipping today.",
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
    title: "Matt Strautmann - Free Production-Ready Developer SDKs",
    description: "Skip 6 months of infrastructure work. Battle-tested SDKs from Airbnb, Braze & PostPilot. Free, MIT licensed, production-ready today.",
    url: 'https://mattstrautmann.com',
    siteName: 'Matt Strautmann',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Matt Strautmann - Free Developer Tools & SDKs",
    description: "Production-ready SDKs from 10+ years at Airbnb & Braze. Free, open source, zero vendor lock-in. Start shipping faster.",
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

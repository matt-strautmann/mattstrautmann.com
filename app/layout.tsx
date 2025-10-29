import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Strautmann - AI & Data Leader",
  description: "Head of Data at PostPilot. Former Airbnb, Braze. I help scaling companies turn messy data into profit through AI/ML platforms and data strategy.",
  metadataBase: new URL('https://mattstrautmann.com'),
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Matt Strautmann - AI & Data Leader",
    description: "Head of Data at PostPilot. Former Airbnb, Braze. Helping companies scale through AI/ML and data strategy.",
    url: 'https://mattstrautmann.com',
    siteName: 'Matt Strautmann',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Matt Strautmann - AI & Data Leader",
    description: "Head of Data at PostPilot. Former Airbnb, Braze. Building open source AI/ML tools.",
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

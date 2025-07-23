import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waquar Hassan - Software Developer",
  description:
    "Passionate software developer building beautiful and interactive software. Explore my projects and software development expertise.",
  keywords: [
    "Software Developer",
    "Flutter Developer",
    "Python",
    "Machine Learning",
    "TypeScript",
    "JavaScript",
    "UI/UX",
    "Deep Learning",
    "DevOps",
    "Deep Learning",
    "Agentic AI",
    "Gen AI",
    "Artificial Intelligence",
    "waquarism",
    "Sahil",
    "Waquar Hassan",
  ],
  authors: [{ name: "Waquar Hassan" }],
  creator: "Waquar Hassan",
  openGraph: {
    title: "Waquar Hassan - Software Developer Portfolio",
    description:
      "Passionate software developer building beautiful and interactive software. Explore my projects and software development expertise.",

    url: "https://waquar.com",
    siteName: "Waquar Hassan - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Waquar Hassan - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waquar Hassan - Software Developer",
    description:
      "Passionate software developer building beautiful and interactive software. Explore my projects and software development expertise.",
    creator: "@waquarism",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

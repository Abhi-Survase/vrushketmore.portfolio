import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vrushket More | AI/ML Engineer & Data Analyst",
  description:
    "Vrushket More — AI/ML engineer and data analyst building production-grade AI systems. MS in Computer Science with 3+ years of experience transforming data into intelligent solutions.",
  keywords: [
    "Machine Learning",
    "AI",
    "Data Science",
    "Python",
    "NLP",
    "GenAI",
    "Business Intelligence",
  ],
  authors: [{ name: "Vrushket More" }],
  openGraph: {
    title: "Vrushket More | AI/ML Engineer & Data Analyst",
    description:
      "Building intelligent systems that transform data into actionable insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

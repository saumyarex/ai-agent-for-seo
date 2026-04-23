import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-agent-for-seo.vercel.app"),
  title: {
    default: "AI Agent for SEO | Ryze AI",
    template: "%s | Ryze AI",
  },
  description:
    "Ryze is the AI agent for SEO that finds ranking opportunities, builds content plans, flags technical blockers, and gives your team the clearest next step to win more qualified traffic.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI SEO",
    "SEO automation",
    "AI content planning",
    "Technical SEO AI",
    "SEO task management",
    "AI keyword research",
    "SEO audit automation",
    "Next steps for SEO",
  ],
  openGraph: {
    title: "AI Agent for SEO | Ryze AI",
    description:
      "Ryze is the AI agent for SEO that finds ranking opportunities, builds content plans, flags technical blockers, and gives your team the clearest next step to win more qualified traffic.",
    url: "https://ai-agent-for-seo.vercel.app",
    siteName: "Ryze AI",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent for SEO | Ryze AI",
    description:
      "Ryze is the AI agent for SEO that finds ranking opportunities, builds content plans, flags technical blockers, and gives your team the clearest next step to win more qualified traffic.",
    images: ["/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pixelifySans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

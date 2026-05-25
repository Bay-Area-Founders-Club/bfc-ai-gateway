import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BFC AI Gateway — One API for Every Frontier Model",
  description:
    "Unified access to 80+ frontier AI models at startup-friendly rates. Built by Bay Area Founders Club for founders who shape markets.",
  openGraph: {
    title: "BFC AI Gateway",
    description:
      "Unified access to 80+ frontier AI models at startup-friendly rates.",
    siteName: "BFC AI Gateway",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BFC AI Gateway",
    description:
      "Unified access to 80+ frontier AI models at startup-friendly rates.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#f9f7f4]">{children}</body>
    </html>
  );
}

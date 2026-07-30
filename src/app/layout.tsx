import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import { site } from "../data/site";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.title}`,
  description: site.summary,
  metadataBase: new URL("https://davidngyn828.github.io"),
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}

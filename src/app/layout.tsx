import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://astraenterprisepark.io"),
  title: "ASTRA Enterprise Park | 9,000+ Acres in the Heart of North America",
  description:
    "ASTRA Enterprise Park is a 9,000+ acre development in the Kansas City metro, home of Panasonic's $4B advanced battery facility, with utility-scale renewable energy on-site and immediate rail, interstate and air access.",
  keywords: [
    "ASTRA Enterprise Park",
    "Panasonic battery facility",
    "Kansas City industrial development",
    "renewable energy site",
    "logistics district",
    "Kessinger Hunter",
  ],
  openGraph: {
    title: "ASTRA Enterprise Park | The New Home of Advanced Manufacturing",
    description:
      "9,000+ acres. Utility-scale renewable energy on-site. Home of Panasonic's $4B battery facility in the heart of North America.",
    url: "https://astraenterprisepark.io",
    siteName: "ASTRA Enterprise Park",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTRA Enterprise Park",
    description:
      "9,000+ acres in the heart of North America. Home of Panasonic's $4B advanced battery facility.",
  },
  alternates: { canonical: "https://astraenterprisepark.io" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "ASTRA Enterprise Park",
    description:
      "A 9,000+ acre enterprise park in the Kansas City metro with utility-scale renewable energy on-site, home of Panasonic's $4B advanced battery production facility.",
    url: "https://astraenterprisepark.io",
    address: {
      "@type": "PostalAddress",
      addressRegion: "KS",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

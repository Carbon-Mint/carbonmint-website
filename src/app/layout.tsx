import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "CarbonMint | Climate-Smart Agriculture & Carbon Solutions",
  description: "CarbonMint enables farmer organizations, agribusinesses, and sustainability partners to build profitable, climate-resilient agricultural ecosystems through Rice360™, carbon programs, and digital farm management.",
  keywords: [
    "climate-smart agriculture",
    "carbon credits",
    "Rice360",
    "sustainable farming",
    "digital farm management",
    "carbon development",
    "FPO ecosystem",
    "agricultural technology",
    "MRV systems",
    "traceability",
    "mechanization",
    "regenerative agriculture",
    "farmer organizations",
    "carbon finance"
  ],
  authors: [{ name: "CarbonMint" }],
  creator: "CarbonMint",
  publisher: "CarbonMint",
  metadataBase: new URL('https://carbonmint.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CarbonMint | Climate-Smart Agriculture & Carbon Solutions",
    description: "Building the future of climate-smart agriculture through Rice360™, carbon programs, and digital farm management solutions.",
    url: 'https://carbonmint.com',
    siteName: 'CarbonMint',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/carbonmint-logo.png',
        width: 1200,
        height: 630,
        alt: 'CarbonMint - Climate-Smart Agriculture Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CarbonMint | Climate-Smart Agriculture & Carbon Solutions",
    description: "Building the future of climate-smart agriculture through Rice360™, carbon programs, and digital farm management solutions.",
    images: ['/carbonmint-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

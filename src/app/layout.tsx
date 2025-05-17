import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "AORI Guest House - Penginapan Syariah Terdekat Universitas Brawijaya Malang",
  description:
    "AORI Guest House menawarkan akomodasi syariah yang nyaman dengan lokasi strategis dekat Universitas Brawijaya. Booking langsung via WhatsApp untuk harga terbaik. Penginapan Malang terbaik untuk keluarga mahasiswa.",
  keywords:
    "penginapan malang, hotel dekat univ brawijaya, guesthouse malang terdekat, penginapan syariah malang, akomodasi dekat kampus, hotel murah malang, penginapan dekat UB, guest house syariah malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AORI Guest House" />
        <meta
          property="og:title"
          content="AORI Guest House - Penginapan Syariah Terdekat Universitas Brawijaya Malang"
        />
        <meta
          property="og:description"
          content="AORI Guest House menawarkan akomodasi syariah yang nyaman dengan lokasi strategis dekat Universitas Brawijaya. Booking langsung via WhatsApp untuk harga terbaik. Penginapan Malang terbaik untuk keluarga mahasiswa."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80"
        />
        <meta property="og:url" content="https://aorihouse.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aorihouse.com" />
      </head>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TempoInit />
      </body>
    </html>
  );
}

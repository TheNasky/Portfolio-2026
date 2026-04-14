import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { buildRootMetadata, rootViewport } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildRootMetadata();

export { rootViewport as viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <JsonLd />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

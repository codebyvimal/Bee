import type { Metadata, Viewport } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/constants";
import { getPublicSiteUrl } from "@/lib/env";
import { cn } from "@/lib/utils";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap"
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#CA8A04"
};

export const metadata: Metadata = {
  metadataBase: new URL(getPublicSiteUrl()),
  title: {
    default: `${brand.name} | Premium Honey Nuts Snacks`,
    template: `%s | ${brand.name}`
  },
  description: brand.description,
  applicationName: brand.name,
  keywords: [
    "healthy honey snacks",
    "honey nuts",
    "premium honey snacks",
    "natural energy snacks",
    "honey snack Chennai"
  ],
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: `${brand.name} | Premium Honey Nuts Snacks`,
    description: brand.description,
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Premium Honey Nuts Snacks`,
    description: brand.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(lora.variable, raleway.variable, "min-h-dvh font-body")}>
        {children}
      </body>
    </html>
  );
}

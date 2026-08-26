import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://spirit-beauty-sg-dun.vercel.app"),
  title: {
    default: "SHR IPL Hair Removal Ang Mo Kio | Spirit Beauty SG",
    template: "%s | Spirit Beauty SG",
  },
  description: "Spirit Beauty SG in Ang Mo Kio offers SHR IPL hair removal, hair colour and personalised facial services. View promotions and book directly via WhatsApp.",
  keywords: [
    "SHR IPL Singapore",
    "IPL hair removal Singapore",
    "IPL Ang Mo Kio",
    "hair salon Ang Mo Kio",
    "facial Ang Mo Kio",
    "beauty salon Ang Mo Kio",
    "Spirit Beauty SG",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Spirit Beauty SG | SHR IPL Hair Removal in Ang Mo Kio",
    description: "SHR IPL hair removal, hair colour and facial services in Ang Mo Kio, Singapore.",
    url: "/",
    siteName: "Spirit Beauty SG",
    images: [{ url: "/media/storefront.webp", width: 1200, height: 900, alt: "Spirit Beauty SG storefront in Ang Mo Kio" }],
    type: "website",
    locale: "en_SG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spirit Beauty SG | SHR IPL Ang Mo Kio",
    description: "SHR IPL hair removal, hair colour and facial services in Ang Mo Kio.",
    images: ["/media/storefront.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

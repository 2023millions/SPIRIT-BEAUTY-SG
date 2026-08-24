import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "IPL Hair Removal in Ang Mo Kio | Spirit Beauty SG",
  description: "Discover personalised IPL hair removal, hair and beauty services at Spirit Beauty SG in Ang Mo Kio, Singapore. Enquire and book via WhatsApp.",
  keywords: ["IPL hair removal Singapore", "IPL Ang Mo Kio", "beauty salon Ang Mo Kio", "Spirit Beauty SG"],
  openGraph: {
    title: "Spirit Beauty SG | IPL Hair Removal in Ang Mo Kio",
    description: "Personalised IPL hair removal, hair and beauty services in Ang Mo Kio.",
    type: "website",
    locale: "en_SG",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

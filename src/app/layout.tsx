import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Indori Singers - Professional Musical Artists | Wedding & Event Performers",
  description: "Indori Singers - Premier musical artists from Indore specializing in weddings, cultural events, and private performances. Book authentic Indian classical and folk music performances.",
  keywords: "Indori Singers, Indian classical music, wedding singers, cultural events, Indore musicians, folk music, private performances",
  authors: [{ name: "Indori Singers" }],
  openGraph: {
    title: "Indori Singers - Professional Musical Artists",
    description: "Premier musical artists from Indore specializing in weddings and cultural events",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
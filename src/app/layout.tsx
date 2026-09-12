import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moments & Memories Studio | Wedding Photography Kuwait",
    template: "%s | Moments & Memories Studio",
  },
  description:
    "Professional wedding photography & videography in Kuwait. International photographers capturing timeless moments. Album design, engagement, and full wedding coverage.",
  keywords: [
    "wedding photography Kuwait",
    "wedding videography",
    "Kuwait photographer",
    "Moments & Memories Studio",
    "mm.studio.kwt",
    "wedding album design",
  ],
  openGraph: {
    title: "Moments & Memories Studio | Wedding Photography Kuwait",
    description:
      "Professional photographers from abroad capturing your most precious moments.",
    type: "website",
    locale: "en_KW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

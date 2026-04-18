import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-bevn",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phở Gà An Nam — Authentic Vietnamese Cuisine",
  description:
    "A family-run Vietnamese kitchen specializing in phở gà — chicken pho slow-simmered overnight from a recipe passed down three generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${beVietnam.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

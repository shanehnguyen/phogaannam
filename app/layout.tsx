import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phở Gà An Nam — Authentic Vietnamese Cuisine",
  description:
    "A family-run Vietnamese kitchen in San Jose specializing in phở gà — chicken pho slow-simmered overnight. Third restaurant from the same family, same pot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Caveat:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

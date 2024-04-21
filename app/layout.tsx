import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Second Legacy | A brand by Martijn Jansen",
  description:
    "With Second Legacy nothing becomes boring. A Indie Hacker and Solopreneur - Stack by Martijn Jansen - Tech Director - Entrepreneur - Full Stack (Web3) Engineer (NextJS)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="second-legacy.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

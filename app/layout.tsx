import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

/* =========================
   GOOGLE FONTS
========================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   LEMON MILK FONT
========================= */

const lemonMilk = localFont({
  src: [
    {
      path: "../public/fonts/LEMONMILK-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/LEMONMILK-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/LEMONMILK-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LEMONMILK-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/LEMONMILK-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/LEMONMILK-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/LEMONMILK-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/LEMONMILK-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],

  variable: "--font-lemon",
});

/* =========================
   METADATA
========================= */

export const metadata: Metadata = {
  title: "Saltstayz - Premium Boutique Hotels | Stays That Stay With You",

  description:
    "Discover premium boutique hotels across India's finest destinations. Book Saltstayz Autograph, Premier, Select & Econotel properties in Delhi, Gurgaon, Noida, Jaipur and more.",
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${lemonMilk.variable}
        h-full
        antialiased
      `}
    >
      <body className="bg-primary">
        <div className="site-shell">
          <Navbar />

          <main className="flex-1 flex flex-col bg-primary">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

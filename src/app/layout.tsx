import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convalt Energy | Sustainable Clean Energy & Solar Manufacturing",
  description: "Pioneering sustainable power generation, solar panel manufacturing, and renewable infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

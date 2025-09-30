import "./globals.css";
import type { Metadata } from "next";
import TopNav from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Portfolio — Software Engineer",
  description: "Personal portfolio built with Next.js 14, Tailwind & Framer Motion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#11071F] text-white antialiased scroll-smooth">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
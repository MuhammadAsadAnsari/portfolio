import "./globals.css";
import type { Metadata } from "next";
import TopNav from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Muhammad Asad Raza — Full Stack Developer with Marketing Expertise",
  description: "Full Stack Developer with Marketing Expertise. I build modern web applications and grow them with SEO, ads, content, branding, and conversion-focused marketing.",
  icons: {
    icon: "/Me.png",
    shortcut: "/Me.png",
    apple: "/Me.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#11071F] text-white antialiased scroll-smooth">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
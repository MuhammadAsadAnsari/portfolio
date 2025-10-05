"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";

const GooeyNav = dynamic(() => import("./GooeyNav"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="outline-none py-[0.4em] px-[0.6em] sm:py-[0.5em] sm:px-[0.8em] md:py-[0.6em] md:px-[1em] inline-block text-sm sm:text-base whitespace-nowrap text-white hover:text-gray-300 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
});

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });

const links = [
  { href: "home", label: "Home" },
  { href: "aboutMe", label: "About Me" },
  { href: "work", label: "Work" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export default function TopNav() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const sectionElements = links
      .map(l => document.getElementById(l.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const targetId = (entry.target as HTMLElement).id;
            const index = links.findIndex(link => link.href === targetId);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach(el => observer.observe(el));
    return () => {
      sectionElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [mounted]);

  const handleNavClick = (href: string, index: number) => {
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveIndex(index);
      setOpen(false);
    }
  };
  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-[#1A0B2E] border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Desktop GooeyNav placeholder */}
          <div className="hidden lg:block flex-1">
            <GooeyNav
              items={links}
              initialActiveIndex={activeIndex}
              onItemClick={handleNavClick}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile hamburger button placeholder */}
          <button
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1A0B2E] border-b border-white/5">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Desktop GooeyNav */}
        <div className="hidden lg:block flex-1">
          <GooeyNav
            items={links}
            activeIndex={activeIndex}
            onItemClick={handleNavClick}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={cn(jakarta.className, "lg:hidden border-t border-white/10 bg-[#1A0B2E]")}>
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            {links.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, index)}
                className={cn(
                  "text-left py-2 px-3 rounded-lg hover:bg-purple-500/20 transition-colors",
                  activeIndex === index && "text-white font-semibold shadow-lg"
                )}
                style={activeIndex === index ? { 
                  backgroundColor: 'rgba(139, 92, 246, 0.3)',
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
                } : {}}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

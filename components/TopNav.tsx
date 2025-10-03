"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600" });

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },

  { href: "#projects", label: "Projects" },
  { href: "#availability", label: "Availability" },
  { href: "#contact", label: "Contact" },
] as const;

export default function TopNav() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>("#home");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionElements = links
      .map(l => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${(entry.target as HTMLElement).id}`);
          }
        }
      },
      {
        root: null,
        // Top 35% acts as activation zone so the next section highlights as you enter it
        rootMargin: "-35% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach(el => observer.observe(el));
    return () => {
      sectionElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Smooth-scroll and update URL hash without full navigation
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
        setOpen(false);
      }
    }
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1A0B2E] border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className={cn(jakarta.className, "text-[20px] leading-none tracking-[0.02em]")}>✦</Link>
        {/* desktop nav */}
        <nav className={cn(jakarta.className, "hidden sm:flex gap-6 md:gap-8 text-[12px] md:text-[14px] leading-none tracking-[0.02em]")}> 
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={cn(
                "hover:text-accent transition-colors",
                active === l.href && "text-accent"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="sm:hidden inline-flex items-center justify-center h-8 w-8 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/30"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </div>
      {/* mobile dropdown */}
      {open && (
        <div className={cn(jakarta.className, "sm:hidden border-t border-white/10 bg-[#1A0B2E]")}> 
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-[14px]">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={cn(
                  "py-1 hover:text-accent transition-colors",
                  active === l.href && "text-accent"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

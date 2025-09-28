"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/lab", label: "Lab" },
] as const;

export default function TopNav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">✦</Link>
        <nav className="flex gap-6 text-sm">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "hover:text-accent transition-colors",
                pathname === l.href && "text-accent"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: "https://github.com/", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
] as const;

export default function Socials() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socials.map(({ href, icon: Icon, label }) => (
        <Link key={href} href={href} aria-label={label} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 inline-flex items-center gap-2 transition">
          <Icon className="h-4 w-4" />
          <span className="text-xs">{label}</span>
        </Link>
      ))}
    </div>
  );
}

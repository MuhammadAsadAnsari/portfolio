import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

// Custom Quora Icon Component
const Quora = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.738 18.701c-.831-1.635-1.805-3.002-3.708-3.729-.829-.358-1.462-.469-2.02-.469-2.348 0-4.262 1.978-4.262 4.41 0 2.431 1.914 4.41 4.262 4.41.558 0 1.191-.111 2.02-.469 1.903-.727 2.877-2.094 3.708-3.729.831 1.635 1.805 3.002 3.708 3.729.829.358 1.462.469 2.02.469 2.348 0 4.262-1.978 4.262-4.41 0-2.431-1.914-4.41-4.262-4.41-.558 0-1.191.111-2.02.469-1.903.727-2.877 2.094-3.708 3.729zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const socials = [
  { href: "https://github.com/MuhammadAsadAnsari", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/asadrazaansari", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.quora.com/profile/Muhammad-Asad-1994", icon: Quora, label: "Quora" },
  { href: "https://wa.me/92341839905", icon: MessageCircle, label: "WhatsApp" },
  { href: "mailto:muhammadasaad561@gmail.com", icon: Mail, label: "Email" },
] as const;

export default function Socials() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socials.map(({ href, icon: Icon, label }) => {
        // Use regular <a> tag for email links, Link component for others
        if (label === "Email") {
          return (
            <a
              key={href}
              href={href}
              aria-label={label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 inline-flex items-center gap-2 transition hover:bg-white/10"
            >
              <Icon className="h-4 w-4" />
              <span className="text-xs">{label}</span>
            </a>
          );
        }
        
        return (
          <Link 
            key={href} 
            href={href} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label} 
            className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 inline-flex items-center gap-2 transition hover:bg-white/10"
          >
            <Icon className="h-4 w-4" />
            <span className="text-xs">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}

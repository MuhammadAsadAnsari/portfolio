"use client";

import { Github, Linkedin, Mail, MessageCircle, ChevronDown, Copy } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Custom Quora Icon Component
const Quora = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.738 18.701c-.831-1.635-1.805-3.002-3.708-3.729-.829-.358-1.462-.469-2.02-.469-2.348 0-4.262 1.978-4.262 4.41 0 2.431 1.914 4.41 4.262 4.41.558 0 1.191-.111 2.02-.469 1.903-.727 2.877-2.094 3.708-3.729.831 1.635 1.805 3.002 3.708 3.729.829.358 1.462.469 2.02.469 2.348 0 4.262-1.978 4.262-4.41 0-2.431-1.914-4.41-4.262-4.41-.558 0-1.191.111-2.02.469-1.903.727-2.877 2.094-3.708 3.729zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const EMAIL = "muhammadasaad561@gmail.com";

const socials = [
  { href: "https://github.com/MuhammadAsadAnsari", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/asadrazaansari", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.quora.com/profile/Muhammad-Asad-1994", icon: Quora, label: "Quora" },
  { href: "https://wa.me/92341839905", icon: MessageCircle, label: "WhatsApp" },
] as const;

function EmailMenu() {
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!popRef.current?.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const encoded = encodeURIComponent(EMAIL);

  const options = [
    {
      label: "Gmail (Web)",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encoded}`,
      target: "_blank",
    },
    {
      label: "Outlook (Web)",
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${encoded}`,
      target: "_blank",
    },
    {
      label: "Yahoo Mail (Web)",
      href: `https://compose.mail.yahoo.com/?to=${encoded}`,
      target: "_blank",
    },
    {
      label: "Default Email App",
      href: `mailto:${EMAIL}`,
      target: "_self",
    },
  ];

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // fallback: open a prompt if clipboard is blocked
      window.prompt("Copy this email address:", EMAIL);
    }
    setOpen(false);
  };

  return (
    <div className="relative" ref={popRef}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 inline-flex items-center gap-2 transition hover:bg-white/10"
      >
        <Mail className="h-4 w-4" />
        <span className="text-xs">Email</span>
        <ChevronDown className="h-3 w-3 opacity-70" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-white/10 bg-[#1b1226]/95 backdrop-blur p-1 shadow-xl"
        >
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target={opt.target}
              rel={opt.target === "_blank" ? "noopener noreferrer" : undefined}
              className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {opt.label}
            </a>
          ))}
          <button
            type="button"
            onClick={copyAddress}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-white/10"
            role="menuitem"
          >
            <Copy className="h-4 w-4" />
            Copy email address
          </button>
        </div>
      )}
    </div>
  );
}

export default function Socials() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socials.map(({ href, icon: Icon, label }) => (
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
      ))}

      {/* Email picker */}
      <EmailMenu />
    </div>
  );
}

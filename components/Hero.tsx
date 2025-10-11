"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail, ChevronDown, Copy } from "lucide-react";

// small helper so we can re-use this anywhere
function EmailMenu({
  buttonClass = "",
  label = "Email",
}: {
  buttonClass?: string;
  label?: string;
}) {
  const EMAIL = "muhammadasaad561@gmail.com";
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!popRef.current?.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  const to = encodeURIComponent(EMAIL);
  const subject = encodeURIComponent("Project inquiry");
  const body = encodeURIComponent("Hi Asad,\n\nI’d like to discuss...");

  const items = [
    { label: "Gmail (web)", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, blank: true },
    { label: "Outlook (web)", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`, blank: true },
    { label: "Yahoo (web)", href: `https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&body=${body}`, blank: true },
    { label: "Default email app", href: `mailto:${EMAIL}?subject=${subject}&body=${body}`, blank: false },
  ];

  const copyAddr = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      window.prompt("Copy this email address:", EMAIL);
    }
    setOpen(false);
  };

  return (
    <div className="relative" ref={popRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={buttonClass || "p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[48px] min-h-[48px] flex items-center justify-center gap-1"}
        title={label}
      >
        <Mail size={20} className="text-white" />
        <ChevronDown className="h-3 w-3 opacity-75" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute z-30 mt-2 w-56 rounded-xl border border-white/10 bg-[#1b1226]/95 backdrop-blur p-1 shadow-xl"
        >
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.blank ? "_blank" : undefined}
              rel={it.blank ? "noopener noreferrer" : undefined}
              className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {it.label}
            </a>
          ))}
          <button
            type="button"
            onClick={copyAddr}
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

export default function Hero() {
  const baseX = useMotionValue(0);
  const baseY = useMotionValue(0);
  const waveX = useMotionValue(0);
  const waveY = useMotionValue(0);
  const x = useTransform([baseX, waveX], (vals) => (vals[0] as number) + (vals[1] as number));
  const y = useTransform([baseY, waveY], (vals) => (vals[0] as number) + (vals[1] as number));

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Asad_Raza_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    baseX.set(dx * 20);
    baseY.set(dy * 12);
  }, [baseX, baseY]);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const t = performance.now() / 1000;
      waveX.set(Math.sin(t * 1.2) * 6);
      waveY.set(Math.cos(t * 0.9) * 4);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [waveX, waveY]);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full px-4 min-h-screen flex items-center justify-center scroll-mt-20 py-8 md:py-0"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, rgba(17, 7, 31, 0.8) 0%, rgba(26, 11, 46, 0.9) 100%)
        `
      }}
    >
      <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0 }}>
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10 relative z-20 max-w-7xl w-full overflow-hidden">
          {/* Content */}
          <div className="order-2 md:order-1">
            <motion.div style={{ x, y }}>
              <div className="text-center md:text-left">
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-extrabold leading-[1.05]">
                  Asad <span className="text-accent">Raza</span>
                </h1>
                <p className="mt-3 text-[16px] sm:text-[18px] text-white/80">Full Stack Developer</p>

                {/* honest one-liner to fill the visual gap */}
                <p className="mt-3 text-sm sm:text-base text-white/75">
                  I don’t overpromise. I ship clean, testable code, communicate daily, and own the result.
                </p>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70 max-w-lg sm:max-w-xl mx-auto md:mx-0">
                  Passionate about crafting functional, accessible and user-centered digital experiences. I specialize
                  in modern web technologies and love bringing ideas to life through code.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 justify-center md:justify-start">
                  {["React", "Next.js", "TypeScript"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4">
                  <button
                    onClick={handleResumeDownload}
                    className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl bg-white text-[#11071F] text-sm sm:text-base font-semibold hover:opacity-90 transition flex items-center gap-2 min-w-[100px] sm:min-w-[120px]"
                  >
                    <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Resume
                  </button>

                  <button
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl border border-accent/40 text-white text-sm sm:text-base font-semibold hover:bg-accent/20 transition min-w-[120px] sm:min-w-[140px]"
                  >
                    View Projects
                  </button>

                  {/* Socials */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                      href="https://github.com/MuhammadAsadAnsari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center"
                    >
                      <Github size={20} className="text-white" />
                    </Link>

                    <Link
                      href="https://linkedin.com/in/asadrazaansari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center"
                    >
                      <Linkedin size={20} className="text-white" />
                    </Link>

                    <Link
                      href="https://www.quora.com/profile/Muhammad-Asad-1994"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M12.738 18.701c-.831-1.635-1.805-3.002-3.708-3.729-.829-.358-1.462-.469-2.02-.469-2.348 0-4.262 1.978-4.262 4.41 0 2.431 1.914 4.41 4.262 4.41.558 0 1.191-.111 2.02-.469 1.903-.727 2.877-2.094 3.708-3.729.831 1.635 1.805 3.002 3.708 3.729.829.358 1.462.469 2.02.469 2.348 0 4.262-1.978 4.262-4.41 0-2.431-1.914-4.41-4.262-4.41-.558 0-1.191.111-2.02.469-1.903.727-2.877 2.094-3.708 3.729zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                      </svg>
                    </Link>

                    {/* Email with chooser */}
                    <EmailMenu />
                  </div>

                  {/* removed the "Quick stats" grid as requested */}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-br from-[#2A1748] to-[#0F0A1A] border border-white/10 shadow-2xl shadow-purple-500/10">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image src="/AsadRazaAvatar.png" alt="Asad Raza Avatar" fill priority />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Animated background (unchanged) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* … your decorative elements … */}
      </div>
    </section>
  );
}

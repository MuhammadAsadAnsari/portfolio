"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const baseX = useMotionValue(0);
  const baseY = useMotionValue(0);
  const waveX = useMotionValue(0);
  const waveY = useMotionValue(0);
  const x = useTransform([baseX, waveX], (vals) => (vals[0] as number) + (vals[1] as number));
  const y = useTransform([baseY, waveY], (vals) => (vals[0] as number) + (vals[1] as number));

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf file to the public folder
    link.download = 'Asad_Raza_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      baseX.set(dx * 20);
      baseY.set(dy * 12);
    },
    [baseX, baseY]
  );

  useEffect(() => {
    let raf = 0;
    const animate = () => {
      const t = performance.now() / 1000;
      waveX.set(Math.sin(t * 1.2) * 6);
      waveY.set(Math.cos(t * 0.9) * 4);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [waveX, waveY]);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full px-4 h-screen flex items-center justify-center scroll-mt-20"
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
        <div className="grid md:grid-cols-2 items-center gap-2 md:gap-4 relative z-20 max-w-7xl w-full">
          {/* Content */}
          <div className="order-2 md:order-1">
            <motion.div style={{ x, y }}>
              <div className="text-center md:text-left">
                <h1 className="text-[40px] sm:text-[48px] md:text-[72px] font-extrabold leading-[1.05]">
                  Asad <span className="text-accent">Raza</span>
                </h1>
                <p className="mt-3 text-[16px] sm:text-[18px] text-white/80">Full Stack Developer</p>
                <p className="mt-4 text-base sm:text-lg text-white/70 max-w-lg sm:max-w-xl mx-auto md:mx-0">
                  Passionate about crafting functional, accessible and user-centered digital experiences. I specialize
                  in modern web technologies and love bringing ideas to life through code.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
                  <button
                    onClick={handleResumeDownload}
                    className="px-6 sm:px-8 py-3 rounded-xl bg-white text-[#11071F] text-base font-semibold hover:opacity-90 transition flex items-center gap-2 min-w-[120px]"
                  >
                    <Download size={18} />
                    Resume
                  </button>
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://github.com/MuhammadAsadAnsari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[48px] min-h-[48px] flex items-center justify-center"
                    >
                      <Github size={20} className="text-white" />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/asadrazaansari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[48px] min-h-[48px] flex items-center justify-center"
                    >
                      <Linkedin size={20} className="text-white" />
                    </Link>
                    <Link
                      href="https://www.quora.com/profile/Muhammad-Asad-1994"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[48px] min-h-[48px] flex items-center justify-center"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M12.738 18.701c-.831-1.635-1.805-3.002-3.708-3.729-.829-.358-1.462-.469-2.02-.469-2.348 0-4.262 1.978-4.262 4.41 0 2.431 1.914 4.41 4.262 4.41.558 0 1.191-.111 2.02-.469 1.903-.727 2.877-2.094 3.708-3.729.831 1.635 1.805 3.002 3.708 3.729.829.358 1.462.469 2.02.469 2.348 0 4.262-1.978 4.262-4.41 0-2.431-1.914-4.41-4.262-4.41-.558 0-1.191.111-2.02.469-1.903.727-2.877 2.094-3.708 3.729zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
                      </svg>
                    </Link>
                    <Link
                      href="mailto:muhammadasaad561@gmail.com"
                      className="p-3 rounded-xl border border-white/15 hover:border-white/30 transition hover:bg-white/5 min-w-[48px] min-h-[48px] flex items-center justify-center"
                    >
                      <Mail size={20} className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-br from-[#2A1748] to-[#0F0A1A] border border-white/10">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image src="/AsadRazaAvatar.png" alt="Asad Raza Avatar" fill priority />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating Geometric Shapes - More Dense */}
        <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-purple-400/25 border border-purple-300/30 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-blue-400/20 border border-blue-300/25 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-violet-400/30 border border-violet-300/35 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-indigo-400/25 border border-indigo-300/30 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-7 h-7 bg-pink-400/20 border border-pink-300/25 animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-4 h-4 bg-cyan-400/25 border border-cyan-300/30 animate-pulse" style={{ animationDuration: '6s', animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/5 left-1/2 w-5 h-5 bg-emerald-400/20 border border-emerald-300/25 animate-pulse" style={{ animationDuration: '3.8s', animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-orange-400/25 border border-orange-300/30 animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '0.8s' }}></div>
        
        {/* Additional Small Shapes */}
        <div className="absolute top-1/8 left-1/3 w-2 h-2 bg-yellow-400/25 border border-yellow-300/30 animate-pulse" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/6 left-1/8 w-3 h-3 bg-teal-400/20 border border-teal-300/25 animate-pulse" style={{ animationDuration: '4.8s', animationDelay: '2.8s' }}></div>
        <div className="absolute top-1/7 right-1/8 w-4 h-4 bg-rose-400/25 border border-rose-300/30 animate-pulse" style={{ animationDuration: '5.2s', animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-1/8 right-1/3 w-2 h-2 bg-lime-400/20 border border-lime-300/25 animate-pulse" style={{ animationDuration: '3.7s', animationDelay: '1.7s' }}></div>

        {/* Large Background Elements */}
        <div className="absolute top-1/6 left-1/6 w-20 h-20 bg-gradient-to-br from-purple-500/8 to-transparent border border-purple-400/15 animate-spin" style={{ animationDuration: '20s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/6 right-1/6 w-16 h-16 bg-gradient-to-br from-blue-500/8 to-transparent border border-blue-400/15 animate-spin" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-400/20 animate-spin" style={{ animationDuration: '30s', animationDelay: '10s' }}></div>
        
        {/* Additional Large Elements */}
        <div className="absolute top-1/3 left-1/8 w-14 h-14 bg-gradient-to-br from-emerald-500/6 to-transparent border border-emerald-400/12 animate-spin" style={{ animationDuration: '35s', animationDelay: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/8 w-18 h-18 bg-gradient-to-br from-pink-500/7 to-transparent border border-pink-400/13 animate-spin" style={{ animationDuration: '28s', animationDelay: '12s' }}></div>

        {/* Floating Lines/Connectors */}
        <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/8 w-0.5 h-12 bg-gradient-to-b from-transparent via-violet-400/20 to-transparent animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>

        {/* Dense Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-8">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(139, 92, 246, 0.15) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(139, 92, 246, 0.15) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(139, 92, 246, 0.15) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(139, 92, 246, 0.15) 75%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}></div>
        </div>

        {/* Additional Grid Overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

      </div>

    </section>
  );
}

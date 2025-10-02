"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import RippleGrid from "./RippleGrid";
import Link from "next/link";

export default function Hero() {
  // base motion (mouse) + wave motion (time) combined to mimic ripple
  const baseX = useMotionValue(0);
  const baseY = useMotionValue(0);
  const waveX = useMotionValue(0);
  const waveY = useMotionValue(0);
  const x = useTransform([baseX, waveX], (vals) => (vals[0] as number) + (vals[1] as number));
  const y = useTransform([baseY, waveY], (vals) => (vals[0] as number) + (vals[1] as number));

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
    const dy = (e.clientY - cy) / rect.height;
    baseX.set(dx * 20);
    baseY.set(dy * 12);
  }, [baseX, baseY]);

  // time-based wave motion so mobile gets movement too
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
    <section id="home" onMouseMove={handleMouseMove} className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 md:pt-16 md:pb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10 relative z-20">
          {/* Content: centered on mobile, left on desktop */}
          {/* On mobile, image first; content second and centered */}
          <div className="order-2 md:order-1">
            <motion.div style={{ x, y }}>
              <div className="text-center md:text-left">
            <h1 className="text-[40px] sm:text-[48px] md:text-[72px] font-extrabold leading-[1.05]">
              Asad <span className="text-accent">Raza</span>
            </h1>
            <p className="mt-3 text-[16px] sm:text-[18px] text-white/80">Full Stack Developer</p>
            <p className="mt-4 text-sm text-white/70 max-w-sm sm:max-w-md mx-auto md:mx-0">
              Passionate about crafting functional, accessible and user‑centered digital
              experiences. I specialize in modern web technologies and love bringing ideas to life through code.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
              <Link href="#projects" className="px-4 sm:px-5 py-2.5 rounded-xl bg-white text-[#11071F] text-sm font-semibold hover:opacity-90 transition">
                View Projects
              </Link>
              <Link href="#contact" className="px-4 sm:px-5 py-2.5 rounded-xl border border-white/15 text-sm hover:border-white/30 transition">
                Contact
              </Link>
            </div>
              </div>
            </motion.div>
          </div>
          {/* Image: first on mobile, right on desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-br from-[#2A1748] to-[#0F0A1A] border border-white/10">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image src="/AsadRazaAvatar.png" alt="Asad Raza Avatar" fill priority />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid fills left content and stops right before the avatar */}

      <div className="-z-10" style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: 'transparent', pointerEvents: 'none' }}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#6b46ff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>

    </section>
  );
}

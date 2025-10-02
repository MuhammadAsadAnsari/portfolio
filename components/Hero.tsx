"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import RippleGrid from "./RippleGrid";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 md:pt-16 md:pb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-[44px] md:text-[72px] font-extrabold leading-[1.05]">
              Asad <span className="text-accent">Raza</span>
            </h1>
            <p className="mt-3 text-[18px] text-white/80">Full Stack Developer</p>
            <p className="mt-4 text-sm text-white/70 max-w-sm ">
              Passionate about crafting functional, accessible and user‑centered digital
              experiences. I specialize in modern web technologies and love bringing ideas to life through code.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#projects" className="px-5 py-2.5 rounded-xl bg-white text-[#11071F] text-sm font-semibold hover:opacity-90 transition">
                View Projects
              </Link>
              <Link href="#contact" className="px-5 py-2.5 rounded-xl border border-white/15 text-sm hover:border-white/30 transition">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border border-white/10 ring-2 ring-accent/30">
              <Image src="/avatar.png" alt="Asad Raza Avatar" fill priority />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid fills left content and stops right before the avatar */}
      <div className="absolute inset-y-0 left-0 right-[6rem] md:right-[10rem] -z-10 overflow-hidden">
        <RippleGrid
          enableRainbow={false}
          gridColor="#6b46ff"
          rippleIntensity={0.08}
          gridSize={100}
          gridThickness={2}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.32}
          glowIntensity={0.1}
          fadeDistance={3.0}
          vignetteStrength={1.2}
        />
      </div>
      
      
    </section>
  );
}

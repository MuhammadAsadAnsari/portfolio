"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 md:pt-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden ring-2 ring-accent/40 shadow-glow">
          <Image src="/avatar.png" alt="Avatar" fill priority />
        </div>

        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Hello! You can call me</p>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight title-glow">
            Judges a book<br className="hidden md:block"/> by its <span className="text-accent">cover</span>.
          </h1>
          <p className="mt-4 text-lg opacity-80">I'm a <span className="font-semibold">Software Engineer</span>.</p>
          <p className="mt-3 text-sm text-white/70">
            A self-taught dev and designer. I craft thoughtful experiences in
            web & mobile, blending performance with delightful micro‑interactions.
          </p>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 -z-10 top-10 flex justify-center">
        <div className="h-44 w-[600px] rounded-full blur-3xl bg-primary/20" />
      </div>
    </section>
  );
}

import { ReactNode } from "react";
import Image from "next/image";

export default function WorkCard({ title, company, subtitle, period, children, image, iconSrc }:
  { title: string; subtitle: string; company: string; period: string; children?: ReactNode; image?: string; iconSrc?: string; }) {
  return (
    <div className="card relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-[#0B0616] to-[#1A0B2E] border border-white/5 border-t-[#4F228D] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 will-change-transform hover:-translate-y-[4px] sm:hover:-translate-y-[6px] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), inset 0 0 120px rgba(107,70,255,0.08)' }} />
      {/* top row: icon left, content right */}
      <div className="grid grid-cols-[64px,1fr] sm:grid-cols-[80px,1fr] md:grid-cols-[96px,1fr] items-center gap-3 sm:gap-4 md:gap-5">
        <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2A1748] to-[#0F0A1A] ring-1 ring-white/10 grid place-items-center overflow-hidden shadow-[0_12px_34px_rgba(0,0,0,0.45)]">
          {iconSrc ? (
            <Image src={iconSrc} alt={title} width={88} height={88} className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover rounded-xl" />
          ) : (
            children
          )}
        </div>
        <div className="flex-1 min-h-16 sm:min-h-20 md:min-h-24 flex flex-col justify-center">
          <div className="text-white font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl leading-snug mb-2 sm:mb-3 md:mb-4" >{title} | <span className="text-purple-400"> {company}</span> </div>
          <div className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">{subtitle}</div>
        </div>
      </div>
      {/* bottom period line */}
      <div className="mt-4 sm:mt-5 w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#4F228D]/25 border border-[#4F228D]/50 text-[#E2D4FF] text-[10px] sm:text-xs md:text-sm tracking-wide">
        {period}
      </div>
      {/* removed bottom banner image as requested */}

    </div>
  );
}

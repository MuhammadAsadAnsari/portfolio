import { ReactNode } from "react";

export default function WorkCard({ title, subtitle, period, children }:
  { title: string; subtitle: string; period: string; children: ReactNode; }) {
  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 hover:shadow-[0_0_40px_rgba(156,107,255,0.35)] transition-all">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary/20 grid place-items-center">
          {children}
        </div>
        <div className="text-sm">
          <div className="font-semibold">{title}</div>
          <div className="text-white/60">{subtitle}</div>
        </div>
        <div className="ml-auto text-xs text-white/50">{period}</div>
      </div>
    </div>
  );
}

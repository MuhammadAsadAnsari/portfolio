import Image from "next/image";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  links = [],
  reversed = false,
}: {
  title: string;
  description: string;
  image: string;
  links?: { href: string; label: string; icon?: "github" | "live" }[];
  reversed?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 items-center gap-8 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="glass rounded-2xl p-5">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-4 flex gap-3">
          {links.map((l, i) => (
            <Link key={i} href={l.href} className="text-sm text-accent hover:underline inline-flex items-center gap-1">
              {l.icon === "github" ? <Github className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-2xl -z-10" />
        <Image src={image} alt={title} width={640} height={420} className="rounded-2xl border border-white/10" />
      </div>
    </div>
  );
}

"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import SpotlightCard from "./SpotlightCard";

function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 space-y-10 sm:space-y-12 scroll-mt-20"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-purple-300 text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
          What I offer
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Marketing <span className="text-purple-400">Services</span>
        </h2>
        <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
          Full Stack Developer with Marketing Expertise. I build products and
          grow them with the same digital marketing services listed below —
          from SEO and paid ads to branding, content, and conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
        {services.map((service) => (
          <SpotlightCard
            key={service.slug}
            className="custom-spotlight-card"
            spotlightColor="rgba(139, 92, 246, 0.25)"
          >
            <article className="flex flex-col h-full">
              <div className="relative h-44 sm:h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3">
                {service.title}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed line-clamp-3 mb-5 flex-1">
                {service.summary}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold text-sm transition-colors"
              >
                View Details
                <ArrowRight size={16} />
              </Link>
            </article>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

export default memo(Services);

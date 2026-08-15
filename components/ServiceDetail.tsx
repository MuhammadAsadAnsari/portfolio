"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getRelatedServices, type Service } from "@/lib/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const related = getRelatedServices(service);

  return (
    <article className="pb-16 sm:pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#11071F]/70 via-[#11071F]/85 to-[#11071F]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>
          <p className="text-purple-300 text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            Full Stack Developer with Marketing Expertise
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
            {service.heroSubtitle}
          </p>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed">
            {service.intro}
          </p>
          <div className="mt-8">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#11071F] font-semibold hover:opacity-90 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            What this service includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {service.includes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Understanding {service.title}
          </h2>
          <div className="space-y-4 max-w-3xl">
            {service.understanding.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-white/75 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-purple-400 font-bold text-sm mb-2">{step.step}</p>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tools</h2>
            <ul className="space-y-4">
              {service.tools.map((tool) => (
                <li key={tool.name} className="border-b border-white/10 pb-4">
                  <h3 className="font-semibold text-purple-300">{tool.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{tool.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Methods</h2>
            <ul className="space-y-4">
              {service.methods.map((method) => (
                <li key={method.name} className="border-b border-white/10 pb-4">
                  <h3 className="font-semibold text-purple-300">{method.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{method.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">When to use this</h2>
          <div className="space-y-5">
            {service.whenToUse.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <p className="text-purple-400 text-sm font-semibold mb-2">
                  0{index + 1}
                </p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm mb-2">
                  <span className="text-white font-medium">What I do: </span>
                  {item.whatWeDo}
                </p>
                <p className="text-white/70 text-sm">→ {item.result}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.caseStudies.map((study, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3"
              >
                <p className="text-sm text-white/60">
                  <span className="text-red-300 font-medium">Before: </span>
                  {study.before}
                </p>
                <p className="text-sm text-white/80">
                  <span className="text-green-300 font-medium">After: </span>
                  {study.after}
                </p>
                <p className="text-xs text-white/50">{study.maintenance}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Problems this solves</h2>
          <div className="space-y-4">
            {service.problems.map((item) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-white/10 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.problem}</h3>
                <p className="text-white/65 text-sm mb-3">{item.impact}</p>
                <p className="text-purple-200 text-sm">
                  <span className="font-medium">The fix: </span>
                  {item.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-semibold text-purple-300 mb-2">{item.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Typical investment</h2>
          <p className="text-xl text-purple-300 font-semibold mb-3">{service.pricingRange}</p>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl mb-6">
            {service.pricingNote}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.pricingFactors.map((factor, index) => (
              <div key={factor.title}>
                <p className="text-purple-400 text-xs font-semibold mb-1">0{index + 1}</p>
                <h3 className="font-semibold mb-1">{factor.title}</h3>
                <p className="text-white/65 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 group"
              >
                <summary className="cursor-pointer font-semibold list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-purple-300 group-open:rotate-90 transition-transform">
                    <ArrowRight size={16} />
                  </span>
                </summary>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Related services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="rounded-2xl border border-white/10 hover:border-purple-400/40 bg-white/5 p-4 transition-colors"
                >
                  <div className="relative h-32 w-full rounded-lg overflow-hidden mb-3">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-semibold text-blue-400 mb-1">{item.title}</h3>
                  <p className="text-white/65 text-sm line-clamp-2">{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="text-center rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-indigo-900/30 p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-6">
            Tell me about your project. I combine full stack development with
            marketing expertise so the product and the growth plan ship together.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#11071F] font-semibold hover:opacity-90 transition"
          >
            Contact me
          </a>
        </section>
      </div>
    </article>
  );
}

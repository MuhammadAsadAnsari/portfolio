"use client";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";
import { Code2, Smartphone, Sparkle, Rocket } from "lucide-react";

export default function WorkExperience() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        <WorkCard title="CB on the Mobile" subtitle="Frontend Engineer" period="2022 — Present">
          <Smartphone className="h-5 w-5" />
        </WorkCard>
        <WorkCard title="CB on the Mobile" subtitle="Design Systems" period="2021 — 2022">
          <Sparkle className="h-5 w-5" />
        </WorkCard>
        <WorkCard title="CB on the Mobile" subtitle="React Native" period="2020 — 2021">
          <Code2 className="h-5 w-5" />
        </WorkCard>
        <WorkCard title="CB on the Mobile" subtitle="Product Engineer" period="2019 — 2020">
          <Rocket className="h-5 w-5" />
        </WorkCard>
      </div>
    </section>
  );
}

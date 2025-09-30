import SectionTitle from "./SectionTitle";
import Socials from "./Socials";

export default function Availability() {
  return (
    <section id="availability" className="mx-auto max-w-6xl px-4 py-10 scroll-mt-20">
      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 text-center">
        <SectionTitle>Availability</SectionTitle>
        <p className="text-sm text-white/70">
          I'm currently looking to join a cross‑functional team that values design systems, accessibility and delightful UX.
        </p>
        <div className="mt-6">
          <Socials />
        </div>
      </div>
    </section>
  );
}

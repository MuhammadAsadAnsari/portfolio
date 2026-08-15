import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Asad Raza",
  description:
    "Full Stack Developer with Marketing Expertise. SEO, PPC, social, content, email, web design, branding, reputation, affiliate, and CRO.",
};

export default function ServicesIndexPage() {
  return (
    <main className="pt-4">
      <Services />
    </main>
  );
}

import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 space-y-16 scroll-mt-20">
      <SectionTitle>Selected Projects</SectionTitle>
      <ProjectCard
        title="Example Project"
        description="A clean, component‑driven build with an emphasis on motion and accessibility. Demonstrates grid layouts, typography and subtle glow aesthetics."
        image="/project-wire-1.png"
        links={[{ href: "#", label: "Live", icon: "live" }, { href: "#", label: "GitHub", icon: "github" }]}
      />
      <ProjectCard
        reversed
        title="Example Project"
        description="An alternate layout with the visual on the left for rhythmic scrolling. Includes responsive tweaks and reduced CLS via Next Image."
        image="/project-wire-2.png"
        links={[{ href: "#", label: "Live", icon: "live" }]}
      />
    </section>
  );
}

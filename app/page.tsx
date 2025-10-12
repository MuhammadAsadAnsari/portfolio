import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";

// Dynamic imports for better performance
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => <div className="min-h-[400px]" />,
});
const WorkExperience = dynamic(() => import("@/components/WorkExperience"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Availability = dynamic(() => import("@/components/Availability"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Skills />
      <Projects />
      <Availability />
      <Footer />
    </main>
  );
}
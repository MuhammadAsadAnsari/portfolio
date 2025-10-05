import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Availability from "@/components/Availability";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";

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
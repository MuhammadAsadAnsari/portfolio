"use client";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";
import { Code2, Smartphone, Sparkle, Rocket } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Senior Software Engineer ",
    company: "Aigumind",
    subtitle:
      "At Aigumind, I lead the development and deployment of MERN stack applications, guide interns through training sessions, and ensure project goals are achieved on schedule. My role blends technical execution with mentorship, contributing to scalable and efficient software solutions, following best practices.",
    period: "Jul 2025 – Present",
    iconSrc: "/AsadRazaExperience6.png",
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",

    subtitle:
      "Worked on diverse projects involving React, AngularJS, Node.js, and NestJS. Delivered applications such as card-listing platforms and admin panels, while collaborating with clients to meet requirements. This experience strengthened my full-stack expertise and provided exposure to real-world projects.",
    period: "May 2024 – Present",
    iconSrc: "/AsadRazaExperience5.png",
  },
  {
    title: "Associate Node.js Engr",
    company: "Tafsol Technologies",
    subtitle:
      "Specialized in backend development using Node.js, NestJS, MongoDB, AWS, Redis, and RabbitMQ. Managed multiple projects from development to deployment, focusing on microservices, optimized data handling, and cloud-based media solutions to ensure high performance and client satisfaction.",
    period: "Mar 2024 – Jun 2025",
    iconSrc: "/AsadRazaExperience3.png",
  },
  {
    title: "MERN Stack Developer",
    company:"Tesseract Innovations",
    subtitle:
      "Worked on backend modules with Node.js, authentication and authorization workflows, and dynamic rendering using Vanilla JS, EJS, and DOM manipulation. This role expanded my technical expertise and strengthened practical knowledge of full-stack development practices",
    period: "May 2023 – Feb 2024",
    iconSrc: "/AsadRazaExperience2.png",
  },
  {
    title: "IT Instructor & Trainer",
    company: "Aptech",
    subtitle:
      "Taught multiple student batches with courses on Microsoft Office, HTML, CSS, and JavaScript. Also delivered advanced sessions on JavaScript, Java, and C++, ensuring students gained strong foundations and practical knowledge in both fundamental and advanced programming concepts.",
    period: "May 2023 – Sep 2023",
    iconSrc: "/AsadRazaExperience4.png",
  },
  {
    title: "Web Developer Intern",
    company:"TechnorayX",
    subtitle:
      "Worked on WordPress and PHP development while collaborating with senior developers on live projects. Learned to meet deadlines, improve teamwork, and apply technical skills effectively, gaining a strong foundation in professional software development and project collaboration.",
    period: "Nov 2022 – Feb 2023",
    iconSrc: "/AsadRazaExperience1.png",
  },
];


export default function WorkExperience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 pb-10 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Work <span className="text-purple-400">Experience</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {EXPERIENCES.map((exp, idx) => (
          <WorkCard key={idx} title={exp.title} company={exp.company} subtitle={exp.subtitle} period={exp.period} iconSrc={exp.iconSrc} />
        ))}
      </div>
    </section>
  );
}

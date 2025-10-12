"use client";
import React, { memo } from "react";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

// Sparkles SVG Component for TechnorayX
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
    <path d="M20 2v4"/>
    <path d="M22 4h-4"/>
    <circle cx="4" cy="20" r="2"/>
  </svg>
);

// Graduation Cap SVG Component for Aptech
const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
    <path d="M22 10v6"/>
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
  </svg>
);

// Box SVG Component for Tafsol Technologies
const BoxIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

// Layers-2 SVG Component for Tesseract Innovations
const Layers2Icon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"/>
    <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"/>
  </svg>
);

// Globe SVG Component for Self-Employed
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

// Circuit Board SVG Component for Aigumind
const CircuitBoardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2"/>
    <path d="M11 9h4a2 2 0 0 0 2-2V3"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="M7 21v-4a2 2 0 0 1 2-2h4"/>
    <circle cx="15" cy="15" r="2"/>
  </svg>
);

interface Experience {
  title: string;
  company: string;
  subtitle: string;
  period: string;
  iconSrc: string | null;
  customIcon?: React.ReactNode;
}

const EXPERIENCES: Experience[] = [
  {
    title: "Senior Software Engineer ",
    company: "Aigumind",
    subtitle:
      "At Aigumind, I lead the development and deployment of MERN stack applications, guide interns through training sessions, and ensure project goals are achieved on schedule. My role blends technical execution with mentorship, contributing to scalable and efficient software solutions, following best practices.",
    period: "Jul 2025 – Present",
    iconSrc: null,
    customIcon: <CircuitBoardIcon className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-purple-400" />,
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    subtitle:
      "Worked on diverse projects involving React, AngularJS, Node.js, and NestJS. Delivered applications such as card-listing platforms and admin panels, while collaborating with clients to meet requirements. This experience strengthened my full-stack expertise and provided exposure to real-world projects.",
    period: "May 2024 – Present",
    iconSrc: null,
    customIcon: <GlobeIcon className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-purple-400" />,
  },
  {
    title: "Associate Node.js Engr",
    company: "Tafsol Technologies",
    subtitle:
      "Specialized in backend development using Node.js, NestJS, MongoDB, AWS, Redis, and RabbitMQ. Managed multiple projects from development to deployment, focusing on microservices, optimized data handling, and cloud-based media solutions to ensure high performance and client satisfaction.",
    period: "Mar 2024 – Jun 2025",
    iconSrc: null,
    customIcon: <BoxIcon className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-purple-400" />,
  },
  {
    title: "MERN Stack Developer",
    company:"Tesseract Innovations",
    subtitle:
      "Worked on backend modules with Node.js, authentication and authorization workflows, and dynamic rendering using Vanilla JS, EJS, and DOM manipulation. This role expanded my technical expertise and strengthened practical knowledge of full-stack development practices",
    period: "May 2023 – Feb 2024",
    iconSrc: null,
    customIcon: <Layers2Icon className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-purple-400" />,
  },
  {
    title: "IT Instructor & Trainer",
    company: "Aptech",
    subtitle:
      "Taught multiple student batches with courses on Microsoft Office, HTML, CSS, and JavaScript. Also delivered advanced sessions on JavaScript, Java, and C++, ensuring students gained strong foundations and practical knowledge in both fundamental and advanced programming concepts.",
    period: "May 2023 – Sep 2023",
    iconSrc: null,
    customIcon: <GraduationCapIcon className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-purple-400" />,
  },
  {
    title: "Web Developer Intern",
    company:"TechnorayX",
    subtitle:
      "Worked on WordPress and PHP development while collaborating with senior developers on live projects. Learned to meet deadlines, improve teamwork, and apply technical skills effectively, gaining a strong foundation in professional software development and project collaboration.",
    period: "Nov 2022 – Feb 2023",
    iconSrc: null,
    customIcon: <SparklesIcon className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-purple-400" />,
  },
];


function WorkExperience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 scroll-mt-20">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Work <span className="text-purple-400">Experience</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {EXPERIENCES.map((exp, idx) => (
          <WorkCard 
            key={idx} 
            title={exp.title} 
            company={exp.company} 
            subtitle={exp.subtitle} 
            period={exp.period} 
            iconSrc={exp.iconSrc} 
            customIcon={exp.customIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(WorkExperience);

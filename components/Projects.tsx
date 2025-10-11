"use client";
import SectionTitle from "./SectionTitle";
import SpotlightCard from './SpotlightCard';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  webUrl?: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SaaS-Based Scheduling Platform",
    description: "I developed the complete frontend for a SaaS platform that enables users to create and manage long-term schedules based on configurable parameters such as audience type, brand, and timing blocks. The system includes both admin and user panels with role-based access for super and standard users. Key features include dynamic form flows, editable schedules, Excel summary exports, and role and permission management. The UI was built with React, Tailwind CSS, and Context API, ensuring high performance and a clean, intuitive interface. The project is currently in Phase 3 of development.",
    technologies: ["React", "Tailwind CSS", "Context API", "Vercel"],
    category: "Frontend",
    image: "/portfolio_1.png"
  },
  {
    id: 2,
    title: "Car Listing Website",
    description: "A2BCarHub is a fully responsive car listing platform built using React.js and Node.js. I developed the complete system including the frontend, backend, and admin dashboard. The admin can add, edit, and delete cars, manage content pages (About, How to Buy, Contact), and upload multiple images per listing. Users can browse listings, view details, and submit inquiries. The platform includes image management, custom pages, and a clean interface optimized for both desktop and mobile.",
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "API Development", "Vite"],
    // webUrl: "https://ecommerce-demo.com",
    category: "Full Stack",
    image: "/portfolio_2.png"
  },
  {
    id: 3,
    title: "ApartmentFix",
    description: "ApartmentFix is a web application designed for an apartment management system. I was responsible for refactoring the admin panel UI, creating new APIs, and improving existing backend logic. I also developed the user-facing frontend, integrated real-time chat using Socket.io, and handled full deployment on Vercel and Railway. Users can register, request services (like plumbing or an electrician), and chat with the admin, independent of the service request",
    technologies: ["React", "Tailwind", "React Redux", "Socket.io", "Node.js", "API Development", "JWT", "Vite"],
    category: "Full Stack",
    image: "/portfolio_3.png"
  },
  // {
  //   id: 4,
  //   title: "API Gateway Service",
  //   description: "A microservices API gateway with authentication, rate limiting, and monitoring. Provides centralized routing, load balancing, security policies, and real-time analytics for distributed microservices architecture with comprehensive logging and performance metrics.",
  //   technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "Grafana"],
  //   webUrl: "https://api-gateway-demo.com",
  //   category: "Backend",
  //   image: "/AsadRazaExperience4.png"
  // },
  // {
  //   id: 5,
  //   title: "Data Analytics",
  //   description: "An interactive dashboard for data visualization and business intelligence insights. Features real-time data processing, customizable charts, predictive analytics, and automated reporting with export capabilities for comprehensive business intelligence solutions.",
  //   technologies: ["React", "D3.js", "Python", "Pandas", "PostgreSQL", "Chart.js", "Webpack", "Jest"],
  //   category: "Data Science",
  //   image: "/AsadRazaExperience5.png"
  // },
  // {
  //   id: 6,
  //   title: "Mobile Banking App",
  //   description: "A secure mobile banking application with biometric authentication and real-time transactions. Features include account management, fund transfers, bill payments, transaction history, and advanced security protocols with multi-factor authentication for enhanced user protection.",
  //   technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "JWT", "Stripe", "AWS", "Docker"],
  //   category: "Mobile",
  //   image: "/AsadRazaExperience6.png"
  // }
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 space-y-12 sm:space-y-14 md:space-y-16 scroll-mt-20">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Selected <span className="text-purple-400">Projects</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
        {projects.map((project) => (
          <SpotlightCard 
            key={project.id} 
            className="custom-spotlight-card" 
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex flex-col h-full">
              {/* Category Tag */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium">
                  {project.category}
                </span>
              </div>
              
              {/* Project Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">
                {project.title}
              </h3>
              
              {/* Project Image */}
              <div className="relative h-40 sm:h-44 md:h-48 w-full rounded-lg overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Project Description - Fixed height with scroll for overflow */}
              <div className="h-36 sm:h-40 md:h-44 mb-4 sm:mb-5 md:mb-6 overflow-y-auto project-scrollbar">
                <style jsx>{`
                  .project-scrollbar::-webkit-scrollbar {
                    width: 6px;
                  }
                  @media (min-width: 640px) {
                    .project-scrollbar::-webkit-scrollbar {
                      width: 8px;
                    }
                  }
                  .project-scrollbar::-webkit-scrollbar-track {
                    background: #1e293b;
                    border-radius: 4px;
                  }
                  .project-scrollbar::-webkit-scrollbar-thumb {
                    background: #8b5cf6;
                    border-radius: 4px;
                  }
                  .project-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #a855f7;
                  }
                `}</style>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed pr-1 sm:pr-2">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies Grid - Fixed height for consistent alignment */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-white/20 bg-white/5 text-white text-[10px] sm:text-xs text-center hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              
              {/* Live Demo Button - Only show if webUrl exists */}
              {project.webUrl && (
                <div className="mt-auto">
                  <a
                    href={project.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-center text-sm sm:text-base transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

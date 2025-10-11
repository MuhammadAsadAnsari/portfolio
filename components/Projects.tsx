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
    title: "Educate Athletes",
    description: "A modern, responsive client website with smooth animations and optimized performance.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe", "Cloudinary", "Vercel"],
    webUrl: "https://educateathletes.com",
    category: "Full Stack",
    image: "/AsadRazaExperience1.png"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with payment integration and admin dashboard.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker", "Redis"],
    webUrl: "https://ecommerce-demo.com",
    category: "Full Stack",
    image: "/AsadRazaExperience2.png"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Firebase", "Material UI", "SCSS", "PWA", "WebSocket", "Jest", "Vite"],
    category: "Frontend",
    image: "/AsadRazaExperience3.png"
  },
  {
    id: 4,
    title: "API Gateway Service",
    description: "A microservices API gateway with authentication, rate limiting, and monitoring.",
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    webUrl: "https://api-gateway-demo.com",
    category: "Backend",
    image: "/AsadRazaExperience4.png"
  },
  {
    id: 5,
    title: "Data Analytics",
    description: "An interactive dashboard for data visualization and business intelligence insights.",
    technologies: ["React", "D3.js", "Python", "Pandas", "PostgreSQL", "Chart.js", "Webpack", "Jest"],
    category: "Data Science",
    image: "/AsadRazaExperience5.png"
  },
  {
    id: 6,
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication and real-time transactions.",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "JWT", "Stripe", "AWS", "Docker"],
    category: "Mobile",
    image: "/AsadRazaExperience6.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 space-y-16 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Selected <span className="text-purple-400">Projects</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <SpotlightCard 
            key={project.id} 
            className="custom-spotlight-card" 
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex flex-col h-full">
              {/* Category Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                  {project.category}
                </span>
              </div>
              
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {project.title}
              </h3>
              
              {/* Project Image */}
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Project Description - Fixed height to ensure consistent alignment */}
              <div className="h-16 mb-6">
                <p className="text-white/80 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies Grid - Fixed height for consistent alignment */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg border border-white/20 bg-white/5 text-white text-xs text-center hover:bg-white/10 transition-colors"
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
                    className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
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

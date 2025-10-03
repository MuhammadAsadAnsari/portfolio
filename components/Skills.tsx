"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";

interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

interface OrbitalIcon extends TechIcon {
  angle: number;
  radius: number;
  speed: number;
}

const Skills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Top tech stack icons (fixed position)
  const topIcons: TechIcon[] = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "TypeScript", icon: "🔷", color: "#3178C6" },
    { name: "Node.js", icon: "🟢", color: "#68A063" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "MongoDB", icon: "🍃", color: "#4DB33D" },
    { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
    { name: "CSS", icon: "🎨", color: "#1572B6" },
    { name: "HTML", icon: "📄", color: "#E34F26" },
    { name: "Figma", icon: "🎭", color: "#F24E1E" },
    { name: "Git", icon: "🌿", color: "#F05032" },
    { name: "AWS", icon: "☁️", color: "#FF9900" },
    { name: "Docker", icon: "🐳", color: "#2496ED" }
  ];

  // Orbital icons
  const orbitalIcons: OrbitalIcon[] = [
    { name: "React", icon: "⚛️", color: "#61DAFB", angle: 0, radius: 80, speed: 0.5 },
    { name: "Vue", icon: "💚", color: "#4FC08D", angle: 45, radius: 80, speed: 0.6 },
    { name: "Angular", icon: "🔺", color: "#DD0031", angle: 90, radius: 80, speed: 0.7 },
    { name: "Python", icon: "🐍", color: "#3776AB", angle: 135, radius: 80, speed: 0.8 },
    { name: "Java", icon: "☕", color: "#007396", angle: 180, radius: 80, speed: 0.9 },
    { name: "Swift", icon: "🍎", color: "#FA7343", angle: 225, radius: 80, speed: 1.0 },
    { name: "Rust", icon: "🦀", color: "#000000", angle: 270, radius: 80, speed: 1.1 },
    { name: "Go", icon: "🔵", color: "#00ADD8", angle: 315, radius: 80, speed: 1.2 },
    
    { name: "Blockchain", icon: "⛓️", color: "#8B5CF6", angle: 150, radius: 130, speed: 0.4 },
    { name: "AI", icon: "🧠", color: "#10B981",  angle: 270, radius: 130, speed: 0.5 }
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width * window.devicePixelRatio;
    canvas.height = dimensions.height * window.devicePixelRatio;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2 + 50; // Offset down for center symbol

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, dimensions.width / 2);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
      gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Draw orbital rings
      const rings = [80, 130, 180, 230];
      rings.forEach((radius, index) => {
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 - index * 0.05})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius * 0.6, timestamp * 0.001, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Animate and draw orbital icons
      orbitalIcons.forEach(icon => {
        const x = centerX + Math.cos(icon.angle + timestamp * icon.speed * 0.001) * icon.radius;
        const y = centerY + Math.sin(icon.angle + timestamp * icon.speed * 0.001) * icon.radius * 0.6;

        // Draw icon background circle
        ctx.fillStyle = `${icon.color}40`;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Draw icon border
        ctx.strokeStyle = icon.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw icon text
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(icon.icon, x, y + 4);
      });

      // Draw connecting lines from top icons to center
      const topIconY = 80;
      const iconSpacing = dimensions.width / (topIcons.length + 1);
      
      topIcons.forEach((icon, index) => {
        const iconX = iconSpacing * (index + 1);
        
        // Draw connecting line
        ctx.strokeStyle = `rgba(139, 92, 246, 0.6)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(iconX, topIconY);
        const controlX = centerX;
        const controlY = topIconY + (centerY - topIconY) / 2;
        ctx.quadraticCurveTo(controlX, controlY, centerX, centerY);
        ctx.stroke();
      });

      // Draw central Sigma symbol with glow
      ctx.save();
      
      // Glow effect
      const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60);
      glowGradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
      glowGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.3)');
      glowGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
      ctx.fill();

      // Central symbol
      ctx.fillStyle = 'white';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Σ', centerX, centerY + 16);
      
      ctx.restore();

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [dimensions]);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Tech <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          I'm currently looking to join a <span className="text-purple-400 font-semibold">cross-functional</span> team 
          that values improving people's lives through accessible design.
        </p>
      </div>

      <div ref={containerRef} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B0616] to-[#1A0B2E] border border-white/5" style={{ height: '600px' }}>
        {/* Top Tech Stack Icons */}
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4 px-8">
            {topIcons.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
                title={tech.name}
              >
                <div 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Additional Info */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <div className="text-center text-gray-400">
            <p className="text-sm mb-2">Orbiting Skills & Technologies</p>
            <div className="flex justify-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300">Frontend</span>
              <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300">Backend</span>
              <span className="px-2 py-1 rounded bg-green-500/20 text-green-300">DevOps</span>
              <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300">Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        <div className="text-center group">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl">⚛️</span>
          </div>
          <h3 className="font-semibold mb-2">Frontend</h3>
          <p className="text-sm text-gray-400">React, TypeScript, Next.js, Vue, Native</p>
        </div>

        <div className="text-center group">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🟢</span>
          </div>
          <h3 className="font-semibold mb-2">Backend</h3>
          <p className="text-sm text-gray-400">Node.js, Python, Express, NestJS</p>
        </div>

        <div className="text-center group">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🍃</span>
          </div>
          <h3 className="font-semibold mb-2">Database</h3>
          <p className="text-sm text-gray-400">MongoDB, PostgreSQL, Redis</p>
        </div>

        <div className="text-center group">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl">☁️</span>
          </div>
          <h3 className="font-semibold mb-2">Cloud</h3>
          <p className="text-sm text-gray-400">AWS, Vercel, Docker, CI/CD</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

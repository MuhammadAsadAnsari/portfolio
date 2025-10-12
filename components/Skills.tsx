"use client";
import React, { useState, memo, useCallback, useMemo } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
  description?: string;
}

interface SkillCategory {
  name: string;
  color: string;
  icon: string;
  skills: Skill[];
}

// Move data outside component to prevent recreation on every render
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    color: "#8B5CF6",
    icon: "🎨",
    skills: [
      { name: "React", level: 95, category: "Frontend", icon: "⚛", color: "#61DAFB", description: "Component-based UI library" },
      { name: "TypeScript", level: 90, category: "Frontend", icon: "TS", color: "#3178C6", description: "Type-safe JavaScript" },
      { name: "Next.js", level: 90, category: "Frontend", icon: "N", color: "#000000", description: "React framework" },
      { name: "Tailwind", level: 95, category: "Frontend", icon: "T", color: "#06B6D4", description: "Utility-first CSS" },
      { name: "Vue.js", level: 85, category: "Frontend", icon: "V", color: "#4FC08D", description: "Progressive framework" },
      { name: "SCSS", level: 80, category: "Frontend", icon: "S", color: "#CF649A", description: "CSS preprocessor" },
      { name: "Material UI", level: 75, category: "Frontend", icon: "M", color: "#0081CB", description: "React component library" },
    ]
  },
  {
    name: "Backend",
    color: "#EF4444",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, category: "Backend", icon: "N", color: "#68A063", description: "JavaScript runtime" },
      { name: "NestJS", level: 85, category: "Backend", icon: "N", color: "#E0234E", description: "Enterprise framework" },
      { name: "Express", level: 90, category: "Backend", icon: "E", color: "#68A063", description: "Web framework" },
      { name: "Python", level: 80, category: "Backend", icon: "P", color: "#3776AB", description: "General purpose" },
    ]
  },
  {
    name: "Database",
    color: "#10B981",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 80, category: "Database", icon: "M", color: "#4DB33D", description: "NoSQL database" },
      { name: "PostgreSQL", level: 80, category: "Database", icon: "P", color: "#336791", description: "Relational database" },
      { name: "Redis", level: 75, category: "Database", icon: "R", color: "#DC382D", description: "In-memory store" },
      { name: "MySQL", level: 70, category: "Database", icon: "M", color: "#4479A1", description: "Relational database" },
    ]
  },
  {
    name: "DevOps",
    color: "#F59E0B",
    icon: "🚀",
    skills: [
      { name: "Docker", level: 85, category: "DevOps", icon: "D", color: "#2496ED", description: "Containerization" },
      { name: "AWS", level: 75, category: "DevOps", icon: "A", color: "#FF9900", description: "Cloud platform" },
      { name: "Git", level: 90, category: "DevOps", icon: "G", color: "#F05032", description: "Version control" },
      { name: "CI/CD", level: 75, category: "DevOps", icon: "C", color: "#2088FF", description: "DevOps pipeline" },
    ]
  },
  {
    name: "Others",
    color: "#EC4899",
    icon: "🔧",
    skills: [
      { name: "Stripe", level: 85, category: "Others", icon: "S", color: "#635BFF", description: "Payment processing" },
      { name: "Zoom", level: 75, category: "Others", icon: "Z", color: "#2D8CFF", description: "Video conferencing" },
      { name: "Zapier", level: 70, category: "Others", icon: "Z", color: "#FF4A00", description: "Automation platform" },
      { name: "Vite", level: 85, category: "Others", icon: "V", color: "#646CFF", description: "Build tool" },
    ]
  }
];

// Memoized Skill Card Component
const SkillCard = memo(({ skill, categoryName, isHovered, onHover }: {
  skill: Skill;
  categoryName: string;
  isHovered: boolean;
  onHover: (skillId: string | null) => void;
}) => {
  const skillId = `${categoryName}-${skill.name}`;
  
  const handleMouseEnter = useCallback(() => {
    onHover(skillId);
  }, [skillId, onHover]);
  
  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <div
      className="group/skill relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Technology Card - Optimized for performance */}
      <div 
        className="relative bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-500/30 px-3 py-2 text-center transition-all duration-150 will-change-auto"
        style={{
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          boxShadow: isHovered ? `0 4px 20px ${skill.color}20` : `0 2px 10px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Technology Name */}
        <h3 className="text-sm font-bold text-white transition-colors">
          {skill.name}
        </h3>

        {/* Conditional Tooltip - Only render when needed */}
        {isHovered && (
          <div 
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900/95 backdrop-blur-sm rounded-lg text-xs text-white/90 opacity-100 transition-all duration-150 pointer-events-none whitespace-nowrap z-10 border border-slate-600/30"
            style={{ transform: 'translateX(-50%)' }}
          >
            {skill.description}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
          </div>
        )}
      </div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

// Memoized Category Component
const CategoryCard = memo(({ category, leftColumn, hoveredSkill, onSkillHover }: {
  category: SkillCategory;
  leftColumn: boolean;
  hoveredSkill: string | null;
  onSkillHover: (skillId: string | null) => void;
}) => {
  return (
    <div className="group relative">
      {/* Category Box */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20 p-6 hover:bg-slate-800/40 transition-all duration-200">
        {/* Category Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-purple-400">
            {category.name}
          </h2>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3">
          {category.skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              categoryName={category.name}
              isHovered={hoveredSkill === `${category.name}-${skill.name}`}
              onHover={onSkillHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

CategoryCard.displayName = 'CategoryCard';

const Skills = memo(() => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Memoized hover handler
  const handleSkillHover = useCallback((skillId: string | null) => {
    setHoveredSkill(skillId);
  }, []);

  // Memoized category slices
  const leftCategories = useMemo(() => SKILL_CATEGORIES.slice(0, 2), []);
  const rightCategories = useMemo(() => SKILL_CATEGORIES.slice(2, 5), []);

  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 scroll-mt-20">
      {/* Optimized Background - Reduced complexity */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/30 via-purple-900/20 to-slate-800/30" />

      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Tech <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          I'm currently looking to join a <span className="text-purple-400 font-semibold">cross-functional</span> team 
          that values improving people's lives through accessible design.
        </p>
      </div>

      {/* Optimized Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {/* Left Column - 2 Categories */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {leftCategories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category}
                leftColumn={true}
                hoveredSkill={hoveredSkill}
                onSkillHover={handleSkillHover}
              />
            ))}
          </div>

          {/* Right Column - 3 Categories */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {rightCategories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category}
                leftColumn={false}
                hoveredSkill={hoveredSkill}
                onSkillHover={handleSkillHover}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
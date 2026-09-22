import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  NestjsIcon,
  PrismaIcon,
  MysqlIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  HtmlCssIcon,
  TailwindIcon,
  PythonIcon,
  SwaggerIcon,
  GitIcon,
  FigmaIcon,
} from './Icons';

export interface SkillItem {
  name: string;
  category: 'all' | 'frontend' | 'backend' | 'tools';
  icon: React.ReactNode;
  tag: string;
  color: string;
}

const skillCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Languages & Frontend' },
  { id: 'backend', label: 'Backend & Database' },
  { id: 'tools', label: 'Tools & Design' },
];

const skillsData: SkillItem[] = [
  // Languages & Frontend
  { name: 'JavaScript', category: 'frontend', icon: <JavaScriptIcon size={44} />, tag: 'Core Language', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'frontend', icon: <TypeScriptIcon size={44} />, tag: 'Type-Safe Language', color: '#3178C6' },
  { name: 'HTML5 & CSS3', category: 'frontend', icon: <HtmlCssIcon size={44} />, tag: 'Markup & Styling', color: '#E44D26' },
  { name: 'React.js', category: 'frontend', icon: <ReactIcon size={44} />, tag: 'Frontend Library', color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', icon: <NextjsIcon size={44} />, tag: 'Full Stack Framework', color: '#ffffff' },
  { name: 'Tailwind CSS', category: 'frontend', icon: <TailwindIcon size={44} />, tag: 'Utility CSS', color: '#38BDF8' },

  // Backend & Database
  { name: 'Node.js', category: 'backend', icon: <NodejsIcon size={44} />, tag: 'Runtime Engine', color: '#5FA04E' },
  { name: 'NestJS', category: 'backend', icon: <NestjsIcon size={44} />, tag: 'Backend Framework', color: '#E0234E' },
  { name: 'Python', category: 'backend', icon: <PythonIcon size={44} />, tag: 'Programming Language', color: '#3776AB' },
  { name: 'MySQL', category: 'backend', icon: <MysqlIcon size={44} />, tag: 'Relational DB', color: '#00758F' },
  { name: 'Prisma ORM', category: 'backend', icon: <PrismaIcon size={44} />, tag: 'Database Toolkit', color: '#5A67D8' },
  { name: 'Swagger API', category: 'backend', icon: <SwaggerIcon size={44} />, tag: 'OpenAPI Documentation', color: '#85EA2D' },

  // Tools & Design
  { name: 'Git & GitHub', category: 'tools', icon: <GitIcon size={44} />, tag: 'Version Control', color: '#F05032' },
  { name: 'Figma', category: 'tools', icon: <FigmaIcon size={44} />, tag: 'UI / UX Design', color: '#A259FF' },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-slate-950/60">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            TECH ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Core tech stack and programming languages used in production web applications.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Squircle Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25, delay: idx * 0.025 }}
                whileHover={{ y: -6, scale: 1.04 }}
                key={skill.name}
                className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0c121e]/90 border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 backdrop-blur-xl transition-all duration-300 cursor-pointer text-center"
              >
                {/* Subtle internal gradient highlight */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                {/* Hover Top Glow Line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-300" />

                {/* Center Big Icon */}
                <div className="mb-3.5 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                  {skill.name}
                </h3>

                {/* Subtitle / Tag */}
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1 group-hover:text-slate-300 transition-colors">
                  {skill.tag}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

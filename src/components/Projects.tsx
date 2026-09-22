import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight, HeartHandshake, ShoppingBag, Stethoscope, Building2, Globe } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  liveUrl: string;
  domain: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tech: string[];
  features: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: 'givecharity',
    name: 'GiveCharity',
    subtitle: 'Online Crowdfunding Platform',
    liveUrl: 'https://givecharity.org',
    domain: 'givecharity.org',
    image: '/assets/givecharity.png',
    category: 'Full-Stack Platform',
    icon: <HeartHandshake size={20} className="text-cyan-400" />,
    description: 'Full-stack donation platform supporting medical, education, and social cause fundraising campaigns with transparent tracking and payment verification.',
    tech: ['Next.js', 'NestJS', 'MySQL', 'Prisma', 'Tailwind CSS'],
    features: [
      'Campaign creation, verification & goal tracking',
      'Real-time donation progress metrics & donor list',
      'Secure payment gateway API integration',
      'NestJS backend with Prisma ORM schema',
      'Mobile-first responsive donation interface'
    ]
  },
  {
    id: 'agoofoods',
    name: 'AGOO Foods',
    subtitle: 'E-Commerce Website',
    liveUrl: 'https://agoofoods.in',
    domain: 'agoofoods.in',
    image: '/assets/agoofoods.png',
    category: 'E-Commerce',
    icon: <ShoppingBag size={20} className="text-amber-400" />,
    description: 'E-commerce website for a premier snack brand featuring dynamic product showcase, interactive cart management, and seamless checkout workflow.',
    tech: ['React.js', 'Next.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    features: [
      'Snack product category filtering & search',
      'Interactive cart drawer & order state management',
      'Node.js REST API with MySQL data persistence',
      'Mobile-friendly product gallery & checkout UI'
    ]
  },
  {
    id: 'teledoctor',
    name: 'TeleDoctor.Life',
    subtitle: 'Telemedicine Platform',
    liveUrl: 'https://teledoctor.life',
    domain: 'teledoctor.life',
    image: '/assets/teledoctor.png',
    category: 'Healthcare App',
    icon: <Stethoscope size={20} className="text-emerald-400" />,
    description: 'Healthcare platform connecting patients with certified doctors via video consultations, e-prescriptions, and digital medical records management.',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js API'],
    features: [
      'Doctor directory & specialty search',
      'Online appointment booking calendar',
      'Digital medical record & report view portal',
      'Tele-consultation UI layout with status alerts'
    ]
  },
  {
    id: 'jjmedia',
    name: 'JJ Media House',
    subtitle: 'Corporate Website',
    liveUrl: 'https://jjmedia.org',
    domain: 'jjmedia.org',
    image: '/assets/jjmedia.png',
    category: 'Corporate & Marketing',
    icon: <Building2 size={20} className="text-indigo-400" />,
    description: 'Marketing website for an outdoor advertising agency showcasing services, client portfolio, and interactive location-based ad inventory.',
    tech: ['Next.js', 'Tailwind CSS'],
    features: [
      'Billboard & OOH ad location map inventory',
      'Client portfolio showcase gallery',
      'Lead generation & quote request forms',
      'Fast server-side rendered pages with Next.js'
    ]
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Full-Stack Platform', 'E-Commerce', 'Healthcare App', 'Corporate & Marketing'];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2">PORTFOLIO SHOWCASE</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">Featured Projects</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-main text-white shadow-lg shadow-cyan-500/25'
                  : 'glass-card text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                key={project.id}
                className="glass-card flex flex-col overflow-hidden rounded-2xl group border border-white/10 hover:border-cyan-500/40 transition-all duration-300 bg-slate-900/80 backdrop-blur-xl"
              >
                
                {/* Browser Window Header */}
                <div className="bg-slate-900/90 border-b border-white/10 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-950/80 border border-white/5 text-[11px] font-mono text-slate-400">
                    <Globe size={11} className="text-cyan-400" />
                    <span>https://{project.domain}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Image Preview Container */}
                <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-slate-900/40">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      {project.icon}
                      <h3 className="text-xl font-extrabold">{project.name}</h3>
                    </div>

                    <div className="text-xs font-semibold text-cyan-400 mb-3">
                      {project.subtitle}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-main text-white font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight size={16} />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 rounded-xl glass-card text-slate-300 font-semibold text-xs sm:text-sm hover:border-cyan-500/50 hover:text-white transition-all flex items-center gap-2"
                    >
                      <Eye size={16} />
                      <span>Details</span>
                    </motion.button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, ArrowRight, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const quickFacts = [
    { label: 'Role', val: 'Full Stack Developer' },
    { label: 'Company', val: 'ITOI Technology' },
    { label: 'Experience', val: '1.3+ Years' },
    { label: 'Location', val: 'Nagercoil, India' },
  ];

  const highlights = [
    'Building responsive frontends with React.js, Next.js & Tailwind CSS',
    'Architecting high-performance REST APIs with NestJS & Node.js',
    'Designing relational data schemas with MySQL & Prisma ORM',
    'Delivered 4 live client production platforms with zero downtime',
  ];

  return (
    <section id="about" className="min-h-screen py-20 sm:py-28 flex flex-col justify-center bg-slate-900/60 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineering Scalable Web Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Get to know the developer behind the code, architectures, and production platforms.
          </p>
        </motion.div>

        {/* Full-Width Expansive Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0c121e]/95 border border-slate-800 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative"
        >
          {/* Top subtle highlight line */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Developer Illustration */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="glass-card p-3.5 border border-cyan-500/25 bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/15 overflow-hidden">
                  <img
                    src="/assets/developer-about.jpg"
                    alt="Hentry Noel Developer illustration"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                {/* Floating pill over image */}
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/95 border border-cyan-500/30 text-cyan-400 text-xs font-bold shadow-lg backdrop-blur-md whitespace-nowrap flex items-center gap-2">
                  <MapPin size={14} />
                  <span>Nagercoil, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Right: Rich & Punchy Bio */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-2">
                Full Stack Specialist
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Software Developer <span className="text-cyan-400">@ ITOI Technology</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Passionate engineer with <strong className="text-white">1.3+ years of hands-on experience</strong> architecting modern web applications, scalable REST APIs, and high-performance databases using <strong className="text-cyan-400">React.js, Next.js, NestJS, and MySQL</strong>.
              </p>

              {/* Quick Info Grid - Full Text Without Truncation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {quickFacts.map((fact, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{fact.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">{fact.val}</div>
                  </div>
                ))}
              </div>

              {/* Key Bullet Highlights */}
              <div className="space-y-3 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all"
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-bold hover:text-cyan-400 transition-colors"
                >
                  Contact Me
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

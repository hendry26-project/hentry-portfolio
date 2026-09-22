import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Phone, Code2, CheckCircle2, Layers } from 'lucide-react';
import { LinkedinIcon, ReactIcon, NestjsIcon, NextjsIcon, TypeScriptIcon } from './Icons';
import { generateResumePDF } from '../utils/resumeGenerator';

interface HeroProps {
  onToast?: (message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onToast }) => {
  const handleDownload = () => {
    generateResumePDF();
    if (onToast) onToast('📄 Resume PDF generated and downloaded successfully!');
  };

  return (
    <section id="home" className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 flex items-center relative overflow-hidden bg-slate-950/80">
      
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[24rem] h-[24rem] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            
            {/* Online Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
            >
              <span>Full Stack Developer &bull; Available for Hire & Freelance</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4 sm:mb-6"
            >
              Building Production <br />
              <span className="gradient-text">Web Apps & APIs</span> <br />
              as <span className="text-white">Hentry Noel</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-sm sm:text-base md:text-xl text-slate-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-normal"
            >
              Full Stack Engineer with <strong className="text-white font-semibold">1.3+ years of experience</strong> specializing in <strong className="text-cyan-300 font-semibold">React.js, Next.js, Node.js, and NestJS</strong>. 
              Delivering scalable responsive interfaces and robust RESTful APIs backed by MySQL & Prisma.
            </motion.p>

            {/* Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              {['React.js', 'Next.js', 'Node.js', 'NestJS', 'MySQL', 'Prisma', 'Tailwind CSS'].map((stack, idx) => (
                <motion.span
                  whileHover={{ scale: 1.08, y: -2 }}
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-semibold text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                >
                  {stack}
                </motion.span>
              ))}
            </motion.div>

            {/* Location & Employer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-slate-400 mb-10"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-300">Nagercoil, Kanyakumari, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-300">Full Stack Developer @ ITOI Technology</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-main text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full glass-card text-slate-200 font-bold text-xs sm:text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                <span>Contact Me</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full glass-card text-cyan-400 border-cyan-500/40 font-bold text-xs sm:text-sm hover:bg-cyan-500/10 transition-all"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Resume PDF</span>
              </motion.button>
            </motion.div>

            {/* Direct Connect Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10"
            >
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase w-full sm:w-auto">DIRECT CONNECT:</span>
              <a
                href="https://linkedin.com/in/hentry-noel-034647437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:markohendry89@gmail.com"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={16} />
                <span>markohendry89@gmail.com</span>
              </a>
              <a
                href="tel:8870089642"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Phone size={16} />
                <span>8870089642</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              
              {/* Floating Developer Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Glow behind image */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/15 to-emerald-500/10 blur-2xl scale-105 pointer-events-none" />
                
                <div className="glass-card p-3 border border-cyan-500/20 bg-slate-900/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/15 overflow-hidden relative">
                  <img
                    src="/assets/developer-hero.jpg"
                    alt="Hentry Noel - Full Stack Developer"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                  
                  {/* Animated gradient overlay */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-t from-cyan-500/15 via-transparent to-indigo-500/10 pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Floating Tech Stack Icons (Framer Motion) */}
              {/* React.js Badge - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.3 },
                  scale: { duration: 0.5, delay: 0.3 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="absolute -top-4 -left-2 sm:-top-5 sm:-left-5 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-xl shadow-cyan-500/20 backdrop-blur-xl cursor-default"
              >
                <ReactIcon size={22} />
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">React.js</span>
              </motion.div>

              {/* NestJS Badge - Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, 9, 0], rotate: [2, -2, 2] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.5 },
                  scale: { duration: 0.5, delay: 0.5 },
                  y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                  rotate: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' }
                }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-slate-900/90 border border-rose-500/40 shadow-xl shadow-rose-500/20 backdrop-blur-xl cursor-default"
              >
                <NestjsIcon size={20} />
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">NestJS</span>
              </motion.div>

              {/* TypeScript Badge - Mid/Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, 8, 0], rotate: [-1, 2, -1] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.7 },
                  scale: { duration: 0.5, delay: 0.7 },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
                  rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
                }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="absolute bottom-16 -left-3 sm:bottom-20 sm:-left-6 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-slate-900/90 border border-blue-500/40 shadow-xl shadow-blue-500/20 backdrop-blur-xl cursor-default"
              >
                <TypeScriptIcon size={20} />
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">TypeScript</span>
              </motion.div>

              {/* Next.js Badge - Mid/Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0], rotate: [1, -2, 1] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.9 },
                  scale: { duration: 0.5, delay: 0.9 },
                  y: { duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                  rotate: { duration: 5.8, repeat: Infinity, ease: 'easeInOut' }
                }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="absolute bottom-16 -right-3 sm:bottom-20 sm:-right-6 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-xl cursor-default"
              >
                <NextjsIcon size={20} />
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">Next.js</span>
              </motion.div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8 sm:mt-10">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="p-3.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-white leading-none">1.3+ Yrs</div>
                    <div className="text-[11px] text-slate-400 font-medium mt-1">Full Stack Experience</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="p-3.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-white leading-none">4 Live</div>
                    <div className="text-[11px] text-slate-400 font-medium mt-1">Production Web Apps</div>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

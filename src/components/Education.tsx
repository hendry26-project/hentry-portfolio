import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  badge: string;
  iconColor: string;
}

export const Education: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      degree: 'B.Sc. Physics',
      institution: 'Government Arts & Science College',
      period: '2020 – 2023',
      location: 'Nagercoil, Kanyakumari, India',
      description: "3-year Bachelor's degree in Physics. Built strong analytical thinking, numerical modeling, and quantitative problem-solving logic applied daily in software development.",
      badge: "Bachelor's Degree",
      iconColor: 'bg-gradient-main text-white'
    },
    {
      degree: 'HSC (12th Standard)',
      institution: 'Carmel Higher Secondary School',
      period: '2019 – 2020',
      location: 'Nagercoil, Kanyakumari, India',
      description: 'Higher Secondary education specializing in Science & Mathematics with strong academic foundations in analytical logic and problem solving.',
      badge: 'Higher Secondary (12th)',
      iconColor: 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
    },
    {
      degree: 'SSLC (10th Standard)',
      institution: 'Carmel Higher Secondary School',
      period: '2017 – 2018',
      location: 'Nagercoil, Kanyakumari, India',
      description: 'Secondary School education completed with distinction in core science, mathematics, and analytical fundamentals.',
      badge: 'Secondary School (10th)',
      iconColor: 'bg-indigo-500/20 border border-indigo-500/30 text-indigo-400'
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-24 bg-slate-900/60 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2">ACADEMIC FOUNDATION</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">Education</h2>
        </motion.div>

        {/* 3 Cards in a Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 bg-slate-900/80 backdrop-blur-xl rounded-2xl"
            >
              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${edu.iconColor}`}>
                    {idx === 0 ? <GraduationCap size={24} /> : <School size={22} />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-bold">
                    {edu.badge}
                  </span>
                </div>

                {/* Degree & School */}
                <h3 className="text-lg font-extrabold text-white mb-1.5">{edu.degree}</h3>
                <div className="text-xs font-bold text-cyan-400 mb-2">
                  {edu.institution}
                </div>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1 font-semibold text-cyan-300">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={13} className="text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

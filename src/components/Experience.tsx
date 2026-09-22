import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Rocket, Code2, Server, Database, PhoneCall, Headphones, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  // Main Software Engineering Tech Stack Pills
  const techPills = [
    'React.js',
    'Nest js',
    'MYSQL',
    'Prisma',
    'figma',
    'Next js',
    'Typescript',
    'JavaScript',
    'Tailwind CSS',
    'Git',
  ];

  // B2C Call Center Skills & Tools
  const callCenterPills = [
    'Inbound & Outbound Calls',
    'US Education Campaigns',
    'Client Communication',
    'CRM Management',
    'Lead Qualification',
    'Customer Support',
  ];

  const devAchievements = [
    {
      icon: <Code2 size={16} className="text-cyan-400" />,
      text: 'Developed responsive, modern web application interfaces using React.js, Next.js, and Tailwind CSS with pixel-perfect UI fidelity.',
    },
    {
      icon: <Server size={16} className="text-emerald-400" />,
      text: 'Engineered robust, secure RESTful microservices and APIs with NestJS and Node.js, fully documented with Swagger OpenAPI.',
    },
    {
      icon: <Database size={16} className="text-indigo-400" />,
      text: 'Designed optimized relational database schemas, migrations, and efficient data pipelines utilizing MySQL and Prisma ORM.',
    },
    {
      icon: <Rocket size={16} className="text-amber-400" />,
      text: 'Delivered 4 production-grade platforms: GiveCharity (crowdfunding), AGOO Foods (e-commerce), TeleDoctor.Life, and JJ Media House.',
    },
  ];

  const callCenterAchievements = [
    {
      icon: <PhoneCall size={16} className="text-cyan-400" />,
      text: 'Handled high-volume inbound and outbound interactions for US Higher Education campaigns, assisting prospective students with program inquiries.',
    },
    {
      icon: <Headphones size={16} className="text-emerald-400" />,
      text: 'Maintained excellent customer satisfaction scores by conducting detailed lead qualification and providing clear communication.',
    },
    {
      icon: <CheckCircle2 size={16} className="text-indigo-400" />,
      text: 'Managed customer records and interaction tracking within CRM software while strictly adhering to US voice and communication standards.',
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-900/60 relative overflow-hidden">
      
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/3 -left-20 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none" />

      {/* Decorative floating code snippets in background */}
      <div className="absolute top-24 right-12 text-[11px] font-mono text-slate-700/60 pointer-events-none hidden lg:block select-none">
        {`{ status: true } })`}
      </div>
      <div className="absolute bottom-12 right-20 text-[11px] font-mono text-cyan-500/40 pointer-events-none hidden sm:block select-none">
        • docker compose up -d --build
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            CAREER TRACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Professional software development track record and enterprise customer operations experience.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Continuous Vertical Cyan Timeline Line */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500/50 to-transparent" />

          {/* ========================================================
              CARD 1: ITOI Technologies (Software Developer)
             ======================================================== */}
          <div className="relative">
            {/* Timeline Node Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -left-6 sm:-left-10 top-8 -translate-x-1/2 z-20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0b1329] border-2 border-cyan-400 ring-4 ring-cyan-500/20 shadow-lg shadow-cyan-500/30 flex items-center justify-center">
                <Briefcase size={20} className="text-cyan-400" />
              </div>
            </motion.div>

            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl bg-[#0c121e]/95 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 ml-4 sm:ml-8"
            >
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

              {/* Header: Date Pill & Company */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold shadow-inner">
                  <Calendar size={15} />
                  <span>Jun 2025 - Present</span>
                </div>
                <div className="text-slate-400 font-semibold text-sm sm:text-base tracking-wide">
                  ITOI Technologies
                </div>
              </div>

              {/* Role Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Software Developer
              </h3>

              {/* Core Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                Contributed to the development of web application using JavaScript, TypeScript, Prisma, NestJS and implemented data storage using MySQL.
              </p>

              {/* Key Accomplishments */}
              <div className="space-y-3 mb-8 pt-4 border-t border-slate-800/80">
                {devAchievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-md bg-slate-800/80 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Core Stack & Technologies:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {techPills.map((tech) => (
                    <motion.span
                      whileHover={{ scale: 1.06, y: -2 }}
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors shadow-sm cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Card Footer Code Label */}
              <div className="mt-6 pt-3 flex justify-end">
                <span className="text-[11px] font-mono text-cyan-400/50">
                  • docker compose up -d --build
                </span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              CARD 2: B2C Technology (Customer Support / Telecalling)
             ======================================================== */}
          <div className="relative">
            {/* Timeline Node Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -left-6 sm:-left-10 top-8 -translate-x-1/2 z-20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0b1329] border-2 border-emerald-400 ring-4 ring-emerald-500/20 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
                <Headphones size={20} className="text-emerald-400" />
              </div>
            </motion.div>

            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative rounded-3xl bg-[#0c121e]/95 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 ml-4 sm:ml-8"
            >
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent pointer-events-none" />

              {/* Header: Date Pill & Company */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold shadow-inner">
                  <Calendar size={15} />
                  <span>2023</span>
                </div>
                <div className="text-slate-400 font-semibold text-sm sm:text-base tracking-wide">
                  B2C Technology
                </div>
              </div>

              {/* Role Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Customer Care Executive / Telecaller
              </h3>

              {/* Core Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                Managed international communication workflows for US Education campaigns, delivering customer outreach, assisting with education program inquiries, and executing lead verification procedures.
              </p>

              {/* Key Accomplishments */}
              <div className="space-y-3 mb-8 pt-4 border-t border-slate-800/80">
                {callCenterAchievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-md bg-slate-800/80 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills & Tools Pills */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Core Skills & Domain Expertise:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {callCenterPills.map((pill) => (
                    <motion.span
                      whileHover={{ scale: 1.06, y: -2 }}
                      key={pill}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors shadow-sm cursor-default"
                    >
                      {pill}
                    </motion.span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
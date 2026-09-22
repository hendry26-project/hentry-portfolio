import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, MessageCircle, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './Icons';

interface ContactProps {
  onToast?: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    if (onToast) onToast(`Copied ${field} to clipboard! 📋`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-slate-950/80">
      
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Contact Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Have a project in mind or looking for a Full Stack Developer? Connect directly via email, phone, or WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative glass-card p-3.5 border border-cyan-500/25 bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
            >
              <img
                src="/assets/developer-contact.jpg"
                alt="Developer waving hello"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none"
              />
            </motion.div>

            {/* Status Pill */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold text-center backdrop-blur-md shadow-lg flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full Stack Engineering Roles & Projects</span>
            </div>
          </motion.div>

          {/* Right Column: Direct Contact Info Cards (No Form) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl bg-[#0c121e]/95 backdrop-blur-2xl rounded-3xl relative">
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                Let's discuss your project
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                I am available for full-time full-stack engineering roles, freelance web development, and technical consulting. Feel free to reach out anytime!
              </p>

              {/* Contact Cards Grid */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">EMAIL ADDRESS</div>
                      <a
                        href="mailto:markohendry89@gmail.com"
                        className="text-xs sm:text-sm font-bold text-slate-100 hover:text-cyan-400 truncate block mt-0.5"
                      >
                        markohendry89@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('markohendry89@gmail.com', 'Email')}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </motion.div>

                {/* Phone & WhatsApp Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PHONE & WHATSAPP</div>
                      <a
                        href="tel:8870089642"
                        className="text-xs sm:text-sm font-bold text-slate-100 hover:text-cyan-400 truncate block mt-0.5"
                      >
                        +91 8870089642 / 7871627589
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('8870089642', 'Phone')}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </motion.div>

                {/* Direct WhatsApp Chat Link */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://wa.me/918870089642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WHATSAPP DIRECT</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mt-0.5">
                        Chat on WhatsApp Direct &rarr;
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-2">
                    <ExternalLink size={16} />
                  </div>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://linkedin.com/in/hentry-noel-034647437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center shrink-0">
                      <LinkedinIcon size={20} className="text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LINKEDIN PROFILE</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-indigo-400 truncate block mt-0.5">
                        hentry-noel-034647437
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800 text-slate-400 group-hover:text-indigo-400 transition-colors shrink-0 ml-2">
                    <ExternalLink size={16} />
                  </div>
                </motion.a>

                {/* Location Card */}
                <div className="flex items-center gap-3.5 p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LOCATION</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">
                      Nagercoil, Kanyakumari, Tamil Nadu, India
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

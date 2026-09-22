import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-main flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-cyan-500/20">
              HN
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight text-white">Hentry Noel</div>
              <div className="text-xs text-cyan-400 font-medium">Full Stack Developer &bull; Nagercoil, India</div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Hentry Noel. Built with TypeScript, React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/hentry-noel-034647437" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:markohendry89@gmail.com" className="hover:text-slate-300 transition-colors">Email</a>
            <a href="tel:8870089642" className="hover:text-slate-300 transition-colors">+91 8870089642</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

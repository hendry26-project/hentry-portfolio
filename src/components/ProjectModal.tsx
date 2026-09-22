import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from './Projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 border border-white/10 text-slate-300 flex items-center justify-center hover:text-white hover:border-cyan-500/50 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Project Image */}
        <div className="rounded-xl overflow-hidden mb-6 border border-white/10 bg-slate-950">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover max-h-96"
          />
        </div>

        {/* Title & Visit Link */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-extrabold">{project.name}</h2>
            <span className="text-sm font-semibold text-cyan-400">{project.subtitle}</span>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-main text-white font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <span>Visit Live Website</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-slate-200 mb-3">Key Highlights & Architecture:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

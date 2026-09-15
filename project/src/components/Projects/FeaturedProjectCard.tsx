import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectTerminalBar from './ProjectTerminalBar';
import ProjectTechList from './ProjectTechList';
import ProjectActions from './ProjectActions';
import type { Project } from './types';

interface FeaturedProjectCardProps {
  project: Project;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();
  const title = t(project.titleKey);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="group relative rounded-2xl overflow-hidden border border-cyan/30 shadow-[0_0_40px_rgba(0,212,255,0.08)] hover:shadow-[0_0_60px_rgba(0,212,255,0.14)] transition-all duration-500 bg-white/[0.02] backdrop-blur-sm"
    >
      {project.badge && (
        <span className="absolute top-5 left-5 z-20 bg-cyan text-dark text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          {project.badge}
        </span>
      )}

      <ProjectTerminalBar type={project.type} />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden bg-black/40 min-h-[260px] lg:min-h-[380px]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 pointer-events-none" />
        </div>

        <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
          <span className="inline-flex items-center gap-2 text-cyan font-mono text-xs tracking-widest uppercase w-max">
            <span className="w-4 h-px bg-cyan" />
            {project.role}
          </span>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h3>

          <p className="text-gray-400 leading-relaxed max-w-lg">{t(project.descriptionKey)}</p>

          <ProjectTechList technologies={project.technologies} />

          <div className="pt-2">
            <ProjectActions title={title} demoUrl={project.demoUrl} codeUrl={project.codeUrl} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProjectCard;

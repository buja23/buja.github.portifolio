import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectTerminalBar from './ProjectTerminalBar';
import ProjectTechList from './ProjectTechList';
import ProjectActions from './ProjectActions';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useLanguage();
  const title = t(project.titleKey);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
      role="listitem"
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 bg-white/[0.02] backdrop-blur-sm"
    >
      {project.badge && (
        <span className="absolute top-5 left-5 z-20 bg-cyan text-dark text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          {project.badge}
        </span>
      )}

      <ProjectTerminalBar type={project.type} />

      {/* Cover — vertical card: image on top */}
      <div className="relative overflow-hidden bg-black/40 aspect-[16/10]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content — below the image */}
      <div className="flex flex-col gap-5 p-6 flex-1">
        <span className="inline-flex items-center gap-2 text-cyan font-mono text-xs tracking-widest uppercase w-max">
          <span className="w-4 h-px bg-cyan" />
          {project.role}
        </span>

        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">{t(project.descriptionKey)}</p>

        <ProjectTechList technologies={project.technologies} />

        <div className="pt-2 mt-auto">
          <ProjectActions title={title} demoUrl={project.demoUrl} codeUrl={project.codeUrl} />
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

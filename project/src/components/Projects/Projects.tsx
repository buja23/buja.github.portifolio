import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => project !== featuredProject);

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="max-w-\[1440px\] mx-auto px-6 md:px-16 relative z-10 w-full">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between md:items-end gap-4 pb-8 border-b border-cyan/20 mb-16"
        >
          <div>
            <span className="text-cyan font-mono text-xs tracking-widest uppercase">
              02 / selected_work
            </span>
            <h2
              id="projects-title"
              className="text-4xl md:text-5xl font-bold mt-2 tracking-tight text-white"
            >
              {t('projectsTitle')}
            </h2>
          </div>
          <p className="max-w-sm text-gray-500 font-light text-sm">{t('projectsIntro')}</p>
        </motion.div>

        {/* ── Cards: featured stays horizontal, the rest go in a 2 column grid ── */}
        <div className="flex flex-col gap-8">
          <FeaturedProjectCard project={featuredProject} />

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            role="list"
            aria-label={t('projectsTitle')}
          >
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

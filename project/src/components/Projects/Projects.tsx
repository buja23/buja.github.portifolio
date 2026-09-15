import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';

import barbereasy from '../../assets/barbereasy-capa.png';
import chamada from '../../assets/chamada.png';
import ecommerce from '../../assets/bjtech.png'; // Placeholder for Madame

// ─── Dados dos projetos reais ────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    featured: true,
    badge: 'Featured',
    titleKey: 'project1Title',
    descriptionKey: 'project1Description',
    image: barbereasy,
    imageAlt: 'Interface do BarberEasy',
    technologies: ['PHP', 'Laravel', 'Filament', 'React Native', 'Expo', 'PostgreSQL', 'DigitalOcean'],
    demoUrl: 'https://www.barbereasy.com.br',
    codeUrl: null,
    role: 'Desenvolvedor Full-Stack',
    type: 'SaaS Comercial',
  },
  {
    id: 2,
    featured: false,
    badge: null,
    titleKey: 'project2Title',
    descriptionKey: 'project2Description',
    image: chamada,
    imageAlt: 'Interface da Chamada Digital',
    technologies: ['React', 'TypeScript', 'Firebase'],
    demoUrl: 'https://buja23.github.io/ChamadaDigital-Jiu-view/students',
    codeUrl: 'https://github.com/buja23/ChamadaDigital-Jiu-view',
    role: 'Desenvolvedor Front-End',
    type: 'Sistema Voluntário',
  },
  {
    id: 3,
    featured: false,
    badge: null,
    titleKey: 'project3Title',
    descriptionKey: 'project3Description',
    image: ecommerce,
    imageAlt: 'Interface do E-commerce Madame',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
    demoUrl: null,
    codeUrl: null,
    role: 'Desenvolvedor Full-Stack',
    type: 'Plataforma Varejo',
  },
];

// ─── Componente ──────────────────────────────────────────────────────────────
const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10 w-full">

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

        {/* ── Cards ── */}
        <div className="flex flex-col gap-8" role="list" aria-label={t('projectsTitle')}>
          {PROJECTS.map((project, index) => {
            const title = t(project.titleKey);
            const description = t(project.descriptionKey);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                role="listitem"
                className={`
                  group relative rounded-2xl overflow-hidden
                  border transition-all duration-500
                  ${project.featured
                    ? 'border-cyan/30 shadow-[0_0_40px_rgba(0,212,255,0.08)] hover:shadow-[0_0_60px_rgba(0,212,255,0.14)]'
                    : 'border-white/5 hover:border-white/10'
                  }
                  bg-white/[0.02] backdrop-blur-sm
                `}
              >
                {/* Featured badge */}
                {project.badge && (
                  <span className="absolute top-5 left-5 z-20 bg-cyan text-dark text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {project.badge}
                  </span>
                )}

                {/* Terminal bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-black/30">
                  <span className="w-3 h-3 rounded-full bg-red-500/50" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <span className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-auto font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    {project.type}
                  </span>
                </div>

                {/* ── 50 / 50 grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Image — left on odd, right on even */}
                  <div
                    className={`relative overflow-hidden bg-black/40 min-h-[260px] lg:min-h-[380px] ${
                      index % 2 !== 0 ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700"
                      loading="lazy"
                    />
                    {/* Subtle gradient overlay to blend into the card */}
                    <div
                      className={`absolute inset-0 ${
                        index % 2 !== 0
                          ? 'bg-gradient-to-l'
                          : 'bg-gradient-to-r'
                      } from-transparent to-black/60 pointer-events-none`}
                    />
                  </div>

                  {/* Content — right on odd, left on even */}
                  <div
                    className={`flex flex-col justify-center gap-6 p-8 lg:p-12 ${
                      index % 2 !== 0 ? 'lg:order-1' : ''
                    }`}
                  >
                    {/* Role tag */}
                    <span className="inline-flex items-center gap-2 text-cyan font-mono text-xs tracking-widest uppercase w-max">
                      <span className="w-4 h-px bg-cyan" />
                      {project.role}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed max-w-lg">{description}</p>

                    {/* Tech stack */}
                    <div
                      className="flex flex-wrap gap-2"
                      role="list"
                      aria-label="Tecnologias utilizadas"
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="px-3 py-1 border border-cyan/20 bg-cyan/5 text-cyan font-mono text-[11px] rounded-sm tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t('liveDemo')} — ${title}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-dark font-mono text-xs tracking-wider transition-all duration-300 rounded-sm"
                        >
                          <FiArrowUpRight aria-hidden="true" />
                          {t('liveDemo')}
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-gray-600 font-mono text-xs rounded-sm cursor-not-allowed"
                        >
                          {t('notAvailable')}
                        </button>
                      )}

                      {project.codeUrl ? (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t('sourceCode')} — ${title}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-gray-300 hover:border-cyan hover:text-cyan font-mono text-xs tracking-wider transition-all duration-300 rounded-sm"
                        >
                          <FiCode aria-hidden="true" />
                          {t('sourceCode')}
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-gray-600 font-mono text-xs rounded-sm cursor-not-allowed"
                        >
                          {t('notAvailable')}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
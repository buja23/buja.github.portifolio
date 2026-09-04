import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/portfolio';
import styles from './Projects.module.css';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';
import InteractiveGrid from '../background/InteractiveGrid';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const getProjectTitle = (id: number) => {
    return t(`project${id}Title`);
  };

  const getProjectDescription = (id: number) => {
    return t(`project${id}Description`);
  };

  return (
    <section 
      id="projects" 
      className={styles.projects}
      ref={ref}
      aria-labelledby="projects-title"
    >
      <div className={styles.backgroundWrapper}><InteractiveGrid /></div>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heading}>
          <div>
            <span className="eyebrow">02 / selected_work</span>
            <h2 id="projects-title" className={styles.title}>{t('projectsTitle')}</h2>
          </div>
          <p className={styles.headingNote}>{t('projectsIntro')}</p>
        </div>
        
        <div 
          className={styles.projectsGrid}
          role="list"
          aria-label={t('projectsTitle')}
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.projectCard} ${project.id === 1 ? styles.featuredProject : ''}`}
              role="listitem"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`${getProjectTitle(project.id)} - ${t('projectImage')}`}
                  className={styles.projectImage}
                  loading="lazy"
                />
                <div className={styles.overlay}><span>{project.id === 1 ? '01 / flagship case' : `0${project.id} / project`}</span></div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardEyebrow}>{project.id === 1 ? t('projectRole') : t('projectBuild')}</div>
                <h3 className={styles.projectTitle}>
                  {getProjectTitle(project.id)}
                </h3>

                {project.id === 1 && <div className={styles.featuredFacts}>
                  <div><span>{t('projectTypeLabel')}</span><strong>{t('projectTypeValue')}</strong></div>
                  <div><span>{t('projectScopeLabel')}</span><strong>{t('projectScopeValue')}</strong></div>
                  <div><span>{t('projectStatusLabel')}</span><strong>{t('projectStatusValue')}</strong></div>
                </div>}

                <p className={styles.projectDescription}>
                  {getProjectDescription(project.id)}
                </p>

                <div
                  className={styles.technologies}
                  role="list"
                  aria-label="Tecnologias utilizadas"
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techTag}
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardActions}>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.button} ${styles.primaryButton}`}
                      aria-label={`${t('liveDemo')} - ${getProjectTitle(project.id)}`}
                    >
                      <FiArrowUpRight aria-hidden="true" /> {t('liveDemo')}
                    </a>
                  ) : (
                    <button
                      className={`${styles.button} ${styles.primaryButton} ${styles.disabled}`}
                      disabled
                      aria-label={`${t('liveDemo')} - ${t('notAvailable')}`}
                    >
                      {t('notAvailable')}
                    </button>
                  )}
                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.button} ${styles.secondaryButton}`}
                      aria-label={`${t('sourceCode')} - ${getProjectTitle(project.id)}`}
                    >
                      <FiCode aria-hidden="true" /> {t('sourceCode')}
                    </a>
                  ) : (
                    <button
                      className={`${styles.button} ${styles.secondaryButton} ${styles.disabled}`}
                      disabled
                      aria-label={`${t('sourceCode')} - ${t('notAvailable')}`}
                    >
                      {t('notAvailable')}
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
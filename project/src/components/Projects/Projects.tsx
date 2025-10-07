import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/portfolio';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const getProjectTitle = (id: number) => {
    return t(`project${id}Title` as any);
  };

  const getProjectDescription = (id: number) => {
    return t(`project${id}Description` as any);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="projects" 
      className={styles.projects}
      ref={ref}
      aria-labelledby="projects-title"
    >
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 id="projects-title" className={styles.title}>
          {t('projectsTitle')}
        </h2>
        
        <div 
          className={styles.projectsGrid}
          role="list"
          aria-label={t('projectsTitle')}
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={styles.projectCard}
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
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                        aria-label={`${t('liveDemo')} - ${getProjectTitle(project.id)}`}
                        onKeyDown={(e) => handleKeyDown(e, () => window.open(project.demoUrl!, '_blank'))}
                      >
                        {t('liveDemo')}
                      </a>
                    ) : (
                      <span className={`${styles.overlayLink} ${styles.disabled}`}>
                        {t('notAvailable')}
                      </span>
                    )}
                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                        aria-label={`${t('sourceCode')} - ${getProjectTitle(project.id)}`}
                        onKeyDown={(e) => handleKeyDown(e, () => window.open(project.codeUrl!, '_blank'))}
                      >
                        {t('sourceCode')}
                      </a>
                    ) : (
                      <span className={`${styles.overlayLink} ${styles.disabled}`}>
                        {t('notAvailable')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>
                  {getProjectTitle(project.id)}
                </h3>
                
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
                      {t('liveDemo')}
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
                      {t('sourceCode')}
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
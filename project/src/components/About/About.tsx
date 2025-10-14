import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Skills } from '../../data/portfolio';
import styles from './About.module.css';


const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      className={styles.about}
      ref={ref}
      aria-labelledby="about-title"
    >
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 id="about-title" className={styles.title}>
          {t('aboutTitle')}
        </h2>
        
        <div className={styles.content}>
          <div className={styles.description}>
            <p className={styles.text}>
              {t('aboutDescription')}
            </p>
          </div>
          
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>
              {t('mainSkills')}
            </h3>
            
            <div 
              className={styles.skillsGrid}
              role="list"
              aria-label={t('mainSkills')}
            >
              {Skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={styles.skillItem}
                  role="listitem"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.skillIcon} aria-hidden="true">
                    {skill.icon}
                  </div>
                  <span className={styles.skillName}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
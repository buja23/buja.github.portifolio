import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { education } from '../../data/portfolio';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="education" 
      className={styles.education}
      ref={ref}
      aria-labelledby="education-title"
    >
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 id="education-title" className={styles.title}>
          {t('educationTitle')}
        </h2>
        
        <div 
          className={styles.educationList}
          role="list"
          aria-label={t('educationTitle')}
        >
          {education.map((item, index) => (
            <div
              key={item.id}
              className={styles.educationItem}
              role="listitem"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timeline}>
                <div className={styles.timelineDot} aria-hidden="true"></div>
                {index < education.length - 1 && (
                  <div className={styles.timelineLine} aria-hidden="true"></div>
                )}
              </div>
              
              <div className={styles.content}>
                <div className={styles.period}>
                  {item.period}
                </div>
                
                <h3 className={styles.degree}>
                  {language === 'pt' ? item.degree : item.degreeEn}
                </h3>
                
                <p className={styles.institution}>
                  {language === 'pt' ? item.institution : item.institutionEn}
                </p>
                
                <p className={styles.description}>
                  {language === 'pt' ? item.description : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { education } from '../../data/portfolio';
import InteractiveGrid from '../background/InteractiveGrid';
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
      <div className={styles.backgroundWrapper}><InteractiveGrid /></div>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heading}>
          <div>
            <span className="eyebrow">04 / trajectory</span>
            <h2 id="education-title" className={styles.title}>{t('educationTitle')}</h2>
          </div>
          <p className={styles.intro}>{t('educationIntro')}</p>
        </div>
        
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
                <div className={styles.meta}>
                  <span className={styles.period}>{item.period}</span>
                  {item.id === 2 && <span className={styles.current}>{t('educationCurrent')}</span>}
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
                <span className={styles.entryNumber}>0{item.id} / formação</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
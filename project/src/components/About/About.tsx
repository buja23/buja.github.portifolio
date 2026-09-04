import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Skills } from '../../data/portfolio';
import ProcessField from '../background/ProcessField';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './About.module.css';

const skillGroups = [
  { key: 'frontEnd', names: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Material UI'] },
  { key: 'backEnd', names: ['Node.js', 'Express.js', 'Python', 'PHP', 'Laravel'] },
  { key: 'dataTools', names: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'FFmpeg'] },
];

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
      <div className={styles.backgroundWrapper}>
        <ProcessField />
      </div>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heading}>
          <div>
            <span className="eyebrow">03 / the_operator</span>
            <h2 id="about-title" className={styles.title}>{t('aboutTitle')}</h2>
          </div>
          <span className={styles.headingTag}>{t('aboutTag')}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.story}>
            <span className={styles.storyLabel}>{t('aboutLabel')}</span>
            <p className={styles.lead}>{t('aboutLead')}</p>
            <p className={styles.text}>
              {t('aboutDescription')}
            </p>
            <a className={styles.storyLink} href="#contact">{t('aboutCta')} <FiArrowUpRight aria-hidden="true" /></a>
          </div>
          
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>{t('mainSkills')}</h3>
            <div className={styles.skillGroups}>
              {skillGroups.map((group) => {
                const groupSkills = Skills.filter((skill) => group.names.includes(skill.name));
                return <div className={styles.skillGroup} key={group.key}>
                  <span className={styles.groupLabel}>{t(`skillGroup${group.key}`)}</span>
                  <div className={styles.skillsGrid} role="list">
                    {groupSkills.map((skill) => <div key={skill.name} className={styles.skillItem} role="listitem"><span className={styles.skillIcon} aria-hidden="true">{skill.icon}</span><span className={styles.skillName}>{skill.name}</span></div>)}
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
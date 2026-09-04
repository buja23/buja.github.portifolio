import React from 'react';
import { FiArrowDownRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Hero.module.css';
import avatar from '../../assets/avatar.png'
import CV from '../../assets/pdf/Curriculo.pdf'
import { useTypewriter } from '../../hooks/useTypewriter';
import InteractiveGrid from '../background/InteractiveGrid';


const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const typewriterStrings = [
    '> locate developer --name "Victor Azambuja"',
    '> status: systems_analysis_student_at_fatec',
    '> skills: full_stack_specialist'
  ];

  const typedText = useTypewriter({
    strings: typewriterStrings,
    typingSpeed: 50,
    deletingSpeed: 30,
    delay: 2000,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    console.log("download")
    const link = document.createElement('a');
    link.href = CV
    link.download = 'Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    
    <section
      id="home"
      className={styles.hero}
      ref={ref}
      aria-label={t('home')}
    >
      <div className={styles.backgroundWrapper}>
        <InteractiveGrid />
      </div>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.topline}>
          <span className="eyebrow">01 / portfolio.exe</span>
          <span className={styles.status}><span className={styles.statusDot}></span>{t('availableStatus')}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.kicker}><FiMapPin aria-hidden="true" /> Presidente Prudente, SP / Brazil</p>
            <h1 className={styles.name}>Victor<br /><span>Azambuja</span></h1>
            <p className={styles.role}>{t('heroRole')}</p>
            <p className={styles.subtitle}>{t('heroSubtitle')}</p>

            <div className={styles.terminal} aria-label="Terminal de status">
              <div className={styles.terminalBar}><span></span><span></span><span></span><small>system_status</small></div>
              <p className={styles.terminalText}>{typedText}<span className={styles.cursor}></span></p>
            </div>

            <div className={styles.actions}>
              <button onClick={handleDownload} className={`${styles.button} ${styles.primaryButton}`}><FiDownload aria-hidden="true" /> {t('DownloadCV')}</button>
              <button onClick={() => scrollToSection('projects')} className={`${styles.button} ${styles.secondaryButton}`}><FiArrowDownRight aria-hidden="true" /> {t('viewProjects')}</button>
            </div>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.profileLabel}>FULL-STACK / 2026</div>
            <div className={styles.profileImageWrapper}>
              <img src={avatar} alt={t('profilePhoto')} className={styles.profileImage} loading="eager" />
              <div className={styles.imageCorner}>VA<span>+</span></div>
            </div>
            <p className={styles.imageNote}>{t('heroNote')}</p>
          </div>
        </div>

        <div className={styles.scrollHint}><span>scroll to explore</span><FiArrowDownRight aria-hidden="true" /></div>

        {/* Screen reader descriptions */}
        <div className="sr-only">
          <p id="projects-description">
            Rolar para a seção de projetos em destaque
          </p>
          <p id="contact-description">
            Rolar para a seção de contato
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
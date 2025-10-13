import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Hero.module.css';
import avatar from '../../assets/avatar.png'
import CV from '../../assets/pdf/Curriculo.pdf'

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

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
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <div className={styles.profileSection}>
            <div className={styles.profileImageWrapper}>
              <img
                src={avatar}
                alt={t('profilePhoto')}
                className={styles.profileImage}
                loading="eager"
              />
            </div>
          </div>

          <div className={styles.textSection}>
            <h1 className={styles.name}>
              Victor Azambuja
            </h1>

            <p className={styles.role}>
              {t('heroRole')}
            </p>

            <p className={styles.subtitle}>
              {t('heroSubtitle')}
            </p>

            <div className={styles.actions}>
              <button
                onClick={() => handleDownload()}
                className={`${styles.button} ${styles.primaryButton}`}
              >
                {t('DownloadCV')}
              </button>

              <button
                onClick={() => scrollToSection('contact')}

                className={`${styles.button} ${styles.secondaryButton}`}
                aria-describedby="contact-description"
              >
                {t('getInTouch')}
              </button>
            </div>
          </div>
        </div>

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
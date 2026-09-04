import React from 'react';
import { FiCompass, FiLayers, FiCode, FiTrendingUp } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Process.module.css';
import InteractiveGrid from '../background/InteractiveGrid';

const Process: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    { number: '01', icon: <FiCompass aria-hidden="true" />, title: t('processStep1Title'), description: t('processStep1Description') },
    { number: '02', icon: <FiLayers aria-hidden="true" />, title: t('processStep2Title'), description: t('processStep2Description') },
    { number: '03', icon: <FiCode aria-hidden="true" />, title: t('processStep3Title'), description: t('processStep3Description') },
    { number: '04', icon: <FiTrendingUp aria-hidden="true" />, title: t('processStep4Title'), description: t('processStep4Description') },
  ];

  return (
    <section id="process" className={styles.process} ref={ref} aria-labelledby="process-title">
      <div className={styles.backgroundWrapper}><InteractiveGrid /></div>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heading}>
          <div>
            <span className="eyebrow">04 / methodology</span>
            <h2 id="process-title" className={styles.title}>{t('processTitle')}</h2>
          </div>
          <p className={styles.intro}>{t('processIntro')}</p>
        </div>
        <div className={styles.steps} role="list" aria-label={t('processTitle')}>
          {steps.map((step) => (
            <article className={styles.step} role="listitem" key={step.number}>
              <div className={styles.stepTop}><span>{step.number}</span><span className={styles.icon}>{step.icon}</span></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} João Silva Santos. {t('footerText')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
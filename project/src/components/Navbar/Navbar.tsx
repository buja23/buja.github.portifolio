import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} role="navigation" aria-label={t('menuToggle')}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <button
              onClick={() => scrollToSection('home')}
              className={styles.logoButton}
              aria-label={t('home')}
            >
              <span className={styles.logoText}>Azambuja</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navList}>
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('home'))}
                  className={styles.navLink}
                  tabIndex={0}
                >
                  {t('home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('about'))}
                  className={styles.navLink}
                  tabIndex={0}
                >
                  {t('about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('education')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('education'))}
                  className={styles.navLink}
                  tabIndex={0}
                >
                  {t('education')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('projects'))}
                  className={styles.navLink}
                  tabIndex={0}
                >
                  {t('projects')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
                  className={styles.navLink}
                  tabIndex={0}
                >
                  {t('contact')}
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.controls}>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              onKeyDown={(e) => handleKeyDown(e, toggleLanguage)}
              className={styles.languageToggle}
              aria-label={t('languageToggle')}
              tabIndex={0}
            >
              {language === 'pt' ? '🇺🇸' : '🇧🇷'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
              className={styles.menuToggle}
              aria-label={t('menuToggle')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              tabIndex={0}
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className={styles.mobileNavList}>
            <li>
              <button
                onClick={() => scrollToSection('home')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('home'))}
                className={styles.mobileNavLink}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {t('home')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('about'))}
                className={styles.mobileNavLink}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {t('about')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('education')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('education'))}
                className={styles.mobileNavLink}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {t('education')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('projects'))}
                className={styles.mobileNavLink}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {t('projects')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
                className={styles.mobileNavLink}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {t('contact')}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
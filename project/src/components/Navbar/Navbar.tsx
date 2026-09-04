import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Header.module.css';

type NavItem = { id: string; labelKey: string };

const navItems: NavItem[] = [
  { id: 'home', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'process', labelKey: 'processTitle' },
  { id: 'education', labelKey: 'education' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'contact', labelKey: 'contact' },
];

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const activationOffset = Math.min(window.innerHeight * 0.45, 320);
      const currentSection = sections.reduce<HTMLElement | null>((current, section) => {
        if (section.getBoundingClientRect().top <= activationOffset) return section;
        return current;
      }, null);

      if (currentSection) setActiveSection(currentSection.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  const links = navItems.map((item) => (
    <li key={item.id}>
      <a
        href={`#${item.id}`}
        className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
        aria-current={activeSection === item.id ? 'location' : undefined}
        onClick={() => setIsMenuOpen(false)}
      >
        {t(item.labelKey)}
      </a>
    </li>
  ));

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label={t('navigationLabel')}>
        <div className={styles.container}>
          <a href="#home" className={styles.logoButton} aria-label={t('home')}>
            <span className={styles.logoText}>Azambuja</span>
          </a>

          <div className={styles.desktopNav}>
            <ul className={styles.navList}>{links}</ul>
          </div>

          <div className={styles.controls}>
            <button type="button" onClick={toggleLanguage} className={styles.languageToggle} aria-label={t('languageToggle')}>
              <span className={styles.languageCode}>{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={styles.menuToggle}
              aria-label={t('menuToggle')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`} hidden={!isMenuOpen}>
          <ul className={styles.mobileNavList}>{links}</ul>
          <button type="button" className={styles.mobileClose} onClick={closeMenu}>{t('closeMenu')}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

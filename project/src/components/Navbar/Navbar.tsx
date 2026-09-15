import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = { id: string; labelKey: string };

const navItems: NavItem[] = [
  { id: 'home', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'process', labelKey: 'processTitle' },
  { id: 'education', labelKey: 'education' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'contact', labelKey: 'contact' },
];

const SCROLLED_OFFSET = 50;
const ACTIVATION_OFFSET_RATIO = 0.45;
const ACTIVATION_OFFSET_MAX = 320;
const BOTTOM_EPSILON = 2;

const desktopLinkClass =
  'relative font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 ' +
  'after:absolute after:-inset-x-2 after:-inset-y-1 after:rounded-md after:bg-cyan/10 after:opacity-0 ' +
  'after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100';
const desktopLinkIdleClass = 'text-gray-400 hover:text-cyan hover:text-glow';
const desktopLinkActiveClass = 'text-cyan text-glow hover:text-white';
const mobileLinkClass = 'block font-mono text-sm tracking-wider uppercase transition-colors hover:text-cyan';

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
      setIsScrolled(window.scrollY > SCROLLED_OFFSET);

      const isAtPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BOTTOM_EPSILON;
      const lastSection = sections[sections.length - 1];

      if (isAtPageBottom && lastSection) {
        setActiveSection(lastSection.id);
        return;
      }

      const activationOffset = Math.min(
        window.innerHeight * ACTIVATION_OFFSET_RATIO,
        ACTIVATION_OFFSET_MAX
      );
      const currentSection = sections.reduce<HTMLElement | null>((current, section) => {
        if (section.getBoundingClientRect().top <= activationOffset) return section;
        return current;
      }, null);

      if (currentSection) setActiveSection(currentSection.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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

  const handleNavLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`mx-auto w-[95%] max-w-6xl transition-all duration-300 rounded-full ${isScrolled ? 'glass-glow px-6 py-3' : 'px-2 py-2'}`}>
        <nav className="flex items-center justify-between" aria-label={t('navigationLabel')}>
          <a href="#home" className="text-xl font-bold font-sans tracking-tight text-white hover:text-cyan transition-colors" aria-label={t('home')}>
            Azambuja<span className="text-cyan">.</span>
          </a>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleNavLinkClick(item.id)}
                    className={`${desktopLinkClass} ${activeSection === item.id ? desktopLinkActiveClass : desktopLinkIdleClass}`}
                    aria-current={activeSection === item.id ? 'location' : undefined}
                  >
                    {t(item.labelKey)}
                    {activeSection === item.id && (
                      <motion.div layoutId="navbar-indicator" className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button type="button" onClick={toggleLanguage} className="font-mono text-xs text-gray-300 border border-white/10 px-2 py-1 rounded hover:border-cyan hover:text-cyan transition-colors" aria-label={t('languageToggle')}>
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="md:hidden text-gray-300 hover:text-cyan transition-colors"
              aria-label={t('menuToggle')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FiX size={24} aria-hidden="true" /> : <FiMenu size={24} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-menu" 
            className="md:hidden absolute top-full left-0 w-full p-4"
          >
            <div className="glass-glow rounded-xl p-6">
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`${mobileLinkClass} ${activeSection === item.id ? 'text-cyan text-glow' : 'text-gray-400'}`}
                      onClick={() => handleNavLinkClick(item.id)}
                    >
                      {t(item.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

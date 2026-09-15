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
                    className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 relative ${activeSection === item.id ? 'text-cyan text-glow' : 'text-gray-400 hover:text-cyan'}`}
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
                      className={`block font-mono text-sm tracking-wider uppercase transition-colors ${activeSection === item.id ? 'text-cyan text-glow' : 'text-gray-400'}`}
                      onClick={() => setIsMenuOpen(false)}
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

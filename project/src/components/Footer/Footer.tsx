import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-cyan/20 bg-[#050505] py-8 text-center" role="contentinfo">
      <div className="section-shell">
        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          © {currentYear} Victor Azambuja. {t('footerText')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
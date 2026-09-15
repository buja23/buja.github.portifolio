import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { socialLinks } from '../../data/portfolio';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleEmail = () => {
    const emailAddress = "victor.azam10@gmail.com";
    const subject = "Contato pelo Portfólio";
    const body = "Olá Victor! Vi o seu portfólio e gostaria de conversar...";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden border-t border-cyan/10"
      aria-labelledby="contact-title"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-16 relative z-10 w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan font-mono text-xs tracking-widest uppercase mb-4 block">05 / connection</span>
          <h2 id="contact-title" className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            {t('contactTitle')}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            {t('contactDescription')}
          </p>
        </motion.div>

        <div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          role="list"
          aria-label="Links para redes sociais"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : '_self'}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="glass-glow flex items-center gap-3 px-6 py-4 rounded-xl hover:bg-cyan/10 hover:border-cyan hover:-translate-y-1 transition-all duration-300 group"
              role="listitem"
              aria-label={`${link.name} - ${t('socialLink')}`}
              onClick={(e) => {
                if (link.name === 'Email') {
                  e.preventDefault();
                  handleEmail();
                }
              }}
            >
              <span className="text-gray-400 group-hover:text-cyan transition-colors" aria-hidden="true">
                {link.icon}
              </span>
              <span className="font-mono text-sm tracking-wide text-gray-200 group-hover:text-white transition-colors">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
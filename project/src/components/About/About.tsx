import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import FloatingSkills from './FloatingSkills';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="max-w-\[1440px\] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end gap-8 pb-8 border-b border-cyan/20 mb-16"
        >
          <div>
            <span className="text-cyan font-mono text-xs tracking-widest uppercase">03 / the_operator</span>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold mt-2 tracking-tight text-white">
              {t('aboutTitle')}
            </h2>
          </div>
          <span className="hidden md:inline-block font-mono text-xs text-gray-600 uppercase tracking-widest">
            {t('aboutTag')}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-block px-3 py-1 bg-cyan/10 border border-cyan/20 text-cyan font-mono text-xs w-max rounded-sm">
              {t('aboutLabel')}
            </span>

            <p className="text-2xl md:text-3xl text-white font-light leading-snug">
              Sou estudante de Análise e Desenvolvimento de Sistemas, focado em transformar lógica em produtos reais e eficientes.
            </p>

            <p className="text-gray-400 leading-relaxed">
              {t('aboutDescription')}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-sm text-cyan hover:text-white transition-colors mt-2 w-max"
            >
              {t('aboutCta')} <FiArrowUpRight className="animate-pulse" />
            </a>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-2 border-t border-white/5">
              {[
                { value: "15+", label: "Tecnologias" },
                { value: "5+", label: "Anos estudando" },
                { value: "100%", label: "Comprometimento" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-cyan text-glow">{stat.value}</span>
                  <span className="text-gray-500 text-xs font-mono mt-1 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating Skill Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-glow rounded-2xl min-h-[420px] relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 font-mono text-cyan/40 text-[10px] uppercase tracking-widest">
              skills.interactive()
            </div>
            <FloatingSkills />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
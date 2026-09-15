import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { education } from '../../data/portfolio';
import { motion } from 'framer-motion';
import { FiCalendar, FiBookOpen } from 'react-icons/fi';

const Education: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden"
      aria-labelledby="education-title"
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
            <span className="text-cyan font-mono text-xs tracking-widest uppercase">04 / trajectory</span>
            <h2 id="education-title" className="text-4xl md:text-5xl font-bold mt-2 tracking-tight text-white">
              {t('educationTitle')}
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-gray-500 font-light text-sm">
            {t('educationIntro')}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label={t('educationTitle')}
        >
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              role="listitem"
              className="group glass-glow rounded-xl p-8 flex flex-col gap-4 hover:-translate-y-1 hover:border-cyan/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Big number watermark */}
              <span className="absolute -bottom-4 -right-2 font-mono font-black text-8xl text-white/[0.03] select-none pointer-events-none">
                0{item.id}
              </span>

              {/* Period + Status */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-cyan font-mono text-xs tracking-widest">
                  <FiCalendar size={12} /> {item.period}
                </span>
                {item.id === 2 && (
                  <span className="bg-cyan/10 border border-cyan/30 text-cyan font-mono text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {t('educationCurrent')}
                  </span>
                )}
              </div>

              {/* Degree */}
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-cyan transition-colors duration-300">
                {language === 'pt' ? item.degree : item.degreeEn}
              </h3>

              {/* Institution */}
              <p className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-wider">
                <FiBookOpen size={12} className="text-cyan/50 shrink-0" />
                {language === 'pt' ? item.institution : item.institutionEn}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-auto">
                {language === 'pt' ? item.description : item.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { FiCompass, FiLayers, FiCode, FiTrendingUp } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const { t } = useLanguage();
  const steps = [
    { number: '01', icon: <FiCompass aria-hidden="true" />, title: t('processStep1Title'), description: t('processStep1Description') },
    { number: '02', icon: <FiLayers aria-hidden="true" />, title: t('processStep2Title'), description: t('processStep2Description') },
    { number: '03', icon: <FiCode aria-hidden="true" />, title: t('processStep3Title'), description: t('processStep3Description') },
    { number: '04', icon: <FiTrendingUp aria-hidden="true" />, title: t('processStep4Title'), description: t('processStep4Description') },
  ];

  return (
    <section id="process" className="relative py-32 overflow-hidden" aria-labelledby="process-title">
      <div className="max-w-\[1440px\] mx-auto px-6 md:px-16 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end gap-8 pb-8 border-b border-cyan/20 mb-12"
        >
          <div>
            <span className="text-cyan font-mono text-xs tracking-widest uppercase">04 / methodology</span>
            <h2 id="process-title" className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">{t('processTitle')}</h2>
          </div>
          <p className="hidden md:block max-w-sm text-gray-400 font-light">{t('processIntro')}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label={t('processTitle')}>
          {steps.map((step, index) => (
            <motion.article 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-glow p-8 rounded-xl flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden" 
              role="listitem" 
              key={step.number}
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute -inset-4 bg-cyan/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-12 relative z-10">
                <span className="font-mono text-cyan/30 text-3xl font-bold group-hover:text-cyan/60 transition-colors">{step.number}</span>
                <span className="text-2xl text-gray-400 group-hover:text-cyan transition-colors">{step.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

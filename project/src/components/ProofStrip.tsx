import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const ProofStrip: React.FC = () => {
  const { t } = useLanguage();
  const items = [
    ['01', t('proofStack'), 'React / Node / WordPress / TypeScript'],
    ['02', t('proofFocus'), t('proofFocusValue')],
    ['03', t('proofBase'), 'Presidente Prudente, BR'],
    ['04', t('proofStatus'), t('availableStatus')],
  ];

  return (
    <section className="border-y border-cyan/10 bg-black/40 backdrop-blur-md relative z-10" aria-label={t('proofLabel')}>
      <div className="max-w-\[1440px\] mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4">
        {items.map(([number, label, value], index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex gap-4 py-6 px-4 md:px-6 ${index !== items.length - 1 ? 'md:border-r md:border-cyan/10' : ''} ${index % 2 === 0 ? 'border-r border-cyan/10 md:border-r' : ''} ${index < 2 ? 'border-b border-cyan/10 md:border-b-0' : ''}`} 
            key={number}
          >
            <span className="text-cyan/50 font-mono text-xs">{number}</span>
            <div>
              <span className="block text-gray-500 font-mono text-[10px] uppercase tracking-wider mb-1">{label}</span>
              <strong className="block text-gray-200 font-sans text-sm font-medium">{value}</strong>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProofStrip;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProofStrip: React.FC = () => {
  const { t } = useLanguage();
  const items = [
    ['01', t('proofStack'), 'React / Node / PHP'],
    ['02', t('proofFocus'), t('proofFocusValue')],
    ['03', t('proofBase'), 'Presidente Prudente, BR'],
    ['04', t('proofStatus'), t('availableStatus')],
  ];

  return (
    <section className="proof-strip" aria-label={t('proofLabel')}>
      <div className="proof-strip__inner">
        {items.map(([number, label, value]) => (
          <div className="proof-strip__item" key={number}>
            <span className="proof-strip__number">{number}</span>
            <div><span className="proof-strip__label">{label}</span><strong>{value}</strong></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProofStrip;

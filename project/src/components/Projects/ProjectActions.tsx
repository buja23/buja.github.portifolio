import React from 'react';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectActionsProps {
  title: string;
  demoUrl: string | null;
  codeUrl: string | null;
}

const ProjectActions: React.FC<ProjectActionsProps> = ({ title, demoUrl, codeUrl }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3">
      {demoUrl ? (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t('liveDemo')} — ${title}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-dark font-mono text-xs tracking-wider transition-all duration-300 rounded-sm"
        >
          <FiArrowUpRight aria-hidden="true" />
          {t('liveDemo')}
        </a>
      ) : (
        <button
          disabled
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-gray-600 font-mono text-xs rounded-sm cursor-not-allowed"
        >
          {t('notAvailable')}
        </button>
      )}

      {codeUrl ? (
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t('sourceCode')} — ${title}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-gray-300 hover:border-cyan hover:text-cyan font-mono text-xs tracking-wider transition-all duration-300 rounded-sm"
        >
          <FiCode aria-hidden="true" />
          {t('sourceCode')}
        </a>
      ) : (
        <button
          disabled
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-gray-600 font-mono text-xs rounded-sm cursor-not-allowed"
        >
          {t('notAvailable')}
        </button>
      )}
    </div>
  );
};

export default ProjectActions;

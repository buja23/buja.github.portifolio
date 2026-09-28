import React from 'react';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Project } from './types';

interface ProjectActionsProps {
  title: string;
  demoUrl: string | null;
  codeUrl: string | null;
  codeLinks?: Project['codeLinks'];
}

const ProjectActions: React.FC<ProjectActionsProps> = ({ title, demoUrl, codeUrl, codeLinks }) => {
  const { t } = useLanguage();
  const sources = codeLinks?.length
    ? codeLinks
    : codeUrl ? [{ label: '', url: codeUrl }] : [];

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

      {sources.length > 0 ? sources.map(({ label, url }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t('sourceCode')}${label ? ` · ${label}` : ''} — ${title}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-gray-300 hover:border-cyan hover:text-cyan font-mono text-xs tracking-wider transition-all duration-300 rounded-sm"
        >
          <FiCode aria-hidden="true" />
          {t('sourceCode')}
          {label && ` · ${label}`}
        </a>
      )) : (
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

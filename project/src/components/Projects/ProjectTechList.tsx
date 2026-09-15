import React from 'react';

interface ProjectTechListProps {
  technologies: string[];
}

const ProjectTechList: React.FC<ProjectTechListProps> = ({ technologies }) => (
  <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologias utilizadas">
    {technologies.map((tech) => (
      <span
        key={tech}
        role="listitem"
        className="px-3 py-1 border border-cyan/20 bg-cyan/5 text-cyan font-mono text-[11px] rounded-sm tracking-wide"
      >
        {tech}
      </span>
    ))}
  </div>
);

export default ProjectTechList;

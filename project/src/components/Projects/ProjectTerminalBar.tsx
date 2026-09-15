import React from 'react';

interface ProjectTerminalBarProps {
  type: string;
}

const ProjectTerminalBar: React.FC<ProjectTerminalBarProps> = ({ type }) => (
  <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-black/30">
    <span className="w-3 h-3 rounded-full bg-red-500/50" />
    <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
    <span className="w-3 h-3 rounded-full bg-green-500/50" />
    <span className="ml-auto font-mono text-[10px] text-gray-500 uppercase tracking-widest">
      {type}
    </span>
  </div>
);

export default ProjectTerminalBar;

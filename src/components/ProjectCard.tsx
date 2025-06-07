'use client';
import React from 'react';
import { FaFolder, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  externalLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  externalLink,
}) => {
  return (
    <div className="bg-[#112240] rounded-md p-6 flex flex-col justify-between h-full transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-cyan-700">
      <div className="flex justify-between items-center mb-6">
        <FaFolder className="text-cyan-400 text-4xl" />
        <div className="flex items-center space-x-4">
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-cyan-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard; 
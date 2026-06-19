import { Play } from 'lucide-react';
import { forwardRef } from 'react';

export const ProjectCard = forwardRef(({ project, onClick }, ref) => (
  <article 
    ref={ref}
    className="group cursor-pointer relative"
    onClick={onClick}
  >
    <div className="relative overflow-hidden aspect-video bg-gray-900 rounded-sm">
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover transition-all duration-700 ease-out md:grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 md:bg-black/40 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
          <Play className="text-white ml-1" size={24} />
        </div>
      </div>
    </div>
    
    <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4">
      <div>
        <h2 className="text-xl md:text-2xl font-medium tracking-wide">{project.title}</h2>
        <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 tracking-wider uppercase">{project.type} • {project.year}</p>
      </div>
      <div className="md:max-w-xs">
        <p className="text-sm text-gray-400 md:text-gray-300 leading-relaxed">{project.logline}</p>
      </div>
    </div>
  </article>
));

ProjectCard.displayName = 'ProjectCard';

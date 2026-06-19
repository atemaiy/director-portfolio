import { ProjectCard } from './ProjectCard';

export const ProjectsGrid = ({ projects, onProjectClick, cardRefs }) => {
  return (
    <section id="work" className="px-4 py-16 md:py-24 md:px-12 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            ref={el => cardRefs.current[project.id] = el}
            project={project}
            onClick={(e) => onProjectClick(project, e)}
          />
        ))}
      </div>
    </section>
  );
};


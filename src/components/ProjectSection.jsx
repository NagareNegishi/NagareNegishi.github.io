import ProjectCard from './ProjectCard';
import SectionCard from './SectionCard';
import SectionHeading from './SectionHeading';

function ProjectSection({ id, title, projects }) {
    return (
        <section id={id} className="py-10 md:py-15 scroll-mt-16">
            <SectionCard>
                <SectionHeading>{title}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </SectionCard>
        </section>
    );
}

export default ProjectSection;

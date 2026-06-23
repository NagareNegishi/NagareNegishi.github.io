import { gameProjects, softwareProjects } from '../data/projects';
import SectionCard from './SectionCard';
import SectionHeading from './SectionHeading';

function Projects() {
    return (
        <section id="projects" className="py-10 md:py-15 scroll-mt-16">
            <SectionCard>
                <div className="mb-8">
                    <SectionHeading>Featured Projects</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
                        {softwareProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
                <div>
                    <SectionHeading>Game Development</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
                        {gameProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </SectionCard>
        </section>
    )
}

function ProjectCard({ project }) {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-2xl mb-[15px]">{project.title}</h3>
            <div className="mt-2.5 mb-[15px]">
                {project.tags.map((tag, index) => (
                    <span
                        className="inline-block bg-[#f0f0f0] text-[#555] py-1 px-3 my-0.5 mr-1 rounded-2xl text-[0.85em] font-medium"
                        key={index}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="mb-[15px] text-[#666]">{project.description}</p>
            <div className="flex gap-[15px]">
                {project.links.demo && (
                    <a className="text-[#0066cc] no-underline hover:underline"
                        href={project.links.demo}>{project.links.demoLabel}</a>
                )}
                {project.links.github && (
                    <a className="text-[#0066cc] no-underline hover:underline"
                        href={project.links.github}>View Code</a>
                )}
            </div>
        </div>
    );
}

export default Projects;

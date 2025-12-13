import { gameProjects, softwareProjects } from '../data/projects';

function Projects() {
    return (
        <section className="projects">
            <div className="container">
                <div className="mb-8">
                    <h2 className="mb-6">Featured Projects</h2>
                    <div className="project-grid">
                        {softwareProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="mb-6">Game Development</h2>
                    <div className="project-grid">
                        {gameProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


function ProjectCard({ project }) {
    return (
        <div className="project-card bg-white p-5 rounded-lg shadow-md">
            <h3>{project.title}</h3>
            <div className="project-tags">
                {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                ))}
            </div>
            <p>{project.description}</p>
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
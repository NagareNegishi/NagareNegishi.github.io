import { projects } from '../data/projects';

function Projects() {
    return (
        <section className="projects">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="project-grid">
                    {projects.map((project) => (
                        <div className="project-card bg-white p-5 rounded-lg shadow-md" key={project.id}>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
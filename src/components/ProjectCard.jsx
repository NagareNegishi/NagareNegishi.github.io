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

export default ProjectCard;

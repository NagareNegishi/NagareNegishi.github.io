import Tag from './Tag';

function ProjectCard({ project }) {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-2xl mb-[15px]">{project.title}</h3>
            <div className="mt-2.5 mb-[15px]">
                {/* index key is safe here, tags are static, never reordered */}
                {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </div>
            <p className="mb-[15px] text-[#666]">{project.description}</p>
            <div className="flex flex-wrap gap-[15px]">
                {project.links.filter(link => link.url).map((link, index) => (
                    <a key={index} className="text-[#0066cc] no-underline hover:underline"
                        href={link.url}>{link.label}</a>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;

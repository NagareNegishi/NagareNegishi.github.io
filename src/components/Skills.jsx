import { skills } from "../data/skills";

function Skills() {
    return (
        <section className="skills">
            <div className="container">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skillCategory, index) => (
                        <div className="skill-category" key={index}>
                            <h3>{skillCategory.category}</h3>
                            <ul>
                                {skillCategory.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{ item }</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
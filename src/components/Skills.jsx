import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <SectionHeading>Technical Skills</SectionHeading>
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
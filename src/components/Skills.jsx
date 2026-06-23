import { skills } from "../data/skills";
import SectionCard from "./SectionCard";
import SectionHeading from "./SectionHeading";

function Skills() {
    return (
        <section id="skills" className="py-10 md:py-15 scroll-mt-16">
            <SectionCard>
                <SectionHeading>Technical Skills</SectionHeading>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] mt-5">
                    {skills.map((skillCategory, index) => (
                        <div key={index}>
                            <h3 className="text-[1.3rem] mb-[15px]">{skillCategory.category}</h3>
                            <ul className="list-none">
                                {skillCategory.items.map((item, itemIndex) => (
                                    <li
                                        className="relative mb-2.5 pl-5 before:content-['•'] before:absolute before:left-0"
                                        key={itemIndex}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </section>
    )
}

export default Skills;

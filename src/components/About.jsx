import { personalInfo } from "../data/personalInfo";
import SectionHeading from "./SectionHeading";

function About() {
    return (
        <section className="about">
            <div className="max-w-[1200px] mx-auto px-5">
                <SectionHeading>About Me</SectionHeading>
                { personalInfo.about.map((paragraph, index) => (
                    <p key={index}>{ paragraph }</p>
                ))}
            </div>
        </section>
    )
}

export default About;
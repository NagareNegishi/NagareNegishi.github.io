import { personalInfo } from "../data/personalInfo";
import SectionHeading from "./SectionHeading";

function About() {
    return (
        <section className="about">
            <div className="container">
                <SectionHeading>About Me</SectionHeading>
                { personalInfo.about.map((paragraph, index) => (
                    <p key={index}>{ paragraph }</p>
                ))}
            </div>
        </section>
    )
}

export default About;
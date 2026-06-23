import { personalInfo } from "../data/personalInfo";
import SectionCard from "./SectionCard";
import SectionHeading from "./SectionHeading";

function About() {
    return (
        <section className="py-10 md:py-15 scroll-mt-16">
            <SectionCard>
                <SectionHeading>About Me</SectionHeading>
                { personalInfo.about.map((paragraph, index) => (
                    <p key={index}>{ paragraph }</p>
                ))}
            </SectionCard>
        </section>
    )
}

export default About;
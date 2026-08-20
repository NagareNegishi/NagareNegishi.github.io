import { personalInfo } from "../data/personalInfo";
import SectionCard from "./SectionCard";
import SectionHeading from "./SectionHeading";

function About() {
    return (
        <section className="py-8 md:py-12 scroll-mt-16">
            <SectionCard className="max-w-3xl">
                <SectionHeading>About Me</SectionHeading>
                <div className="flex flex-col gap-4">
                    { personalInfo.about.map((paragraph, index) => (
                        <p key={index}>{ paragraph }</p>
                    ))}
                </div>
            </SectionCard>
        </section>
    )
}

export default About;
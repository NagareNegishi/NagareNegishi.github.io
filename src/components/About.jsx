import { personalInfo } from "../data/personalInfo";

function About() {
    return (
        <section className="about">
            <div className="container">
                <h2>About Me</h2>
                { personalInfo.about.map((paragraph, index) => (
                    <p key={index}>{ paragraph }</p>
                ))}
            </div>
        </section>
    )
}

export default About;
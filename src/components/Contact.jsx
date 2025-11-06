import { personalInfo } from "../data/personalInfo";

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <h2>Contact</h2>
                <ul className="contact-list">
                    <li><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></li>
                    <li>{personalInfo.location}</li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;
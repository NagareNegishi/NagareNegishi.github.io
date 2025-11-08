import { personalInfo } from "../data/personalInfo";

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <h2>Contact</h2>
                <ul className="list-none text-center">
                    <li className="mb-[10px]">
                        <a className="text-[#0066cc] no-underline hover:underline"
                            href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                    </li>
                    <li className="mb-[10px]">{personalInfo.location}</li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;
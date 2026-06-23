import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/personalInfo'
import IconLink from './IconLink'

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className="flex justify-center">
                    <ul className="list-none flex flex-col gap-[10px] items-start">
                        <li><IconLink icon={<FaEnvelope />} href={`mailto:${personalInfo.email}`} label={personalInfo.email} /></li>
                        <li><IconLink icon={<FaGithub />} href={personalInfo.github} label="GitHub" external /></li>
                        <li><IconLink icon={<FaLinkedin />} href={personalInfo.linkedin} label="LinkedIn" external /></li>
                        <li>{personalInfo.location}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact

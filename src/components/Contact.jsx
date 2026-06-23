import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/personalInfo'
import IconLink from './IconLink'
import SectionCard from './SectionCard'
import SectionHeading from './SectionHeading'

function Contact() {
    return (
        <section id="contact" className="py-8 md:py-12 scroll-mt-16">
            <SectionCard>
                <SectionHeading>Contact</SectionHeading>
                <div className="flex justify-center">
                    <ul className="list-none flex flex-col gap-[10px] items-start">
                        <li><IconLink icon={<FaEnvelope />} href={`mailto:${personalInfo.email}`} label={personalInfo.email} /></li>
                        <li><IconLink icon={<FaGithub />} href={personalInfo.github} label="GitHub" external /></li>
                        <li><IconLink icon={<FaLinkedin />} href={personalInfo.linkedin} label="LinkedIn" external /></li>
                        <li>{personalInfo.location}</li>
                    </ul>
                </div>
            </SectionCard>
        </section>
    )
}

export default Contact

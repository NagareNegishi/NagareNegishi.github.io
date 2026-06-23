import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/personalInfo'
import IconLink from './IconLink'

function Header() {
    return (
        <header id="header" className="bg-white py-10 shadow-md text-center">
            <h1 className="text-5xl mb-5.5 font-bold">{personalInfo.name}</h1>
            <p className="text-xl mb-4">{personalInfo.title}</p>
            <div className="flex justify-center gap-6">
                <IconLink icon={<FaGithub />}   href={personalInfo.github}   label="GitHub"   external />
                <IconLink icon={<FaLinkedin />} href={personalInfo.linkedin} label="LinkedIn" external />
            </div>
        </header>
    )
}

export default Header

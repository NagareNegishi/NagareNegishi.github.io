import { personalInfo } from "../data/personalInfo";

function Header() {
    return (
        <header className="bg-white py-10 shadow-md text-center">
            <h1 className="text-4xl mb-2.5">{ personalInfo.name }</h1>
            <p>{ personalInfo.title }</p>
        </header>
    )
}

export default Header;
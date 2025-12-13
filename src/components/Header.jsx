import { personalInfo } from "../data/personalInfo";

function Header() {
    return (
        <header className="bg-white py-10 shadow-md text-center">
            <h1 className="text-5xl mb-5.5 font-bold">{ personalInfo.name }</h1>
            <p className="text-xl ">{ personalInfo.title }</p>
        </header>
    )
}

export default Header;
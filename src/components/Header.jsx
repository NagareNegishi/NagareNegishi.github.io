import { personalInfo } from "../data/personalInfo";

function Header() {
    return (
        <header>
            <h1>{ personalInfo.name }</h1>
            <p>{ personalInfo.title }</p>
        </header>
    )
}

export default Header;
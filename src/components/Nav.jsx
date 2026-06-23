function Nav() {
    return (
        // sticky: scrolls with page until it hits the top, then locks — unlike fixed which is always locked
        <nav className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="container flex gap-8 py-3">
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>
    )
}

export default Nav

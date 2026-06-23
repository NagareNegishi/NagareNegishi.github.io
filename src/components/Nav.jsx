import { useState, useEffect } from 'react'

function Nav() {
    const [active, setActive] = useState('')

    useEffect(() => {
        // rootMargin shrinks the trigger zone to a band near the top — only one section active at a time
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )

        document.querySelectorAll('section[id]').forEach(s => observer.observe(s))

        // cleanup: stop watching when Nav unmounts to avoid memory leaks
        return () => observer.disconnect()
    }, []) // empty array: run once on mount, never re-run

    return (
        // sticky: scrolls with page until it hits the top, then locks — unlike fixed which is always locked
        <nav className="nav sticky top-0 z-10 shadow-sm">
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

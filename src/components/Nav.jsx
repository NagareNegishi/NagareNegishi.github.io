import { useState, useEffect, useRef } from 'react'

function Nav() {
    const [active, setActive] = useState('')
    const ratiosRef = useRef(new Map())

    useEffect(() => {
        // threshold fires the callback at each listed ratio
        const observer = new IntersectionObserver(
            (entries) => {
                // update each section's current ratio in the map
                entries.forEach(entry => {
                    ratiosRef.current.set(entry.target.id, entry.intersectionRatio)
                })

                // pick the section with the highest visible ratio
                let maxId = ''
                let maxRatio = 0
                ratiosRef.current.forEach((ratio, id) => {
                    if (ratio > maxRatio) { maxRatio = ratio; maxId = id }
                })
                if (maxId) setActive(maxId)
            },
            { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0] }
        )

        document.querySelectorAll('section[id], header[id]').forEach(s => observer.observe(s))

        // cleanup: stop watching when Nav unmounts to avoid memory leaks
        return () => observer.disconnect()
    }, []) // empty array: run once on mount, never re-run

    return (
        // sticky: scrolls with page until it hits the top, then locks — unlike fixed which is always locked
        <nav className="nav sticky top-0 z-10 shadow-sm">
            <div className="max-w-[1200px] mx-auto px-5 flex gap-8 py-3">
                {/* About scrolls to the header */}
                <a href="#header"   className={`nav-link ${active === 'header'   ? 'nav-link-active' : ''}`}>About</a>
                <a href="#skills"   className={`nav-link ${active === 'skills'   ? 'nav-link-active' : ''}`}>Skills</a>
                <a href="#projects" className={`nav-link ${active === 'projects' ? 'nav-link-active' : ''}`}>Projects</a>
                <a href="#contact"  className={`nav-link ${active === 'contact'  ? 'nav-link-active' : ''}`}>Contact</a>
            </div>
        </nav>
    )
}

export default Nav

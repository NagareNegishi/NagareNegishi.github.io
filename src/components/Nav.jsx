import { useState, useEffect, useRef } from 'react'

// extracted so the conditional active merge stays readable per link
const linkBase = "no-underline text-[#333] font-medium py-[6px] px-[14px] rounded-md transition-colors duration-200 hover:bg-[#dce8f5] hover:animate-nav-pop"
const linkActive = "bg-[#c8dcf2] text-[#0066cc] font-semibold shadow-[0_0_2px_1px_#a0c4e0,0_0_5px_1px_rgba(138,181,221,0.2)]"

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
        <nav className="bg-[#f0f4f8] sticky top-0 z-10 shadow-sm">
            <div className="max-w-[1200px] mx-auto px-5 flex gap-8 py-3">
                {/* About scrolls to the header */}
                <a
                    href="#header"
                    className={`${linkBase} ${active === 'header' ? linkActive : ''}`}
                >
                    About
                </a>
                <a
                    href="#skills"
                    className={`${linkBase} ${active === 'skills' ? linkActive : ''}`}
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    className={`${linkBase} ${active === 'projects' ? linkActive : ''}`}
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className={`${linkBase} ${active === 'contact' ? linkActive : ''}`}
                >
                    Contact
                </a>
            </div>
        </nav>
    )
}

export default Nav

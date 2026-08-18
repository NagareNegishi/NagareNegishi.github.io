import { useState, useEffect, useRef } from 'react'

// extracted so the conditional active merge stays readable per link
const linkBase = "no-underline text-[#333] font-medium py-[6px] px-[14px] rounded-md transition-colors duration-200 hover:bg-[#dce8f5] hover:animate-nav-pop"
const linkActive = "bg-[#c8dcf2] text-[#0066cc] font-semibold shadow-[0_0_2px_1px_#a0c4e0,0_0_5px_1px_rgba(138,181,221,0.2)]"

// About uses #header because it scrolls to the header element
const links = [
    { href: '#header',   id: 'header',   label: 'About'    },
    { href: '#skills',   id: 'skills',   label: 'Skills'   },
    { href: '#products', id: 'products', label: 'Products' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#game-dev', id: 'game-dev', label: 'Games'    },
    { href: '#contact',  id: 'contact',  label: 'Contact'  },
]

function Nav() {
    const [active, setActive] = useState('')
    const [open, setOpen] = useState(false)
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
            <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between lg:justify-start py-2">
                {/* Desktop: full link row */}
                <div className="hidden lg:flex gap-8">
                    {links.map(({ href, id, label }) => (
                        <a key={id} href={href} className={`${linkBase} ${active === id ? linkActive : ''}`}>
                            {label}
                        </a>
                    ))}
                </div>

                {/* Mobile/small window: hamburger button */}
                <button
                    className="lg:hidden p-2 text-[#333] text-xl leading-none"
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {/* Dropdown for small screens */}
            {open && (
                <div className="lg:hidden bg-[#f0f4f8] border-t border-gray-200 px-5 py-2 flex flex-col gap-1">
                    {links.map(({ href, id, label }) => (
                        <a
                            key={id}
                            href={href}
                            className={`${linkBase} ${active === id ? linkActive : ''}`}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Nav

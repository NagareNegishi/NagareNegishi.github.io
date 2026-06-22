function IconLink({ icon, href, label, external = false }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            // noopener noreferrer prevents opened page from accessing window.opener
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-[#0066cc] no-underline hover:underline"
        >
            {icon}
            <span>{label}</span>
        </a>
    )
}

export default IconLink

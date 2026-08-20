const baseStyle = "mx-auto px-8 py-8 rounded-lg border border-gray-200 shadow-sm"

function SectionCard({ children, className = "max-w-[1200px]" }) {
    return (
        <div className={`${baseStyle} ${className}`}>
            {children}
        </div>
    )
}

export default SectionCard

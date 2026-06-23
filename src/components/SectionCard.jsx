const cardStyle = "max-w-[1200px] mx-auto px-8 py-8 rounded-lg border border-gray-200 shadow-sm"

function SectionCard({ children }) {
    return (
        <div className={cardStyle}>
            {children}
        </div>
    )
}

export default SectionCard

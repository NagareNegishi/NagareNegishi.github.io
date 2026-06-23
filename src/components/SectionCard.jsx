// const cardStyle = "max-w-[1200px] mx-auto px-8 bg-white rounded-xl shadow-sm"
const cardStyle = "max-w-[1200px] mx-auto px-8"

function SectionCard({ children }) {
    return (
        <div className={cardStyle}>
            {children}
        </div>
    )
}

export default SectionCard

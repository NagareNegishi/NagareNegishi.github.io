function SectionHeading({ children }) {
    return (
        <div className="text-center mb-[30px]">
            <h2 className="mb-2 text-shadow-sm">{children}</h2>
            <div className="mx-auto h-1 w-12 rounded-full bg-[#0066cc]" />
        </div>
    )
}

export default SectionHeading

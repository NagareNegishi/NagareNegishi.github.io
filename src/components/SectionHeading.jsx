function SectionHeading({ children }) {
    return (
        <div className="text-center mb-[30px]">
            <div className="inline-block relative pb-1">
                {/* !mb-0 overrides `section h2 { margin-bottom: 30px }` in index.css — remove ! once that rule is deleted in the Tailwind standardization pass */}
                <h2 className="!mb-0">{children}</h2>
                <div className="absolute bottom-0 left-[-16px] right-[-16px] h-px bg-black" />
            </div>
        </div>
    )
}

export default SectionHeading

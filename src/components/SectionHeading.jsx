function SectionHeading({ children }) {
    return (
        <div className="text-center mb-[30px]">
            <div className="inline-block relative pb-1">
                <h2 className="text-[2rem]">{children}</h2>
                <div className="absolute bottom-0 left-[-16px] right-[-16px] h-px bg-black" />
            </div>
        </div>
    )
}

export default SectionHeading

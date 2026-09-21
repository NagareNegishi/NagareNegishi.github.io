function Tag({ children }) {
    return (
        <span className="inline-block bg-[#f0f0f0] text-[#555] py-1 px-3 my-0.5 mr-1 rounded-2xl text-[0.85em] font-medium">
            {children}
        </span>
    );
}

export default Tag;

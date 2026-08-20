import { strengths } from "../data/strengths";
import SectionCard from "./SectionCard";
import SectionHeading from "./SectionHeading";

function WhatIBring() {
    return (
        <section id="what-i-bring" className="py-8 md:py-12 scroll-mt-16">
            <SectionCard className="max-w-3xl">
                <SectionHeading>What I Bring</SectionHeading>
                <ul className="flex flex-col gap-4 mt-5">
                    {strengths.map((text, index) => (
                        <li key={index} className="flex gap-3">
                            <span className="text-green-600 font-semibold shrink-0 mt-0.5">✓</span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>
        </section>
    )
}

export default WhatIBring

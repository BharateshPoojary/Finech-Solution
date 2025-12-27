import React from 'react'
import DeveloperSection from './audience/developer-section'
import { IndustrySection } from './audience/industry-section'
import Background from './common/background'
import BgPattern from './common/bg-pattern'

const TargetAudience = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white font-sans selection:bg-blue-500/30">
            <BgPattern />
            <Background />
            <div className="relative z-10 flex flex-col gap-24 py-24">
                <IndustrySection />
                <DeveloperSection />
            </div>
        </section>
    )
}

export default TargetAudience
import React from 'react'

const BgPattern = () => {
    return (
        <div>

            {/* Background Pattern - Dot Grid */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(#3b82f6 2px, transparent 2px)`,
                    backgroundSize: "28px 28px",
                }}
            />
        </div>
    )
}

export default BgPattern
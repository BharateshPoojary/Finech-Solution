import React from 'react'

const Background = () => {
    return (
        <div>

          
            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute top-0 left-[19%] w-[19%] h-[200%] rotate-[-30deg]"
                    style={{
                        background: `
    radial-gradient(
    ellipse at top left,
    
    rgba(53,102,151,0.55) 60%,
    rgba(188,206,224,0.45) 82%,
    rgba(188,206,224,0.30) 105%,
    rgba(188,206,224,0.18) 125%,
    rgba(188,206,224,0.10) 145%,
    transparent 165%
  )
    `,
                        filter: "blur(120px)",
                    }}
                />

                <div
                    className="absolute right-1 w-[25%] h-[200%] rotate-[50deg]"
                    style={{
                        background: `
      radial-gradient(
        ellipse at top left,
    rgba(53,102,151,0.55) 60%,
    rgba(188,206,224,0.45) 82%,
    rgba(188,206,224,0.30) 105%,
    rgba(188,206,224,0.18) 125%,
    rgba(188,206,224,0.10) 145%,
    transparent 165%
  )
    `,
                        filter: "blur(120px)",
                    }}
                />

                <div
                    className="absolute top-0 w-[25%] h-[200%] rotate-[100deg]"
                    style={{
                        background: `
      radial-gradient(
        ellipse at top left,
     rgba(53,102,151,0.55) 60%,
    rgba(188,206,224,0.45) 82%,
    rgba(188,206,224,0.30) 105%,
    rgba(188,206,224,0.18) 125%,
    rgba(188,206,224,0.10) 145%,
    transparent 165%
  )
    `,
                        filter: "blur(120px)",
                    }}
                />

            </div>
        </div>
    )
}

export default Background
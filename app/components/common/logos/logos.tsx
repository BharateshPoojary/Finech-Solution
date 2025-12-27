function LogoSlack() {
    return (
        <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.527 2.527 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.52 2.521h-2.522V8.834zM17.687 8.834a2.527 2.527 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.166 18.958a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.521-2.522v-2.52h2.521zM15.166 17.688a2.527 2.527 0 0 1-2.521-2.521 2.527 2.527 0 0 1 2.521-2.522h6.312A2.527 2.527 0 0 1 24 15.167a2.528 2.528 0 0 1-2.522 2.521h-6.312z" />
            </svg>
            <span className="text-xl font-bold">slack</span>
        </div>
    )
}

function LogoAmazon() {
    return (
        <div className="flex-col items-center gap-1 mt-10">
            <span className="text-xl font-bold">amazon</span>
            <svg viewBox="0 0 940 640" fill="white">

                <path
                    d="M40 80c96 72 336 72 380 16"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="24"
                    stroke-linecap="round"
                />


                <path
                    d="M400 66l38 48-28 58"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

        </div>
    )
}

function LogoDropbox() {
    return (
        <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M6 2l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zm-12 11l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM12 18l6-4 6 4-12 4-12-4 6-4 6 4z" />
            </svg>
            <span className="text-xl font-bold">Dropbox</span>
        </div>
    )
}

function LogoLoom() {
    return (
        <div className="flex items-center gap-2">
            <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
            >
                <circle cx="12" cy="12" r="3" />
                <g>
                    <rect x="11" y="1" width="2" height="9" transform="rotate(0 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(30 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(60 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(90 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(120 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(150 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(180 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(210 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(240 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(270 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(300 12 12)" />
                    <rect x="11" y="1" width="2" height="9" transform="rotate(330 12 12)" />
                </g>
            </svg>

            <span className="text-xl font-bold">loom</span>
        </div>
    )
}

function MasterCard() {
    return (
        <div className="flex flex-col items-center ">
            <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="10" cy="12" r="6" fill="#EB001B" />
                <circle cx="14" cy="12" r="6" fill="#F79E1B" />
                <path
                    d="
            M12 6
            A6 6 0 0 1 12 18
            A6 6 0 0 1 15 6
          "
                    fill="#FF5F00"
                />
            </svg>

            <span className="text-[10px] font-bold">mastercard</span>
        </div>
    )
}

export { LogoAmazon, LogoDropbox, LogoLoom, LogoSlack, MasterCard }
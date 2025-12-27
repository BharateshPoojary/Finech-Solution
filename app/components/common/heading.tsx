import BlueText from "./blue-text"

const Heading = ({ heading, description, text, type }: { heading: string, description: string, text: string, type: "dark" | "light" }) => {
    return (


        <div className="mb-20 text-center" >
            {/* Header Section */}

            <BlueText text={text} />
            {type === "light" ?
                <>
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        {heading}
                    </h1>
                    <p className="mx-auto max-w-4xl text-lg text-slate-500 leading-relaxed">
                        {description}
                    </p>
                </>
                :
                <>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                        {heading}
                    </h2>
                    <p className="text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </>
            }
        </div>

    )
}

export default Heading
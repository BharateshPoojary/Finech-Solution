import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'

const BlueButton = ({ text, arrow }: { text: string, arrow: "Right" | "UpRight" }) => {
    return (
        <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-600/20  w-fit p-2 flex items-center ">
            {text}
            {arrow === "UpRight" &&
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            }
            {arrow === "Right" &&

                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            }

        </button>
    )
}

export default BlueButton
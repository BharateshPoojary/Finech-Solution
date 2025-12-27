import { ShoppingCart, Share2, Landmark, Building2 } from "lucide-react"
import BlueText from "../common/blue-text"
import Heading from "../common/heading"

const industries = [
    {
        title: "For Marketplaces",
        description: "Seamless money movement between buyers and sellers",
        icon: ShoppingCart,
    },
    {
        title: "For SaaS Platforms",
        description: "Embed financial services into your software with minimal effort",
        icon: Share2,
    },
    {
        title: "For Fintech Startups",
        description: "Build your own banking solutions with ease",
        icon: Landmark,
    },
    {
        title: "For Enterprises",
        description: "Custom financial solutions to optimize operations at scale",
        icon: Building2,
    },
]

export function IndustrySection() {
    return (
        <section className="container mx-auto px-4 max-w-6xl">

            <Heading
                description="Our platform empowers you to handle transactions, streamline operations, and integrate financial services
                    seamlessly."
                heading="Financial Solutions for Every Industry"
                text="Who is it for?"
                type="dark"

            />


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((item, idx) => (
                    <div
                        key={idx}
                        className="group p-6 rounded-2xl bg-neutral-900 border border-neutral-800/50 hover:border-blue-500/30 transition-all duration-300 "
                    >
                        <div className="aspect-square w-full bg-neutral-800 rounded-xl mb-6 flex items-center justify-center group-hover:bg-neutral-700/50 transition-colors">
                            <item.icon className="w-10 h-10 text-white stroke-[1.5]" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

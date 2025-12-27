import React from 'react'
import BgPattern from './common/bg-pattern'
import Heading from './common/heading'
import { ArrowRight } from "lucide-react"
import BlueButton from './common/blue-button'

const testimonials = [
    {
        id: 1,
        quote:
            "Managing enterprise transactions at scale requires reliability. Finech's uptime and real-time monitoring make them the perfect partner.",
        author: "Frances Swann",
        role: "CEO of Toggl",
        company: "Toggl",
        avatar: "/man-1.jpg",
        theme: "light",
    },
    {
        id: 2,
        quote:
            "Issuing virtual and physical cards used to be complex, but with Finech, we did it in just days. Our customers love the seamless experience!",
        author: "Rhonda Rhodes",
        role: "Risk Manager at Upwork",
        company: "Upwork",
        avatar: "/man-2.jpg",
        theme: "light",
    },
    {
        id: 3,
        quote:
            "Security was our top concern, and Finech exceeded expectations. Their PCI DSS compliance and AI-powered fraud detection give us peace of mind.",
        author: "Autumn Phillips",
        role: "CTO at Spotify",
        company: "Spotify",
        avatar: "/woman-1.jpg",
        theme: "dark",
    },


    {
        id: 4,
        quote:
            "Finech helped us reduce payout times from days to minutes. Our sellers are happier than ever, and transaction disputes have dropped significantly!",
        author: "Iva Ryan",
        role: "CTO at Discord",
        company: "Discord",
        avatar: "/woman-1.jpg",
        theme: "light",
    },
    {
        id: 5,
        quote:
            "Finech has completely transformed our cross-border transactions. With seamless multi-currency support, we now process international payments 50% faster!",
        author: "Paula Mora",
        role: "CFO at Tesla",
        company: "Tesla",
        avatar: "/woman-2.jpg",
        theme: "light",
    },

    {
        id: 6,
        quote:
            "Finech's API-first approach allowed us to integrate financial services effortlessly. As our business scaled, their infrastructure adapted without friction.",
        author: "Eddie Lake",
        role: "COO at Zoom",
        company: "Zoom",
        avatar: "/man-3.jpeg",
        theme: "light",
    },
    {
        id: 7,
        quote:
            "Since integrating Finech, our transaction speed increased by 40%, and we've significantly reduced operational costs. The automation is a game changer.",
        author: "Marcus Chen",
        role: "Operations Director",
        company: "Notion",
        avatar: "/man-2.jpg",
        theme: "dark",
    },
    {
        id: 8,
        quote:
            "Embedding financial services into our SaaS product was easier than we imagined. Finech's API saved us months of development time!",
        author: "Sarah Jenkins",
        role: "Lead Engineer",
        company: "Slack",
        avatar: "/man-1.jpg",
        theme: "light",
    },
    {
        id: 9,
        quote:
            "Since integrating Finech, our transaction speed increased by 40%, and we've significantly reduced operational costs. The automation is a game changer.",
        author: "Sarah Jenkins",
        role: "Lead Engineer",
        company: "Slack",
        avatar: "/woman-1.jpg",
        theme: "light",
    },
]

const SuccessStory = () => {
    return (
        <div>
            <main className="min-h-screen bg-slate-50 relative selection:bg-blue-100 py-5 ">
                <BgPattern />
                <Heading
                    description='Join the growing list of companies that trust Finech to power their payments, banking, and financial
            services. From startups to enterprises, our platform delivers real results—faster transactions, improved
            security, and effortless scalability.'
                    heading='How Businesses Thrive with Finech'
                    text='Success Story'
                    type='light'
                />
                {/* Masonry-style Grid */}
                <div className="relative flex flex-wrap gap-6 items-center justify-center">


                    {testimonials.map((testimonial) => (
                        <div className={`w-full md:w-[48%] lg:w-[30%] ${testimonial.id === 2 ? "mt-30" : "mt-0"}`}>


                            <div
                                key={testimonial.id}
                                className={` flex flex-col items-start justify-between break-inside-avoid mb-6 h-[420px] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border ${testimonial.theme === "dark"
                                    ? "bg-[#111] text-white border-white "
                                    : "bg-white text-slate-800 border-slate-200"
                                    }`}
                            >
                                <blockquote className="text-2xl font-medium leading-snug mb-8">&quot;{testimonial.quote}&quot;</blockquote>

                                <div className="flex items-end justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.author}
                                            className="w-10 h-10 rounded-full object-cover grayscale brightness-110"
                                        />
                                        <div>
                                            <div className="font-bold text-sm">{testimonial.author}</div>
                                            <div className={testimonial.theme === "dark" ? "text-slate-400 text-xs" : "text-slate-500 text-xs"}>
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Logo Placeholder */}
                                    <div className="flex flex-col items-end opacity-60">
                                        <span className="font-black italic text-lg tracking-tighter uppercase">{testimonial.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12  relative">


                    {/* blur layer */}
                    <div className="pointer-events-none absolute inset-0 rounded-full backdrop-blur-[2px]" />
                    <div className="z-20">
                        <BlueButton arrow="Right" text="Explore Case Studies" />

                    </div>
                </div>

            </main>
        </div>
    )
}

export default SuccessStory
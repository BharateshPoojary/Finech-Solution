"use client"
import { ArrowUpRight, Mail, ArrowRight, CheckCircle2, X, Menu, Send } from "lucide-react"
import { useState } from "react"
import Background from "./common/background"
import { LogoAmazon, LogoDropbox, LogoLoom, LogoSlack } from "./common/logos/logos"
import { CurrencyBadge } from "./common/logos/currency-badge"
import BgPattern from "./common/bg-pattern"
import BlueText from "./common/blue-text"
import BlueButton from "./common/blue-button"


export default function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white font-sans selection:bg-blue-500/30">
            <BgPattern />
            <Background />
            {/* Navigation */}
            <header className="relative z-50 flex items-center justify-between px-6 py-6 mx-auto max-w-7xl lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center w-8 h-8">

                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="60,65 350,65 350,155 280,155 250,155 140,280 130,220 130,165 140,155 60,155" fill="#1E90FF" />
                            <polygon points="70,230 170,110 150,270 40,270" fill="#1E90FF" />
                            <polygon points="230,200 300,170 340,270 250,270" fill="#1E90FF" />
                        </svg>

                    </div>
                    <span className="text-xl font-bold tracking-tight">finech</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-md font-medium text-slate-100">
                    <a href="#" className="hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Solutions
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Integrations
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Pricing
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Resources
                    </a>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium hover:text-blue-400 cursor-pointer transition-colors">Login</button>
                    <BlueButton arrow="UpRight" text="Get Started" />
                </div>

                <button
                    className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </header>

            {/* Mobile Sidebar Navigation */}
            <div
                className={`fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-medium">
                    <a href="#" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </a>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>
                        Solutions
                    </a>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>
                        Integrations
                    </a>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>
                        Pricing
                    </a>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>
                        Resources
                    </a>
                    <div className="flex flex-col gap-4 w-full px-12 mt-4 items-center">
                        <button className="w-full border-white/10 text-white bg-transparent">
                            Login
                        </button>
                        <BlueButton arrow="UpRight" text="Get Started" />
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 grid gap-1 px-6 mx-auto max-w-7xl  grid-cols-1 lg:grid-cols-2 lg:px-8 lg:py-4 items-center">
                {/* Left Column */}
                <div className="max-w-2xl space-y-8">
                    <BlueText text="Finance Solution" />

                    <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl">
                        Empowering the Next Generation of Financial Infrastructure, Designed for You
                    </h1>

                    <p className="text-lg text-white leading-relaxed max-w-lg">
                        Powerful APIs and seamless integrations to help businesses move money, manage risk, and scale globally.
                    </p>

                    <div className="flex flex-row items-center gap-3 p-1.5 bg-white rounded-2xl max-w-md shadow-2xl">
                        <div className="flex items-center flex-1 w-full gap-3 px-4 py-2">
                            <Mail className="w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                placeholder="Send your email"
                                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none text-sm"
                            />
                        </div>
                        <div className="md:block hidden">
                            <BlueButton arrow="Right" text="Talk to Sales" />
                        </div>
                        <div className="md:hidden block">
                            <button className="flex items-center justify-center gap-2 w-full  px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors group">
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Partners Section */}
                    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
                        <p className="text-xl font-semibold text-slate-100 mb-2">Partners in Financial Success</p>
                        <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <LogoSlack />
                            <LogoAmazon />
                            <LogoDropbox />
                            <LogoLoom />
                        </div>
                    </div>
                </div>

                {/* Right Column - UI Composition */}
                <div className="relative h-[670px] sm:w-full w-[360px] ">
                    {/* Code Snippet Window */}
                    <div className="absolute top-0 sm:right-10 right-12  w-[300px] sm:w-[420px] bg-[#1e293b] rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform rotate-[-1deg] hover:-translate-y-1 transition-transform duration-500 px-2 py-4 z-20 before:absolute before:bottom-0 before:left-0 before:w-72 before:h-22 before:bg-gradient-to-tr before:from-slate-200 before:via-slate-50 before:opacity-50 before:blur-[10px]">
                        <div className="flex items-center gap-1.5 px-4 py-3  border-b border-white/10">
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        </div>
                        <div className="p-3 font-mono sm:text-sm text-[11px] leading-relaxed bg-white border-8  border-white/5  rounded-2xl">
                            <div className="flex gap-2">
                                <span className="text-emerald-400">GET</span>
                                <span className="text-black">/payments</span>
                            </div>
                            <div className="mt-2 text-slate-300">
                                <span className="text-black">Host:</span>
                                <span className="text-emerald-400">     api.finech.com</span>

                            </div>
                            <div className="mt-2 text-slate-300">
                                <span className="text-black">Authorization: Bearer{" "}</span>
                                <span className="text-orange-400">YOUR_API_KEY</span>
                            </div>
                            <div className="mt-2 text-slate-300">
                                <span className="text-black">Content-Type:application/</span>
                                <span className="text-sky-400">json</span>
                            </div>
                        </div>
                    </div>

                    {/* Transfer Detail Card */}
                    <div className="absolute top-[210px] sm:top-[220px] right-12 sm:left-0 sm:w-[540px] w-[320px] bg-white rounded-3xl shadow-3xl p-3 sm:p-8 transform rotate-[4deg] hover:rotate-0 transition-all duration-500">
                        <div className="flex justify-between items-start mb-8">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                                    <ArrowUpRight className="w-4 h-4" />
                                    Transfer Multi-Currency
                                </div>
                                <div className="font-semibold text-slate-900">TXN-9823745</div>
                                <div className="text-xs text-slate-400 font-medium">Business Payment</div>
                            </div>
                            <div className="text-right">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-700 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 z-10 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    Success
                                </div>
                                <div className="mt-2 text-xs text-slate-400">March 12, 2025</div>
                                <div className="text-[10px] text-slate-400">14:32 UTC</div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between mb-4 sm:mb-8 px-2">
                            <div className="w-3 h-3 rounded-full bg-slate-900 z-10 shadow-lg shadow-black/20" />
                            <div className="absolute left-4 w-1/2 h-0.5 bg-slate-100" />
                            <div className="absolute left-4 w-1/2 h-0.5 bg-emerald-500" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500 z-10 absolute  right-32 sm:right-52 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                            <div className="space-y-2">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Source</div>
                                <div>
                                    <div className="text-md text-[12px] sm:text-2xl font-bold text-slate-900">
                                        $1,250.00 <CurrencyBadge
                                            code="USD"
                                            flag={
                                                <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full overflow-hidden shadow-sm">
                                                    <rect width="24" height="24" fill="#fff" />
                                                    <path fill="#002868" d="M0 0h12v12H0z" />
                                                    <path
                                                        fill="#bf0a30"
                                                        d="M0 0h24v1.846H0zm0 3.692h24v1.846H0zm0 3.693h24v1.846H0zm0 3.692h24v1.846H0zm0 3.692h24v1.846H0zm0 3.692h24v1.847H0zm0 3.692h24V24H0z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M1.333 1.333l.48 1.474.48-1.474H1.333zm2.667 0l.48 1.474.48-1.474H4zm2.667 0l.48 1.474.48-1.474H6.667zm2.666 0l.48 1.474.48-1.474H9.333z"
                                                    />
                                                </svg>
                                            }
                                        />
                                    </div>
                                    <div className="text-xs font-semibold text-slate-900 mt-1">Michael Johnson</div>
                                    <div className="text-[7px] sm:text-[10px] text-slate-400">JPMorgan Chase • 5678 9012 3456</div>
                                </div>
                            </div>
                            <div className="space-y-2  ">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Destination</div>
                                <div>
                                    <div className="text-[12px] sm:text-2xl font-bold text-slate-900">
                                        ¥187,500<CurrencyBadge
                                            code="JPY"
                                            flag={
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className="w-4 h-4 rounded-full overflow-hidden border border-slate-100 shadow-sm"
                                                >
                                                    <rect width="24" height="24" fill="#fff" />
                                                    <circle cx="12" cy="12" r="7" fill="#bc002d" />
                                                </svg>
                                            }
                                        />
                                    </div>
                                    <div className="text-xs font-semibold text-slate-900 mt-1">Hiroshi Tanaka</div>
                                    <div className="text-[7px] sm:text-[10px] text-slate-400">Mitsubishi UFJ Bank • 9876 5432 1098</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Metric Card 1 */}
                    <div className="absolute bottom-34 sm:bottom-1 sm:right-[300px] z-10 sm:w-48  bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 sm:p-6 transform rotate-[6deg] shadow-2xl hover:rotate-0 transition-all duration-500">
                        <div className="flex items-center gap-1.5 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <div className="bg-white rounded-xl p-2 sm:p-4 shadow-inner">
                            <div className="text-4xl font-bold text-slate-900">0.01%</div>
                            <div className="text-xs font-medium text-slate-400 mt-1">Failure Rate</div>
                        </div>
                    </div>

                    {/* Floating Metric Card 2 */}
                    <div className="absolute bottom-28 sm:bottom-0 right-[70px] sm:right-[110px] sm:w-48  backdrop-blur-xl  rounded-2xl p-2 sm:p-6 shadow-blue-500/20 shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 ">
                        <div className="flex items-center gap-1.5 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-inner">
                            <div className="text-4xl font-bold text-slate-900">95%</div>
                            <div className="text-xs font-medium text-slate-400 mt-1">Faster Processing</div>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}




import { ArrowRight, Code2, Layers, ShieldCheck } from "lucide-react"
import BlueText from "../common/blue-text"
import BlueButton from "../common/blue-button"
import Heading from "../common/heading"

const DeveloperSection = () => {
    return (
        <section className="relative overflow-hidden">


            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">

                        <div className="space-y-4">
                            <BlueText text="API & Developer" />
                            <div className="max-w-xl md:max-w-3xl lg:max-w-4xl">
                                <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-pretty">
                                    Seamless Integration with Powerful Developer Tools
                                </h2>

                                <p className="mt-4 text-neutral-400 leading-relaxed text-pretty">
                                    Integrate Fintech effortlessly with our developer-friendly APIs, designed for speed,
                                    security, and scalability.
                                </p>
                            </div>

                        </div>

                        <BlueButton text="Explore API Docs" arrow="Right" />

                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-neutral-300">
                                <Code2 className="w-5 h-5 text-neutral-500" />
                                <span className="font-medium">RESTful APIs & Webhooks</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-300">
                                <Layers className="w-5 h-5 text-neutral-500" />
                                <span className="font-medium">SDKs for Multiple Languages</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-300">
                                <ShieldCheck className="w-5 h-5 text-neutral-500" />
                                <span className="font-medium">Sandbox for Testing</span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Code Window Container */}
                        {/* <div className="absolute bottom-34 sm:bottom-1 sm:right-[300px] z-10 sm:w-48  bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 sm:p-6 transform rotate-[6deg] shadow-2xl hover:rotate-0 transition-all duration-500"></div> */}
                        <div className="bg-white/10 w-full  px-4 pb-4 rounded-2xl backdrop-blur-xl border border-white/20">
                            <div className="rounded-[10px] overflow-hidden shadow-inner">
                                {/* Window Header */}
                                <div className="px-4 py-3  flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                                    </div>
                                </div>
                                {/* Window Content */}
                                <div className="p-6 overflow-x-auto bg-white rounded-xl">
                                    <pre className="text-[13px] leading-6 font-mono whitespace-pre-wrap break-all">
                                        <code>
                                            <span className="text-green-600 font-bold">GET</span>{" "}
                                            <span className="text-black">/transactions/</span>
                                            <span className="text-blue-500">txn_67890</span>
                                            {"\n"}
                                            <span className="text-neutral-900">Host:</span>{" "}
                                            <span className="text-green-500">api.finech.com</span>
                                            {"\n"}
                                            <span className="text-neutral-900">Authorization: Bearer{" "}</span>
                                            <span className="text-orange-500">YOUR_API_KEY</span>
                                            {"\n"}
                                            <span className="text-black">Content-Type: application/</span>
                                            <span className="text-blue-400">json</span>
                                            {"\n"}
                                            <span className="text-black">Accept: application/</span>
                                            <span className="text-blue-400">json</span>
                                            {"\n"}
                                            <span className="text-black">User-Agent: PaymentClient/</span>
                                            <span className="text-blue-400">1.0</span>
                                            {"\n"}
                                            <span className="text-black">Connection:</span>{" "}
                                            <span className="text-green-500">keep-alive</span>
                                            {"\n"}
                                            <span className="text-black">X-Request-ID:</span>{" "}
                                            <span className="text-blue-400">req_123456789</span>
                                            {"\n"}
                                            <span className="text-black">X-Client-Version: 1.2.3</span> {"\n"}
                                            <span className="text-black">Referer:</span>{" "}
                                            <span className="text-green-500">https://dashboard.paymentprovider.com</span>
                                            {"\n"}
                                            <span className="text-black">Cache-Control:</span>{" "}
                                            <span className="text-green-500">no-cache</span>
                                            {"\n"}
                                            <span className="text-black">Accept-Encoding:</span>{" "}
                                            <span className="text-orange-500">gzip</span><span className="text-black">,</span> <span className="text-orange-500">deflate</span><span className="text-black">,</span>{" "}
                                            <span className="text-orange-500">br</span>
                                            {"\n"}
                                            <span className="text-black">Accept-Language:</span>{" "}
                                            <span className="text-orange-500">en-US</span>,
                                            <span className="text-orange-500">en;q=</span>
                                            <span className="text-blue-400">0.9</span>
                                            {"\n"}
                                            <span className="text-black">X-Forwarded-For:</span>{" "}
                                            <span className="text-blue-400">192.168.1.100</span>
                                            {"\n"}
                                            <span className="text-black">X-Api-Signature:</span>{" "}
                                            <span className="text-orange-500">sha256=abcdef1234567890</span>
                                            {"\n"}
                                            <span className="text-black">DNT: 1</span> {"\n"}
                                            <span className="text-black">Pragma: no-cache</span> {"\n"}
                                            <span className="text-black">X-Device-ID:</span>{" "}
                                            <span className="text-blue-400">device_987654321</span>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeveloperSection
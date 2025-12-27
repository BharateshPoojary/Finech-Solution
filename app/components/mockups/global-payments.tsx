import { ArrowRight } from "lucide-react"
import BgPattern from "../common/bg-pattern"

const conversions = [
    { from: "$1,237.58", fromCode: "USD", fromFlag: "🇺🇸", to: "€1,130.32", toCode: "EUR", toFlag: "🇪🇺", active: true },
    { from: "$1,237.58", fromCode: "USD", fromFlag: "🇺🇸", to: "£1972.29", toCode: "GBP", toFlag: "🇬🇧" },
    { from: "$1,237.58", fromCode: "USD", fromFlag: "🇺🇸", to: "¥186,1.31", toCode: "JPY", toFlag: "🇯🇵" },
    { from: "$1,237.58", fromCode: "USD", fromFlag: "🇺🇸", to: "A$1,884.7", toCode: "AUD", toFlag: "🇦🇺" },
]

export function GlobalPaymentsMockup() {
    return (
        <>

            <BgPattern />
            <div className="flex w-full max-w-[340px] flex-col gap-3 bg-white z-10 border p-2 rounded-md shadow-xl">
                {conversions.map((item, i) => (
                    <div
                        key={i}
                        className={cn(
                            "flex items-center justify-between rounded-xl border p-3 shadow-sm transition-all ",
                            item.active ? "border-slate-200 bg-slate-900 text-white" : "border-slate-100 bg-white text-slate-900",
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">{item.from}</span>
                                <span className={cn("text-[10px] uppercase", item.active ? "text-slate-400" : "text-slate-500")}>
                                    {item.fromFlag} {item.fromCode}
                                </span>
                            </div>
                        </div>

                        <div
                            className={cn(
                                "flex h-6 w-6 items-center justify-center rounded-full border",
                                item.active ? "bg-blue-600 border-blue-500" : "bg-slate-50 border-slate-100",
                            )}
                        >
                            <ArrowRight className={cn("h-3 w-3", item.active ? "text-white" : "text-slate-400")} />
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="text-sm font-medium">{item.to}</span>
                            <span className={cn("text-[10px] uppercase", item.active ? "text-slate-400" : "text-slate-500")}>
                                {item.toCode} {item.toFlag}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}

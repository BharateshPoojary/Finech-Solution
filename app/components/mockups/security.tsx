import { Lock, ShieldAlert, Monitor, Scale, ShieldCheck } from "lucide-react"
import BgPattern from "../common/bg-pattern"

export function SecurityMockup() {
    const items = [
        { icon: <Lock className="h-5 w-5" />, label: "Tokenization", active: true },
        { icon: <div className="text-xs font-bold border rounded px-1">|**</div>, label: "MFA" },
        { icon: <ShieldAlert className="h-5 w-5" />, label: "Fraud Detection" },
        { icon: <ShieldCheck className="h-5 w-5" />, label: "PCI DSS Compliance" },
        { icon: <Scale className="h-5 w-5" />, label: "Dispute Protection" },
        { icon: <Monitor className="h-5 w-5" />, label: "Monitoring" },
    ]

    return (
        <>

            <BgPattern />
            <div className="bg-white border p-4 rounded-md  grid grid-cols-2 gap-3 w-full max-w-[280px] z-10 shadow-xl">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={cn(
                            "flex flex-col items-center justify-center gap-2 rounded-xl border p-4 transition-all shadow-sm",
                            item.active ? "bg-slate-900 text-white border-slate-800" : "bg-white text-slate-400 border-slate-100",
                        )}
                    >
                        <div className={cn(item.active ? "text-white" : "text-slate-900")}>{item.icon}</div>
                        <span className="text-[10px] font-medium text-center whitespace-nowrap">{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}

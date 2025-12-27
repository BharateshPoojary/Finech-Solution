interface CurrencyBadgeProps {
    code: string
    flag: React.ReactNode

}

export function CurrencyBadge({ code, flag }: CurrencyBadgeProps) {
    return (
        <div
            className={
                "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg border border-slate-100 bg-white shadow-sm"
            }
        >
            <span className="shrink-0">{flag}</span>
            <span className="text-[11px] font-bold text-slate-500 tracking-tight">{code}</span>
        </div>
    )
}
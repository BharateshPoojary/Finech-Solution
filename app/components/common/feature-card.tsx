import type { ReactNode } from "react"
import { cn } from "../../lib/utils"

interface FeatureCardProps {
    icon: ReactNode
    title: string
    description: string
    children: ReactNode
    className?: string
}

export function FeatureCard({ icon, title, description, children, className }: FeatureCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col rounded-3xl border border-border bg-white p-2 sm:p-8 shadow-sm overflow-hidden",
                className,
            )}
        >
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 border border-slate-100">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mb-8 text-slate-500 leading-relaxed max-w-[90%]">{description}</p>
            <div className="relative mt-auto">
                {/* Dot background for the mockup area */}
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none" />
                <div className="relative z-10 py-8 flex items-center justify-center">{children}</div>
            </div>
        </div>
    )
}

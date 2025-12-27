import BgPattern from "../common/bg-pattern"

export function ScalabilityMockup() {
    const data = [
        { cat: "Payments", api: "POST /payments", pur: "Process transactions at scale" },
        { cat: "Multi-Currency", api: "GET /exchange-rates", pur: "Access live FX rates for 100+ currencies" },
        { cat: "User Management", api: "POST /users", pur: "Create & manage customers dynamically" },
        { cat: "Security", api: "POST /fraud-detection", pur: "AI-powered fraud detection for safe scaling" },
        { cat: "Scalability", api: "GET /server-status", pur: "Monitor infrastructure health & uptime" },
        { cat: "Custom Workflows", api: "POST /webhooks", pur: "Automate workflows with real-time webhooks" },
    ]

    return (
        <>
            <BgPattern />

            <div className="w-full max-w-[550px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-lg p-2 sm:p-4 z-10 ">
                <div className="rounded-t-md grid grid-cols-[1fr_1.2fr_1.8fr] bg-slate-900 px-4 py-2 text-[10px] font-bold uppercase text-white">
                    <div >Category</div>
                    <div>API Example</div>
                    <div>Purpose</div>
                </div>
                <div className="border rounded-b-md divide-y divide-x ">
                    {data.map((row, i) => (
                        <div key={i} className="grid grid-cols-[1fr_1.2fr_1.8fr] px-4 py-2.5 items-center ">
                            <div className="text-[11px] font-medium text-slate-600">{row.cat}</div>
                            <div className="flex items-center bg-slate-100 w-fit px-2 rounded-md">
                                <span className={`rounded  px-1.5 py-0.5 text-[10px] font-bold ${row.api.split(" ")[0] === "GET" ? "text-green-600" : "text-orange-600"}  mr-1.5`}>
                                    {row.api.split(" ")[0]}
                                </span>
                                <span className="text-[8px] font-mono text-slate-400">{row.api.split(" ")[1]}</span>
                            </div>
                            <div className="text-[9px] text-black">{row.pur}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

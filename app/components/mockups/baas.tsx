import BgPattern from "../common/bg-pattern";
import { MasterCard } from "../common/logos/logos";


export function BaasMockup() {
    return (
        <>
            <BgPattern />

            <div className="grid grid-cols-2 sm:max-w-4xl  gap-2 items-center z-10">
                <div className="flex-1 h-full space-y-10 rounded-xl border border-slate-100 bg-white p-2 sm:p-4 shadow-xl sm:max-w-[240px]">
                    {/* Dark Card */}
                    <div className="sm:h-36 sm:w-52 rounded-xl bg-black p-4 relative overflow-hidden shadow-lg border border-slate-800">
                        <div className="h-4 w-12 rounded-full bg-slate-700/50 mb-4" />
                        <div className="h-6 w-8 rounded bg-slate-700/50 mb-2" />
                        <div className="flex gap-x-2">
                            {[...Array(4)].map((_, idx) => (
                                <div key={idx} className="h-3 w-10 rounded bg-slate-700/50" />
                            ))}
                        </div>
                        <div className="flex gap-2 ">

                            <div>

                                <div className="h-2 w-8 rounded bg-slate-700/50 mt-2" />
                                <div className="h-3 w-12 rounded bg-slate-700/50 mt-1" />
                            </div>
                            <div>

                                <div className="h-2 w-8 rounded bg-slate-700/50 mt-2" />
                                <div className="h-3 w-12 rounded bg-slate-700/50 mt-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 h-8" >
                            <MasterCard />
                        </div>
                    </div>
                    {/* Light Card */}
                    <div className="sm:h-32 sm:w-52 rounded-xl bg-slate-50 p-4 relative overflow-hidden shadow-sm border border-slate-200">
                        <div className="h-4 w-12 rounded-full bg-slate-400/50 mb-4" />
                        <div className="h-6 w-8 rounded bg-slate-400/50 mb-2" />
                        <div className="flex gap-x-2">
                            {[...Array(4)].map((_, idx) => (
                                <div key={idx} className="h-3 w-10 rounded bg-slate-400/50" />
                            ))}
                        </div>
                        <div className="flex gap-2 ">

                            <div>

                                <div className="h-2 w-8 rounded bg-slate-400/50 mt-2" />
                                <div className="h-3 w-12 rounded bg-slate-400/50 mt-1" />
                            </div>
                            <div>

                                <div className="h-2 w-8 rounded bg-slate-400/50 mt-2" />
                                <div className="h-3 w-12 rounded bg-slate-400/50 mt-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-1 right-4 h-4 w-12 bg-blue-600/10 rounded-sm flex items-center justify-center">
                            <span className="text-xl italic font-bold text-blue-800">VISA</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 rounded-xl border border-slate-100 bg-white p-4 shadow-xl max-w-[240px]">
                    <h4 className="text-[10px] font-bold uppercase text-slate-700 mb-3">Create New Card</h4>
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-[9px] font-medium text-slate-700">Cardholder Name</label>
                            <div className="h-7 w-full rounded border border-slate-100 bg-slate-50 px-2 text-[10px] flex items-center text-slate-400">
                                Cardholder Name
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-medium text-slate-700">Card Type</label>
                            <div className="h-7 w-full rounded border border-slate-100 bg-slate-50 px-2 text-[10px] flex items-center justify-between text-slate-900 font-medium">
                                Virtual
                                <span className="text-[10px] text-slate-400">▼</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-medium text-slate-700">Card Network</label>
                            <div className="h-7 w-full rounded border border-slate-100 bg-slate-50 px-2 text-[10px] flex items-center justify-between text-slate-900 font-medium">
                                Visa
                                <span className="text-[10px] text-slate-400">▼</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-medium text-slate-700">Currency</label>
                            <div className="h-7 w-full rounded border border-slate-100 bg-slate-50 px-2 text-[10px] flex items-center justify-between text-slate-900 font-medium">
                                <span className="flex items-center gap-1">🇺🇸 USD</span>
                                <span className="text-[10px] text-slate-400">▼</span>
                            </div>
                        </div>
                        <button className=" rounded-md h-8 w-full bg-blue-600 text-[10px] hover:bg-blue-700">Create Card Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

'use client';

export default function BrunswickPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-40 px-8 md:px-20 lg:px-32 bg-background relative border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto text-left space-y-12 relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">Roots & River Yoga</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em]">
                        BRUNSWICK
                    </h1>
                    <p className="text-lg md:text-xl text-charcoal/50 leading-relaxed max-w-2xl font-sans lowercase italic">
                        Slow Vinyasa Flow on Tuesdays from 12:00pm - 1:00pm.
                    </p>
                </div>
            </section>

            <section className="py-48 px-8 md:px-20 lg:px-32 bg-bone border-b border-charcoal/5 min-h-[50vh]">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Class Info Card */}
                    <div className="bg-white p-16 md:p-24 border border-charcoal/10 flex flex-col justify-between group hover:border-charcoal/20 transition-all duration-700 h-full">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-serif text-charcoal uppercase tracking-widest">Slow Vinyasa Flow</h3>
                            <div className="space-y-6 pt-4 text-charcoal/60 text-sm leading-relaxed lowercase italic">
                                <p>I offer the class:</p>
                                <ul className="space-y-4 list-none pl-0">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-sage rounded-full flex-shrink-0"></span>
                                        In-person
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-sage rounded-full flex-shrink-0"></span>
                                        Live via Zoom
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-sage rounded-full flex-shrink-0"></span>
                                        Or you can receive a link to a recording good for 6 days!
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-16">
                            <a
                                href="https://www.rootsandriveryoga.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-5 bg-charcoal text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sage hover:text-charcoal transition-all"
                            >
                                Roots & River Yoga
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

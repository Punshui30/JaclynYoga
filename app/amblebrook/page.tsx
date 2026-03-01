'use client';

import Link from 'next/link';

export default function AmblebrookPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-40 px-8 md:px-20 lg:px-32 bg-background relative border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto text-left space-y-12 relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">Residents Only</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em]">
                        AMBLEBROOK
                    </h1>
                    <p className="text-lg md:text-xl text-charcoal/50 leading-relaxed max-w-2xl font-sans lowercase italic">
                        Exclusive wellness services and private instruction for Amblebrook residents.
                    </p>
                </div>
            </section>

            <section className="py-48 px-8 md:px-20 lg:px-32 bg-bone border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Booking Card */}
                    <div className="bg-white p-16 md:p-24 border border-charcoal/10 flex flex-col justify-between group hover:border-charcoal/20 transition-all duration-700">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-serif text-charcoal uppercase tracking-widest">Private Sessions</h3>
                            <p className="text-charcoal/50 text-sm leading-relaxed lowercase italic">
                                group classes are available for booking via the homeowner portal. Private work can be booked at this link.
                            </p>
                        </div>
                        <div className="pt-16">
                            <a
                                href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-5 bg-charcoal text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sage hover:text-charcoal transition-all"
                            >
                                Book Session
                            </a>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="bg-white p-16 md:p-24 border border-charcoal/10 flex flex-col justify-between group hover:border-charcoal/20 transition-all duration-700">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-serif text-charcoal uppercase tracking-widest">Community Classes</h3>
                            <div className="space-y-6 pt-4">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30">Monday</p>
                                    <p className="text-charcoal/60 text-sm lowercase italic">12:00-12:50pm • Chair Yoga</p>
                                    <p className="text-charcoal/60 text-sm lowercase italic">1:15-2:30pm • Yin Yoga</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30">Wednesday</p>
                                    <p className="text-charcoal/60 text-sm lowercase italic">10:15-11:30am • Gentle Yoga</p>
                                    <p className="text-charcoal/60 text-sm lowercase italic">12:00-12:50pm • Chair Yoga</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30">Friday</p>
                                    <p className="text-charcoal/60 text-sm lowercase italic">10:15-11:30am • Slow Flow Yoga</p>
                                    <p className="text-charcoal/60 text-sm lowercase italic">12:00-12:50pm • Chair Yoga</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16">
                            <p className="text-[10px] text-charcoal/40 font-serif italic mb-6">
                                Book via the Resident Portal or Movement Studio.
                            </p>
                            <Link
                                href="/schedule"
                                className="inline-block text-[10px] uppercase tracking-[0.5em] font-bold text-charcoal/40 hover:text-charcoal transition-all border-b border-charcoal/10 pb-2"
                            >
                                View Full Schedule
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 px-8 md:px-20 lg:px-32 bg-background border-b border-charcoal/5">
                <div className="max-w-[1000px] mx-auto w-full">
                    <div className="w-full aspect-video relative border border-charcoal/10 bg-white p-2 md:p-4">
                        <div className="w-full h-full relative">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/BMDavJ1INb4?si=EnBw2HFCO25i-FMk"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

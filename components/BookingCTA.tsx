'use client';

import Link from 'next/link';

export function BookingCTA() {
    return (
        <section className="py-60 md:py-80 bg-stone px-8 md:px-20 lg:px-32 border-t border-charcoal/10 relative overflow-hidden luxury-rhythm">
            <div className="max-w-4xl mx-auto text-center space-y-20 relative z-10">
                <div className="space-y-6 flex flex-col items-center">
                    <p className="micro-eyebrow text-charcoal/40">Inquiry & Reservation</p>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-tight tracking-[0.08em] uppercase">
                    SECURE YOUR PRIVATE <br />
                    RESTORATION SESSION
                </h2>

                <p className="text-base md:text-lg text-charcoal/50 font-sans leading-relaxed max-w-xl mx-auto lowercase italic tracking-wide border-t border-charcoal/5 pt-12">
                    Availability is restricted to maintain the absolute integrity of clinical oversight. Professional and clinical inquiries only.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-16">
                    <Link
                        href="/booking"
                        className="px-16 py-7 bg-charcoal text-stone font-sans text-[10px] uppercase tracking-[0.6em] font-bold transition-all hover:bg-sage hover:text-charcoal shadow-sm"
                    >
                        Schedule Private
                    </Link>
                    <Link
                        href="/booking#contact"
                        className="px-16 py-7 border border-charcoal/20 text-charcoal/60 font-sans text-[10px] uppercase tracking-[0.6em] font-bold transition-all hover:bg-charcoal/5 hover:text-charcoal"
                    >
                        Direct Inquiry
                    </Link>
                </div>
            </div>

            {/* ARCHITECTURAL MOTIF */}
            <div className="absolute top-0 right-[41.66%] w-[1px] h-full bg-charcoal/5 pointer-events-none" />
        </section>
    );
}

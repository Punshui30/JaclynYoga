import Link from 'next/link';

export function BookingCTA() {
    return (
        <section className="py-60 bg-bone px-8 md:px-20 lg:px-32 border-t border-charcoal/10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
                <div className="space-y-6 flex flex-col items-center">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">Inquiry</p>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif text-charcoal leading-none tracking-[0.05em]">
                    SECURE YOUR PRIVATE <br />
                    RESTORATION SESSION
                </h2>
                <p className="text-base text-charcoal/50 font-sans leading-relaxed max-w-lg mx-auto lowercase italic">
                    Availability is restricted to maintain the integrity of clinical oversight. professional inquiries only.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 pt-8">
                    <Link
                        href="/booking"
                        className="px-14 py-6 bg-charcoal text-sage font-sans text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-sage hover:text-charcoal"
                    >
                        Schedule Private
                    </Link>
                    <Link
                        href="/booking#contact"
                        className="px-14 py-6 border border-charcoal/10 text-charcoal/50 font-sans text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-charcoal/5 hover:text-charcoal"
                    >
                        Portfolio Inquiries
                    </Link>
                </div>
            </div>
        </section>
    );
}

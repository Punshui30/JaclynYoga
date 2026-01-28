import Link from 'next/link';

export function BookingCTA() {
    return (
        <section className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <div className="space-y-6 flex flex-col items-center">
                    <h3 className="text-[10px] uppercase tracking-[0.4em] text-primary font-sans font-bold">Start Your Journey</h3>
                    <div className="hairline w-12" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
                    Ready to reclaim <br />
                    <span className="italic text-secondary">your innate balance?</span>
                </h2>
                <p className="text-lg text-charcoal-soft font-sans leading-relaxed max-w-2xl mx-auto">
                    Limited private sessions are available. Weave clinical wisdom and mindful movement into your daily life.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                    <Link
                        href="/booking"
                        className="px-10 py-4 bg-primary text-white text-[11px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-primary/90 transition-all rounded-md shadow-sm"
                    >
                        Book a Session
                    </Link>
                    <Link
                        href="/booking#contact"
                        className="px-10 py-4 border border-primary text-primary text-[11px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-primary/5 transition-all rounded-md"
                    >
                        Ask a Question
                    </Link>
                </div>
            </div>

            {/* Branding Detail: Echo of Logo Arc */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] border-b border-warm-gray/10 rounded-b-full -z-0 pointer-events-none" />
        </section>
    );
}

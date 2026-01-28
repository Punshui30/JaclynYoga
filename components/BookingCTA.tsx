import Link from 'next/link';

export function BookingCTA() {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-semibold mb-8">Take the First Step</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-10 leading-tight">
                    Begin Your <span className="italic text-[#C6A38B]">Healing Journey</span>
                </h2>
                <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
                    Whether you're seeking clinical yoga therapy, a restorative group class, or energy-based support, I am here to guide you with compassion and expertise.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        href="/booking"
                        className="px-10 py-4 bg-[#9FAF9A] text-white text-[11px] uppercase tracking-widest font-sans font-bold hover:bg-[#9FAF9A]/90 transition-all rounded-md shadow-sm"
                    >
                        Book a Session
                    </Link>
                    <a
                        href="mailto:hello@jaclynmuir.com"
                        className="px-10 py-4 border border-[#9FAF9A] text-[#9FAF9A] text-[11px] uppercase tracking-widest font-sans font-bold hover:bg-[#9FAF9A]/5 transition-all rounded-md inline-block shadow-sm"
                    >
                        Ask a Question
                    </a>
                </div>
            </div>
        </section>
    );
}

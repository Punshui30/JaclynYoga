import Link from 'next/link';

export function BookingCTA() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Iridescent background contrast */}
            <div className="absolute inset-0 iridescent-bg opacity-10 -z-10" />

            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-8">Take the First Step</h3>
                <h2 className="text-5xl md:text-6xl font-serif text-primary mb-10 leading-tight">
                    Begin Your <span className="italic text-accent">Healing Journey</span>
                </h2>
                <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                    Whether you're seeking clinical yoga therapy, a restorative group class, or energy-based support, I am here to guide you with compassion and expertise.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        href="/booking"
                        className="px-12 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 liquid-button"
                    >
                        Book a Session
                    </Link>
                    <a
                        href="mailto:hello@jaclynmuir.com"
                        className="px-12 py-5 border border-primary text-primary text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm inline-block liquid-button"
                    >
                        Ask a Question
                    </a>
                </div>
            </div>
        </section>
    );
}

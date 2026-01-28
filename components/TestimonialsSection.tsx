'use client';

const testimonials = [
    {
        quote: "Jaclyn's approach to yoga therapy is tanto compassionate and deeply intelligent. She helped me find a sense of resilience I didn't know I had.",
        author: "Elena R.",
        role: "Private Yoga Client"
    },
    {
        quote: "The reiki sessions have been a cornerstone of my nervous system support. I leave every encounter feeling grounded and remarkably clear.",
        author: "David M.",
        role: "Reiki & Wellness Client"
    },
    {
        quote: "As someone who struggled with movement as I aged, Jaclyn's gentle and chair yoga classes have given me back my confidence and mobility.",
        author: "Margaret S.",
        role: "Gentle Yoga Student"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-32 bg-background px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-8">
                    <div className="space-y-6 flex flex-col items-center">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-primary font-sans font-bold">Community Voice</h3>
                        <div className="hairline w-12" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
                        Kind words from <br />
                        <span className="italic text-secondary">the community</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-12 rounded-2xl shadow-[0_15px_40px_-20px_rgba(43,43,43,0.05)] border border-warm-gray-light hover:border-primary/30 transition-all duration-700 group flex flex-col"
                        >
                            <div className="text-secondary mb-10 opacity-30 text-5xl font-serif">
                                “
                            </div>
                            <p className="text-charcoal-soft font-serif text-xl italic leading-relaxed mb-12 flex-grow">
                                {testimonial.quote}
                            </p>
                            <div className="pt-8 hairline mt-auto">
                                <p className="font-sans font-bold text-[11px] uppercase tracking-[0.25em] text-primary">
                                    {testimonial.author}
                                </p>
                                <p className="text-[9px] uppercase tracking-widest text-charcoal/40 font-sans mt-2">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Logo geometry repetition: Subtle arc */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] border-t border-warm-gray/10 rounded-[100%] -z-10" />
        </section>
    );
}

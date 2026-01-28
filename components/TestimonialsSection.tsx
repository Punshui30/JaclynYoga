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
        <section className="py-40 bg-linen px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-28 space-y-10">
                    <div className="space-y-6 flex flex-col items-center">
                        <p className="micro-eyebrow text-primary">Community Voice</p>
                        <div className="hairline w-8 opacity-40" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-none">
                        Kind words from <br />
                        <span className="italic text-secondary/90 text-3xl lg:text-4xl">the community</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-14 rounded-[2rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.06)] border border-stone/20 hover:border-primary/40 transition-all duration-1000 group flex flex-col"
                        >
                            <div className="text-stone mb-12 opacity-40 text-6xl font-serif leading-none h-8 overflow-hidden transition-colors group-hover:text-primary/40">
                                “
                            </div>
                            <p className="text-charcoal-soft font-serif text-xl italic leading-relaxed mb-16 flex-grow opacity-90 tracking-wide">
                                {testimonial.quote}
                            </p>
                            <div className="pt-10 hairline mt-auto opacity-30">
                                <p className="micro-eyebrow text-charcoal/80">
                                    {testimonial.author}
                                </p>
                                <p className="text-[10px] uppercase tracking-widest text-secondary/60 font-sans mt-3">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Architecture branding echo */}
            <div className="absolute top-0 left-0 right-0 hairline opacity-30" />
            <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-[120%] aspect-square border border-stone/5 rounded-full -z-10" />
        </section>
    );
}

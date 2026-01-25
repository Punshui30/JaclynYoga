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
        <section className="py-24 bg-background px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-6">Testimonials</h3>
                    <h2 className="text-4xl font-serif text-primary">Voices from the Community</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col h-full bg-muted/20 p-10 rounded-sm border border-border/20">
                            <div className="text-gold mb-8 text-4xl font-serif opacity-40">"</div>
                            <p className="text-xl font-serif text-primary italic leading-relaxed mb-10 flex-grow">
                                {t.quote}
                            </p>
                            <div>
                                <cite className="not-italic block text-primary font-medium tracking-wide">
                                    — {t.author}
                                </cite>
                                <span className="text-xs uppercase tracking-widest text-secondary mt-1 block">
                                    {t.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

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
        <section className="py-24 bg-[#F6F2EA]/50 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-semibold mb-6">Testimonials</h3>
                    <h2 className="text-4xl font-serif text-foreground">Voices from the Community</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col h-full bg-white p-10 rounded-[1.5rem] border border-foreground/5 shadow-sm">
                            <div className="text-[#C6A38B] mb-8 text-5xl font-serif opacity-40">“</div>
                            <p className="text-lg lg:text-xl font-serif text-foreground italic leading-relaxed mb-10 flex-grow">
                                {t.quote}
                            </p>
                            <div>
                                <cite className="not-italic block text-foreground font-serif font-semibold tracking-wide">
                                    — {t.author}
                                </cite>
                                <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-sans mt-2 block">
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

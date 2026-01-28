'use client';

const testimonials = [
    {
        quote: "Jaclyn's approach is tanto compassionate and deeply intelligent. She helped me find a sense of resilience I didn't know I had.",
        author: "Elena R.",
        role: "Private Practice"
    },
    {
        quote: "The reiki sessions have been a cornerstone of my support system. I leave every encounter feeling grounded and remarkably clear.",
        author: "David M.",
        role: "Restorative Practice"
    },
    {
        quote: "As someone navigating complex recovery, Jaclyn's clinical insight has given me back my confidence and physiological mobility.",
        author: "Margaret S.",
        role: "Clinical Practice"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-48 bg-white px-8 md:px-20 lg:px-32 border-b border-charcoal/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-32 space-y-12">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">
                        Client Voices
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif text-charcoal tracking-[0.05em] leading-[1.1]">
                        RESTORATION THROUGH <br />
                        VOICES OF THE PRACTICE
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-charcoal/5 border-t border-b border-charcoal/5">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="p-12 md:p-20 hover:bg-bone transition-all duration-1000 group flex flex-col justify-between h-full"
                        >
                            <p className="text-charcoal/60 font-serif text-lg md:text-[22px] italic leading-relaxed mb-24 lowercase tracking-wide">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            <div className="pt-10 space-y-4">
                                <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal">
                                    {testimonial.author}
                                </p>
                                <p className="text-[9px] uppercase tracking-[0.4em] text-charcoal/30 font-sans italic lowercase">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

export function CredentialsStrip() {
    const credentials = [
        'MS in Yoga Therapy',
        'C-IAYT Board Certified',
        'E-RYT 200 / RYT 500',
        'Reiki II Certified'
    ];

    return (
        <section className="py-28 bg-stone/30 border-b border-charcoal/5 px-8 md:px-20 lg:px-32 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
                <div className="md:col-span-4 lg:col-span-3">
                    <p className="micro-eyebrow text-charcoal/40">
                        Professional Standard
                    </p>
                </div>

                <div className="md:col-span-8 lg:col-span-9 flex flex-wrap gap-x-16 md:gap-x-24 gap-y-12">
                    {credentials.map((cred) => (
                        <div key={cred} className="group cursor-default relative">
                            <span className="text-[11px] font-sans font-bold text-charcoal uppercase tracking-[0.5em] opacity-30 group-hover:opacity-100 transition-all duration-700">
                                {cred}
                            </span>
                            <div className="w-6 h-[1px] bg-secondary/30 group-hover:w-full transition-all duration-1000 mt-3" />
                        </div>
                    ))}
                </div>
            </div>
            {/* SUBTLE BRAND IDENTITY ACCENT */}
            <div className="absolute top-0 right-[41.66%] w-[1px] h-full bg-charcoal/5 pointer-events-none" />
        </section>
    );
}

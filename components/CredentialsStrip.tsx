export function CredentialsStrip() {
    const credentials = [
        'MS in Yoga Therapy',
        'C-IAYT Certified',
        'E-RYT 200 / RYT 500',
        'Reiki II Certified'
    ];

    return (
        <section className="py-20 bg-linen px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                <div className="space-y-4 max-w-xs">
                    <h3 className="micro-eyebrow text-charcoal/40">
                        Professional Clinical Standard
                    </h3>
                    <div className="hairline w-8 mx-auto md:ml-0 opacity-40" />
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-x-16 gap-y-10">
                    {credentials.map((cred) => (
                        <div key={cred} className="flex flex-col items-center md:items-start gap-4 group">
                            <span className="text-charcoal font-serif text-[13px] tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                                {cred}
                            </span>
                            <div className="w-8 h-[1px] bg-stone opacity-40 group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 left-0 right-0 hairline opacity-40" />
            <div className="absolute bottom-0 left-0 right-0 hairline opacity-40" />
        </section>
    );
}

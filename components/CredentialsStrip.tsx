export function CredentialsStrip() {
    const credentials = [
        'MS in Yoga Therapy',
        'C-IAYT Certified',
        'E-RYT 200 / RYT 500',
        'Reiki II Certified'
    ];

    return (
        <section className="py-12 bg-primary px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left">
                <h3 className="text-secondary tracking-[0.2em] uppercase text-xs font-semibold">
                    Clinical Excellence & <br className="hidden md:block" /> Certified Training
                </h3>

                <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6">
                    {credentials.map((cred) => (
                        <div key={cred} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-none" />
                            <span className="text-primary-foreground font-serif text-lg tracking-wide italic">
                                {cred}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

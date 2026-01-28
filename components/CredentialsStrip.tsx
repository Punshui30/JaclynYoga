export function CredentialsStrip() {
    const credentials = [
        'MS in Yoga Therapy',
        'C-IAYT Certified',
        'E-RYT 200 / RYT 500',
        'Reiki II Certified'
    ];

    return (
        <section className="py-16 bg-white px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                <div className="space-y-4 max-w-xs">
                    <h3 className="text-charcoal/40 tracking-[0.25em] uppercase text-[9px] font-sans font-bold">
                        Professional Clinical Standard
                    </h3>
                    <div className="hairline w-12 mx-auto md:ml-0" />
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-x-16 gap-y-6">
                    {credentials.map((cred) => (
                        <div key={cred} className="flex flex-col items-center md:items-start gap-3">
                            <span className="text-charcoal font-serif text-lg tracking-tight">
                                {cred}
                            </span>
                            <div className="w-6 h-[0.5px] bg-warm-gray/30" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 left-0 right-0 hairline opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 hairline opacity-30" />
        </section>
    );
}

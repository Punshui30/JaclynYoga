export function CredentialsStrip() {
    const credentials = [
        'MS in Yoga Therapy',
        'C-IAYT Certified',
        'E-RYT 200 / RYT 500',
        'Reiki II Certified'
    ];

    return (
        <section className="py-24 bg-bone border-b border-charcoal/5 px-8 md:px-20 lg:px-32">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-4 lg:col-span-3">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">
                        Professional standard
                    </p>
                </div>

                <div className="md:col-span-8 lg:col-span-9 flex flex-wrap gap-x-16 gap-y-10">
                    {credentials.map((cred) => (
                        <div key={cred} className="group cursor-default">
                            <span className="text-[11px] font-sans font-bold text-charcoal uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                                {cred}
                            </span>
                            <div className="w-4 h-[1px] bg-charcoal/20 group-hover:w-full transition-all duration-1000 mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

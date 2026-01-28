export function CredentialsStrip() {
    const credentials = [
        'MS in Yoga Therapy',
        'C-IAYT Certified',
        'E-RYT 200 / RYT 500',
        'Reiki II Certified'
    ];

    return (
        <section className="py-12 bg-[#2F2F2F] px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left">
                <h3 className="text-[#C6A38B] tracking-[0.2em] uppercase text-[10px] font-sans">
                    Clinical Excellence & <br className="hidden md:block" /> Certified Training
                </h3>

                <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4">
                    {credentials.map((cred) => (
                        <div key={cred} className="flex items-center gap-3">
                            <div className="w-1 h-1 bg-[#9FAF9A] rounded-full" />
                            <span className="text-[#F6F2EA]/80 font-serif text-base lg:text-lg italic">
                                {cred}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

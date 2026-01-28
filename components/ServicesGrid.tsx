'use client';

import Link from 'next/link';

const services = [
    {
        title: 'Clinical Yoga Therapy',
        description: 'Surgical approach to physiological and emotional restoration through evidence-based yogic modalities.',
        href: '/services#yoga-therapy',
    },
    {
        title: 'Private Instruction',
        description: 'Boutique one-on-one sessions tailored for high-threshold nervous system resilience.',
        href: '/services#private-sessions',
    },
    {
        title: 'Reiki Restoration',
        description: 'Energy architecture healing to restore innate balance and physiological calm.',
        href: '/services#reiki',
    },
    {
        title: 'Gentle Modalities',
        description: 'Curated practices for mobility and recovery within the clinical framework.',
        href: '/services#yoga-classes',
    },
];

export function ServicesGrid() {
    return (
        <section className="py-60 px-8 md:px-20 lg:px-32 bg-stone/20 border-b border-charcoal/5 relative luxury-rhythm">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-48 items-end">
                    <div className="md:col-span-8 flex flex-col gap-12">
                        <p className="micro-eyebrow text-charcoal/40">
                            Curated Offerings
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal tracking-[0.08em] leading-[1.2]">
                            AN ARCHITECTURAL APPROACH <br />
                            TO PRIVATE RESTORATION
                        </h2>
                    </div>
                    <div className="md:col-span-4 flex justify-start md:justify-end">
                        <Link
                            href="/services"
                            className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/40 border-b border-charcoal/10 pb-3 hover:text-charcoal transition-all"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-charcoal/5 border-t border-b border-charcoal/5">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group p-16 md:p-20 hover:bg-stone/50 transition-all duration-1000 relative overflow-hidden h-full flex flex-col justify-between"
                        >
                            <div className="space-y-16 relative z-10">
                                <h4 className="text-xl font-serif text-charcoal tracking-[0.1em] group-hover:text-secondary transition-colors duration-700">
                                    {service.title}
                                </h4>
                                <p className="text-charcoal/50 text-base leading-relaxed font-sans lowercase italic tracking-wide">
                                    {service.description}
                                </p>
                            </div>
                            <div className="pt-24 flex items-center gap-6 text-[10px] uppercase tracking-[0.6em] font-sans font-bold text-charcoal/20 group-hover:text-charcoal/80 transition-all duration-1000">
                                Explore <span className="text-xs">→</span>
                            </div>
                            {/* BOTTOM ACCENT */}
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-1000" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* BACKGROUND VERTICAL MOTIF ACCENT */}
            <div className="absolute top-0 right-[41.66%] w-[1px] h-full bg-charcoal/5 pointer-events-none" />
        </section>
    );
}

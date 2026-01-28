'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

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
        description: 'Architectural energy healing to restore innate balance and physiological calm.',
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
        <section className="py-48 bg-white px-8 md:px-20 lg:px-32 border-b border-charcoal/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32 items-end">
                    <div className="md:col-span-8 flex flex-col gap-12">
                        <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">
                            Curated offerings
                        </p>
                        <h2 className="text-3xl md:text-5xl font-serif text-charcoal tracking-[0.05em] leading-[1.1]">
                            AN ARCHITECTURAL APPROACH <br />
                            TO PRIVATE RESTORATION
                        </h2>
                    </div>
                    <div className="md:col-span-4 flex justify-start md:justify-end">
                        <Link
                            href="/services"
                            className="text-[9px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/40 border-b border-charcoal/10 pb-2 hover:text-charcoal transition-all"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-charcoal/5 border-t border-b border-charcoal/5">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group p-12 md:p-16 hover:bg-bone transition-all duration-1000 relative overflow-hidden h-full flex flex-col justify-between"
                        >
                            <div className="space-y-12 relative z-10">
                                <h4 className="text-lg font-serif text-charcoal tracking-widest group-hover:text-sage-dark transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-charcoal/50 text-[13px] leading-relaxed font-sans lowercase italic">
                                    {service.description}
                                </p>
                            </div>
                            <div className="pt-20 flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-x-[-10px] group-hover:translate-x-0">
                                Explore <span className="text-xs">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Users, Sparkles, BadgeCheck, HeartHandshake } from 'lucide-react';

const services = [
    {
        title: 'Yoga Classes',
        description: 'Mindful movement and breathwork in a supportive group environment. Suitable for all levels, including gentle and chair yoga.',
        icon: Users,
        href: '/services#yoga-classes',
    },
    {
        title: 'Yoga Therapy',
        description: 'A clinical, personalized approach using yoga techniques to address specific physical, emotional, or physiological concerns.',
        icon: BadgeCheck,
        href: '/services#yoga-therapy',
    },
    {
        title: 'Private Sessions',
        description: 'One-on-one tailored practice focusing on your unique goals, whether it is strength, flexibility, or mental clarity.',
        icon: HeartHandshake,
        href: '/services#private-sessions',
    },
    {
        title: 'Reiki',
        description: 'Gentle energy-based relaxation and nervous system support to restore balance and calm to the body and mind.',
        icon: Sparkles,
        href: '/services#reiki',
    },
];

export function ServicesGrid() {
    return (
        <section className="py-32 bg-white px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
                    <div className="max-w-2xl space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-[10px] uppercase tracking-[0.35em] text-primary font-sans font-bold">Curated Offerings</h3>
                            <div className="hairline w-12" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
                            Holistic paths to <br />
                            <span className="italic text-secondary">well-being & balance</span>
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="text-primary font-bold font-sans text-[11px] tracking-widest uppercase border-b border-primary/30 hover:text-secondary hover:border-secondary transition-all pb-2 mb-2 group inline-flex items-center gap-3"
                    >
                        See all offerings
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group bg-background p-10 border border-warm-gray-light hover:border-primary/50 shadow-none hover:shadow-[0_15px_40px_-20px_rgba(43,43,43,0.1)] transition-all duration-700 h-full flex flex-col rounded-2xl"
                        >
                            <div className="w-16 h-16 flex items-center justify-center mb-12 transition-all duration-700 bg-white rounded-xl shadow-sm border border-warm-gray-light group-hover:scale-110">
                                <service.icon size={28} strokeWidth={1.5} className="text-secondary" />
                            </div>
                            <h4 className="text-2xl font-serif text-charcoal mb-6 transition-colors duration-500 group-hover:text-primary">
                                {service.title}
                            </h4>
                            <p className="text-charcoal-soft leading-relaxed mb-10 flex-grow font-sans text-sm">
                                {service.description}
                            </p>
                            <div className="text-[10px] uppercase tracking-widest text-primary font-bold inline-flex items-center gap-2">
                                Discover more
                                <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-700">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Branding Hairline */}
            <div className="absolute top-0 left-0 right-0 hairline opacity-20" />
        </section>
    );
}

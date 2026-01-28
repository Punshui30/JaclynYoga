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
        <section className="py-40 bg-white px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
                    <div className="max-w-xl space-y-8">
                        <div className="space-y-6">
                            <p className="micro-eyebrow text-primary">Curated Offerings</p>
                            <div className="hairline w-8 opacity-40 ml-0" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-none">
                            Holistic paths to <br />
                            <span className="italic text-secondary/90 text-3xl lg:text-4xl">well-being & balance</span>
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="micro-eyebrow text-charcoal/60 hover:text-primary transition-colors border-b border-stone/40 pb-2 flex items-center gap-3"
                    >
                        See all offerings
                        <span className="transform group-hover:translate-x-1 transition-transform tracking-normal text-sm">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group bg-linen/50 p-12 border border-stone/20 hover:border-primary/40 shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-1000 h-full flex flex-col rounded-3xl"
                        >
                            <div className="w-14 h-14 flex items-center justify-center mb-12 transition-all duration-1000 bg-white rounded-2xl shadow-sm border border-stone/10 group-hover:scale-105">
                                <service.icon size={22} strokeWidth={1} className="text-primary/70" />
                            </div>
                            <h4 className="text-xl font-serif text-charcoal mb-6 transition-colors duration-700">
                                {service.title}
                            </h4>
                            <p className="text-charcoal-soft leading-relaxed mb-12 flex-grow font-sans text-sm opacity-80 tracking-wide">
                                {service.description}
                            </p>
                            <div className="micro-eyebrow text-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-2 group-hover:translate-y-0">
                                Discover more
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Architecture branding echo */}
            <div className="absolute top-0 left-0 right-0 hairline opacity-30" />
            <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] border border-stone/5 rounded-full -z-0 pointer-events-none" />
        </section>
    );
}

'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MousePointer2, Users, User, Sparkles, BadgeCheck } from 'lucide-react';
import { AbstractMotif } from './AbstractMotif';

const services = [
    {
        title: 'Yoga Classes',
        description: 'Mindful movement and breathwork in a supportive group environment. Suitable for all levels, including gentle and chair yoga.',
        icon: Users,
        href: '/services#yoga-classes',
        color: 'text-pink-400',
        bg: 'bg-pink-50',
    },
    {
        title: 'Yoga Therapy',
        description: 'A clinical, personalized approach using yoga techniques to address specific physical, emotional, or physiological concerns.',
        icon: BadgeCheck,
        href: '/services#yoga-therapy',
        color: 'text-amber-400',
        bg: 'bg-amber-50',
    },
    {
        title: 'Private Sessions',
        description: 'One-on-one tailored practice focusing on your unique goals, whether it is strength, flexibility, or mental clarity.',
        icon: User,
        href: '/services#private-sessions',
        color: 'text-blue-400',
        bg: 'bg-blue-50',
    },
    {
        title: 'Reiki',
        description: 'Gentle energy-based relaxation and nervous system support to restore balance and calm to the body and mind.',
        icon: Sparkles,
        href: '/services#reiki',
        color: 'text-emerald-400',
        bg: 'bg-emerald-50',
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-muted/30 px-6 iridescent-border relative overflow-hidden">
            {/* Bespoke Abstract Motif */}
            <AbstractMotif className="absolute -right-20 -bottom-20 w-[700px] h-[700px] opacity-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-6">Our Services</h3>
                        <h2 className="text-5xl font-serif text-primary leading-tight">
                            Holistic paths to <br />
                            <span className="italic iridescent-text">well-being & resilience</span>
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="text-primary font-medium border-b border-primary hover:text-accent hover:border-accent transition-all pb-1 mb-2 group inline-flex items-center gap-2"
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
                            className="group bg-background p-10 rounded-sm border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                        >
                            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110", service.bg, service.color)}>
                                <service.icon size={28} />
                            </div>
                            <h4 className="text-2xl font-serif text-primary mb-6 transition-colors duration-500 group-hover:text-amber-500">
                                {service.title}
                            </h4>
                            <p className="text-secondary leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>
                            <div className="text-xs uppercase tracking-widest text-primary font-medium inline-flex items-center gap-2">
                                Discover more
                                <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-500">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

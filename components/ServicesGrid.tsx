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
        <section className="py-24 bg-background px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-semibold mb-6">Our Services</h3>
                        <h2 className="text-4xl lg:text-5xl font-serif text-foreground leading-tight">
                            Holistic paths to <br />
                            <span className="italic text-[#C6A38B]">well-being & resilience</span>
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="text-[#9FAF9A] font-sans text-sm tracking-widest uppercase border-b border-[#9FAF9A] hover:text-[#C6A38B] hover:border-[#C6A38B] transition-all pb-1 mb-2 group inline-flex items-center gap-2"
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
                            className="group bg-white p-10 border border-foreground/5 hover:border-[#9FAF9A]/50 shadow-sm hover:shadow-md transition-all duration-700 h-full flex flex-col rounded-[1rem]"
                        >
                            <div className="w-14 h-14 flex items-center justify-center mb-10 transition-all duration-700 bg-[#F6F2EA] rounded-lg">
                                <service.icon size={26} className="text-[#C6A38B]" />
                            </div>
                            <h4 className="text-2xl font-serif text-foreground mb-4 transition-colors duration-500 group-hover:text-[#9FAF9A]">
                                {service.title}
                            </h4>
                            <p className="text-foreground/70 leading-relaxed mb-8 flex-grow font-sans text-sm">
                                {service.description}
                            </p>
                            <div className="text-[10px] uppercase tracking-widest text-[#9FAF9A] font-sans font-bold inline-flex items-center gap-2">
                                Discover more
                                <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-700">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

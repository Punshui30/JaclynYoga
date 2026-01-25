'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Iridescent background effect */}
            <div className="absolute inset-0 iridescent-bg opacity-30 -z-10" />

            {/* Brand Watermark */}
            <div className="absolute -right-20 -top-20 w-[600px] h-[600px] opacity-[0.03] -z-10 pointer-events-none">
                <Image
                    src="/images/logo.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="z-10 order-2 lg:order-1">
                    <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 leading-[1.1]">
                        Yoga Therapy & <br />
                        <span className="italic text-accent">Holistic Wellness</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary mb-10 max-w-lg leading-relaxed">
                        Personalized yoga therapy, mindful movement, and energy healing to support healing, resilience, and balance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/booking"
                            className="px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm text-center"
                        >
                            Book a Session
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 border border-primary text-primary text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm text-center"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>

                <div className="relative order-1 lg:order-2">
                    <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl">
                        <Image
                            src="/images/hero.png"
                            alt="Yoga therapy session in a calm, airy studio"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10" />
                </div>
            </div>

            {/* Breadcrumb style scroll indicator or brand accent */}
            <div className="absolute bottom-10 left-6 hidden md:block">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-accent/40" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-accent/60">Breathe • Move • Heal</span>
                </div>
            </div>
        </section>
    );
}

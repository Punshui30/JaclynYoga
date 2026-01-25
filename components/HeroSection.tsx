'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 overflow-hidden">
            {/* Iridescent background effect - more vibrant now */}
            <div className="absolute inset-0 iridescent-bg opacity-40 -z-10" />

            {/* Brand Watermark - keeping it but making it more central/subtle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] -z-10 pointer-events-none">
                <Image
                    src="/images/logo.png"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* 1. Large Centered Logo */}
            <div className="flex flex-col items-center mb-12 z-10 animate-fade-in">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 drop-shadow-sm">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-primary tracking-[0.2em] uppercase text-center">
                    Jaclyn Muir
                </h1>
                <div className="h-[1px] w-24 bg-accent/40 mt-6" />
            </div>

            {/* 2. Headline & Subheadline */}
            <div className="max-w-4xl mx-auto px-6 text-center z-10 mb-16">
                <h2 className="text-2xl md:text-3xl font-serif text-secondary italic mb-8 leading-relaxed">
                    Yoga Therapy • Mindful Movement • Energy Healing
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                        href="/booking"
                        className="px-10 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm shadow-sm"
                    >
                        Book a Session
                    </Link>
                    <Link
                        href="/services"
                        className="px-10 py-4 border border-primary text-primary text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>

            {/* 3. Main Hero Image - Centered editorial style */}
            <div className="relative w-full max-w-5xl px-6 pb-24 z-10">
                <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src="/images/hero.png"
                        alt="Yoga therapy session in a calm, airy studio"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Floating brand accent */}
                <div className="absolute -bottom-10 -left-10 w-48 h-48 iridescent-bg rounded-full blur-3xl opacity-30 -z-10" />
            </div>

            {/* Breathe • Move • Heal Indicator */}
            <div className="absolute bottom-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-accent font-medium">
                <div className="h-[1px] w-12 bg-accent/40" />
                Breathe • Move • Heal
                <div className="h-[1px] w-12 bg-accent/40" />
            </div>
        </section>
    );
}

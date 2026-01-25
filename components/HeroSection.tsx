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
            <div className="flex flex-col items-center mb-16 z-10 animate-fade-in flex-grow justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 drop-shadow-2xl animate-float">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-[0.3em] uppercase text-center mb-6">
                    Jaclyn Muir
                </h1>
                <div className="h-[1px] w-32 bg-accent/40 mb-12" />

                <h2 className="text-2xl md:text-3xl font-serif text-secondary italic mb-16 leading-relaxed text-center px-6">
                    Yoga Therapy • Mindful Movement • Energy Healing
                </h2>

                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <Link
                        href="/booking"
                        className="px-12 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm shadow-lg transform hover:-translate-y-1"
                    >
                        Book a Session
                    </Link>
                    <Link
                        href="/services"
                        className="px-12 py-5 border border-primary text-primary text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm hover:-translate-y-1"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>

            {/* Hero Image Removed */}

            {/* Breathe • Move • Heal Indicator */}
            <div className="pb-16 flex items-center gap-6 text-[11px] uppercase tracking-[0.6em] text-accent font-medium mt-auto">
                <div className="h-[1px] w-16 bg-accent/40" />
                Breathe • Move • Heal
                <div className="h-[1px] w-16 bg-accent/40" />
            </div>
        </section>
    );
}

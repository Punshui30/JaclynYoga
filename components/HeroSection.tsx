'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AbstractMotif } from './AbstractMotif';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-12 overflow-hidden bg-background">
            {/* Soft sage gradient fallback for depth */}
            <div className="absolute inset-0 sage-gradient-bg -z-10" />

            {/* Bespoke Abstract Motif - Thinner lines */}
            <AbstractMotif className="absolute -right-40 -top-20 w-[800px] h-[800px] opacity-20" />
            <AbstractMotif className="absolute -left-60 -bottom-40 w-[1000px] h-[1000px] opacity-10 rotate-45" />

            {/* 1. Large Editorial Logo & Brand Title */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 max-w-7xl w-full translate-y-[-5%]">
                <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_10px_30px_rgba(0,0,0,0.03)] animate-zoom-focus">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-6xl md:text-7xl font-serif text-primary tracking-[0.05em] uppercase mb-4">
                        Jaclyn <br className="hidden md:block" /> Muir
                    </h1>
                    <div className="h-[0.5px] w-48 bg-accent/60 mb-8" />

                    <h2 className="text-lg md:text-xl font-serif text-secondary italic mb-12 max-w-lg leading-relaxed text-balance">
                        Yoga Therapy • Mindful Movement <br />
                        Energy Healing • Holistic Awareness
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/booking"
                            className="px-10 py-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition-all duration-500 rounded-none shadow-sm"
                        >
                            Book a Session
                        </Link>
                        <Link
                            href="/services"
                            className="px-10 py-4 border border-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 rounded-none"
                        >
                            Explore Offerings
                        </Link>
                    </div>
                </div>
            </div>

            {/* Breathe • Move • Heal Indicator */}
            <div className="absolute bottom-12 flex items-center gap-8 text-[10px] uppercase tracking-[0.7em] text-accent/80 font-medium">
                <div className="h-[0.5px] w-12 bg-accent/30" />
                Breathe • Move • Heal
                <div className="h-[0.5px] w-12 bg-accent/30" />
            </div>
        </section>
    );
}

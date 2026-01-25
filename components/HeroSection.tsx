'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AbstractMotif } from './AbstractMotif';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-12 overflow-hidden bg-[#faf9f6]">
            {/* Iridescent background effect */}
            <div className="absolute inset-0 iridescent-bg opacity-30 -z-10" />

            {/* Bespoke Abstract Motif - Offset and organic */}
            <AbstractMotif className="absolute -right-40 -top-20 w-[800px] h-[800px] blur-[2px]" />
            <AbstractMotif className="absolute -left-60 -bottom-40 w-[1000px] h-[1000px] opacity-20 blur-[1px] rotate-45" />

            {/* 1. Large Editorial Logo & Brand Title */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 max-w-7xl w-full translate-y-[-5%]">
                <div className="relative w-72 h-72 md:w-96 md:h-96 drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)] animate-zoom-focus">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-6xl md:text-8xl font-serif text-primary tracking-[0.1em] uppercase mb-4">
                        Jaclyn <br className="hidden md:block" /> Muir
                    </h1>
                    <div className="h-[2px] w-32 bg-accent/30 mb-8" />

                    <h2 className="text-xl md:text-2xl font-serif text-secondary italic mb-12 max-w-lg leading-relaxed">
                        Yoga Therapy • Mindful Movement <br />
                        Energy Healing • Holistic Awareness
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/booking"
                            className="px-12 py-5 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition-all duration-500 rounded-sm shadow-xl liquid-button"
                        >
                            Book a Session
                        </Link>
                        <Link
                            href="/services"
                            className="px-12 py-5 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-sm liquid-button"
                        >
                            The Journey
                        </Link>
                    </div>
                </div>
            </div>

            {/* Breathe • Move • Heal Indicator */}
            <div className="absolute bottom-16 flex items-center gap-6 text-[11px] uppercase tracking-[0.6em] text-accent font-medium">
                <div className="h-[1px] w-16 bg-accent/40" />
                Breathe • Move • Heal
                <div className="h-[1px] w-16 bg-accent/40" />
            </div>
        </section>
    );
}

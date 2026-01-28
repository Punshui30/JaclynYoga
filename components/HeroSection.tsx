'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative w-full bg-background flex flex-col items-center overflow-hidden">
            {/* 12-COLUMN ARCHITECTURAL GRID SYSTEM */}
            <div className="flex flex-col md:grid md:grid-cols-12 w-full min-h-[100dvh] max-w-[1600px] relative">

                {/* 1. EDITORIAL IMAGE ANCHOR (TOP ON MOBILE) */}
                <div className="relative w-full h-[55vh] md:h-auto md:absolute md:inset-0 md:left-[58.33%] md:w-[41.66%] border-b md:border-b-0 md:border-l border-charcoal/5 z-0">
                    <div className="absolute inset-0 grayscale-[0.2] brightness-[1.02] contrast-[0.98]">
                        <Image
                            src="/images/hero-new.webp"
                            alt="Jaclyn Muir Practitioner"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        {/* ARCHITECTURAL VEIL */}
                        <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply" />
                    </div>
                </div>

                {/* 2. BRAND BLOCK (SECONDARY ON MOBILE, PRIMARY ON DESKTOP) */}
                <div className="w-full md:col-span-7 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-20 md:py-32 relative z-10 bg-background/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
                    <div className="flex flex-col items-start gap-12 md:gap-24">
                        {/* ICONOGRAPHIC SYSTEM */}
                        <div className="space-y-12 md:space-y-16 w-full">
                            {/* LOGO SCALE UP + RESTRAINT */}
                            <div className="relative hidden md:block md:w-60 md:h-60 filter saturate-[0.8] opacity-90">
                                <Image
                                    src="/images/logo.png"
                                    alt="Jaclyn Muir Brand Artifact"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>

                            <div className="space-y-8 md:space-y-10">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-[0.08em] leading-tight md:leading-none text-charcoal uppercase text-balance">
                                        Jaclyn Muir
                                    </h1>
                                    <p className="text-[9px] md:text-[11px] uppercase tracking-[0.45em] md:tracking-[0.6em] font-sans font-bold text-sage-dark">
                                        Yoga Therapy · Clinical Recovery · Reiki
                                    </p>
                                </div>

                                <div className="space-y-8 max-w-md">
                                    <p className="text-base md:text-xl font-serif italic text-charcoal/60 leading-relaxed tracking-wide lowercase border-l border-charcoal/10 pl-6 md:pl-8">
                                        a private clinical wellness practice <br className="hidden md:block" />
                                        specializing in the architecture of <br className="hidden md:block" />
                                        nervous system restoration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* UI ELEMENTS: SILENT LUXURY */}
                        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-1">
                            <Link
                                href="/booking"
                                className="px-14 py-6 bg-charcoal text-sage font-sans text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-sage hover:text-charcoal text-center"
                            >
                                Book Session
                            </Link>
                            <Link
                                href="/services"
                                className="px-14 py-6 border border-charcoal/10 text-charcoal/60 font-sans text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-charcoal/5 hover:text-charcoal text-center"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

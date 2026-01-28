'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] bg-background flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full min-h-[100dvh] max-w-[1600px]">
                {/* LEFT: ARCHITECTURAL BRAND BLOCK (7 COLUMNS) */}
                <div className="col-span-1 md:col-span-7 flex flex-col justify-end md:justify-center px-8 md:px-20 lg:px-32 py-24 md:py-24 relative z-10">
                    <div className="flex flex-col items-start gap-12 md:gap-24">
                        {/* ICONOGRAPHIC SYSTEM */}
                        <div className="space-y-12 md:space-y-16">
                            {/* LOGO SCALE UP + RESTRAINT */}
                            <div className="relative w-32 h-32 md:w-60 md:h-60 filter saturate-[0.8] opacity-90 transition-opacity duration-1000 hover:opacity-100">
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
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-tight md:leading-none text-charcoal uppercase">
                                        Jaclyn Muir
                                    </h1>
                                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:!tracking-[0.5em] font-sans font-bold text-sage-dark">
                                        Yoga Therapy · Clinical Recovery · Reiki
                                    </p>
                                </div>

                                <div className="space-y-8 max-w-md">
                                    <p className="text-base md:text-lg font-serif italic text-charcoal/60 leading-relaxed tracking-wide lowercase border-l border-charcoal/10 pl-6 md:pl-8">
                                        a private clinical wellness practice <br className="hidden md:block" />
                                        specializing in the architecture of <br className="hidden md:block" />
                                        nervous system restoration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* UI ELEMENTS: SILENT LUXURY */}
                        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-0 md:gap-1">
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

                {/* RIGHT: EDITORIAL CROP (5 COLUMNS) */}
                <div className="col-span-1 md:col-span-5 relative h-[50vh] md:h-full overflow-hidden border-t md:border-t-0 border-charcoal/5">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/hero-new.webp"
                            alt="Jaclyn Muir Practitioner"
                            fill
                            className="object-cover grayscale-[0.2] brightness-[1.02] contrast-[0.98]"
                            priority
                        />
                        {/* ARCHITECTURAL VEIL */}
                        <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply" />
                    </div>
                    {/* GRID ANCHOR */}
                    <div className="absolute top-8 left-8 md:top-12 md:left-12 h-16 md:h-24 w-[1px] bg-background/30" />
                </div>
            </div>
        </section>
    );
}

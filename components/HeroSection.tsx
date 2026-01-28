'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-screen bg-stone luxury-rhythm flex flex-col items-center overflow-hidden py-24 md:py-32">
            <div className="max-w-[1600px] w-full px-8 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">

                {/* LEFT: ARCHITECTURAL IDENTITY (7 COLUMNS) */}
                <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-16">
                    {/* LOGO AS CREST */}
                    <div className="relative flex flex-col items-center md:items-start gap-12 group">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 filter saturate-[0.85] opacity-90 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-[1.02]">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Crest"
                                fill
                                className="object-contain drop-shadow-[0_8px_24px_rgba(139,155,138,0.12)]"
                                priority
                            />
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.1em] leading-none text-charcoal">
                                Jaclyn Muir
                            </h1>
                            <p className="micro-eyebrow text-sage tracking-[0.6em] !text-charcoal/60">
                                Yoga · Yoga Therapy · Reiki
                            </p>
                        </div>
                    </div>

                    {/* MANIFESTO & ACTIONS */}
                    <div className="space-y-12 max-w-md">
                        <p className="text-base md:text-lg font-serif italic text-charcoal/50 leading-relaxed tracking-wide lowercase border-l border-charcoal/10 pl-8">
                            a private clinical wellness practice <br />
                            specializing in the architecture of <br />
                            nervous system restoration.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 pt-4">
                            <Link
                                href="/booking"
                                className="px-16 py-6 bg-charcoal text-stone font-sans text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-sage hover:text-charcoal text-center"
                            >
                                Book Session
                            </Link>
                            <Link
                                href="/services"
                                className="px-16 py-6 border border-charcoal/10 text-charcoal/60 font-sans text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-charcoal/5 hover:text-charcoal text-center"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT: ART-DIRECTED MUSEUM FRAME (5 COLUMNS) */}
                <div className="md:col-span-5 relative flex justify-center md:justify-end">
                    <div className="relative group editorial-framed max-w-sm md:max-w-none transform transition-all duration-1000 hover:scale-[1.01]">
                        <div className="relative h-[60vh] md:h-[75vh] w-full aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/hero-new.webp"
                                alt="Jaclyn Muir Practitioner"
                                fill
                                className="object-cover grayscale-[0.1] contrast-[1.05] mix-blend-multiply opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
                                priority
                            />
                            {/* PHOTOGRAPHIC VEIL */}
                            <div className="absolute inset-0 bg-stone/20 mix-blend-overlay pointer-events-none" />
                        </div>
                        {/* MUSEUM LABEL EFFECT */}
                        <div className="absolute -bottom-6 -right-6 bg-background border border-charcoal/5 px-6 py-4 hidden lg:block shadow-sm">
                            <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-charcoal/20">clinical series no. 01</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BACKGROUND VERTICAL MOTIF */}
            <div className="absolute top-0 right-[41.66%] w-[1px] h-full bg-charcoal/5 hidden md:block" />
        </section>
    );
}

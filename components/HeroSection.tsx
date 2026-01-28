'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-background px-6 sm:px-12 lg:px-24 overflow-hidden py-32 lg:py-48">
            {/* BACKGROUND BRANDING: Ultra-light logo geometry echo */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] border border-primary/5 rounded-full -z-0 pointer-events-none opacity-40" />
            <div className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] border border-primary/5 rounded-full -z-0 pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
                {/* LEFT: Content Side - Boutique Brand Block */}
                <div className="col-span-12 lg:col-span-6 relative">
                    {/* Visual Anchor: Barely perceptible panel */}
                    <div className="absolute -inset-8 bg-primary/[0.03] rounded-3xl -z-10 blur-xl" />

                    <div className="flex flex-col items-start gap-12">
                        <div className="flex items-center gap-10">
                            {/* Signature Vertical Line */}
                            <div className="w-[1px] h-32 bg-stone/40" />

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <p className="micro-eyebrow">HOLISTIC YOGA & THERAPY</p>
                                    <div className="relative w-32 h-32 transition-transform duration-1000">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Jaclyn Muir Brand Artifact"
                                            fill
                                            className="object-contain object-left"
                                            priority
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6 max-w-sm">
                                    <div className="space-y-4">
                                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-normal text-charcoal leading-none tracking-[0.01em]">
                                            Jaclyn Muir
                                        </h1>
                                        <p className="text-lg md:text-xl font-serif italic text-secondary/80 tracking-wide">
                                            Clinical Wisdom. Gentle Practice.
                                        </p>
                                    </div>
                                    <p className="text-base text-charcoal-soft font-sans leading-relaxed tracking-wide">
                                        A curated sanctuary for nervous system restoration, weaving professional expertise with ancestral wisdom to reclaim your innate balance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4 ml-[41px]">
                            <Link
                                href="/booking"
                                className="px-10 py-4 bg-primary text-white font-sans text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all rounded shadow-sm"
                            >
                                Book a Session
                            </Link>
                            <Link
                                href="/services"
                                className="px-10 py-4 border border-stone text-charcoal/70 font-sans text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-primary/5 transition-all rounded transition-colors"
                            >
                                Explore Offerings
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Image Side - Art Directed Magazine Style */}
                <div className="col-span-12 lg:col-span-6 relative lg:pl-12">
                    <div className="editorial-framed rounded-[2rem] aspect-[4/5] lg:aspect-[3.4/4] overflow-hidden group">
                        <div className="relative w-full h-full overflow-hidden rounded-[1.5rem]">
                            <Image
                                src="/images/hero-new.webp"
                                alt="Jaclyn Muir Practitioner"
                                fill
                                className="object-cover transition-transform duration-[4000ms] hover:scale-105 sepia-[0.1] saturate-[0.8] brightness-[1.02]"
                                priority
                            />
                            {/* editorial warmth overlay */}
                            <div className="absolute inset-0 bg-[#E8D5C4]/5 mix-blend-multiply pointer-events-none" />
                        </div>
                    </div>

                    {/* Faint Abstract motif shadow */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[80px] -z-10" />
                </div>
            </div>
        </section>
    );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-background px-6 sm:px-12 lg:px-24 overflow-hidden pt-32 lg:pt-0">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 lg:gap-24 items-center">
                {/* LEFT: Content Side - Editorial Focus */}
                <div className="col-span-12 lg:col-span-6 flex flex-col items-start space-y-12 lg:space-y-16">
                    <div className="flex flex-col items-start space-y-12 group">
                        <div className="relative w-56 h-56 lg:w-80 lg:h-80 transition-transform duration-700 group-hover:scale-[1.02]">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Brand Artifact"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>

                        <div className="space-y-8 max-w-xl">
                            <div className="space-y-4">
                                <div className="hairline mb-10 w-24" /> {/* Branding rule */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-[1.1] tracking-tight">
                                    Jaclyn Muir
                                </h1>
                                <p className="text-xl md:text-2xl font-serif italic text-secondary tracking-wide">
                                    Yoga Therapy & Holistic Wellness
                                </p>
                            </div>
                            <p className="text-lg text-charcoal-soft font-sans leading-relaxed max-w-md">
                                A curated approach to healing, weaving clinical expertise with gentle wisdom to restore your innate balance.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <Link
                            href="/booking"
                            className="px-10 py-4 bg-primary text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary/90 transition-all rounded-md shadow-sm"
                        >
                            Book a Session
                        </Link>
                        <Link
                            href="/services"
                            className="px-10 py-4 border border-primary text-primary font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary/5 transition-all rounded-md"
                        >
                            Explore Offerings
                        </Link>
                    </div>
                </div>

                {/* RIGHT: Image Side - Option 1: Framed Editorial Crop */}
                <div className="col-span-12 lg:col-span-6 relative">
                    <div className="relative z-10 w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(43,43,43,0.1)] border border-warm-gray-light bg-white p-3">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/hero-new.webp"
                                alt="Jaclyn Muir Practitioner"
                                fill
                                className="object-cover transition-transform duration-[3000ms] hover:scale-105"
                                priority
                            />
                            {/* Intentional editorial overlay */}
                            <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply opacity-30" />
                        </div>
                    </div>

                    {/* Subtle offset framing shape */}
                    <div className="absolute -top-12 -right-12 -bottom-12 -left-12 border border-warm-gray/10 rounded-[3rem] -z-10 hidden lg:block" />

                    {/* Brand Geometry Repetition: Subtlest echo of logo geometry */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </section>
    );
}

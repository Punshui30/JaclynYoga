'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-background px-6 sm:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 lg:gap-24 items-center">
                {/* LEFT: Content Side - Editorial Focus */}
                <div className="col-span-12 lg:col-span-5 flex flex-col items-start space-y-12 lg:space-y-16 py-12">
                    {/* Fixed Brand Artifact: Colored Logo - Medium Scale */}
                    <div className="relative w-32 h-32 lg:w-40 lg:h-40 -ml-2">
                        <Image
                            src="/images/logo-v3.png"
                            alt="Jaclyn Muir Hamsa Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    <div className="space-y-8 max-w-lg">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight">
                                Jaclyn Muir
                            </h1>
                            <p className="text-xl md:text-2xl font-serif italic text-[#C6A38B] tracking-wide">
                                Yoga · Yoga Therapy · Reiki
                            </p>
                        </div>
                        <p className="text-lg text-foreground/70 font-sans leading-relaxed max-w-md">
                            Personalized healing through mindful movement and energy work. Weaving together clinical expertise and ancient wisdom.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/booking"
                            className="px-10 py-4 bg-[#9FAF9A] text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#9FAF9A]/90 transition-all rounded-md shadow-sm"
                        >
                            Book a Session
                        </Link>
                        <Link
                            href="/services"
                            className="px-10 py-4 border border-[#9FAF9A] text-[#9FAF1A] font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#9FAF9A]/5 transition-all rounded-md"
                        >
                            Explore Offerings
                        </Link>
                    </div>
                </div>

                {/* RIGHT: Image Side - Softly Overlapping / Framed */}
                <div className="col-span-12 lg:col-span-7 relative">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-sm transform lg:rotate-2">
                        <Image
                            src="/images/hero-new.webp"
                            alt="Jaclyn in nature"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Natural warm grading */}
                        <div className="absolute inset-0 bg-[#C6A38B]/10 mix-blend-multiply opacity-40" />
                    </div>
                    {/* Organic decorative element */}
                    <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#D8E4DA]/30 rounded-full blur-3xl opacity-60" />
                </div>
            </div>
        </section>
    );
}

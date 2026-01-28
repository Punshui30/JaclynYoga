'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center overflow-hidden">

            {/* 1. BACKGROUND: TWO-TONE STUDIO INFINITY CURVE */}
            {/* Soft gradient from Stone (Wall) to White (Floor) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F2E8DE_0%,#F2E8DE_55%,#FAFAFA_100%)] z-0" />

            {/* 2. LAYER: BRAND HEADER (Top) */}
            <div className="relative z-30 pt-16 flex flex-col items-center animate-fade-in-up">
                <div className="w-32 h-32 md:w-48 md:h-48 relative transition-transform duration-700 hover:scale-105">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa"
                        fill
                        className="object-contain drop-shadow-sm filter saturate-110"
                        priority
                    />
                </div>
            </div>

            {/* 3. LAYER: NAVIGATION (Behind Subject) */}
            {/* Centered vertically/horizontally, but behind the subject's head/body */}
            <div className="absolute top-[45%] left-0 right-0 z-10 flex justify-center items-center">
                <nav className="flex items-center gap-8 md:gap-16 lg:gap-24 opacity-0 animate-fade-in-up [animation-delay:200ms] forwards">
                    {['Home', 'About', 'Services'].map((item) => (
                        <span key={item} className="text-charcoal/80 font-sans text-[11px] md:text-[13px] uppercase tracking-[0.25em] font-medium hover:text-charcoal cursor-pointer transition-colors">
                            {item}
                        </span>
                    ))}
                    {/* Spacing for Subject Head if needed, or visual gap */}
                    <span className="w-24 md:w-48 lg:w-64" /> {/* Gap for subject */}
                    {['Classes', 'Contact', 'Book'].map((item) => (
                        <span key={item} className="text-charcoal/80 font-sans text-[11px] md:text-[13px] uppercase tracking-[0.25em] font-medium hover:text-charcoal cursor-pointer transition-colors">
                            {item}
                        </span>
                    ))}
                </nav>
            </div>

            {/* 4. LAYER: SUBJECT (Foreground) */}
            {/* Anchored bottom, centered. Overlaps the Nav slightly if screen is small, or fits in the gap. */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center items-end h-[60vh] md:h-[70vh]">

                {/* CSS Grounding Shadow (Extra realism on the white floor) */}
                <div className="absolute bottom-[5%] w-[40%] h-[20px] bg-charcoal/20 blur-[30px] rounded-[100%]" />

                <div className="relative w-full max-w-[80vh] h-full">
                    <Image
                        src="/images/hero-cutout.png"
                        alt="Jaclyn Muir Meditation"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}


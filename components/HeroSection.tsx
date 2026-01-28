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
            <div className="absolute top-[52%] left-0 right-0 z-10 flex justify-center items-center">
                <nav className="flex items-center gap-12 md:gap-24 lg:gap-32 w-full justify-center px-4 opacity-0 animate-fade-in-up [animation-delay:200ms] forwards">
                    <div className="flex gap-8 md:gap-12">
                        {['Home', 'About', 'Services'].map((item) => (
                            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-charcoal/70 font-sans text-[10px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.3em] font-medium hover:text-charcoal cursor-pointer transition-colors relative group">
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="w-32 md:w-64 lg:w-80 shrink-0" />

                    <div className="flex gap-8 md:gap-12">
                        {['Classes', 'Contact', 'Book'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="text-charcoal/70 font-sans text-[10px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.3em] font-medium hover:text-charcoal cursor-pointer transition-colors relative group">
                                {item}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* 4. LAYER: SUBJECT (Foreground) */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center items-end h-[50vh] md:h-[55vh]">

                {/* CSS Grounding Shadow */}
                <div className="absolute bottom-[2%] w-[25%] h-[15px] bg-charcoal/30 blur-[25px] rounded-[100%]" />

                <div className="relative w-full max-w-[60vh] h-full transition-transform duration-1000 hover:scale-[1.01]">
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

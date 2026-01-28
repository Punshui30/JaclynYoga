'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center overflow-hidden">

            {/* 1. BACKGROUND: TWO-TONE STUDIO INFINITY CURVE */}
            {/* Same tones as the 'Sun Yoga' reference: Peach wall fading into clean white floor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F2E8DE_0%,#F2E8DE_55%,#FAFAFA_100%)] z-0" />

            {/* 2. LAYER: BRAND HEADER (Top) */}
            <div className="relative z-30 pt-16 flex flex-col items-center animate-fade-in-up">
                <div className="w-32 h-32 md:w-56 md:h-56 relative transition-all duration-1000">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa"
                        fill
                        className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)] filter brightness-105 saturate-110"
                        priority
                    />
                </div>
            </div>

            {/* 3. LAYER: NAVIGATION (Behind Subject) */}
            <div className="absolute top-[50%] left-0 right-0 z-10 flex justify-center items-center">
                <nav className="flex items-center gap-12 md:gap-20 lg:gap-32 w-full justify-center px-4 opacity-0 animate-fade-in-up [animation-delay:400ms] forwards">
                    <div className="flex gap-8 md:gap-12">
                        {['About', 'Services', 'Classes'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="text-charcoal/60 font-sans text-[10px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.4em] font-bold hover:text-charcoal cursor-pointer transition-colors relative group">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Centered Space for Subject Head/Shoulders */}
                    <div className="w-40 md:w-72 lg:w-96 shrink-0" />

                    <div className="flex gap-8 md:gap-12">
                        {['Contact', 'Schedule', 'Book'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="text-charcoal/60 font-sans text-[10px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.4em] font-bold hover:text-charcoal cursor-pointer transition-colors relative group">
                                {item}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* 4. LAYER: SUBJECT (Foreground) */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center items-end h-[48vh] md:h-[52vh]">

                {/* CSS Grounding Shadow - Precisely centered under her body */}
                <div className="absolute bottom-[3%] w-[35%] h-[25px] bg-charcoal/30 blur-[40px] rounded-[100%]" />

                <div className="relative w-full max-w-[55vh] h-full transition-transform duration-1000 hover:scale-[1.02]">
                    <Image
                        src="/images/hero-studio.png"
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

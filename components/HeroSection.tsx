'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-[#F2E8DE]">

            {/* 1. BRAND HEADER */}
            <div className="relative z-30 pt-12 flex flex-col items-center animate-fade-in-up">
                <div className="w-40 h-40 md:w-56 md:h-56 relative">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa"
                        fill
                        className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)] filter brightness-110 saturate-110"
                        priority
                    />
                </div>
            </div>

            {/* 2. LAYERED COMPOSITION */}
            <div className="relative w-full flex-grow flex items-end justify-center">

                {/* NAVIGATION (Z-10: Behind Subject) */}
                <div className="absolute top-[40%] left-0 right-0 z-10 flex justify-center items-center">
                    <nav className="flex items-center gap-12 md:gap-24 lg:gap-32 w-full justify-center px-8 opacity-0 animate-fade-in-up [animation-delay:400ms] forwards">
                        <div className="flex gap-12 md:gap-16">
                            {['About', 'Services', 'Classes'].map((item) => (
                                <Link key={item} href={`/${item.toLowerCase()}`} className="text-charcoal/60 font-sans text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-bold hover:text-charcoal transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Perfect Gap for Subject's Portrait */}
                        <div className="w-48 md:w-72 lg:w-96 shrink-0" />

                        <div className="flex gap-12 md:gap-16">
                            {['Contact', 'Schedule', 'Book'].map((item) => (
                                <Link key={item} href={`/${item.toLowerCase()}`} className="text-charcoal/60 font-sans text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-bold hover:text-charcoal transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* SUBJECT IMAGE (Z-20: Foreground) */}
                <div className="relative w-full h-[70vh] md:h-[80vh] flex justify-center items-end z-20">
                    <div className="relative w-full max-w-[1400px] h-full">
                        <Image
                            src="/images/hero-blended.png"
                            alt="Jaclyn Muir Meditation"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}

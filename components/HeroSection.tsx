'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#F2E8DE] via-[#EAE2D7] to-[#D7D2CB]">

            {/* 1. NAVIGATION OVERLAY (Minimal & Integrated) */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center py-10 px-8 md:px-20 lg:px-32 animate-fade-in">
                <div className="flex gap-8 md:gap-12 text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/40">
                    <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
                    <Link href="/services" className="hover:text-charcoal transition-colors">Services</Link>
                    <Link href="/classes" className="hover:text-charcoal transition-colors">Classes</Link>
                </div>
                <div className="flex gap-8 md:gap-12 text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/40 text-right">
                    <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
                    <Link href="/schedule" className="hover:text-charcoal transition-colors">Schedule</Link>
                    <Link href="/book" className="hover:text-charcoal text-charcoal/80 transition-colors border-b border-charcoal/20">Book</Link>
                </div>
            </nav>

            {/* 2. SUBJECT (Jaclyn) - Visually Centered & Grounded */}
            <div className="absolute inset-x-0 top-[20%] bottom-0 flex justify-center items-center z-20 pointer-events-none">
                <div className="relative w-full max-w-[65vh] h-[65vh] animate-fade-in-up [animation-duration:1.5s]">
                    {/* Subtle Ground Shadow */}
                    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[40%] h-[15px] bg-[#2A2A2A]/20 blur-[30px] rounded-full" />

                    <Image
                        src="/images/hero-cutout.png"
                        alt="Jaclyn Muir Meditation"
                        fill
                        className="object-contain object-center drop-shadow-sm"
                        priority
                    />
                </div>
            </div>

            {/* 3. CENTRALLY ALIGNED CONTENT (Logo, Headline, Tagline) */}
            <div className="relative z-30 flex flex-col items-center text-center space-y-16 animate-fade-in [animation-delay:400ms] forwards">

                {/* Scaled Logo (~2.5x original baseline) */}
                <div className="w-[320px] h-[320px] md:w-[560px] md:h-[560px] relative transition-transform duration-1000">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa"
                        fill
                        className="object-contain filter brightness-105"
                        priority
                    />
                </div>

                {/* Typography Hierarchy */}
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal tracking-[0.2em] font-light">
                        JACLYN MUIR
                    </h1>
                    <p className="text-[11px] md:text-[13px] font-sans uppercase tracking-[0.6em] text-warmGray font-bold">
                        Yoga · Yoga Therapy · Reiki
                    </p>
                </div>

                {/* Secure Session Link (Button) */}
                <Link
                    href="/book"
                    className="mt-16 inline-block bg-charcoal text-[#F2E8DE] px-16 py-5 text-[11px] uppercase tracking-[0.5em] font-sans font-bold hover:bg-charcoal/90 transition-all shadow-xl"
                >
                    Secure Session
                </Link>
            </div>

            {/* OVERLAY: CLEAN ARCHITECTURAL SPACING MODIFIER */}
            <div className="absolute inset-0 z-10 bg-white/5 pointer-events-none" />

        </section>
    );
}

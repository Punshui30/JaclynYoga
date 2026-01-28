'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-luxuryIvory to-luxuryBeige">

            {/* 6. NAVIGATION OVERLAY (Minimal, Direct on Background) */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center py-10 px-8 md:px-20 lg:px-32 animate-fade-in">
                <div className="flex gap-10 md:gap-14 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/50">
                    <Link href="/about" className="hover:text-charcoal transition-all">About</Link>
                    <Link href="/services" className="hover:text-charcoal transition-all">Services</Link>
                    <Link href="/classes" className="hover:text-charcoal transition-all">Classes</Link>
                </div>
                <div className="flex gap-10 md:gap-14 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/50 text-right">
                    <Link href="/contact" className="hover:text-charcoal transition-all">Contact</Link>
                    <Link href="/schedule" className="hover:text-charcoal transition-all">Schedule</Link>
                    <Link href="/book" className="hover:text-charcoal text-charcoal/80 transition-all border-b border-charcoal/20">Book</Link>
                </div>
            </nav>

            {/* 3) LAYOUT COMPOSITION: Jaclyn Floating */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <div className="relative w-full max-w-[70vh] h-[70vh] translate-y-[15%] animate-fade-in-up [animation-duration:1.8s]">
                    <Image
                        src="/images/hero-cutout.png"
                        alt="Jaclyn"
                        fill
                        className="object-contain object-bottom filter brightness-[1.12] contrast-[1.1] sepia-[0.05]"
                        priority
                    />
                </div>
            </div>

            {/* 4) & 5) LOGO & TYPOGRAPHY HIERARCHY */}
            <div className="relative z-30 flex flex-col items-center text-center space-y-10 animate-fade-in [animation-delay:600ms] forwards">

                {/* Scaled Logo (~2.5x Size) */}
                <div className="w-[300px] h-[300px] md:w-[480px] md:h-[480px] relative transition-transform duration-1000">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Brand Artifact"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal tracking-[0.25em] font-light uppercase">
                        JACLYN MUIR
                    </h1>
                    <p className="text-[11px] md:text-[13px] font-sans uppercase tracking-[0.6em] text-sageGray font-bold">
                        Yoga · Yoga Therapy · Reiki
                    </p>
                </div>

                {/* Secure Session CTA */}
                <Link
                    href="/book"
                    className="mt-14 inline-block bg-charcoal text-luxuryIvory px-16 py-5 text-[10px] uppercase tracking-[0.6em] font-sans font-bold hover:tracking-[0.65em] hover:bg-charcoal/95 transition-all shadow-md"
                >
                    Secure Session
                </Link>
            </div>

        </section>
    );
}

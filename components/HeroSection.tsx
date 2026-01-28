'use client';
// Build Marker: 2026-01-28T01:42:00 FINAL CLEANUP

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center bg-[linear-gradient(to_bottom,#f4ede4_0%,#efe3d6_40%,#e6d6c6_100%)]">

            {/* NAVIGATION FLOATING ON BACKGROUND */}
            <nav className="absolute top-[28px] w-[90%] flex justify-between z-50 font-sans text-[13px] tracking-[0.18em] text-[#3a3a3a] uppercase">
                <div className="flex gap-7">
                    <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
                    <Link href="/services" className="hover:text-charcoal transition-colors">Services</Link>
                    <Link href="/classes" className="hover:text-charcoal transition-colors">Classes</Link>
                </div>
                <div className="flex gap-7">
                    <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
                    <Link href="/schedule" className="hover:text-charcoal transition-colors">Schedule</Link>
                    <Link href="/book" className="font-semibold border-b border-[#3a3a3a] hover:text-charcoal transition-colors">Book</Link>
                </div>
            </nav>

            {/* CENTER LOGO + NAME STACK */}
            <div className="absolute top-[16%] text-center z-30">
                <div className="relative w-[220px] h-auto mx-auto mb-[18px]">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Logo"
                        width={220}
                        height={220}
                        className="object-contain"
                        priority
                    />
                </div>
                <h1 className="font-serif text-[64px] tracking-[0.12em] text-[#1f1f1f] m-0 leading-tight">
                    JACLYN MUIR
                </h1>
                <p className="mt-[12px] font-sans text-[14px] tracking-[0.22em] text-[#7a8a7a] uppercase">
                    Yoga · Yoga Therapy · Reiki
                </p>
            </div>

            {/* CUTOUT SUBJECT — FLOATING LIKE SUN YOGA */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 h-[75vh] max-h-[850px] w-[100vw] z-10 pointer-events-none">
                <Image
                    src="/images/hero-studio.png"
                    alt="Jaclyn Muir"
                    fill
                    className="object-contain object-bottom filter brightness-[1.1] contrast-[1.08] saturate-[1.05]"
                    style={{
                        background: 'transparent',
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
                    }}
                    priority
                />
            </div>

        </section>
    );
}

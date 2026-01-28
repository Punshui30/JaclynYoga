'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center bg-[#f4ede4]">

            {/* 1. THE UNIFIED HERO IMAGE (Subject + Background Integrated) */}
            {/* Using a single photo allows us to match the Sun Yoga lighting/composition without any checkerboard issues. */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/images/hero-final.png"
                    alt="Jaclyn Muir Meditation"
                    fill
                    className="object-cover object-bottom filter brightness-[1.05] contrast-[1.02]"
                    priority
                />
            </div>

            {/* 2. NAVIGATION OVERLAY (Minimal & Integrated) */}
            <nav className="absolute top-[28px] w-[90%] flex justify-between z-50 font-sans text-[12px] md:text-[13px] tracking-[0.18em] text-[#3a3a3a] uppercase">
                <div className="flex gap-10 md:gap-14">
                    <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
                    <Link href="/services" className="hover:text-charcoal transition-colors">Services</Link>
                    <Link href="/classes" className="hover:text-charcoal transition-colors">Classes</Link>
                </div>
                <div className="flex gap-10 md:gap-14">
                    <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
                    <Link href="/schedule" className="hover:text-charcoal transition-colors">Schedule</Link>
                    <Link href="/book" className="font-semibold border-b border-[#3a3a3a] hover:text-charcoal transition-colors">Book</Link>
                </div>
            </nav>

            {/* 3. CENTER LOGO + NAME STACK */}
            <div className="absolute top-[12%] md:top-[16%] text-center z-30">
                <div className="relative w-[180px] md:w-[220px] h-[180px] md:h-[220px] mx-auto mb-[18px]">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h1 className="font-serif text-[42px] md:text-[64px] tracking-[0.12em] text-[#1f1f1f] m-0 leading-tight uppercase font-light">
                    JACLYN MUIR
                </h1>
                <p className="mt-[12px] font-sans text-[12px] md:text-[14px] tracking-[0.22em] text-[#7a8a7a] uppercase font-bold">
                    Yoga · Yoga Therapy · Reiki
                </p>
            </div>

        </section>
    );
}

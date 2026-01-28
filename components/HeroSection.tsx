'use client';
// Build Marker: 2026-01-28T11:15:00 REFINED LAYOUT

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col items-center bg-[linear-gradient(to_bottom,#f4ede4_0%,#efe3d6_40%,#e6d6c6_100%)]">

            {/* 1. NAVIGATION (TOP OVERLAY) */}
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

            {/* 2. CENTERED STACK: LOGO -> SUBJECT -> TEXT */}
            <div className="relative flex flex-col items-center justify-center h-full w-full z-10 pt-10">

                {/* LOGO (ABOVE HER) */}
                <div className="relative w-[150px] md:w-[180px] h-[150px] md:h-[180px] mb-8 animate-fade-in">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* SUBJECT (CENTER) - SMALLER SCALE */}
                <div className="relative w-full max-w-[45vh] h-[45vh] animate-fade-in-up [animation-duration:1.5s]">
                    <Image
                        src="/images/hero-blend-v20.png"
                        alt="Jaclyn Muir"
                        fill
                        className="object-contain object-center mix-blend-multiply"
                        style={{
                            background: 'transparent'
                        }}
                        priority
                    />
                </div>

                {/* TEXT (UNDERNEATH HER) */}
                <div className="text-center mt-8 space-y-4 animate-fade-in [animation-delay:600ms] forwards">
                    <h1 className="font-serif text-[42px] md:text-[56px] tracking-[0.15em] text-[#1f1f1f] m-0 leading-tight uppercase font-light">
                        JACLYN MUIR
                    </h1>
                    <p className="font-sans text-[12px] md:text-[14px] tracking-[0.3em] text-[#7a8a7a] uppercase font-bold">
                        Yoga · Yoga Therapy · Reiki
                    </p>
                </div>

            </div>

        </section>
    );
}

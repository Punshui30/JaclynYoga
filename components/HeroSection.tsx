'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function HeroSection() {
    // Parallax mouse movement
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 100 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
    const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
    const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) - 0.5;
        const y = (clientY / innerHeight) - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#f4ede4]"
        >

            {/* 1. MID-SCREEN NAVIGATION (Sun Yoga Style) */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-50 flex justify-between items-center px-8 md:px-20 lg:px-32 pointer-events-none">
                <nav className="flex flex-col gap-10 md:gap-14 text-[13px] tracking-[0.25em] text-[#3a3a3a] uppercase pointer-events-auto">
                    <Link href="/about" className="hover:opacity-60 transition-opacity">About</Link>
                    <Link href="/services" className="hover:opacity-60 transition-opacity">Offerings</Link>
                    <Link
                        href="https://www.rootsandriveryoga.com/classes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                    >
                        Brunswick
                    </Link>
                </nav>
                <nav className="flex flex-col gap-10 md:gap-14 text-[13px] tracking-[0.25em] text-[#3a3a3a] uppercase pointer-events-auto text-right">
                    <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
                    <Link href="/schedule" className="hover:text-charcoal transition-colors">Schedule</Link>
                    <Link
                        href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold border-b-2 border-[#3a3a3a] hover:opacity-60 transition-opacity"
                    >
                        Book a Private Session
                    </Link>
                </nav>
            </div>

            {/* 2. CENTERED STACK: LOGO -> SUBJECT -> TEXT */}
            <div className="relative flex flex-col items-center justify-between h-[90vh] w-full z-20 pointer-events-none pt-2 pb-8">

                {/* LOGO (ABOVE HER) - SCALED UP FOR MOBILE */}
                <div className="relative w-[240px] md:w-[320px] h-[240px] md:h-[320px] z-30 pointer-events-auto">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* SUBJECT (CENTER) - BAREFOOT & LARGER SCALE & FEATHERED BLEND */}
                <motion.div
                    style={{
                        rotateX, rotateY,
                        x: translateX, y: translateY,
                        perspective: 1000
                    }}
                    className="relative w-full max-w-[55vh] h-[55vh] md:max-w-[65vh] md:h-[65vh] pointer-events-auto"
                >
                    <div
                        className="absolute inset-0 rounded-full blur-3xl opacity-30"
                        style={{
                            background: 'radial-gradient(circle, rgba(255,200,150,0.4) 0%, rgba(255,180,120,0.2) 50%, transparent 70%)',
                            transform: 'scale(1.2)',
                            zIndex: -1
                        }}
                    />
                    <Image
                        src="/images/hero-final-solid.png"
                        alt="Jaclyn Muir Meditation"
                        fill
                        className="object-contain object-center"
                        style={{
                            // ARCHITECTURAL FEATHERING:
                            // We use a radial mask to fade the image edges. 
                            // Since the image background is #f4ede4 and the site background is #f4ede4,
                            // this feathering makes the transition mathematically invisible.
                            maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
                        }}
                        priority
                    />
                </motion.div>

                {/* TEXT (UNDERNEATH HER) */}
                <div className="text-center z-30 pointer-events-auto space-y-4">
                    <div className="animate-fade-in [animation-delay:600ms] forwards">
                        <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[76px] tracking-[0.2em] text-[#1f1f1f] m-0 leading-tight uppercase font-light">
                            JACLYN MUIR
                        </h1>
                        <p className="font-sans text-[9px] md:text-[11px] tracking-[0.3em] text-[#7a8a7a]/80 uppercase font-semibold mt-2">
                            MS, E-RYT 200, RYT 500, C-IAYT
                        </p>
                        <p className="font-sans text-[11px] md:text-[13px] tracking-[0.45em] text-[#7a8a7a] uppercase font-bold mt-4">
                            Yoga · Yoga Therapy · Reiki
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}

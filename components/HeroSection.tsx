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
            className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,#f4ede4_0%,#efe3d6_40%,#e6d6c6_100%)]"
        >

            {/* 1. MID-SCREEN NAVIGATION (Sun Yoga Style) */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-50 flex justify-between items-center px-10 md:px-24 lg:px-32 pointer-events-none">
                <nav className="flex flex-col gap-10 md:gap-14 text-[13px] tracking-[0.25em] text-[#3a3a3a] uppercase pointer-events-auto">
                    <Link href="/about" className="hover:opacity-60 transition-opacity">About</Link>
                    <Link href="/services" className="hover:opacity-60 transition-opacity">Services</Link>
                    <Link
                        href="https://www.rootsandriveryoga.com/classes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                    >
                        Classes
                    </Link>
                </nav>
                <nav className="flex flex-col gap-10 md:gap-14 text-[13px] tracking-[0.25em] text-[#3a3a3a] uppercase pointer-events-auto text-right">
                    <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
                    <Link href="/schedule" className="hover:opacity-60 transition-opacity">Schedule</Link>
                    <Link href="/book" className="font-bold border-b-2 border-[#3a3a3a] hover:opacity-60 transition-opacity">Book</Link>
                </nav>
            </div>

            {/* 2. CENTERED STACK: LOGO -> SUBJECT -> TEXT */}
            <div className="relative flex flex-col items-center justify-between h-[85vh] w-full z-20 pointer-events-none pt-4 pb-8">

                {/* LOGO (ABOVE HER) - SCALED UP (240px) */}
                <div className="relative w-[180px] md:w-[240px] h-[180px] md:h-[240px] z-30 pointer-events-auto">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* SUBJECT (CENTER) - BAREFOOT & ORIGINAL FACE & PURE BLEND */}
                <motion.div
                    style={{
                        rotateX, rotateY,
                        x: translateX, y: translateY,
                        perspective: 1200
                    }}
                    className="relative w-full max-w-[48vh] h-[48vh] md:max-w-[58vh] md:h-[58vh] pointer-events-auto"
                >
                    <Image
                        src="/images/hero-final-v29.png"
                        alt="Jaclyn Muir Meditation"
                        fill
                        className="object-contain object-center mix-blend-multiply"
                        style={{
                            // Stronger radial mask to handle any white-bleed at the edges
                            maskImage: 'radial-gradient(circle at center, black 50%, transparent 95%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 95%)'
                        }}
                        priority
                    />
                </motion.div>

                {/* TEXT (UNDERNEATH HER) */}
                <div className="text-center z-30 pointer-events-auto space-y-5">
                    <div className="animate-fade-in [animation-delay:600ms] forwards">
                        <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[76px] tracking-[0.2em] text-[#1f1f1f] m-0 leading-tight uppercase font-light">
                            JACLYN MUIR
                        </h1>
                        <p className="font-sans text-[11px] md:text-[13px] tracking-[0.45em] text-[#7a8a7a] uppercase font-bold">
                            Yoga · Yoga Therapy · Reiki
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}

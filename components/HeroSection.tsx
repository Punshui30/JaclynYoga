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
                <nav className="flex flex-col gap-10 md:gap-12 text-[12px] md:text-[13px] tracking-[0.2em] text-[#3a3a3a] uppercase pointer-events-auto">
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
                <nav className="flex flex-col gap-10 md:gap-12 text-[12px] md:text-[13px] tracking-[0.2em] text-[#3a3a3a] uppercase pointer-events-auto text-right">
                    <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
                    <Link href="/schedule" className="hover:text-charcoal transition-colors">Schedule</Link>
                    <Link href="/book" className="font-bold border-b-2 border-[#3a3a3a] hover:opacity-60 transition-opacity">Book</Link>
                </nav>
            </div>

            {/* 2. CENTERED STACK: LOGO -> SUBJECT -> TEXT */}
            <div className="relative flex flex-col items-center justify-between h-[82vh] w-full z-20 pointer-events-none pt-4 pb-6">

                {/* LOGO (ABOVE HER) */}
                <div className="relative w-[120px] md:w-[140px] h-[120px] md:h-[140px] z-30 pointer-events-auto">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* SUBJECT (CENTER) - BAREFOOT & ORIGINAL FACE */}
                {/* Size tuned to find middle ground after feedback */}
                <motion.div
                    style={{
                        rotateX, rotateY,
                        x: translateX, y: translateY,
                        perspective: 1000
                    }}
                    className="relative w-full max-w-[40vh] h-[40vh] md:max-w-[46vh] md:h-[46vh] pointer-events-auto"
                >
                    <Image
                        src="/images/hero-barefoot-v27.png"
                        alt="Jaclyn Muir Meditation"
                        fill
                        className="object-contain object-center"
                        priority
                    />
                </motion.div>

                {/* TEXT (UNDERNEATH HER) */}
                <div className="text-center z-30 pointer-events-auto space-y-4">
                    <div className="animate-fade-in [animation-delay:600ms] forwards">
                        <h1 className="font-serif text-[42px] md:text-[60px] lg:text-[68px] tracking-[0.18em] text-[#1f1f1f] m-0 leading-tight uppercase font-light">
                            JACLYN MUIR
                        </h1>
                        <p className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[#7a8a7a] uppercase font-bold">
                            Yoga · Yoga Therapy · Reiki
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function HeroSection() {
    // Parallax mouse movement
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for parallax
    const springConfig = { damping: 25, stiffness: 100 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
    const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
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

            {/* 1. MID-SCREEN NAVIGATION (Split like Sun Yoga) */}
            {/* Positioned at Exactly 50% vertical, on the edges */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-40 hidden md:flex justify-between items-center px-12 md:px-24 lg:px-32 pointer-events-none">
                <nav className="flex gap-14 text-[13px] tracking-[0.22em] text-[#3a3a3a] uppercase pointer-events-auto">
                    <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
                    <Link href="/services" className="hover:text-charcoal transition-colors">Services</Link>
                    <Link href="/classes" className="hover:text-charcoal transition-colors">Classes</Link>
                </nav>
                <nav className="flex gap-14 text-[13px] tracking-[0.22em] text-[#3a3a3a] uppercase pointer-events-auto text-right">
                    <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
                    <Link href="/schedule" className="hover:text-charcoal transition-colors">Schedule</Link>
                    <Link href="/book" className="font-semibold border-b border-[#3a3a3a] hover:text-charcoal transition-colors">Book</Link>
                </nav>
            </div>

            {/* Mobile Nav Overlay */}
            <nav className="md:hidden absolute top-[28px] w-full px-8 flex justify-between z-50 text-[11px] tracking-[0.18em] text-[#3a3a3a] uppercase">
                <div className="flex gap-6">
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                </div>
                <div className="flex gap-6 text-right">
                    <Link href="/contact">Contact</Link>
                    <Link href="/book" className="font-bold border-b border-[#3a3a3a]">Book</Link>
                </div>
            </nav>

            {/* 2. CENTERED VERTICAL STACK: LOGO -> SUBJECT -> TEXT */}
            <div className="relative flex flex-col items-center justify-center w-full h-full z-20 pointer-events-none">

                {/* LOGO (ABOVE HER) */}
                <div className="mb-12 md:mb-16 z-30 pointer-events-auto">
                    <div className="relative w-[130px] md:w-[150px] h-[130px] md:h-[150px]">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* SUBJECT (CENTER) - PRECISE SCALE & PARALLAX */}
                {/* We use mix-blend-multiply on the wrapper to kill the white background */}
                <motion.div
                    style={{
                        rotateX, rotateY,
                        x: translateX, y: translateY,
                        perspective: 1000
                    }}
                    className="relative w-full max-w-[35vh] h-[35vh] pointer-events-auto mix-blend-multiply"
                >
                    <Image
                        src="/images/hero-touched-up.png"
                        alt="Jaclyn Muir"
                        fill
                        className="object-contain object-center filter brightness-105 contrast-105"
                        priority
                    />
                </motion.div>

                {/* TEXT (UNDERNEATH HER) */}
                <div className="mt-12 md:mt-16 text-center z-30 pointer-events-auto">
                    <div className="space-y-5">
                        <h1 className="font-serif text-[42px] md:text-[56px] tracking-[0.18em] text-[#1f1f1f] m-0 leading-tight uppercase font-light">
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AbstractMotif } from './AbstractMotif';

import { WoodGrain } from './WoodGrain';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-background px-6 py-24">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border/40 min-h-[600px] shadow-sm">
                {/* Left: Content Side - Architecture & Space */}
                <div className="flex flex-col p-8 lg:p-12 bg-background relative z-10 border-b lg:border-b-0 lg:border-r border-border/40 overflow-hidden min-h-[600px] lg:min-h-[700px] group">
                    {/* Ash Wood Grain Background Texture - Increased visibility */}
                    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none overflow-hidden">
                        <WoodGrain className="w-full h-full text-primary/30" />
                    </div>

                    {/* Logo Container - Controlled height to prevent pushing buttons */}
                    <div className="flex-1 flex items-center justify-center relative z-20 w-full overflow-hidden">
                        <div className="relative w-full max-w-sm lg:max-w-md h-[300px] lg:h-[450px] transition-all duration-700">
                            <Image
                                src="/images/logo-v3.png"
                                alt="Jaclyn Muir Hamsa Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Buttons at the bottom and centered */}
                    <div className="flex flex-col sm:flex-row gap-5 z-20 w-full justify-center mt-6 mb-4">
                        <Link
                            href="/booking"
                            className="px-10 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-none text-center border border-transparent shadow-sm"
                        >
                            Book Session
                        </Link>
                        <Link
                            href="/services"
                            className="px-10 py-4 border border-border/60 text-primary text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all duration-300 rounded-none text-center"
                        >
                            Explore Offering
                        </Link>
                    </div>
                </div>

                {/* Right: Quarter/Half Page Hero Image Block */}
                <div className="relative h-96 lg:h-auto bg-muted/20 overflow-hidden">
                    <Image
                        src="/images/hero-new.webp"
                        alt="Serene Environment"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for 'moody' farmhouse effect */}
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

                    <div className="absolute bottom-12 left-12 right-12 text-white/90 z-20">
                        <div className="h-[1px] w-full bg-white/30 mb-6" />
                        <div className="flex justify-between items-end">
                            <span className="text-xs uppercase tracking-[0.3em]">Restorative • Care</span>
                            <span className="font-serif italic text-2xl">Est. 2024</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture/Lines */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-background z-20 hidden lg:block" />
        </section>
    );
}

'use client';

import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="relative min-h-[95vh] w-full bg-stone flex flex-col items-center pt-32 pb-0 overflow-hidden">

            {/* 1. BRAND ANCHOR (TOP CENTER) */}
            <div className="relative z-10 flex flex-col items-center space-y-8 animate-fade-in-up">

                {/* Logo - Large Premium Scale */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                    <Image
                        src="/images/logo.png"
                        alt="Jaclyn Muir Hamsa"
                        fill
                        className="object-contain drop-shadow-sm"
                        priority
                    />
                </div>

                {/* Typography Stack */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal tracking-[0.05em] leading-tight">
                        JACLYN MUIR
                    </h1>
                    <p className="text-xs md:text-sm font-sans tracking-[0.3em] text-sage font-medium uppercase">
                        Yoga · Yoga Therapy · Reiki
                    </p>
                </div>

            </div>

            {/* 2. SCULPTURAL CENTERPIECE (CUT-OUT) */}
            {/* Negative margin to pull it UP towards the text, or padding to space it? 
                "Center composition... centered or slightly elevated"
                We want it to feel grounded but sculptural.
            */}
            <div className="relative w-full flex-grow flex items-end justify-center mt-8 md:mt-12">
                <div className="relative w-full max-w-[90vh] h-[55vh] md:h-[65vh] lg:h-[70vh]">
                    <Image
                        src="/images/hero-cutout.png"
                        alt="Jaclyn Muir Meditation"
                        fill
                        className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(30,30,30,0.15)]" // Soft elliptical shadow handled by CSS drop-shadow if not in image, or image has it. Code request said "Add subtle ambient grounding shadow". I'll add CSS drop-shadow to be safe/enhance.
                        priority
                    />
                </div>
            </div>

            {/* Optional: Subtle Texture/Grain Overlay if desired, but user said "NO texture overlays". So keeping it clean. */}
        </section>
    );
}


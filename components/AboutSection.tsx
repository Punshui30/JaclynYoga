'use client';

import Link from 'next/link';
import Image from 'next/image';

export function AboutSection() {
    return (
        <section className="py-60 md:py-80 bg-stone/40 px-8 md:px-20 lg:px-32 relative overflow-hidden luxury-rhythm">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start relative z-10">

                {/* LEFT: MISSION & COPY (7 COLUMNS) */}
                <div className="lg:col-span-7 space-y-32 order-2 lg:order-1">
                    <div className="space-y-12">
                        <p className="micro-eyebrow text-charcoal/40">
                            The Practice
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif text-charcoal tracking-[0.08em] leading-[1.3] uppercase transition-all duration-1000">
                            BRIDGING CLINICAL RIGOR <br />
                            WITH SPIRITUAL REFINEMENT
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-start">
                        <div className="space-y-16 text-charcoal/60 text-base md:text-lg font-sans leading-relaxed lowercase italic tracking-wide border-l border-charcoal/10 pl-10">
                            <p>
                                Jaclyn Muir is a board-certified yoga therapist specializing in the architectural restoration of the nervous system. Her private practice is a curated sanctuary for those seeking to reconnect with their innate capacity for balance.
                            </p>
                            <p>
                                By bridging the latest research in clinical regulation with time-honored restorative practices, she offers a profound, evidence-led approach to holistic wellness.
                            </p>
                            <div className="pt-8">
                                <Link
                                    href="/about"
                                    className="px-16 py-7 bg-charcoal text-stone font-sans text-[10px] uppercase tracking-[0.6em] font-bold transition-all hover:bg-sage hover:text-charcoal inline-block shadow-sm"
                                >
                                    The Biography
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-20 py-8 md:py-0 border-t md:border-t-0 md:border-l border-charcoal/5 md:pl-16">
                            <div className="space-y-12">
                                <p className="text-[11px] font-sans font-bold text-charcoal uppercase tracking-[0.6em]">Professional Matrix</p>
                                <ul className="space-y-12">
                                    <li className="space-y-4">
                                        <p className="text-charcoal/20 text-[9px] uppercase tracking-[0.4em] font-bold">Clinical Discipline</p>
                                        <p className="text-charcoal text-lg font-serif italic tracking-wide lowercase">MS in Yoga Therapy</p>
                                    </li>
                                    <li className="space-y-4">
                                        <p className="text-charcoal/20 text-[9px] uppercase tracking-[0.4em] font-bold">Board Standard</p>
                                        <p className="text-charcoal text-lg font-serif italic tracking-wide lowercase">C-IAYT Board Certified</p>
                                    </li>
                                    <li className="space-y-4">
                                        <p className="text-charcoal/20 text-[9px] uppercase tracking-[0.4em] font-bold">Holistic Mastery</p>
                                        <p className="text-charcoal text-lg font-serif italic tracking-wide lowercase">Reiki II Practitioner</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: EDITORIAL ANCHOR (5 COLUMNS) */}
                <div className="lg:col-span-12 xl:col-span-5 relative group order-1 lg:order-2 self-stretch">
                    <div className="relative h-[60vh] lg:h-full min-h-[500px] border border-charcoal/5 overflow-hidden transform transition-all duration-1000 group-hover:scale-[1.01]">
                        <Image
                            src="/images/jaclyn-headshot.webp"
                            alt="Jaclyn Muir Profile"
                            fill
                            className="object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.9] transition-all duration-1000 group-hover:grayscale-0"
                        />
                        {/* ARCHITECTURAL VEIL */}
                        <div className="absolute inset-0 bg-stone/10 mix-blend-multiply pointer-events-none" />
                    </div>
                    {/* GRID ANCHOR LABEL */}
                    <div className="absolute -top-6 -left-6 bg-background border border-charcoal/5 px-8 py-5 hidden xl:block shadow-sm">
                        <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-charcoal/30 italic">clinical series no. 02</p>
                    </div>
                </div>
            </div>

            {/* ARCHITECTURAL VERTICAL MOTIF */}
            <div className="absolute top-0 right-[41.66%] w-[1px] h-full bg-charcoal/5 pointer-events-none" />
        </section>
    );
}

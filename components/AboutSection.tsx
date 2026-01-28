import Link from 'next/link';
import Image from 'next/image';

export function AboutSection() {
    return (
        <section className="py-48 bg-bone px-8 md:px-20 lg:px-32 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

                {/* LEFT: MISSION & COPY (7 COLUMNS) */}
                <div className="lg:col-span-7 space-y-24 order-2 lg:order-1">
                    <div className="space-y-12">
                        <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">
                            The Practice
                        </p>
                        <h2 className="text-3xl md:text-5xl font-serif text-charcoal tracking-[0.05em] leading-[1.1]">
                            BRIDGING CLINICAL RIGOR <br />
                            WITH SPIRITUAL REFINEMENT
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                        <div className="space-y-12 text-charcoal/60 text-sm md:text-base font-sans leading-relaxed lowercase italic tracking-wide">
                            <p>
                                Jaclyn Muir is a certified yoga therapist specializing in the architectural restoration of the nervous system. Her private practice is a curated sanctuary for those seeking to reconnect with their innate capacity for balance.
                            </p>
                            <p>
                                By bridging the latest research in clinical regulation with time-honored restorative practices, she offers a profound, evidence-led approach to holistic wellness.
                            </p>
                            <div className="pt-8">
                                <Link
                                    href="/about"
                                    className="px-14 py-6 bg-charcoal text-white font-sans text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:bg-sage hover:text-charcoal inline-block"
                                >
                                    The Biography
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-16 py-4 md:py-0 border-t md:border-t-0 md:border-l border-charcoal/10 md:pl-16">
                            <div className="space-y-10">
                                <p className="text-[11px] font-sans font-bold text-charcoal uppercase tracking-[0.3em]">Credentials</p>
                                <ul className="space-y-10">
                                    <li className="space-y-3">
                                        <p className="text-charcoal/30 text-[9px] uppercase tracking-[0.4em] font-bold">Clinical</p>
                                        <p className="text-charcoal text-base font-serif italic tracking-wide">MS in Yoga Therapy</p>
                                    </li>
                                    <li className="space-y-3">
                                        <p className="text-charcoal/30 text-[9px] uppercase tracking-[0.4em] font-bold">Standard</p>
                                        <p className="text-charcoal text-base font-serif italic tracking-wide">C-IAYT Board Certified</p>
                                    </li>
                                    <li className="space-y-3">
                                        <p className="text-charcoal/30 text-[9px] uppercase tracking-[0.4em] font-bold">Holistic</p>
                                        <p className="text-charcoal text-base font-serif italic tracking-wide">Reiki II Practitioner</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: DECORATIVE ANCHOR (5 COLUMNS) */}
                <div className="lg:col-span-12 xl:col-span-5 relative h-[60vh] lg:h-[80vh] border border-charcoal/5 order-1 lg:order-2 self-stretch">
                    <div className="absolute inset-0 grayscale-[0.5] contrast-[1.1] brightness-[0.95]">
                        <Image
                            src="/images/jaclyn-headshot.webp"
                            alt="Jaclyn Muir Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

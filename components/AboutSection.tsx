import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="py-40 bg-background px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative group lg:order-2">
                    <div className="absolute -inset-6 bg-linen rounded-[3rem] -z-10 transition-transform duration-1000" />
                    <div className="bg-white p-12 md:p-16 lg:p-24 rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-stone/30">
                        <div className="space-y-4 mb-12">
                            <p className="micro-eyebrow opacity-60">The Mission</p>
                            <h2 className="text-3xl lg:text-4xl font-serif text-charcoal leading-none">
                                Creating space for <br />
                                <span className="italic text-secondary/90">authentic healing</span>
                            </h2>
                        </div>
                        <div className="space-y-10 text-base lg:text-lg text-charcoal-soft font-sans leading-relaxed tracking-wide">
                            <p>
                                Jaclyn Muir is a certified yoga therapist specializing in the intersection of clinical wisdom and ancestral healing. Her practice is a curated sanctuary for those seeking to reconnect with their innate capacity for balance.
                            </p>
                            <p>
                                By bridging the latest research in nervous system regulation with time-honored restorative practices, she offers a profound clinical approach to holistic wellness.
                            </p>
                        </div>

                        <div className="mt-16 pt-10 hairline opacity-30">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-4 text-charcoal/80 font-bold uppercase tracking-[0.25em] text-[10px] hover:text-primary transition-all group"
                            >
                                <span className="relative">
                                    The Full Biography
                                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                </span>
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="lg:order-1 space-y-20">
                    <div className="space-y-6">
                        <h3 className="micro-eyebrow text-primary">Foundations & Training</h3>
                        <div className="hairline w-8 opacity-40 ml-0" />
                    </div>

                    <div className="space-y-16 max-w-lg">
                        <div className="flex gap-10 items-start group">
                            <div className="mt-1 text-stone group-hover:text-primary transition-colors duration-500">
                                <BadgeCheck size={26} strokeWidth={1} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-serif text-charcoal opacity-90">Clinical MS in Yoga Therapy</h4>
                                <p className="text-charcoal-soft leading-relaxed font-sans text-sm lg:text-base opacity-80">Rigorous clinical scholarship in the physiological application of yoga.</p>
                            </div>
                        </div>

                        <div className="flex gap-10 items-start group">
                            <div className="mt-1 text-stone group-hover:text-primary transition-colors duration-500">
                                <BadgeCheck size={26} strokeWidth={1} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-serif text-charcoal opacity-90">C-IAYT Board Certification</h4>
                                <p className="text-charcoal-soft leading-relaxed font-sans text-sm lg:text-base opacity-80">The global benchmark for professional yoga therapy standards.</p>
                            </div>
                        </div>

                        <div className="flex gap-10 items-start group">
                            <div className="mt-1 text-stone group-hover:text-primary transition-colors duration-500">
                                <BadgeCheck size={26} strokeWidth={1} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-serif text-charcoal opacity-90">Reiki II & Holistic Energy</h4>
                                <p className="text-charcoal-soft leading-relaxed font-sans text-sm lg:text-base opacity-80">Subtle work for nervous system recalibration and energy balance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Architecture branding echo */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] border border-stone/10 rounded-full -translate-x-1/2 -translate-y-1/2 -z-20 pointer-events-none" />
        </section>
    );
}

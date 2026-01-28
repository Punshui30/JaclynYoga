import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="py-32 bg-background px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative group lg:order-2">
                    <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] transform -rotate-1 -z-10 group-hover:rotate-0 transition-transform duration-1000" />
                    <div className="bg-white p-10 md:p-14 lg:p-20 rounded-2xl shadow-[0_10px_40px_-15px_rgba(43,43,43,0.08)] border border-warm-gray-light">
                        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal mb-10 leading-tight">
                            Creating space for <br />
                            <span className="italic text-secondary">authentic healing</span>
                        </h2>
                        <div className="space-y-8 text-base lg:text-lg text-charcoal-soft font-sans leading-relaxed">
                            <p>
                                Jaclyn Muir is a certified yoga therapist with a MS in Yoga Therapy. Her work focuses on creating safe, compassionate spaces for self-connection.
                            </p>
                            <p>
                                Bridging modern science and holistic energy healing to provide comprehensive support for her clients.
                            </p>
                        </div>

                        <div className="mt-14 pt-10 hairline lg:pt-14">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-[11px] hover:text-secondary transition-colors group"
                            >
                                Read Jaclyn's Biography
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="lg:order-1 space-y-16">
                    <div className="space-y-6">
                        <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary font-sans font-bold">Foundations & Training</h3>
                        <div className="hairline w-12" />
                    </div>

                    <div className="space-y-12">
                        <div className="flex gap-8 items-start group">
                            <div className="mt-1 text-secondary transition-transform group-hover:scale-110 duration-500">
                                <BadgeCheck size={28} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-serif text-charcoal">MS in Yoga Therapy</h4>
                                <p className="text-charcoal-soft leading-relaxed font-sans text-sm lg:text-base">Comprehensive clinical training in the therapeutic application of yoga.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 items-start group">
                            <div className="mt-1 text-secondary transition-transform group-hover:scale-110 duration-500">
                                <BadgeCheck size={28} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-serif text-charcoal">C-IAYT Certified</h4>
                                <p className="text-charcoal-soft leading-relaxed font-sans text-sm lg:text-base">International Association of Yoga Therapists accreditation.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 items-start group">
                            <div className="mt-1 text-secondary transition-transform group-hover:scale-110 duration-500">
                                <BadgeCheck size={28} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-serif text-charcoal">Reiki II Practitioner</h4>
                                <p className="text-charcoal-soft leading-relaxed font-sans text-sm lg:text-base">Energy-based relaxation and nervous system support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo geometry repetition: Very subtle background circle */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-warm-gray/5 rounded-full -translate-x-1/2 -translate-y-1/2 -z-20 pointer-events-none" />
        </section>
    );
}

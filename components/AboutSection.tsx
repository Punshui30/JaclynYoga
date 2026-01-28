import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="py-24 bg-background px-6 relative overflow-hidden border-t border-border/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative group lg:order-2">
                    {/* Soft background shape */}
                    <div className="absolute -inset-4 bg-[#D8E4DA]/30 rounded-[2rem] transform -rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-700" />
                    <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-[1.5rem] border border-white/60 shadow-sm">
                        <h2 className="text-3xl font-serif text-foreground mb-8 leading-tight">
                            Creating space for <br />
                            <span className="italic text-[#C6A38B]">authentic healing & connection</span>
                        </h2>
                        <div className="space-y-6 text-base lg:text-lg text-foreground/80 leading-relaxed font-sans">
                            <p>
                                Jaclyn Muir is a certified yoga therapist and wellness practitioner with a Master of Science in Yoga Therapy. Her work focuses on creating safe, compassionate spaces where individuals can explore movement, breath, and awareness in ways that support healing and authentic self-connection.
                            </p>
                            <p>
                                With a background rooted in both clinical understanding and ancient wisdom, Jaclyn bridges the gap between modern science and holistic energy healing to provide comprehensive support for her clients.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-foreground/5">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-[#9FAF9A] font-medium hover:text-[#C6A38B] transition-colors group"
                            >
                                Read Jaclyn's Biography
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="lg:order-1">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-semibold mb-12">Foundations & Training</h3>
                    <div className="space-y-10">
                        <div className="flex gap-6 items-start">
                            <div className="mt-1 text-[#C6A38B]">
                                <BadgeCheck size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif text-foreground mb-2">Master of Science in Yoga Therapy</h4>
                                <p className="text-foreground/70 leading-relaxed font-sans text-sm lg:text-base">Comprehensive clinical training in the therapeutic application of yoga for physical and mental health.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="mt-1 text-[#C6A38B]">
                                <BadgeCheck size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif text-foreground mb-2">C-IAYT Certified</h4>
                                <p className="text-foreground/70 leading-relaxed font-sans text-sm lg:text-base">International Association of Yoga Therapists accreditation, ensuring the highest standard of practice.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="mt-1 text-[#C6A38B]">
                                <BadgeCheck size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif text-foreground mb-2">Energy Healing Mastery</h4>
                                <p className="text-foreground/70 leading-relaxed font-sans text-sm lg:text-base">Reiki II Certified practitioner specializing in nervous system support and relaxation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

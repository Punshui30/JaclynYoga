import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="py-24 bg-background px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-accent/5 rounded-sm transform lg:translate-x-4 lg:translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                    <div className="bg-muted p-8 md:p-12 lg:p-16 rounded-sm border border-border/40">
                        <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">
                            Creating space for <br />
                            <span className="italic text-accent">authentic healing & connection</span>
                        </h2>
                        <div className="space-y-6 text-lg text-secondary leading-relaxed">
                            <p>
                                Jaclyn Muir is a certified yoga therapist and wellness practitioner with a Master of Science in Yoga Therapy. Her work focuses on creating safe, compassionate spaces where individuals can explore movement, breath, and awareness in ways that support healing and authentic self-connection.
                            </p>
                            <p>
                                With a background rooted in both clinical understanding and ancient wisdom, Jaclyn bridges the gap between modern science and holistic energy healing to provide comprehensive support for her clients.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-border/40">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group"
                            >
                                Read Jaclyn's Biography
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="lg:pl-8">
                    <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-12">Foundations & Training</h3>
                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="mt-1 text-gold">
                                <BadgeCheck size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif text-primary mb-2">Master of Science in Yoga Therapy</h4>
                                <p className="text-secondary leading-relaxed">Comprehensive clinical training in the therapeutic application of yoga for physical and mental health.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="mt-1 text-gold">
                                <BadgeCheck size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif text-primary mb-2">C-IAYT Certified</h4>
                                <p className="text-secondary leading-relaxed">International Association of Yoga Therapists accreditation, ensuring the highest standard of practice.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="mt-1 text-gold">
                                <BadgeCheck size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif text-primary mb-2">Energy Healing Mastery</h4>
                                <p className="text-secondary leading-relaxed">Reiki II Certified practitioner specializing in nervous system support and relaxation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

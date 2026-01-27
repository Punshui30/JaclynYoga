import Image from 'next/image';
import { HeroSection } from '@/components/HeroSection';

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="py-24 px-6 bg-muted/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-8">The Practitioner</h3>
                    <h1 className="text-5xl md:text-6xl font-serif text-primary mb-10 leading-tight">
                        About <span className="italic text-accent">Jaclyn Muir</span>
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed">
                        Certified Yoga Therapist, Wellness Practitioner, and dedicated guide on the path to holistic health.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <div className="space-y-12 text-lg text-secondary leading-relaxed">
                        <section>
                            <h2 className="text-3xl font-serif text-primary mb-8">Professional Journey</h2>
                            <p className="mb-6">
                                Jaclyn Muir’s path to yoga therapy began with a profound interest in the intersection of physical movement and mental resilience. Holding a Master of Science in Yoga Therapy, she has dedicated years to understanding the clinical applications of yoga for a wide range of health conditions.
                            </p>
                            <p className="mb-6">
                                As a C-IAYT Certified Yoga Therapist, Jaclyn adheres to the highest standards of professional practice, bringing a grounded, evidence-based approach to every session. Her training is not just about the poses, but about the physiological and psychological impact of breath, awareness, and intentional movement.
                            </p>
                            <p>
                                Beyond yoga therapy, Jaclyn is a Reiki II Certified practitioner. This allow her to offer a unique blend of active somatic work and passive energy healing, catering to the diverse needs of her clients—from those seeking recovery from physical injury to those navigating complex nervous system challenges.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif text-primary mt-12 mb-8">A Compassionate Philosophy</h2>
                            <p className="mb-6">
                                Jaclyn believes that healing is an authentic self-connection process. Her role is not to "fix," but to create a safe, compassionate container where individuals can explore their own capacity for balance and resilience.
                            </p>
                            <p>
                                Her approach is warm, grounded, and professional. She avoids overly mystical language in favor of clear, intelligent communication that empowers her clients to understand their own bodies and minds more deeply.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-12">
                        {/* Headshot Image - Reformatted */}
                        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:ml-auto bg-muted/20 border border-border/40 grayscale hover:grayscale-0 transition-all duration-700 shadow-sm">
                            <Image
                                src="/images/jaclyn-headshot.webp"
                                alt="Jaclyn Muir Profile"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 border-[0.5px] border-accent/20 m-3 pointer-events-none" />
                        </div>

                        <div className="bg-muted/10 p-10 rounded-none border border-border/40">
                            <h3 className="text-xl font-serif text-primary mb-6 italic">Certifications & Education</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start border-b border-border/20 pb-4">
                                    <span className="text-accent font-serif text-2xl">01</span>
                                    <div>
                                        <h4 className="font-medium text-primary">MS in Yoga Therapy</h4>
                                        <p className="text-sm text-secondary uppercase tracking-widest mt-1">Maryland University of Integrative Health</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start border-b border-border/20 pb-4">
                                    <span className="text-accent font-serif text-2xl">02</span>
                                    <div>
                                        <h4 className="font-medium text-primary">C-IAYT Certified</h4>
                                        <p className="text-sm text-secondary uppercase tracking-widest mt-1">International Association of Yoga Therapists</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start border-b border-border/20 pb-4">
                                    <span className="text-accent font-serif text-2xl">03</span>
                                    <div>
                                        <h4 className="font-medium text-primary">E-RYT 200 / RYT 500</h4>
                                        <p className="text-sm text-secondary uppercase tracking-widest mt-1">Yoga Alliance Accredited</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-accent font-serif text-2xl">04</span>
                                    <div>
                                        <h4 className="font-medium text-primary">Reiki II Certified</h4>
                                        <p className="text-sm text-secondary uppercase tracking-widest mt-1">Energy Healing Practice</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-accent/40 p-10 rounded-none bg-accent/5">
                            <h3 className="text-xl font-serif text-primary mb-6">Client Focus</h3>
                            <p className="text-secondary leading-relaxed mb-8 text-base">
                                Jaclyn works with individuals of all ages, with a particular expertise in supporting older adults and those navigating chronic pain, stress, or life transitions.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Stress Management', 'Chronic Pain', 'Mobility', 'Nervous System Support', 'Emotional Resilience'].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 bg-background border border-accent/20 text-accent text-[10px] uppercase tracking-widest font-medium rounded-none">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

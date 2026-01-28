import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-background">
            <section className="pt-40 pb-24 px-6 bg-[#F6F2EA]">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-semibold mb-8">The Practitioner</h3>
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-10 leading-tight">
                        About <span className="italic text-[#C6A38B]">Jaclyn Muir</span>
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed font-sans max-w-2xl mx-auto">
                        Certified Yoga Therapist, Wellness Practitioner, and dedicated guide on the path to holistic health.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <div className="space-y-12 text-base lg:text-lg text-foreground/80 leading-relaxed font-sans">
                        <section>
                            <h2 className="text-2xl lg:text-3xl font-serif text-foreground mb-8">Professional Journey</h2>
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
                            <h2 className="text-2xl lg:text-3xl font-serif text-foreground mt-12 mb-8">A Compassionate Philosophy</h2>
                            <p className="mb-6">
                                Jaclyn believes that healing is an authentic self-connection process. Her role is not to "fix," but to create a safe, compassionate container where individuals can explore their own capacity for balance and resilience.
                            </p>
                            <p>
                                Her approach is warm, grounded, and professional. She avoids overly mystical language in favor of clear, intelligent communication that empowers her clients to understand their own bodies and minds more deeply.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-12">
                        {/* Headshot Image - Warm Nature Tone */}
                        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:ml-auto overflow-hidden rounded-[2rem] shadow-sm transform rotate-1">
                            <Image
                                src="/images/jaclyn-headshot.webp"
                                alt="Jaclyn Muir Profile"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute inset-0 bg-[#C6A38B]/5 mix-blend-multiply" />
                        </div>

                        <div className="bg-[#F6F2EA] p-10 rounded-[1.5rem] border border-foreground/5">
                            <h3 className="text-xl font-serif text-foreground mb-8 italic">Certifications & Education</h3>
                            <ul className="space-y-8">
                                <li className="flex gap-4 items-start border-b border-foreground/5 pb-6">
                                    <span className="text-[#9FAF9A] font-serif text-2xl">01</span>
                                    <div>
                                        <h4 className="font-serif font-semibold text-foreground">MS in Yoga Therapy</h4>
                                        <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-2 font-sans font-bold">Maryland University of Integrative Health</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start border-b border-foreground/5 pb-6">
                                    <span className="text-[#9FAF9A] font-serif text-2xl">02</span>
                                    <div>
                                        <h4 className="font-serif font-semibold text-foreground">C-IAYT Certified</h4>
                                        <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-2 font-sans font-bold">International Association of Yoga Therapists</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start border-b border-foreground/5 pb-6">
                                    <span className="text-[#9FAF9A] font-serif text-2xl">03</span>
                                    <div>
                                        <h4 className="font-serif font-semibold text-foreground">E-RYT 200 / RYT 500</h4>
                                        <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-2 font-sans font-bold">Yoga Alliance Accredited</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start pb-2">
                                    <span className="text-[#9FAF9A] font-serif text-2xl">04</span>
                                    <div>
                                        <h4 className="font-serif font-semibold text-foreground">Reiki II Certified</h4>
                                        <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-2 font-sans font-bold">Energy Healing Practice</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#D8E4DA]/20 p-10 rounded-[1.5rem] border border-[#9FAF9A]/20">
                            <h3 className="text-xl font-serif text-foreground mb-6">Client Focus</h3>
                            <p className="text-foreground/70 leading-relaxed mb-8 text-sm lg:text-base font-sans">
                                Jaclyn works with individuals of all ages, with a particular expertise in supporting older adults and those navigating chronic pain, stress, or life transitions.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Stress Management', 'Chronic Pain', 'Mobility', 'Nervous System Support', 'Emotional Resilience'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-white/60 text-[#9FAF1A] text-[10px] uppercase tracking-widest font-sans font-bold rounded-lg border border-[#9FAF9A]/10">
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

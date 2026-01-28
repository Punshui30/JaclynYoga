import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-48 pb-32 px-6 bg-background relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="space-y-6 flex flex-col items-center">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-primary font-sans font-bold">The Practitioner</h3>
                        <div className="hairline w-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-tight">
                        About <span className="italic text-secondary">Jaclyn Muir</span>
                    </h1>
                    <p className="text-lg text-charcoal-soft leading-relaxed max-w-2xl mx-auto font-sans">
                        Certified Yoga Therapist, Wellness Practitioner, and dedicated guide on the path to holistic health.
                    </p>
                </div>

                {/* Branding Detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] border-b border-warm-gray/10 rounded-b-full -z-10" />
            </section>

            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-12 xl:col-span-7 space-y-16 text-base lg:text-lg text-charcoal-soft leading-relaxed font-sans">
                        <section className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-serif text-charcoal">Professional Journey</h2>
                                <div className="hairline w-16" />
                            </div>
                            <div className="space-y-8">
                                <p>
                                    Jaclyn Muir’s path to yoga therapy began with a profound interest in the intersection of physical movement and mental resilience. Holding a Master of Science in Yoga Therapy, she has dedicated years to understanding the clinical applications of yoga for a wide range of health conditions.
                                </p>
                                <p>
                                    As a C-IAYT Certified Yoga Therapist, Jaclyn adheres to the highest standards of professional practice, bringing a grounded, evidence-based approach to every session. Her training is not just about the poses, but about the physiological and psychological impact of breath, awareness, and intentional movement.
                                </p>
                                <p>
                                    Beyond yoga therapy, Jaclyn is a Reiki II Certified practitioner. This allow her to offer a unique blend of active somatic work and passive energy healing, catering to the diverse needs of her clients—from those seeking recovery from physical injury to those navigating complex nervous system challenges.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-serif text-charcoal">A Compassionate Philosophy</h2>
                                <div className="hairline w-16" />
                            </div>
                            <div className="space-y-8">
                                <p>
                                    Jaclyn believes that healing is an authentic self-connection process. Her role is not to "fix," but to create a safe, compassionate container where individuals can explore their own capacity for balance and resilience.
                                </p>
                                <p>
                                    Her approach is warm, grounded, and professional. She avoids overly mystical language in favor of clear, intelligent communication that empowers her clients to understand their own bodies and minds more deeply.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-12 xl:col-span-5 space-y-16">
                        {/* Headshot Image - Editorial Framed */}
                        <div className="relative group max-w-sm mx-auto xl:ml-auto">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(43,43,43,0.1)] border border-warm-gray-light bg-white p-3 rotate-1 lg:rotate-2">
                                <div className="relative w-full h-full overflow-hidden rounded-xl">
                                    <Image
                                        src="/images/jaclyn-headshot.webp"
                                        alt="Jaclyn Muir Profile"
                                        fill
                                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply opacity-20" />
                                </div>
                            </div>
                            <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                        </div>

                        <div className="bg-background p-12 rounded-3xl border border-warm-gray-light lg:p-14">
                            <h3 className="text-2xl font-serif text-charcoal mb-12 italic">Certifications & Education</h3>
                            <ul className="space-y-10">
                                <li className="flex gap-6 items-start">
                                    <span className="text-secondary font-serif text-3xl opacity-40">01</span>
                                    <div className="space-y-2">
                                        <h4 className="font-serif text-xl text-charcoal">MS in Yoga Therapy</h4>
                                        <p className="text-[10px] text-charcoal-soft/60 uppercase tracking-widest font-sans font-bold">Maryland University of Integrative Health</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 items-start">
                                    <span className="text-secondary font-serif text-3xl opacity-40">02</span>
                                    <div className="space-y-2">
                                        <h4 className="font-serif text-xl text-charcoal">C-IAYT Certified</h4>
                                        <p className="text-[10px] text-charcoal-soft/60 uppercase tracking-widest font-sans font-bold">International Association of Yoga Therapists</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 items-start">
                                    <span className="text-secondary font-serif text-3xl opacity-40">03</span>
                                    <div className="space-y-2">
                                        <h4 className="font-serif text-xl text-charcoal">E-RYT 200 / RYT 500</h4>
                                        <p className="text-[10px] text-charcoal-soft/60 uppercase tracking-widest font-sans font-bold">Yoga Alliance Accredited</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 items-start">
                                    <span className="text-secondary font-serif text-3xl opacity-40">04</span>
                                    <div className="space-y-2">
                                        <h4 className="font-serif text-xl text-charcoal">Reiki II Certified</h4>
                                        <p className="text-[10px] text-charcoal-soft/60 uppercase tracking-widest font-sans font-bold">Energy Healing Practice</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="editorial-framed p-12 lg:p-14 rounded-3xl">
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-serif text-charcoal">Client Focus</h3>
                                    <div className="hairline w-12" />
                                </div>
                                <p className="text-charcoal-soft leading-relaxed text-base font-sans">
                                    Jaclyn works with individuals of all ages, with a particular expertise in supporting older adults and those navigating chronic pain, stress, or life transitions.
                                </p>
                                <div className="flex flex-wrap gap-3 pt-4">
                                    {['Stress Management', 'Chronic Pain', 'Mobility', 'Nervous System Support', 'Emotional Resilience'].map((tag) => (
                                        <span key={tag} className="px-5 py-2.5 bg-background text-primary text-[10px] uppercase tracking-widest font-sans font-bold rounded-full border border-warm-gray-light">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

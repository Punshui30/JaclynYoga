import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-40 px-6 bg-background relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <div className="space-y-6 flex flex-col items-center">
                        <p className="micro-eyebrow text-primary">The practitioner</p>
                        <div className="hairline w-8 opacity-40 bg-stone" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-none">
                        About <span className="italic text-secondary/90">Jaclyn Muir</span>
                    </h1>
                    <p className="text-lg text-charcoal-soft leading-relaxed max-w-2xl mx-auto font-sans opacity-80 tracking-wide">
                        Certified Yoga Therapist, Clinical Practitioner, and dedicated guide on the path to nervous system restoration.
                    </p>
                </div>

                {/* Architecture branding echo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] border-b border-stone/5 rounded-b-full -z-10" />
            </section>

            <section className="py-40 px-6 bg-white border-y border-stone/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-12 xl:col-span-7 space-y-24 text-base lg:text-lg text-charcoal-soft leading-relaxed font-sans tracking-wide">
                        <section className="space-y-12">
                            <div className="space-y-6">
                                <p className="micro-eyebrow opacity-60">The Path</p>
                                <h2 className="text-3xl lg:text-4xl font-serif text-charcoal leading-none">Professional Journey</h2>
                                <div className="hairline w-12 opacity-30 bg-stone" />
                            </div>
                            <div className="space-y-10 opacity-90">
                                <p>
                                    Jaclyn Muir’s path to yoga therapy began with a profound interest in the intersection of physical movement and mental resilience. Holding a Master of Science in Yoga Therapy, she has dedicated years to understanding the clinical applications of yoga for a wide range of health conditions.
                                </p>
                                <p>
                                    As a C-IAYT Certified Yoga Therapist, Jaclyn adheres to the highest standards of professional practice, bringing a grounded, evidence-based approach to every session. Her training is not just about the poses, but about the physiological and psychological impact of breath, awareness, and intentional movement.
                                </p>
                                <p>
                                    Beyond yoga therapy, Jaclyn is a Reiki II Certified practitioner. This allows her to offer a unique blend of active somatic work and passive energy healing, catering to the diverse needs of her clients—from those seeking recovery from physical injury to those navigating complex nervous system challenges.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-12">
                            <div className="space-y-6">
                                <p className="micro-eyebrow opacity-60">The Intent</p>
                                <h2 className="text-3xl lg:text-4xl font-serif text-charcoal leading-none">A Compassionate philosophy</h2>
                                <div className="hairline w-12 opacity-30 bg-stone" />
                            </div>
                            <div className="space-y-10 opacity-90">
                                <p>
                                    Jaclyn believes that healing is an authentic self-connection process. Her role is not to "fix," but to create a safe, compassionate container where individuals can explore their own capacity for balance and resilience.
                                </p>
                                <p>
                                    Her approach is warm, grounded, and professional. She avoids overly mystical language in favor of clear, intelligent communication that empowers her clients to understand their own bodies and minds more deeply.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-12 xl:col-span-5 space-y-24">
                        {/* Headshot Image - Art Directed Editorial */}
                        <div className="relative group max-w-sm mx-auto xl:ml-auto">
                            <div className="editorial-framed rounded-[2.5rem] overflow-hidden">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                                    <Image
                                        src="/images/jaclyn-headshot.webp"
                                        alt="Jaclyn Muir Profile"
                                        fill
                                        className="object-cover object-top transition-all group-hover:scale-105 filter sepia-[0.1] saturate-[0.8]"
                                        style={{ transitionDuration: '3000ms' }}
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-[#E8D5C4]/10 mix-blend-multiply pointer-events-none" />
                                </div>
                            </div>
                            <div className="absolute -z-10 -bottom-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                        </div>

                        <div className="bg-linen/50 p-14 lg:p-16 rounded-[2.5rem] border border-stone/20">
                            <h3 className="text-2xl font-serif text-charcoal mb-16 italic opacity-90 tracking-wide">Certifications & Education</h3>
                            <ul className="space-y-12">
                                {[
                                    { id: '01', title: 'MS in Yoga Therapy', school: 'Maryland University of Integrative Health' },
                                    { id: '02', title: 'C-IAYT Certified', school: 'International Association of Yoga Therapists' },
                                    { id: '03', title: 'E-RYT 200 / RYT 500', school: 'Yoga Alliance Accredited' },
                                    { id: '04', title: 'Reiki II Certified', school: 'Energy Healing Practice' },
                                ].map((item) => (
                                    <li key={item.id} className="flex gap-8 items-start group">
                                        <span className="text-secondary/40 font-serif text-3xl transition-colors group-hover:text-primary/40">{item.id}</span>
                                        <div className="space-y-3">
                                            <h4 className="font-serif text-xl text-charcoal opacity-90">{item.title}</h4>
                                            <p className="micro-eyebrow text-charcoal/40 !tracking-[0.2em]">{item.school}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-14 lg:p-16 rounded-[2.5rem] border border-stone/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)]">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <p className="micro-eyebrow text-primary">Expertise</p>
                                    <h3 className="text-2xl font-serif text-charcoal opacity-90">Client Focus</h3>
                                    <div className="hairline w-8 opacity-30 bg-stone" />
                                </div>
                                <p className="text-charcoal-soft leading-relaxed text-base font-sans opacity-80 tracking-wide">
                                    Jaclyn works with individuals of all ages, with a particular expertise in supporting older adults and those navigating chronic pain, stress, or life transitions.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-6">
                                    {['Stress Management', 'Chronic Pain', 'Mobility', 'Nervous System', 'Resilience'].map((tag) => (
                                        <span key={tag} className="px-6 py-3 bg-linen/50 text-charcoal/70 text-[9px] uppercase tracking-[0.25em] font-sans font-bold rounded-full border border-stone/20 hover:border-primary/40 transition-colors">
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

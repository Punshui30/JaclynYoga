import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-40 px-8 md:px-20 lg:px-32 bg-background relative border-b border-charcoal/5">
                <div className="max-w-[1000px] mx-auto text-center relative z-10 space-y-12">
                    <div className="space-y-6">
                        <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/40">The practitioner</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em]">
                        ABOUT <span className="italic text-charcoal lowercase">jaclyn muir</span>
                    </h1>
                    <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto font-sans lowercase italic">
                        Certified Yoga Therapist, Clinical Practitioner, and dedicated guide on the path to nervous system restoration.
                    </p>
                </div>
            </section>

            <section className="py-48 px-8 md:px-20 lg:px-32 bg-bone border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-7 space-y-32 text-charcoal/60 text-sm md:text-base font-sans leading-relaxed tracking-wide lowercase italic">
                        <section className="space-y-12">
                            <div className="space-y-6">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/30">The Path</p>
                                <h2 className="text-2xl md:text-3xl font-serif text-charcoal leading-none uppercase tracking-widest">Professional Journey</h2>
                            </div>
                            <div className="space-y-10">
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
                                <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/30">The Intent</p>
                                <h2 className="text-2xl md:text-3xl font-serif text-charcoal leading-none uppercase tracking-widest">Clinical Philosophy</h2>
                            </div>
                            <div className="space-y-10">
                                <p>
                                    Jaclyn believes that healing is an authentic self-connection process. Her role is not to &quot;fix,&quot; but to create a safe, compassionate container where individuals can explore their own capacity for balance and resilience.
                                </p>
                                <p>
                                    Her approach is warm, grounded, and professional. She avoids overly mystical language in favor of clear, intelligent communication that empowers her clients to understand their own bodies and minds more deeply.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5 space-y-32">
                        <div className="relative h-[60vh] w-full border border-charcoal/10">
                            <Image
                                src="/images/jaclyn-headshot.webp"
                                alt="Jaclyn Muir Profile"
                                fill
                                className="object-cover grayscale-[0.4] contrast-[1.1] brightness-[0.98]"
                                priority
                            />
                            <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply pointer-events-none" />
                        </div>
                        <div className="bg-white p-16 md:p-20 border border-charcoal/5">
                            <h3 className="text-[11px] font-sans font-bold text-charcoal uppercase tracking-[0.3em] mb-16">Certifications</h3>
                            <ul className="space-y-16">
                                {[
                                    { title: 'MS in Yoga Therapy', school: 'Maryland University of Integrative Health' },
                                    { title: 'C-IAYT Certified', school: 'Int. Assoc. of Yoga Therapists' },
                                    { title: 'E-RYT 200 / RYT 500', school: 'Yoga Alliance Accredited' },
                                    { title: 'Reiki II Certified', school: 'Energy Healing Practice' },
                                ].map((item) => (
                                    <li key={item.title} className="space-y-4 border-l border-charcoal/10 pl-10 group">
                                        <h4 className="font-serif text-lg text-charcoal group-hover:text-sage transition-colors italic tracking-wide lowercase">{item.title}</h4>
                                        <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal/30 font-sans font-bold">{item.school}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-charcoal p-16 md:p-20 border border-charcoal/10">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <p className="text-[9px] uppercase tracking-[0.4em] font-sans font-bold text-sage/40">Expertise</p>
                                    <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase text-balance">Client Focus</h3>
                                </div>
                                <p className="text-white/60 leading-relaxed text-sm font-sans lowercase italic tracking-wide">
                                    Jaclyn works with individuals of all ages, with a particular expertise in supporting older adults and those navigating chronic pain, stress, or life transitions.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-8">
                                    {['Stress Management', 'Chronic Pain', 'Mobility', 'Nervous System', 'Resilience'].map((tag) => (
                                        <span key={tag} className="px-5 py-2 border border-white/10 text-white/40 text-[9px] uppercase tracking-[0.3em] font-sans font-bold hover:border-sage/40 hover:text-white transition-all cursor-default">
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

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="py-24 px-6 bg-muted/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-8">Offerings</h3>
                    <h1 className="text-5xl md:text-6xl font-serif text-primary mb-10 leading-tight">
                        Comprehensive <span className="italic text-accent">Wellness Services</span>
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                        Supporting your journey towards physical mobility, emotional balance, and energetic clarity through evidence-based yoga therapy and holistic healing.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto space-y-32">
                    {/* Yoga Classes */}
                    <div id="yoga-classes" className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">Yoga <br /><span className="italic text-accent">Classes</span></h2>
                            <p className="text-secondary leading-relaxed mb-8">
                                Group classes designed for mindfulness and functional movement. Emphasis is placed on accessibility, making these suitable for practitioners of all ages and abilities.
                            </p>
                            <div className="h-[1px] w-12 bg-accent/40" />
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-primary">Chair Yoga</h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    A gentle form of yoga practiced sitting on a chair or standing using a chair for support. Ideal for those with limited mobility or balancing concerns.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-primary">Yin Yoga</h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    A slow-paced style of yoga incorporating principles of traditional Chinese medicine, with postures that are held for longer periods of time to target deep connective tissues.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-primary">Gentle Yoga</h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    Focuses on basic yoga poses and stretches to increase flexibility and range of motion without the intensity of a standard flow.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-primary">Slow Flow Yoga</h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    Mindful transitions between poses at a pace that allows for deeper awareness of breath and alignment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Private Sessions */}
                    <div id="private-sessions" className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">Private <br /><span className="italic text-accent">Sessions</span></h2>
                            <p className="text-secondary leading-relaxed mb-8">
                                Individually tailored support focusing on your unique goals and health considerations. Sessions can be conducted online or in-person.
                            </p>
                            <div className="h-[1px] w-12 bg-accent/40" />
                        </div>

                        <div className="lg:col-span-2 space-y-12">
                            <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-border/20 pb-12">
                                <div className="md:max-w-md">
                                    <h3 className="text-xl font-serif text-primary mb-3">Yoga Therapy Intake</h3>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        A comprehensive 90-minute initial consultation where we discuss your health history, current concerns, and goals to develop a personalized therapy plan.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-accent font-serif text-xl">90 Min</span>
                                    <p className="text-[10px] uppercase tracking-widest text-secondary mt-2">Comprehensive Assessment</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-border/20 pb-12">
                                <div className="md:max-w-md">
                                    <h3 className="text-xl font-serif text-primary mb-3">Yoga Therapy Follow-Up</h3>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        60-minute sessions dedicated to implementing and refining your personalized yoga therapy practices.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-accent font-serif text-xl">60 Min</span>
                                    <p className="text-[10px] uppercase tracking-widest text-secondary mt-2">Personalized Support</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-border/20 pb-12">
                                <div className="md:max-w-md">
                                    <h3 className="text-xl font-serif text-primary mb-3">Private Yoga Practice</h3>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        60-minute one-on-on sessions focusing on movement, breathwork, and meditation tailored to your level and interest.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-accent font-serif text-xl">60 Min</span>
                                    <p className="text-[10px] uppercase tracking-widest text-secondary mt-2">Focused Practice</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reiki */}
                    <div id="reiki" className="bg-muted/30 p-12 md:p-20 border border-border/40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-8">Energy Healing</h3>
                            <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">Reiki <br /><span className="italic text-accent">Restorative Care</span></h2>
                            <p className="text-secondary leading-relaxed text-lg mb-10">
                                Reiki is a gentle, non-invasive energy-based practice that supports deep relaxation and the body's natural healing processes.
                            </p>
                            <p className="text-secondary leading-relaxed mb-10 italic">
                                Sessions provide a safe container for nervous system support, helping to reduce stress and promote a profound sense of inner calm.
                            </p>
                            <div className="inline-flex items-center gap-3 text-sage">
                                <div className="w-2 h-2 bg-sage rounded-none" />
                                <span className="text-xs uppercase tracking-widest font-semibold">Nervous System Support</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-white shadow-md p-12 flex flex-col justify-center items-center text-center border border-border/40">
                                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center text-accent mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"><path d="M12 2v20" /><path d="m4.93 4.93 14.14 14.14" /><path d="M2 12h20" /><path d="m4.93 19.07 14.14-14.14" /></svg>
                                </div>
                                <h4 className="text-2xl font-serif text-primary mb-4">Reiki Session</h4>
                                <p className="text-secondary text-sm mb-8 leading-relaxed">
                                    Available as a standalone session or integrated into your yoga therapy practice.
                                </p>
                                <div className="text-accent font-serif text-3xl italic">60 Minutes</div>
                            </div>
                            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-accent/20" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

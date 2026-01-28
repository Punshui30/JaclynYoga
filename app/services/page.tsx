export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-40 pb-24 px-6 bg-[#F6F2EA]">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF1A] font-sans font-bold mb-8">Offerings</h3>
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-10 leading-tight">
                        Comprehensive <span className="italic text-[#C6A38B]">Wellness Services</span>
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                        Supporting your journey towards physical mobility, emotional balance, and energetic clarity through evidence-based yoga therapy and holistic healing.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto space-y-40">
                    {/* Yoga Classes */}
                    <div id="yoga-classes" className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-8 leading-tight">Yoga <br /><span className="italic text-[#C6A38B]">Classes</span></h2>
                            <p className="text-foreground/70 leading-relaxed mb-8 text-sm lg:text-base">
                                Group classes designed for mindfulness and functional movement. Emphasis is placed on accessibility, making these suitable for practitioners of all ages and abilities.
                            </p>
                            <div className="h-[2px] w-12 bg-[#9FAF9A]/30 rounded-full" />
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-foreground">Chair Yoga</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    A gentle form of yoga practiced sitting on a chair or standing using a chair for support. Ideal for those with limited mobility or balancing concerns.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-foreground">Yin Yoga</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    A slow-paced style of yoga incorporating principles of traditional Chinese medicine, with postures that are held for longer periods of time to target deep connective tissues.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-foreground">Gentle Yoga</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    Focuses on basic yoga poses and stretches to increase flexibility and range of motion without the intensity of a standard flow.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif text-foreground">Slow Flow Yoga</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    Mindful transitions between poses at a pace that allows for deeper awareness of breath and alignment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Private Sessions */}
                    <div id="private-sessions" className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-8 leading-tight">Private <br /><span className="italic text-[#C6A38B]">Sessions</span></h2>
                            <p className="text-foreground/70 leading-relaxed mb-8 text-sm lg:text-base">
                                Individually tailored support focusing on your unique goals and health considerations. Sessions can be conducted online or in-person.
                            </p>
                            <div className="h-[2px] w-12 bg-[#9FAF9A]/30 rounded-full" />
                        </div>

                        <div className="lg:col-span-2 space-y-12">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-foreground/5 pb-10">
                                <div className="md:max-w-md">
                                    <h3 className="text-xl font-serif text-foreground mb-3 font-semibold">Yoga Therapy Intake</h3>
                                    <p className="text-foreground/60 text-sm leading-relaxed">
                                        A comprehensive 90-minute initial consultation where we discuss your health history, current concerns, and goals to develop a personalized therapy plan.
                                    </p>
                                </div>
                                <div className="md:text-right">
                                    <span className="text-[#9FAF9A] font-serif text-2xl font-bold">90 Min</span>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mt-2 font-bold font-sans">Comprehensive Assessment</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-foreground/5 pb-10">
                                <div className="md:max-w-md">
                                    <h3 className="text-xl font-serif text-foreground mb-3 font-semibold">Yoga Therapy Follow-Up</h3>
                                    <p className="text-foreground/60 text-sm leading-relaxed">
                                        60-minute sessions dedicated to implementing and refining your personalized yoga therapy practices.
                                    </p>
                                </div>
                                <div className="md:text-right">
                                    <span className="text-[#9FAF9A] font-serif text-2xl font-bold">60 Min</span>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mt-2 font-bold font-sans">Personalized Support</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-foreground/5 pb-10">
                                <div className="md:max-w-md">
                                    <h3 className="text-xl font-serif text-foreground mb-3 font-semibold">Private Yoga Practice</h3>
                                    <p className="text-foreground/60 text-sm leading-relaxed">
                                        60-minute one-on-on sessions focusing on movement, breathwork, and meditation tailored to your level and interest.
                                    </p>
                                </div>
                                <div className="md:text-right">
                                    <span className="text-[#9FAF9A] font-serif text-2xl font-bold">60 Min</span>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mt-2 font-bold font-sans">Focused Practice</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reiki */}
                    <div id="reiki" className="bg-[#D8E4DA]/20 p-12 md:p-24 rounded-[3rem] border border-[#9FAF9A]/10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-bold mb-8">Energy Healing</h3>
                            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-8 leading-tight">Reiki <br /><span className="italic text-[#C6A38B]">Restorative Care</span></h2>
                            <p className="text-foreground/75 leading-relaxed text-base lg:text-lg mb-10 font-sans">
                                Reiki is a gentle, non-invasive energy-based practice that supports deep relaxation and the body's natural healing processes.
                            </p>
                            <p className="text-foreground/75 leading-relaxed mb-10 italic font-serif text-base">
                                Sessions provide a safe container for nervous system support, helping to reduce stress and promote a profound sense of inner calm.
                            </p>
                            <div className="inline-flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#9FAF9A] rounded-full" />
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#9FAF9A] font-sans">Nervous System Support</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-white shadow-sm p-12 flex flex-col justify-center items-center text-center border border-foreground/5 rounded-[2.5rem]">
                                <div className="w-16 h-16 bg-[#F6F2EA] flex items-center justify-center text-[#C6A38B] mb-8 rounded-full">
                                    <Sparkles size={32} />
                                </div>
                                <h4 className="text-2xl font-serif text-foreground mb-4 font-semibold">Reiki Session</h4>
                                <p className="text-foreground/60 text-sm mb-8 leading-relaxed font-sans">
                                    Available as a standalone session or integrated into your yoga therapy practice.
                                </p>
                                <div className="text-[#9FAF9A] font-serif text-3xl font-bold italic tracking-wide">60 Minutes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Sparkles } from 'lucide-react';

'use client';

import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-40 px-8 md:px-20 lg:px-32 bg-background relative border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto text-left space-y-12">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">Offerings</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em]">
                        OFFERINGS <span className="italic text-charcoal/60 lowercase">& services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-charcoal/50 leading-relaxed max-w-2xl font-sans lowercase italic">
                        Supporting your journey towards physiological mobility and energetic clarity through evidence-based yoga therapy and refined clinical healing.
                    </p>
                </div>
            </section>

            <section className="py-48 px-8 md:px-20 lg:px-32 bg-white">
                <div className="max-w-[1600px] mx-auto space-y-60">

                    {/* Yoga Classes */}
                    <div id="yoga-classes" className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-4 space-y-12">
                            <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">01</p>
                            <h2 className="text-3xl lg:text-4xl font-serif text-charcoal leading-tight uppercase tracking-widest">Yoga <br /><span className="italic text-charcoal/60">Practice</span></h2>
                            <p className="text-charcoal/60 leading-relaxed text-sm lg:text-base lowercase italic tracking-wide">
                                Group classes designed for mindfulness and functional movement. Emphasis is placed on accessibility, making these suitable for practitioners of all ages and abilities.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-charcoal/10">
                            {[
                                { title: 'Chair Yoga', desc: 'A gentle form of yoga practiced sitting or standing with support. Ideal for those with limited mobility.' },
                                { title: 'Yin Yoga', desc: 'A slow-paced style incorporating traditional principles to target deep connective tissues.' },
                                { title: 'Gentle Yoga', desc: 'Focuses on basic poses and stretches to increase flexibility without standard intensity.' },
                                { title: 'Slow Flow', desc: 'Mindful transitions between poses at a pace that allows for deeper awareness of breath.' },
                            ].map((item, idx) => (
                                <div key={item.title} className={cn("p-12 md:p-16 border-b border-charcoal/10", idx % 2 === 0 ? "md:border-r" : "")}>
                                    <h3 className="text-[13px] font-sans font-bold text-charcoal uppercase tracking-[0.3em] mb-6">{item.title}</h3>
                                    <p className="text-charcoal/50 text-sm leading-relaxed lowercase italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Private Sessions */}
                    <div id="private-sessions" className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-4 space-y-12">
                            <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">02</p>
                            <h2 className="text-3xl lg:text-4xl font-serif text-charcoal leading-tight uppercase tracking-widest">Private <br /><span className="italic text-charcoal/60">Instruction</span></h2>
                            <p className="text-charcoal/60 leading-relaxed text-sm lg:text-base lowercase italic tracking-wide">
                                Individually tailored support focusing on your unique goals and health considerations. Sessions can be conducted online or in-person.
                            </p>
                        </div>

                        <div className="lg:col-span-8 space-y-0 border-t border-charcoal/10">
                            {[
                                { title: 'Yoga Therapy Intake', desc: 'Comprehensive 90-minute initial consultation and therapy plan development.', time: '90 Min', label: 'Assessment' },
                                { title: 'Therapy Follow-Up', desc: '60-minute sessions dedicated to implementing and refining your practice.', time: '60 Min', label: 'Support' },
                                { title: 'Private Yoga Session', desc: '60-minute one-on-one sessions focusing on personalized movement and breathwork.', time: '60 Min', label: 'Practice' },
                            ].map((item) => (
                                <div key={item.title} className="flex flex-col md:flex-row justify-between items-start gap-12 p-12 md:p-16 border-b border-charcoal/10 group hover:bg-bone transition-all duration-700">
                                    <div className="md:max-w-md space-y-4">
                                        <h3 className="text-xl font-serif text-charcoal italic tracking-wide">{item.title}</h3>
                                        <p className="text-charcoal/50 text-sm leading-relaxed lowercase italic">{item.desc}</p>
                                    </div>
                                    <div className="md:text-right space-y-2">
                                        <span className="text-charcoal font-serif text-2xl tracking-[0.1em]">{item.time}</span>
                                        <p className="text-[9px] uppercase tracking-[0.4em] text-charcoal/30 font-sans font-bold">{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reiki */}
                    <div id="reiki" className="bg-bone p-16 md:p-32 border border-charcoal/5 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-7 space-y-16">
                            <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">03</p>
                            <div className="space-y-8">
                                <h2 className="text-3xl lg:text-5xl font-serif text-charcoal leading-none uppercase tracking-widest text-wrap">Reiki <br /><span className="italic text-charcoal/60">Restorative Care</span></h2>
                                <p className="text-charcoal/60 leading-relaxed text-base md:text-lg lowercase italic tracking-wide max-w-xl">
                                    Reiki is a gentle, energy-based practice that supports deep relaxation and the architecture of natural physiological healing.
                                </p>
                            </div>
                            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/40 font-sans">
                                <div className="h-[1px] w-12 bg-charcoal/20" />
                                <span>NERVOUS SYSTEM SUPPORT</span>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white p-16 md:p-24 border border-charcoal/10 flex flex-col justify-center items-center text-center space-y-12">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-serif text-charcoal italic tracking-wide">The Session</h4>
                                    <p className="text-charcoal/50 text-sm leading-relaxed lowercase italic max-w-xs mx-auto">
                                        Available as a standalone treatment or integrated into your yoga therapy practice.
                                    </p>
                                </div>
                                <div className="text-charcoal font-serif text-4xl tracking-widest border-t border-b border-charcoal/10 py-6 px-12">
                                    60 MIN
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

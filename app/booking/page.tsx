'use client';

import { Calendar } from 'lucide-react';

export default function BookingPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-40 px-8 md:px-20 lg:px-32 bg-background relative border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto text-left space-y-12 relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">concierge</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em]">
                        SCHEDULE <span className="italic text-charcoal/60 lowercase">clinical practice</span>
                    </h1>
                    <p className="text-lg md:text-xl text-charcoal/50 leading-relaxed max-w-2xl font-sans lowercase italic">
                        Select a session type below to view refined availability and secure your appointment within our private clinical portal.
                    </p>
                </div>
            </section>

            <section className="py-48 px-8 md:px-20 lg:px-32 bg-bone border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-12 xl:col-span-8">
                        <div className="bg-white border border-charcoal/10 p-16 md:p-32 text-center h-[600px] flex flex-col items-center justify-center gap-16 relative group">
                            <div className="space-y-12 relative z-10">
                                <h3 className="text-3xl md:text-4xl font-serif text-charcoal leading-none uppercase tracking-widest text-balance">Clinical Booking Portal</h3>
                                <p className="text-charcoal/50 max-w-md mx-auto leading-relaxed font-sans text-sm md:text-base lowercase italic tracking-wide">
                                    Our secure portal ensures private clinical oversight. Please navigate to view all current availability.
                                </p>
                            </div>
                            <a
                                href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-16 py-7 bg-charcoal text-sage font-sans text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sage hover:text-charcoal transition-all"
                            >
                                Enter Clinical Portal
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-12 xl:col-span-4 space-y-32">
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">Inquiry</p>
                                <h2 className="text-2xl md:text-3xl font-serif text-charcoal leading-none uppercase tracking-widest">Surgical Questions?</h2>
                                <p className="text-charcoal/50 italic font-serif text-lg lowercase">Professional direct inquiry channel</p>
                            </div>

                            <form action="#" method="POST" className="space-y-12">
                                <div className="space-y-4 border-b border-charcoal/10 pb-6">
                                    <label htmlFor="name" className="block text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 font-sans">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-transparent border-none p-0 focus:outline-none placeholder:text-charcoal/10 font-sans text-sm tracking-wide lowercase italic"
                                        placeholder="Enter identity"
                                    />
                                </div>
                                <div className="space-y-4 border-b border-charcoal/10 pb-6">
                                    <label htmlFor="email" className="block text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 font-sans">Professional Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent border-none p-0 focus:outline-none placeholder:text-charcoal/10 font-sans text-sm tracking-wide lowercase italic"
                                        placeholder="address@domain.com"
                                    />
                                </div>
                                <div className="space-y-4 border-b border-charcoal/10 pb-12">
                                    <label htmlFor="message" className="block text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 font-sans">Nature of Inquiry</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-transparent border-none p-0 focus:outline-none placeholder:text-charcoal/10 font-sans text-sm tracking-wide resize-none lowercase italic"
                                        placeholder="Brief clinical context"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-6 bg-charcoal text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sage hover:text-charcoal transition-all"
                                >
                                    Transmit Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="pt-24 border-t border-charcoal/10 space-y-12">
                            <div className="space-y-6">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/30">Direct contact</p>
                                <a href="mailto:hello@jaclynmuir.com" className="block text-charcoal/80 hover:text-sage transition-colors font-serif italic text-2xl tracking-wide lowercase">hello@jaclynmuir.com</a>
                                <div className="space-y-4 pt-8 text-charcoal/20 text-[10px] uppercase tracking-[0.4em] font-bold">
                                    <p>Based in Frederick, MD</p>
                                    <p>Online Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

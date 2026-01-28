export default function BookingPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-40 px-6 bg-background relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <div className="space-y-6 flex flex-col items-center">
                        <p className="micro-eyebrow text-primary">Scheduling</p>
                        <div className="hairline w-8 opacity-40 bg-stone" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-none">
                        Book a <span className="italic text-secondary/90">Session</span>
                    </h1>
                    <p className="text-lg text-charcoal-soft leading-relaxed max-w-2xl mx-auto font-sans opacity-80 tracking-wide">
                        Ready to begin your journey? Select a session type below to view availability and book your appointment.
                    </p>
                </div>

                {/* Architecture branding echo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] border-b border-stone/5 rounded-b-full -z-10" />
            </section>

            <section className="py-40 px-6 bg-white border-y border-stone/10 font-sans">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
                    <div className="lg:col-span-2">
                        <div className="bg-linen/30 border border-stone/20 p-16 lg:p-24 text-center h-[650px] flex flex-col items-center justify-center gap-14 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.01] transition-colors duration-1000" />

                            <div className="w-20 h-20 bg-white border border-stone/10 flex items-center justify-center rounded-2xl text-primary/70 shadow-sm transition-all duration-1000 group-hover:scale-105 relative z-10">
                                <Calendar size={32} strokeWidth={1} />
                            </div>
                            <div className="space-y-8 relative z-10">
                                <h3 className="text-3xl lg:text-4xl font-serif text-charcoal opacity-90 leading-none">Schedule Your Session</h3>
                                <p className="text-charcoal-soft max-w-md mx-auto leading-relaxed font-sans text-base opacity-80 tracking-wide">
                                    Please use our secure clinical booking portal to view availability and schedule your appointment.
                                </p>
                            </div>
                            <a
                                href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 bg-primary text-white text-[9px] uppercase tracking-[0.3em] font-sans font-bold hover:bg-primary/90 transition-all rounded shadow-sm relative z-10"
                            >
                                Open Booking Calendar
                            </a>
                        </div>
                    </div>

                    <div className="space-y-24">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <p className="micro-eyebrow text-primary">Inquiry</p>
                                <h2 className="text-3xl font-serif text-charcoal opacity-90 leading-none">Questions?</h2>
                                <p className="text-secondary/70 italic font-serif text-xl">Get in touch with Jaclyn</p>
                                <div className="hairline w-8 opacity-30 bg-stone" />
                            </div>

                            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-10">
                                <div className="space-y-4">
                                    <label htmlFor="name" className="block text-[9px] uppercase tracking-[0.3em] font-bold text-charcoal/40 font-sans">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-linen/20 border border-stone/20 p-5 rounded-2xl focus:ring-1 focus:ring-primary/20 focus:border-stone/40 focus:outline-none transition-all placeholder:text-charcoal/20 font-sans text-sm tracking-wide"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label htmlFor="email" className="block text-[9px] uppercase tracking-[0.3em] font-bold text-charcoal/40 font-sans">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-linen/20 border border-stone/20 p-5 rounded-2xl focus:ring-1 focus:ring-primary/20 focus:border-stone/40 focus:outline-none transition-all placeholder:text-charcoal/20 font-sans text-sm tracking-wide"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label htmlFor="message" className="block text-[9px] uppercase tracking-[0.3em] font-bold text-charcoal/40 font-sans">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full bg-linen/20 border border-stone/20 p-5 rounded-2xl focus:ring-1 focus:ring-primary/20 focus:border-stone/40 focus:outline-none transition-all placeholder:text-charcoal/20 font-sans text-sm tracking-wide resize-none"
                                        placeholder="How can Jaclyn help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-charcoal text-white text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-charcoal/90 transition-all rounded shadow-sm"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="pt-20 border-t border-stone/20 space-y-12">
                            <div className="space-y-4">
                                <p className="micro-eyebrow text-primary">Direct Contact</p>
                                <a href="mailto:hello@jaclynmuir.com" className="block text-charcoal/80 hover:text-primary transition-colors font-serif italic text-2xl tracking-wide">hello@jaclynmuir.com</a>
                                <div className="space-y-3 pt-4 text-charcoal/40 text-[10px] uppercase tracking-[0.25em] font-bold">
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

import { Calendar } from 'lucide-react';

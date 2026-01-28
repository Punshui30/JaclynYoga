export default function BookingPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-48 pb-32 px-6 bg-background relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="space-y-6 flex flex-col items-center">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-primary font-sans font-bold">Scheduling</h3>
                        <div className="hairline w-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-tight">
                        Book a <span className="italic text-secondary">Session</span>
                    </h1>
                    <p className="text-lg text-charcoal-soft leading-relaxed max-w-2xl mx-auto font-sans">
                        Ready to begin your journey? Select a session type below to view availability and book your appointment.
                    </p>
                </div>

                {/* Branding Detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] border-b border-warm-gray/10 rounded-b-full -z-10" />
            </section>

            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
                    <div className="lg:col-span-2">
                        <div className="bg-background border border-warm-gray-light p-12 lg:p-20 text-center h-[600px] flex flex-col items-center justify-center gap-12 rounded-3xl shadow-[0_10px_40px_-15px_rgba(43,43,43,0.05)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-1000" />

                            <div className="w-24 h-24 bg-white border border-warm-gray-light flex items-center justify-center rounded-2xl text-secondary shadow-sm transition-transform duration-700 group-hover:scale-110 relative z-10">
                                <Calendar size={40} strokeWidth={1.2} />
                            </div>
                            <div className="space-y-6 relative z-10">
                                <h3 className="text-3xl lg:text-4xl font-serif text-charcoal">Schedule Your Session</h3>
                                <p className="text-charcoal-soft max-w-md mx-auto leading-relaxed font-sans text-base">
                                    Please use our secure booking portal to view availability and schedule your appointment.
                                </p>
                            </div>
                            <a
                                href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-primary/90 transition-all rounded-md shadow-sm relative z-10"
                            >
                                Open Booking Calendar
                            </a>
                        </div>
                    </div>

                    <div className="space-y-20">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-serif text-charcoal leading-tight">Questions?</h2>
                                <p className="text-secondary italic font-serif text-xl">Get in touch with Jaclyn</p>
                            </div>

                            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.25em] font-bold text-charcoal/40 font-sans">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-background border border-warm-gray-light p-5 rounded-xl focus:ring-1 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all placeholder:text-charcoal/20 font-sans text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.25em] font-bold text-charcoal/40 font-sans">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-background border border-warm-gray-light p-5 rounded-xl focus:ring-1 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all placeholder:text-charcoal/20 font-sans text-sm"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.25em] font-bold text-charcoal/40 font-sans">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full bg-background border border-warm-gray-light p-5 rounded-xl focus:ring-1 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all placeholder:text-charcoal/20 font-sans text-sm resize-none"
                                        placeholder="How can Jaclyn help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-primary text-white text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all rounded-md shadow-sm"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="pt-16 hairline">
                            <h3 className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-8 font-sans">Direct Contact</h3>
                            <div className="space-y-6">
                                <a href="mailto:hello@jaclynmuir.com" className="block text-charcoal hover:text-primary transition-colors font-serif italic text-xl">hello@jaclynmuir.com</a>
                                <div className="space-y-2 text-charcoal/50 font-sans text-[11px] uppercase tracking-widest font-bold">
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

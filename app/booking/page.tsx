export default function BookingPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-40 pb-24 px-6 bg-[#F6F2EA]">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF1A] font-sans font-bold mb-8">Scheduling</h3>
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-10 leading-tight">
                        Book a <span className="italic text-[#C6A38B]">Session</span>
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto font-sans">
                        Ready to begin your journey? Select a session type below to view availability and book your appointment.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2">
                        <div className="bg-[#F6F2EA]/50 border border-foreground/5 p-12 lg:p-16 text-center h-[500px] flex flex-col items-center justify-center gap-10 rounded-[2.5rem] shadow-sm">
                            <div className="w-20 h-20 bg-[#9FAF9A]/10 flex items-center justify-center rounded-2xl text-[#9FAF9A]">
                                <Calendar size={40} />
                            </div>
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-serif text-foreground mb-4">Schedule Your Session</h3>
                                <p className="text-foreground/60 max-w-md mx-auto leading-relaxed font-sans text-sm lg:text-base">
                                    Please use our secure booking portal to view availability and schedule your appointment.
                                </p>
                            </div>
                            <a
                                href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 bg-[#9FAF9A] text-white text-[11px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-[#9FAF9A]/90 transition-all rounded-md shadow-sm"
                            >
                                Open Booking Calendar
                            </a>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-serif text-foreground mb-8 leading-tight">Questions? <br /><span className="italic text-[#C6A38B]">Get in Touch</span></h2>
                            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-[#9FAF9A] mb-3">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-[#F6F2EA] border-none p-4 rounded-lg focus:ring-2 focus:ring-[#9FAF9A]/30 focus:outline-none transition-all placeholder:text-foreground/20 font-sans text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-[#9FAF9A] mb-3">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-[#F6F2EA] border-none p-4 rounded-lg focus:ring-2 focus:ring-[#9FAF9A]/30 focus:outline-none transition-all placeholder:text-foreground/20 font-sans text-sm"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-[#9FAF9A] mb-3">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full bg-[#F6F2EA] border-none p-4 rounded-lg focus:ring-2 focus:ring-[#9FAF9A]/30 focus:outline-none transition-all placeholder:text-foreground/20 font-sans text-sm resize-none"
                                        placeholder="How can Jaclyn help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#9FAF9A] text-white text-[11px] uppercase tracking-widest font-bold hover:bg-[#9FAF9A]/90 transition-all rounded-md shadow-sm"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="pt-12 border-t border-foreground/5">
                            <h3 className="text-[10px] uppercase tracking-widest text-[#9FAF1A] font-bold mb-6 font-sans">Contact Information</h3>
                            <div className="space-y-4 text-foreground/60 font-sans text-sm">
                                <p>Based in Frederick, MD</p>
                                <a href="mailto:hello@jaclynmuir.com" className="block text-foreground hover:text-[#9FAF9A] transition-colors font-serif italic text-lg">hello@jaclynmuir.com</a>
                                <p>Available for online consultations worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Calendar } from 'lucide-react';

export default function BookingPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="py-24 px-6 bg-muted/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-8">Scheduling</h3>
                    <h1 className="text-5xl md:text-6xl font-serif text-primary mb-10 leading-tight">
                        Book a <span className="italic text-accent">Session</span>
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                        Ready to begin your journey? Select a session type below to view availability and book your appointment.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2">
                        <div className="lg:col-span-2">
                            <div className="bg-muted/10 border border-border/40 p-12 text-center h-[500px] flex flex-col items-center justify-center gap-8">
                                <div className="w-20 h-20 bg-accent/10 flex items-center justify-center rounded-none text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"><rect x="3" y="4" width="18" height="18" rx="0" ry="0" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-primary mb-4">Schedule Your Session</h3>
                                    <p className="text-secondary max-w-md mx-auto leading-relaxed">
                                        Please use our secure booking portal to view availability and schedule your appointment.
                                    </p>
                                </div>
                                <a
                                    href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-none inline-block border border-transparent hover:border-accent"
                                >
                                    Open Booking Calendar
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif text-primary mb-8 leading-tight">Questions? <br /><span className="italic text-accent">Get in Touch</span></h2>
                            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-widest font-medium text-secondary mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-muted/30 border border-border/40 p-4 rounded-none focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-medium text-secondary mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-muted/30 border border-border/40 p-4 rounded-none focus:outline-none focus:border-accent transition-colors"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs uppercase tracking-widest font-medium text-secondary mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full bg-muted/30 border border-border/40 p-4 rounded-none focus:outline-none focus:border-accent transition-colors resize-none"
                                        placeholder="How can Jaclyn help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-none border border-transparent hover:border-accent"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="pt-12 border-t border-border/20">
                            <h3 className="text-sm uppercase tracking-widest text-accent font-medium mb-6">Contact Information</h3>
                            <div className="space-y-4 text-secondary">
                                <p>Based in [City, State]</p>
                                <a href="mailto:hello@jaclynmuir.com" className="block hover:text-accent transition-colors">hello@jaclynmuir.com</a>
                                <p>Available for online consultations worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

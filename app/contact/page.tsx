'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-luxuryIvory pt-40 pb-32 px-8 md:px-20 lg:px-32">
            <div className="max-w-[1200px] mx-auto">
                <header className="mb-24 text-center">
                    <p className="text-[10px] uppercase tracking-[0.6em] font-sans font-bold text-sageGray mb-4">Get in Touch</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em] mb-8">
                        CONTACT <span className="italic text-charcoal/60 lowercase">me</span>
                    </h1>
                    <p className="text-lg text-charcoal/50 leading-relaxed font-sans lowercase italic">
                        Reach out for inquiries, bookings, or questions about my offerings.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-12"
                    >
                        <div className="bg-white p-12 border border-charcoal/5">
                            <h2 className="text-2xl font-serif text-charcoal mb-8 uppercase tracking-widest">Contact Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-2">Email</p>
                                    <a
                                        href="mailto:ladyjaclynmuir@gmail.com"
                                        className="text-charcoal/80 hover:text-sage transition-colors font-serif italic text-xl tracking-wide lowercase"
                                    >
                                        ladyjaclynmuir@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-2">Phone</p>
                                    <a
                                        href="tel:240-529-4722"
                                        className="text-charcoal/80 hover:text-sage transition-colors font-serif text-xl tracking-wide"
                                    >
                                        240-529-4722
                                    </a>
                                </div>
                                <div className="pt-6 border-t border-charcoal/10">
                                    <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-2">Credentials</p>
                                    <p className="text-charcoal/60 text-sm tracking-wide">
                                        Jaclyn Muir, MS, E-RYT 200, RYT 500, C-IAYT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-12 border border-charcoal/5"
                    >
                        <h2 className="text-2xl font-serif text-charcoal mb-8 uppercase tracking-widest">Send a Message</h2>
                        <form className="space-y-8">
                            <div className="space-y-4 border-b border-charcoal/10 pb-6">
                                <label htmlFor="name" className="block text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 font-sans">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-transparent border-none p-0 focus:outline-none placeholder:text-charcoal/10 font-sans text-sm tracking-wide lowercase italic"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-4 border-b border-charcoal/10 pb-6">
                                <label htmlFor="email" className="block text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 font-sans">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border-none p-0 focus:outline-none placeholder:text-charcoal/10 font-sans text-sm tracking-wide lowercase italic"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-4 border-b border-charcoal/10 pb-6">
                                <label htmlFor="phone" className="block text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 font-sans">
                                    Phone (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full bg-transparent border-none p-0 focus:outline-none placeholder:text-charcoal/10 font-sans text-sm tracking-wide lowercase italic"
                                    placeholder="Your phone number"
                                />
                            </div>
                            <div className="space-y-4 border-b border-charcoal/10 pb-12">
                                <label htmlFor="message" className="block text-[9px] uppercase tracking-[0.4em] font-bold text-charcoal/30 font-sans">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-transparent border-none p-0 focus:outline-none placeholder:text-charcoal/10 font-sans text-sm tracking-wide resize-none lowercase italic"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-6 bg-charcoal text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sage hover:text-charcoal transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

'use client';

import { motion } from 'framer-motion';

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-luxuryIvory pt-40 pb-32 px-8 md:px-20 lg:px-32">
            <div className="max-w-[1200px] mx-auto">
                <header className="mb-24 text-center">
                    <p className="text-[10px] uppercase tracking-[0.6em] font-sans font-bold text-sageGray mb-4">Availability</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em] mb-8">
                        SCHEDULE <span className="italic text-charcoal/60 lowercase">& hours</span>
                    </h1>
                    <p className="text-lg text-charcoal/50 leading-relaxed font-sans lowercase italic">
                        Weekly group offerings and private clinic hours.
                    </p>
                </header>

                {/* Group Offerings */}
                <section className="mb-24">
                    <h2 className="text-3xl font-serif text-charcoal mb-12 uppercase tracking-widest text-center">Group Offerings</h2>
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                        {[
                            { day: 'Monday', time: '12:00-12:50pm', class: 'Chair Yoga', location: 'Amblebrook' },
                            { day: 'Monday', time: '1:15-2:30pm', class: 'Yin Yoga', location: 'Amblebrook' },
                            { day: 'Tuesday', time: '12:00-1:00pm', class: 'Slow Vinyasa Flow', location: 'Roots & River Yoga' },
                            { day: 'Wednesday', time: '10:15-11:30am', class: 'Gentle Yoga', location: 'Amblebrook' },
                            { day: 'Wednesday', time: '12:00-12:50pm', class: 'Chair Yoga', location: 'Amblebrook' },
                            { day: 'Thursday', time: '—', class: 'No scheduled practices', location: '' },
                            { day: 'Friday', time: '10:15-11:30am', class: 'Gentle Yoga', location: 'Amblebrook' },
                            { day: 'Friday', time: '12:00-12:50pm', class: 'Chair Yoga', location: 'Amblebrook' },
                        ].map((item, index) => (
                            <motion.div
                                key={`${item.day}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group grid grid-cols-1 md:grid-cols-4 gap-4 bg-white border border-charcoal/5 p-8 hover:border-charcoal/20 transition-all"
                            >
                                <h3 className="font-serif text-xl text-charcoal tracking-wide uppercase group-hover:italic transition-all">
                                    {item.day}
                                </h3>
                                <p className="text-charcoal/80 font-sans text-sm tracking-wide">
                                    {item.time}
                                </p>
                                <p className="text-charcoal/60 lowercase italic text-sm">
                                    {item.class}
                                </p>
                                <p className="text-charcoal/40 text-xs uppercase tracking-widest">
                                    {item.location}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Clinic Hours */}
                <section className="mb-24">
                    <h2 className="text-3xl font-serif text-charcoal mb-12 uppercase tracking-widest text-center">Clinic Hours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { day: 'Monday', hours: ['9:00-11:30', '3:00-4:00'] },
                            { day: 'Wednesday', hours: ['9:00-10:00', '1:00-4:00'] },
                            { day: 'Friday', hours: ['9:00-10:00', '1:00-4:00'] },
                        ].map((item, index) => (
                            <motion.div
                                key={item.day}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-white border border-charcoal/5 p-12 text-center space-y-6 hover:border-charcoal/20 transition-all"
                            >
                                <h3 className="text-2xl font-serif text-charcoal uppercase tracking-widest">
                                    {item.day}
                                </h3>
                                <div className="space-y-3">
                                    {item.hours.map((hour, idx) => (
                                        <p key={idx} className="text-charcoal/60 text-sm tracking-wide">
                                            {hour}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Booking CTA */}
                <div className="mt-24 p-12 bg-white border border-charcoal/5 text-center flex flex-col items-center gap-8">
                    <p className="text-sm text-charcoal/50 font-serif italic max-w-lg">
                        Ready to book a private session or have questions about group classes?
                    </p>
                    <a
                        href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-16 py-6 bg-charcoal text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sageGray transition-all"
                    >
                        Book a Private Session
                    </a>
                </div>
            </div>
        </div>
    );
}

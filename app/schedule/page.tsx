'use client';

import { motion } from 'framer-motion';

const scheduleData = [
    { day: 'Monday', morning: 'Private Clinical Practice', afternoon: 'Yoga Therapy Clinic', evening: 'Vinyasa Flow' },
    { day: 'Tuesday', morning: 'Reiki Energy Healing', afternoon: 'Yoga Therapy Clinic', evening: 'Restorative Yoga' },
    { day: 'Wednesday', morning: 'Private Clinical Practice', afternoon: 'Public Class — Studio A', evening: 'Pranayama & Meditation' },
    { day: 'Thursday', morning: 'Yoga Therapy Clinic', afternoon: 'Private Clinical Practice', evening: 'Hatha Yoga' },
    { day: 'Friday', morning: 'Reiki Energy Healing', afternoon: 'Yoga Therapy Clinic', evening: 'Weekend Warm Up' },
    { day: 'Saturday', morning: 'Public Workshops', afternoon: 'Available for Private Sessions', evening: '---' },
    { day: 'Sunday', morning: 'Rest & Integration', afternoon: 'Rest & Integration', evening: '---' }
];

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-luxuryIvory pt-40 pb-32 px-8 md:px-20 lg:px-32">
            <div className="max-w-[1200px] mx-auto">
                <header className="mb-24 text-center">
                    <p className="text-[10px] uppercase tracking-[0.6em] font-sans font-bold text-sageGray mb-4">Availability</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-charcoal leading-none tracking-[0.05em] mb-8">
                        ARCHITECTURAL <span className="italic text-charcoal/60 lowercase">rhythms</span>
                    </h1>
                    <p className="text-lg text-charcoal/50 leading-relaxed font-sans lowercase italic">
                        Weekly availability for private clinical sessions and public offerings.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-4 md:gap-8">
                    {scheduleData.map((item, index) => (
                        <motion.div
                            key={item.day}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group grid grid-cols-1 md:grid-cols-4 border-b border-charcoal/5 pb-8 pt-4 hover:border-charcoal/20 transition-all cursor-default"
                        >
                            <h3 className="font-serif text-2xl text-charcoal tracking-wide mb-4 md:mb-0 group-hover:italic transition-all uppercase">{item.day}</h3>
                            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <p className="text-[9px] uppercase tracking-widest text-sageGray font-bold">Morning</p>
                                    <p className="text-sm text-charcoal/60 lowercase italic">{item.morning}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[9px] uppercase tracking-widest text-sageGray font-bold">Afternoon</p>
                                    <p className="text-sm text-charcoal/60 lowercase italic">{item.afternoon}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[9px] uppercase tracking-widest text-sageGray font-bold">Evening</p>
                                    <p className="text-sm text-charcoal/60 lowercase italic">{item.evening}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-white border border-charcoal/5 text-center flex flex-col items-center gap-8">
                    <p className="text-sm text-charcoal/50 font-serif italic max-w-lg">
                        Please note that clinical availability is subject to change. For real-time booking and precise session times, please visit our secure portal.
                    </p>
                    <a
                        href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-16 py-6 bg-charcoal text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sageGray transition-all"
                    >
                        Secure Professional Session
                    </a>
                </div>
            </div>
        </div>
    );
}

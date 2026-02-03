'use client';

import { BookingWidget } from '@/components/BookingWidget';

export default function PrivateSessionPage() {
    return (
        <div className="flex flex-col w-full bg-background font-sans">
            <section className="pt-60 pb-20 px-8 md:px-20 lg:px-32 bg-background relative border-b border-charcoal/5">
                <div className="max-w-[1600px] mx-auto text-left space-y-12 relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-charcoal/30">Concierge</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-none tracking-[0.05em]">
                        PRIVATE <span className="italic text-charcoal/60 lowercase">booking</span>
                    </h1>
                </div>
            </section>

            <section className="bg-bone border-b border-charcoal/5">
                {/* Full width booking widget (responsive) */}
                <BookingWidget />
            </section>
        </div>
    );
}

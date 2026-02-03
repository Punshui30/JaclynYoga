'use client';

import { useEffect, useState } from 'react';

export function BookingWidget() {
    // Default to desktop to avoid hydration mismatch, check in effect
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop View: Embedded Iframe
    if (mounted && !isMobile) {
        return (
            <div className="w-full h-full min-h-[800px] bg-white border border-charcoal/10 relative overflow-hidden">
                <iframe
                    src="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                    className="w-full h-full absolute inset-0 border-0"
                    title="SequenceWiz Booking Portal"
                />
            </div>
        );
    }

    // Mobile/Loading View: Styled Button
    return (
        <div className="flex flex-col items-center justify-center p-8 md:p-16 bg-white border border-charcoal/10 text-center min-h-[400px] gap-8">
            <div className="space-y-4">
                <h3 className="text-2xl font-serif text-charcoal uppercase tracking-widest">Mobile Booking</h3>
                <p className="text-charcoal/50 text-sm leading-relaxed lowercase italic max-w-xs mx-auto">
                    For the best experience on mobile devices, please open our secure booking portal in a new window.
                </p>
            </div>
            <a
                href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 py-5 bg-charcoal text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-sage hover:text-charcoal transition-all block"
            >
                Open Booking Portal
            </a>
        </div>
    );
}

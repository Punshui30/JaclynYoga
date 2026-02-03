'use client';

import { useEffect, useState } from 'react';

export function BookingWidget() {
    // Default to desktop to avoid hydration mismatch, check in effect
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Unified View: Styled Button / Card (No Iframe to prevent blocking)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col items-center justify-center p-16 md:p-32 bg-white border border-charcoal/10 text-center min-h-[600px] gap-12">
            <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-serif text-charcoal uppercase tracking-widest">Clinical Portal</h3>
                <p className="text-charcoal/50 text-base leading-relaxed lowercase italic max-w-md mx-auto">
                    Please secure your appointment via our private clinical booking system.
                </p>
            </div>
            <a
                href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-16 py-6 bg-charcoal text-white text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-sage hover:text-charcoal transition-all"
            >
                Book Private Session
            </a>
        </div>
    );
}

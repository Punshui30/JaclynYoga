'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Class Schedule', href: 'https://www.rootsandriveryoga.com/classes', isExternal: true },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    if (pathname === '/') return null;

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/90 backdrop-blur-sm">
            <div className="max-w-[1600px] mx-auto px-8 md:px-20 lg:px-32 h-24 md:h-28 flex items-center justify-between border-b border-charcoal/5 relative z-[110]">
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-6 hover:opacity-80 transition-all group"
                >
                    <div className="relative w-12 h-12 md:w-16 md:h-16 filter saturate-[0.8] opacity-100">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-[14px] font-serif text-charcoal tracking-[0.4em] uppercase hidden sm:block">
                        Jaclyn Muir
                    </span>
                </Link>

                {/* DESKTOP NAV - HIDDEN (Moved to Hero) */}
                <div className="hidden items-center gap-16">
                    {/* Links moved to HeroSection for perspective layout */}
                </div>

                {/* MOBILE TRIGGER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[11px] uppercase tracking-[0.4em] font-bold text-charcoal/60 flex items-center gap-4 py-2"
                >
                    {isOpen ? 'Close' : 'Menu'}
                    <div className="w-6 h-6 flex items-center justify-center">
                        {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
                    </div>
                </button>
            </div>

            {/* MOBILE OVERLAY: ARCHITECTURAL VAULT */}
            <div className={cn(
                "fixed inset-0 bg-stone z-[105] md:hidden transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) flex flex-col justify-center px-12",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            )}>
                <div className="flex flex-col gap-12 items-center text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            className={cn(
                                "text-4xl font-serif tracking-[0.1em] transition-all duration-700",
                                pathname === link.href ? "text-charcoal" : "text-charcoal/30 hover:text-charcoal"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="w-16 h-[1px] bg-charcoal/10 my-12" />

                    <Link
                        href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="text-[12px] uppercase tracking-[0.6em] font-bold text-charcoal bg-white border border-charcoal/10 px-16 py-7 transition-all hover:bg-charcoal hover:text-stone"
                    >
                        Book Session
                    </Link>
                </div>

                {/* FOOTER OF MENU */}
                <div className="absolute bottom-24 left-0 right-0 px-12 flex flex-col items-center gap-8 text-center">
                    <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-charcoal/20">Private Clinical Practice</p>
                    <div className="space-y-3">
                        <p className="text-charcoal/40 text-[11px] uppercase tracking-[0.3em] font-bold italic">Frederick, MD</p>
                        <p className="text-charcoal/40 text-[11px] uppercase tracking-[0.3em] font-bold italic">Online Worldwide</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

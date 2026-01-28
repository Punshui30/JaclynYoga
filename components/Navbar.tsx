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

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-md">
            <div className="max-w-[1600px] mx-auto px-6 md:px-20 lg:px-32 h-20 md:h-24 flex items-center justify-between border-b border-charcoal/5 relative z-[110]">
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 md:gap-6 hover:opacity-80 transition-all group"
                >
                    <div className="relative w-16 h-16 md:w-10 md:h-10 filter saturate-[0.8] opacity-90">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Brand Artifact"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            className={cn(
                                "text-[9px] uppercase tracking-[0.45em] font-sans font-bold transition-all py-2",
                                pathname === link.href ? "text-charcoal" : "text-charcoal/30 hover:text-charcoal"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="px-10 py-4 bg-charcoal text-sage font-sans text-[9px] uppercase tracking-[0.45em] font-bold hover:bg-sage hover:text-charcoal transition-all"
                    >
                        Book Now
                    </Link>
                </div>

                {/* MOBILE TRIGGER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[11px] uppercase tracking-[0.4em] font-bold text-charcoal/60 flex items-center gap-3"
                >
                    {isOpen ? 'Close' : 'Menu'}
                    <div className="w-5 h-5 flex items-center justify-center">
                        {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
                    </div>
                </button>
            </div>

            {/* MOBILE OVERLAY: ARCHITECTURAL VAULT */}
            <div className={cn(
                "fixed inset-0 bg-background z-[105] md:hidden transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col justify-center px-12",
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
                                "text-4xl font-serif tracking-[0.08em] transition-all duration-500",
                                pathname === link.href ? "text-charcoal" : "text-charcoal/30"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="w-12 h-[1px] bg-charcoal/10 my-8" />

                    <Link
                        href="/booking"
                        onClick={() => setIsOpen(false)}
                        className="text-[12px] uppercase tracking-[0.5em] font-bold text-charcoal bg-white border border-charcoal/10 px-16 py-6"
                    >
                        Book Session
                    </Link>
                </div>

                {/* FOOTER OF MENU */}
                <div className="absolute bottom-20 left-0 right-0 px-12 flex flex-col items-center gap-6 text-center">
                    <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-charcoal/20">Private Clinical Practice</p>
                    <div className="space-y-2">
                        <p className="text-charcoal/40 text-[10px] uppercase tracking-[0.2em] font-bold italic">Frederick, MD</p>
                        <p className="text-charcoal/40 text-[10px] uppercase tracking-[0.2em] font-bold italic">Online Worldwide</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

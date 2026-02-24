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
    { name: 'Offerings', href: '/services' },
    { name: 'Brunswick', href: '/brunswick' },
    { name: 'Contact', href: '/contact' },
    { name: 'Schedule', href: '/schedule' },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    if (pathname === '/') return null;

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-[110] transition-all duration-500",
                isOpen ? "bg-stone" : "bg-background/90 backdrop-blur-sm border-b border-charcoal/5"
            )}>
                <div className="max-w-[1600px] mx-auto px-8 md:px-20 lg:px-32 h-24 md:h-28 flex items-center justify-between">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-6 hover:opacity-80 transition-all group"
                    >
                        <div className="relative w-20 h-20 md:w-32 md:h-32 filter saturate-[0.8] opacity-100">
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

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navLinks.filter(link => link.name !== 'Home').map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[10px] lg:text-[11px] uppercase tracking-[0.3em] transition-all font-bold",
                                    pathname === link.href ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/amblebrook"
                            className={cn(
                                "text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold transition-all px-6 py-2 border",
                                pathname === '/amblebrook'
                                    ? "bg-charcoal text-white border-charcoal"
                                    : "bg-transparent text-charcoal/60 border-charcoal/20 hover:border-charcoal hover:text-charcoal"
                            )}
                        >
                            Amblebrook
                        </Link>
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
            </nav>

            {/* MOBILE OVERLAY: ARCHITECTURAL VAULT */}
            <div className={cn(
                "fixed inset-0 bg-stone z-[105] md:hidden transition-all duration-1000 ease-in-out overflow-y-auto",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            )}>
                <div className="min-h-full flex flex-col justify-between pt-32 pb-16 px-6">
                    <div className="flex flex-col gap-8 items-center text-center pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-3xl font-serif tracking-[0.1em] transition-all duration-700",
                                    pathname === link.href ? "text-charcoal" : "text-charcoal/30 hover:text-charcoal"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="w-16 h-[1px] bg-charcoal/10 my-4" />

                        <Link
                            href="/amblebrook"
                            onClick={() => setIsOpen(false)}
                            className="text-[11px] uppercase tracking-[0.6em] font-bold text-charcoal bg-white border border-charcoal/10 px-10 py-5 transition-all hover:bg-charcoal hover:text-stone"
                        >
                            Amblebrook
                        </Link>
                    </div>

                    {/* FOOTER OF MENU */}
                    <div className="mt-16 flex flex-col items-center gap-6 text-center">
                        <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-charcoal/20">Private Clinical Practice</p>
                        <div className="space-y-2">
                            <p className="text-charcoal/40 text-[11px] uppercase tracking-[0.3em] font-bold italic">Frederick, MD</p>
                            <p className="text-charcoal/40 text-[11px] uppercase tracking-[0.3em] font-bold italic">Online Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

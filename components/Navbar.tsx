'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
];

import Image from 'next/image';

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-border/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-serif text-primary tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300"
                >
                    Jaclyn Muir
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative text-[10px] uppercase tracking-[0.3em] transition-all duration-300 hover:text-accent pb-1 group",
                                pathname === link.href ? "text-accent font-semibold" : "text-secondary font-medium"
                            )}
                        >
                            {link.name}
                            {/* Iridescent Underline */}
                            <span className={cn(
                                "absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-pink-200 via-blue-200 to-green-200 transform origin-left transition-transform duration-500",
                                pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            )} />
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="px-5 py-2 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm liquid-button"
                    >
                        Book
                    </Link>
                </div>
            </div>
        </nav>
    );
}

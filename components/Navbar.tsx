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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-4 text-2xl font-serif text-primary hover:text-accent transition-colors duration-300"
                >
                    <div className="relative w-12 h-12">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Hamsa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="hidden sm:block">Jaclyn Muir</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-widest transition-colors duration-300 hover:text-accent",
                                pathname === link.href ? "text-accent font-medium" : "text-secondary"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="px-6 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-sm"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile menu button could go here if needed, but keeping it minimalist for now */}
            </div>
        </nav>
    );
}

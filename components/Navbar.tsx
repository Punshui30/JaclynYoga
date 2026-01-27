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
                    className="text-xl font-serif text-primary tracking-[0.15em] uppercase hover:text-accent transition-colors duration-500"
                >
                    Jaclyn Muir
                </Link>

                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative text-[10px] uppercase tracking-[0.4em] transition-all duration-300 hover:text-accent pb-1 group",
                                pathname === link.href ? "text-accent" : "text-primary/60"
                            )}
                        >
                            {link.name}
                            {/* Farmhouse Accent Underline */}
                            <span className={cn(
                                "absolute bottom-0 left-0 w-full h-[0.5px] bg-accent transform origin-right transition-transform duration-500",
                                pathname === link.href ? "scale-x-100 origin-left" : "scale-x-0 group-hover:scale-x-100 group-hover:origin-left"
                            )} />
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="px-8 py-2.5 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition-all duration-500 rounded-none"
                    >
                        Book
                    </Link>
                </div>
            </div>
        </nav>
    );
}

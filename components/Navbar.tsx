'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Class Schedule', href: 'https://www.rootsandriveryoga.com/classes', isExternal: true },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative">
                <Link
                    href="/"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                    <div className="relative w-12 h-12">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Brand Artifact"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-serif text-charcoal tracking-wide hidden sm:block">
                        Jaclyn Muir
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            className={cn(
                                "text-[11px] uppercase tracking-[0.25em] font-sans font-bold transition-all duration-300 py-2",
                                pathname === link.href ? "text-primary px-1" : "text-charcoal/50 hover:text-charcoal"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="px-8 py-3 bg-primary text-white text-[11px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-primary/90 transition-all rounded-md shadow-sm ml-4"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Hairline Divider at the bottom of the Navbar */}
                <div className="absolute bottom-0 left-6 right-6 hairline opacity-50" />
            </div>
        </nav>
    );
}

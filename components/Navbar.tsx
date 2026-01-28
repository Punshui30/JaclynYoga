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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between relative">
                <Link
                    href="/"
                    className="flex items-center gap-5 hover:opacity-70 transition-all group"
                >
                    <div className="relative w-14 h-14 transition-transform duration-700 group-hover:scale-105">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Brand Artifact"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-serif text-charcoal opacity-90 tracking-widest hidden sm:block uppercase">
                        Jaclyn Muir
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            className={cn(
                                "micro-eyebrow transition-all duration-500 py-2 relative group",
                                pathname === link.href ? "text-primary" : "text-charcoal/40 hover:text-charcoal"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-transform origin-left duration-500",
                                pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            )} />
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="px-8 py-3 bg-primary text-white text-[9px] uppercase tracking-[0.3em] font-sans font-bold hover:bg-primary/90 transition-all rounded shadow-sm ml-6"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Boutique Hairline */}
                <div className="absolute bottom-0 left-6 right-6 hairline opacity-30" />
            </div>
        </nav>
    );
}

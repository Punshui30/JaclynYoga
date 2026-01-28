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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md">
            <div className="max-w-[1600px] mx-auto px-8 md:px-20 lg:px-32 h-24 flex items-center justify-between border-b border-charcoal/5">
                <Link
                    href="/"
                    className="flex items-center gap-6 hover:opacity-80 transition-all group"
                >
                    <div className="relative w-10 h-10 filter saturate-[0.8] opacity-90">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Brand Artifact"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-[13px] font-serif text-charcoal tracking-[0.3em] uppercase hidden sm:block">
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
            </div>
        </nav>
    );
}

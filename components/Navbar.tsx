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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F2EA]/95 backdrop-blur-sm border-b border-foreground/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                    <div className="relative w-12 h-12">
                        <Image
                            src="/images/logo.png"
                            alt="Jaclyn Muir Hamsa Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-serif text-foreground tracking-wide hidden sm:block">
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
                                "text-[11px] uppercase tracking-[0.25em] font-sans font-bold transition-colors duration-300 py-2",
                                pathname === link.href ? "text-[#9FAF9A] border-b-2 border-[#9FAF9A]/30" : "text-foreground/50 hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="px-8 py-3 bg-[#9FAF9A] text-white text-[11px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-[#9FAF9A]/90 transition-all rounded-md shadow-sm ml-4"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}

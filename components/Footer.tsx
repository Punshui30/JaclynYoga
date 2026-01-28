'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram } from 'lucide-react';

const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Class Schedule', href: 'https://www.rootsandriveryoga.com/classes', isExternal: true },
];

export function Footer() {
    return (
        <footer className="bg-bone py-60 px-8 md:px-20 lg:px-32 border-t border-charcoal/10 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-24">

                {/* BRAND CREST BLOCK */}
                <div className="md:col-span-2 lg:col-span-5 space-y-16">
                    <div className="flex flex-col items-start gap-12">
                        <div className="relative w-24 h-24 filter saturate-0 opacity-20 grayscale transition-all duration-1000 hover:opacity-100">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Brand Artifact"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-[15px] font-serif text-charcoal tracking-[0.4em] hover:text-sage transition-all uppercase">
                            Jaclyn Muir
                        </Link>
                    </div>
                    <p className="text-charcoal/50 max-w-sm text-base leading-relaxed font-sans tracking-wide lowercase italic border-l border-charcoal/10 pl-8">
                        The architecture of restoration. <br /> Private clinical wellness for high-threshold resilience and nervous system mastery.
                    </p>
                    <div className="flex gap-12 pt-4">
                        <a href="https://instagram.com/jaclyn_muir_yoga" target="_blank" rel="noopener noreferrer" className="text-charcoal/30 hover:text-charcoal transition-colors">
                            <Instagram size={24} strokeWidth={1} />
                        </a>
                        <a href="mailto:hello@jaclynmuir.com" className="text-charcoal/30 hover:text-charcoal transition-colors">
                            <Mail size={24} strokeWidth={1} />
                        </a>
                    </div>
                </div>

                {/* NAV LINKS BLOCK */}
                <div className="lg:col-span-3 space-y-12">
                    <p className="micro-eyebrow text-charcoal/80">Curated</p>
                    <ul className="space-y-8">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    target={link.isExternal ? "_blank" : undefined}
                                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                                    className="text-charcoal/40 hover:text-charcoal transition-all text-[11px] uppercase tracking-[0.5em] font-sans font-bold"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* DIRECT CHANNEL BLOCK */}
                <div className="lg:col-span-4 space-y-12">
                    <p className="micro-eyebrow text-charcoal/80">Direct Channel</p>
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <a
                                href="mailto:hello@jaclynmuir.com"
                                className="text-charcoal/80 hover:text-sage transition-colors block text-xl font-serif italic tracking-wide lowercase"
                            >
                                hello@jaclynmuir.com
                            </a>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-charcoal/20 font-bold">Frederick, MD · Online Worldwide</p>
                        </div>

                        <Link
                            href="https://sequencewiz.com/booking/booking-form?uid=c438e188-daf5-4b0a-9269-5861f3fd88b9&get_all=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-charcoal text-stone px-14 py-6 text-[10px] uppercase tracking-[0.6em] font-sans font-bold hover:bg-sage hover:text-charcoal transition-all shadow-sm"
                        >
                            Secure Session
                        </Link>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT STRIP */}
            <div className="max-w-[1600px] mx-auto mt-60 pt-20 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[9px] uppercase tracking-[0.6em] text-charcoal/20 font-sans font-bold">
                <p>© {new Date().getFullYear()} Jaclyn Muir. Boutique Clinical Practice.</p>
                <div className="flex flex-wrap justify-center gap-x-20 gap-y-6">
                    <span className="hover:text-charcoal transition-colors cursor-default">Clinical Wisdom</span>
                    <span className="hover:text-charcoal transition-colors cursor-default">Gentle Practice</span>
                    <span className="hover:text-charcoal transition-colors cursor-default">Restoration</span>
                </div>
            </div>
        </footer>
    );
}

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram } from 'lucide-react';

const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Terms', href: '/terms' },
];

export function Footer() {
    return (
        <footer className="bg-linen py-40 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 hairline opacity-40 bg-stone" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
                <div className="col-span-1 md:col-span-2 space-y-16">
                    <div className="flex flex-col items-start gap-12">
                        <div className="relative w-20 h-20 transition-transform duration-700 hover:scale-105">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Brand Artifact"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-3xl font-serif text-charcoal tracking-[0.05em] hover:text-primary transition-all uppercase">
                            Jaclyn Muir
                        </Link>
                    </div>
                    <p className="text-charcoal-soft max-w-sm text-base leading-relaxed font-sans opacity-80 tracking-wide">
                        A curated sanctuary for nervous system restoration, specializing in clinical yoga therapy, restorative movement, and ancestral healing.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-charcoal/40 hover:text-primary transition-colors">
                            <Instagram size={20} strokeWidth={1} />
                        </a>
                        <a href="#" className="text-charcoal/40 hover:text-primary transition-colors">
                            <Mail size={20} strokeWidth={1} />
                        </a>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="space-y-6">
                        <p className="micro-eyebrow text-primary">Explore</p>
                        <div className="hairline w-8 opacity-40 bg-stone" />
                    </div>
                    <ul className="space-y-6">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-charcoal/60 hover:text-primary transition-all text-[11px] uppercase tracking-[0.2em] font-sans font-bold"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-12">
                    <div className="space-y-6">
                        <p className="micro-eyebrow text-primary">Inquiries</p>
                        <div className="hairline w-8 opacity-40 bg-stone" />
                    </div>
                    <div className="space-y-10">
                        <a
                            href="mailto:hello@jaclynmuir.com"
                            className="text-charcoal/80 hover:text-primary transition-colors block text-lg font-serif italic tracking-wide"
                        >
                            hello@jaclynmuir.com
                        </a>
                        <Link
                            href="/booking"
                            className="inline-block bg-primary text-white px-10 py-4 text-[9px] uppercase tracking-[0.3em] font-sans font-bold hover:bg-primary/90 transition-all rounded shadow-sm"
                        >
                            Book a Session
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-40 pt-16 border-t border-stone/20 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.4em] text-charcoal/30 font-sans font-bold">
                <p>© {new Date().getFullYear()} Jaclyn Muir. Boutique Wellness.</p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                    <span>Clinical Wisdom</span>
                    <span>Gentle Practice</span>
                    <span>Restoration</span>
                </div>
            </div>

            {/* Architecture branding echo */}
            <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] border border-stone/5 rounded-full -z-10" />
        </footer>
    );
}

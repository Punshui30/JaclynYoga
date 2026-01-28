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
        <footer className="bg-bone py-48 px-8 md:px-20 lg:px-32 border-t border-charcoal/10 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
                <div className="col-span-1 md:col-span-2 space-y-16">
                    <div className="flex flex-col items-start gap-12">
                        <div className="relative w-16 h-16 filter saturate-0 opacity-40">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Brand Artifact"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-[13px] font-serif text-charcoal tracking-[0.3em] hover:text-sage transition-all uppercase">
                            Jaclyn Muir
                        </Link>
                    </div>
                    <p className="text-charcoal/50 max-w-sm text-sm leading-relaxed font-sans tracking-wide lowercase italic">
                        The architecture of restoration. <br /> Private clinical wellness for high-threshold resilience.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-charcoal/30 hover:text-charcoal transition-colors">
                            <Instagram size={18} strokeWidth={1} />
                        </a>
                        <a href="mailto:hello@jaclynmuir.com" className="text-charcoal/30 hover:text-charcoal transition-colors">
                            <Mail size={18} strokeWidth={1} />
                        </a>
                    </div>
                </div>

                <div className="space-y-12">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/80">Curated</p>
                    <ul className="space-y-6">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-charcoal/50 hover:text-charcoal transition-all text-[10px] uppercase tracking-[0.4em] font-sans font-bold"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-12">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-sans font-bold text-charcoal/80">Direct</p>
                    <div className="space-y-12">
                        <a
                            href="mailto:hello@jaclynmuir.com"
                            className="text-charcoal/80 hover:text-sage transition-colors block text-base font-serif italic tracking-wide"
                        >
                            hello@jaclynmuir.com
                        </a>
                        <Link
                            href="/booking"
                            className="inline-block bg-charcoal text-white px-12 py-5 text-[10px] uppercase tracking-[0.5em] font-sans font-bold hover:bg-sage hover:text-charcoal transition-all"
                        >
                            Book Session
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto mt-48 pt-16 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.5em] text-charcoal/20 font-sans font-bold">
                <p>© {new Date().getFullYear()} Jaclyn Muir. Boutique Clinical Practice.</p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-4">
                    <span>Clinical Wisdom</span>
                    <span>Gentle Practice</span>
                    <span>Restoration</span>
                </div>
            </div>
        </footer>
    );
}

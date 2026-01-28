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
        <footer className="bg-background py-32 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 hairline opacity-20" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                <div className="col-span-1 md:col-span-2 space-y-12">
                    <div className="flex flex-col items-start gap-10">
                        <div className="relative w-24 h-24">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Brand Artifact"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-3xl font-serif text-charcoal tracking-tight hover:text-primary transition-colors">
                            Jaclyn Muir
                        </Link>
                    </div>
                    <p className="text-charcoal-soft max-w-sm text-base leading-relaxed font-sans">
                        A clinical approach to holistic wellness. Specializing in Yoga Therapy, mindful movement, and restorative energy healing.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-charcoal-soft hover:text-primary transition-colors">
                            <Instagram size={22} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-charcoal-soft hover:text-primary transition-colors">
                            <Mail size={22} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                <div className="space-y-10">
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary font-sans font-bold">Explore</h4>
                        <div className="hairline w-12" />
                    </div>
                    <ul className="space-y-5">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-charcoal-soft hover:text-charcoal transition-colors duration-300 text-sm font-sans"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-10">
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary font-sans font-bold">Inquiries</h4>
                        <div className="hairline w-12" />
                    </div>
                    <div className="space-y-8">
                        <a
                            href="mailto:hello@jaclynmuir.com"
                            className="text-charcoal hover:text-primary transition-colors block text-xl font-serif italic"
                        >
                            hello@jaclynmuir.com
                        </a>
                        <Link
                            href="/booking"
                            className="inline-block bg-primary text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-primary/90 transition-all rounded-md shadow-sm"
                        >
                            Book a Session
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32 pt-12 hairline flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] text-charcoal/40 font-sans font-bold">
                <p>© {new Date().getFullYear()} Jaclyn Muir. Curated Wellness.</p>
                <div className="flex gap-12">
                    <span>Clinical Wisdom</span>
                    <span>Gentle Practice</span>
                    <span>Nervous System Support</span>
                </div>
            </div>

            {/* Branding Shape Repetition */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        </footer>
    );
}

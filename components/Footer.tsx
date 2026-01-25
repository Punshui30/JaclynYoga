import Link from 'next/link';
import Image from 'next/image';
import { Mail, Github, Instagram } from 'lucide-react';

const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Terms', href: '/terms' },
];

export function Footer() {
    return (
        <footer className="bg-muted py-24 px-6 border-t border-border/40 relative overflow-hidden">
            {/* Subtle brand watermark in footer */}
            <div className="absolute right-0 bottom-0 w-96 h-96 opacity-[0.02] -z-10 translate-x-1/4 translate-y-1/4">
                <Image
                    src="/images/logo.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Hamsa Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-2xl font-serif text-primary tracking-widest uppercase">
                            Jaclyn Muir
                        </Link>
                    </div>
                    <p className="text-secondary max-w-sm mb-10 text-lg leading-relaxed">
                        Certified Yoga Therapist and Holistic Wellness Practitioner specializing in mindful movement, yoga therapy, and energy healing.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="p-3 bg-background rounded-full text-secondary hover:text-accent hover:shadow-md transition-all duration-300">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-3 bg-background rounded-full text-secondary hover:text-accent hover:shadow-md transition-all duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-8">Explore</h4>
                    <ul className="space-y-5">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-secondary hover:text-accent transition-colors duration-300 text-lg"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-8">Contact</h4>
                    <p className="text-secondary mb-6 italic text-lg leading-relaxed">Available for private sessions and yoga therapy consultations.</p>
                    <a
                        href="mailto:hello@jaclynmuir.com"
                        className="text-secondary hover:text-accent transition-colors block mb-10 text-lg"
                    >
                        hello@jaclynmuir.com
                    </a>
                    <Link
                        href="/booking"
                        className="inline-block text-accent border-b-2 border-accent hover:text-gold hover:border-gold transition-all duration-300 font-medium pb-1"
                    >
                        Book a Session
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                <p>© {new Date().getFullYear()} Jaclyn Muir. All rights reserved.</p>
                <p>Yoga • Yoga Therapy • Reiki</p>
            </div>
        </footer>
    );
}

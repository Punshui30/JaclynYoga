import Link from 'next/link';
import { Mail, Github, Instagram } from 'lucide-react';

const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Terms', href: '/terms' },
];

export function Footer() {
    return (
        <footer className="bg-muted py-20 px-6 border-t border-border/40">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-2xl font-serif text-primary mb-6 block">
                        Jaclyn Muir
                    </Link>
                    <p className="text-secondary max-w-sm mb-8">
                        Certified Yoga Therapist and Holistic Wellness Practitioner specializing in mindful movement, yoga therapy, and energy healing.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 text-secondary hover:text-accent transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 text-secondary hover:text-accent transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-widest text-primary font-medium mb-6">Explore</h4>
                    <ul className="space-y-4">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-secondary hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-widest text-primary font-medium mb-6">Contact</h4>
                    <p className="text-secondary mb-4 italic">Available for private sessions and yoga therapy consultations.</p>
                    <a
                        href="mailto:hello@jaclynmuir.com"
                        className="text-secondary hover:text-accent transition-colors block mb-6"
                    >
                        hello@jaclynmuir.com
                    </a>
                    <Link
                        href="/booking"
                        className="inline-block text-accent border-b border-accent hover:text-gold hover:border-gold transition-all duration-300"
                    >
                        Book a Session
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                <p>© {new Date().getFullYear()} Jaclyn Muir. All rights reserved.</p>
                <p>Yoga • Yoga Therapy • Reiki</p>
            </div>
        </footer>
    );
}

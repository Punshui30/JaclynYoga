import Link from 'next/link';
import Image from 'next/image';
import { Mail, Github, Instagram } from 'lucide-react';

const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Terms', href: '/terms' },
];

import { WoodGrain } from './WoodGrain';

export function Footer() {
    return (
        <footer className="bg-background py-24 px-6 border-t border-border/60 relative overflow-hidden">
            {/* Ash Wood Grain Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <WoodGrain className="w-full h-full text-secondary/40" />
            </div>

            {/* Subtle brand watermark in footer */}
            <div className="absolute right-0 bottom-0 w-96 h-96 opacity-[0.03] -z-10 translate-x-1/4 translate-y-1/4 grayscale">
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
                        <div className="relative w-12 h-12 grayscale opacity-80">
                            <Image
                                src="/images/logo.png"
                                alt="Jaclyn Muir Hamsa Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-2xl font-serif text-primary tracking-widest uppercase hover:text-accent transition-colors">
                            Jaclyn Muir
                        </Link>
                    </div>
                    <p className="text-secondary max-w-sm mb-10 text-lg leading-relaxed font-light">
                        Certified Yoga Therapist and Holistic Wellness Practitioner specializing in mindful movement, yoga therapy, and energy healing.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-3 border border-border/60 text-secondary hover:text-accent hover:border-accent transition-all duration-300">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-3 border border-border/60 text-secondary hover:text-accent hover:border-accent transition-all duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-8">Explore</h4>
                    <ul className="space-y-4">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-secondary hover:text-accent transition-colors duration-300 text-base accent-underline"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-8">Contact</h4>
                    <p className="text-secondary mb-6 text-base leading-relaxed font-light">Available for private sessions and yoga therapy consultations.</p>
                    <a
                        href="mailto:hello@jaclynmuir.com"
                        className="text-primary hover:text-accent transition-colors block mb-10 text-lg font-medium"
                    >
                        hello@jaclynmuir.com
                    </a>
                    <Link
                        href="/booking"
                        className="inline-block bg-primary text-primary-foreground px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                        Book a Session
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <p>© {new Date().getFullYear()} Jaclyn Muir. All rights reserved.</p>
                <div className="flex gap-8">
                    <span>Yoga Therapy</span>
                    <span>Mindfulness</span>
                    <span>Reiki</span>
                </div>
            </div>
        </footer>
    );
}

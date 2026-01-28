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
        <footer className="bg-[#F6F2EA] py-24 px-6 border-t border-foreground/5 relative overflow-hidden">
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
                        <Link href="/" className="text-2xl font-serif text-foreground tracking-wide hover:text-[#9FAF9A] transition-colors">
                            Jaclyn Muir
                        </Link>
                    </div>
                    <p className="text-foreground/70 max-w-sm mb-10 text-base leading-relaxed font-sans">
                        Certified Yoga Therapist and Holistic Wellness Practitioner specializing in mindful movement, yoga therapy, and energy healing.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-3 bg-white/50 border border-foreground/5 text-foreground/60 hover:text-[#9FAF9A] hover:border-[#9FAF9A] transition-all duration-300 rounded-lg">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white/50 border border-foreground/5 text-foreground/60 hover:text-[#9FAF9A] hover:border-[#9FAF9A] transition-all duration-300 rounded-lg">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-bold mb-8">Explore</h4>
                    <ul className="space-y-4">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-foreground/60 hover:text-foreground transition-colors duration-300 text-sm font-sans"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#9FAF9A] font-sans font-bold mb-8">Contact</h4>
                    <p className="text-foreground/60 mb-6 text-sm leading-relaxed font-sans">Available for private sessions and yoga therapy consultations.</p>
                    <a
                        href="mailto:hello@jaclynmuir.com"
                        className="text-foreground hover:text-[#9FAF9A] transition-colors block mb-10 text-lg font-serif italic"
                    >
                        hello@jaclynmuir.com
                    </a>
                    <Link
                        href="/booking"
                        className="inline-block bg-[#9FAF9A] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-[#9FAF9A]/90 transition-all duration-300 rounded-md shadow-sm"
                    >
                        Book a Session
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-foreground/40 font-sans">
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

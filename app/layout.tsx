import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { ClientLayout } from '@/components/ClientLayout';
import { metadata as siteMetadata } from './metadata';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientLayout
        interVariable={inter.variable}
        playfairVariable={playfair.variable}
      >
        {children}
      </ClientLayout>
    </html>
  );
}

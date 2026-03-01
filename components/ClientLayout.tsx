'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface ClientLayoutProps {
    children: React.ReactNode;
    interVariable: string;
    playfairVariable: string;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({
    children,
    interVariable,
    playfairVariable
}) => {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <body className={`${interVariable} ${playfairVariable} font-sans min-h-screen flex flex-col`}>
            {!isHome && <Navbar />}
            <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
                {children}
            </main>
            {!isHome && <Footer />}
        </body>
    );
};

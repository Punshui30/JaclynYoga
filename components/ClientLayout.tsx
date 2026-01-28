'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SplashScreen } from '@/components/SplashScreen';

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
    const [showSplash, setShowSplash] = useState(true);
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <body className={`${interVariable} ${playfairVariable} font-sans min-h-screen flex flex-col`}>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            {!isHome && <Navbar />}
            <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
                {children}
            </main>
            {!isHome && <Footer />}
        </body>
    );
};

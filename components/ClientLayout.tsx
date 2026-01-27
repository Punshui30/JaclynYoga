'use client';

import React, { useState } from 'react';
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

    return (
        <body className={`${interVariable} ${playfairVariable} font-sans min-h-screen flex flex-col`}>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </body>
    );
};

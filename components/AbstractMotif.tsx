'use client';

import { motion } from 'framer-motion';

export function AbstractMotif({ className }: { className?: string }) {
    return (
        <div className={className}>
            <svg
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-30 select-none pointer-events-none"
            >
                {/* Organic Flowing Lines - Bespoke Motif */}
                <motion.path
                    d="M100 400C100 234.315 234.315 100 400 100C565.685 100 700 234.315 700 400C700 565.685 565.685 700 400 700"
                    stroke="url(#motif-gradient)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                />

                <motion.path
                    d="M200 400C200 289.543 289.543 200 400 200C510.457 200 600 289.543 600 400C600 510.457 510.457 600 400 600C289.543 600 200 510.457 200 400Z"
                    stroke="url(#motif-gradient)"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />

                <motion.path
                    d="M400 50C100 50 50 400 400 750C750 400 700 50 400 50Z"
                    stroke="url(#motif-gradient-2)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
                />

                {/* Floating Organic Clusters */}
                {[...Array(5)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx={400 + Math.sin(i) * 200}
                        cy={400 + Math.cos(i) * 200}
                        r={10 + i * 5}
                        fill="url(#motif-gradient)"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ delay: 2 + i * 0.5, duration: 2 }}
                    />
                ))}

                <defs>
                    <linearGradient id="motif-gradient" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffb6c1" />
                        <stop offset="0.5" stopColor="#b0e0e6" />
                        <stop offset="1" stopColor="#98fb98" />
                    </linearGradient>
                    <linearGradient id="motif-gradient-2" x1="800" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffff66" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#ffb6c1" stopOpacity="0.5" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

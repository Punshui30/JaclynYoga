'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set initial state to the end of the video
        const startReversePlayback = () => {
            video.currentTime = video.duration;

            const playbackRate = 1; // Normal speed reverse
            let lastTime = performance.now();

            const step = (now: number) => {
                if (!video || video.currentTime <= 0) {
                    setIsVisible(false);
                    setTimeout(onComplete, 500); // Allow time for fade out
                    return;
                }

                const deltaTime = (now - lastTime) / 1000;
                lastTime = now;

                // Manually decrement currentTime to simulate reverse playback
                video.currentTime = Math.max(0, video.currentTime - deltaTime * playbackRate);

                requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        };

        if (video.readyState >= 1) {
            startReversePlayback();
        } else {
            video.addEventListener('loadedmetadata', startReversePlayback);
        }

        // Safety timeout in case video loading fails or reverse playback is slow
        const safetyTimeout = setTimeout(() => {
            if (isVisible) {
                console.log('Splash screen safety timeout triggered');
                setIsVisible(false);
                onComplete();
            }
        }, 5000);

        return () => {
            video.removeEventListener('loadedmetadata', startReversePlayback);
            clearTimeout(safetyTimeout);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                >
                    <video
                        ref={videoRef}
                        src="/assets/yoga-animation.mp4"
                        muted
                        playsInline
                        className="w-full h-full object-contain max-w-4xl mx-auto opacity-90 mix-blend-multiply"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

import React from 'react';

export const WoodGrain: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 800 800"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <filter id="woodGrainFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.01 0.4"
                    numOctaves="2"
                    stitchTiles="stitch"
                    result="noise"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="20"
                />
            </filter>
            <g filter="url(#woodGrainFilter)" opacity="0.08" stroke="currentColor" strokeWidth="0.5">
                {[...Array(50)].map((_, i) => (
                    <line
                        key={i}
                        x1="-10%"
                        y1={`${i * 2}%`}
                        x2="110%"
                        y2={`${i * 2}%`}
                        fill="none"
                    />
                ))}
            </g>
        </svg>
    );
};

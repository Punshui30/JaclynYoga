import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://jaclynyoga.com'),
    title: {
        default: 'Jaclyn Muir | MS, C-IAYT Certified Yoga Therapist in Frederick, MD',
        template: '%s | Jaclyn Muir Yoga Therapy'
    },
    description: 'Evidence-based yoga therapy, clinical somatic healing, and Reiki in Frederick, Maryland. Jaclyn Muir (MS, C-IAYT, E-RYT 200) specializes in nervous system restoration, chronic pain management, and mindful resilience.',
    keywords: [
        'Yoga Therapy Frederick MD',
        'C-IAYT Yoga Therapist',
        'Somatic Healing Maryland',
        'Reiki Practitioner Frederick',
        'Nervous System Regulation',
        'Chronic Pain Yoga Therapy',
        'Jaclyn Muir',
        'Jaclyn Muir Yoga',
        'Roots and River Yoga Brunswick',
        'Yoga for Mobility Settings',
        'Holistic Wellness Frederick'
    ],
    authors: [{ name: 'Jaclyn Muir', url: 'https://jaclynyoga.com' }],
    creator: 'Jaclyn Muir',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jaclynyoga.com',
        title: 'Jaclyn Muir | Clinical Yoga Therapy & Somatic Healing',
        description: 'Evidence-based yoga therapy, clinical somatic healing, and Reiki in Frederick, Maryland.',
        siteName: 'Jaclyn Muir Yoga Therapy',
        images: [
            {
                url: '/images/jaclyn-headshot.webp',
                width: 1200,
                height: 630,
                alt: 'Jaclyn Muir - Certified Yoga Therapist',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jaclyn Muir | MS, C-IAYT Yoga Therapist',
        description: 'Evidence-based yoga therapy and clinical healing in Frederick, MD.',
        images: ['/images/jaclyn-headshot.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://jaclynyoga.com',
    },
};

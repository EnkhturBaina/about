import type {Metadata, Viewport} from 'next';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import './globals.scss';
import Navbar from '@/components/Navigations/NavBar';
import Footer from '@/components/Navigations/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://enkhturbaina.github.io/about/'),
    title: 'Enkhtur',
    description: 'Mobile Developer',
    keywords: 'React.js, Node.js, React Native, Android, IOS',
    authors: [{name: 'Enkhtur', url: 'https://enkhturbaina.github.io/about/'}],
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Enkhtur'
    },
    formatDetection: {
        telephone: false
    },
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://enkhturbaina.github.io/about/',
        images: [
            {
                url: 'https://job-infos.kyawzinthiha.com/profile-banner.png',
                width: 1920,
                height: 1080,
                alt: 'Enkhtur - Mobile Developer'
            }
        ]
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: ' #191919',
    colorScheme: 'dark'
};


export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}

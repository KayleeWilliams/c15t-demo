import type React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { ConsentManager } from './consent-manager';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'PigeonPost - Revolutionary Pigeon-Powered Courier Service',
	description:
		'Fast, reliable, and eco-friendly delivery across London using trained carrier pigeons. Experience the future of urban logistics.',
	// generator: "v0.app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="font-sans antialiased">
				<ConsentManager>
					{children}
					<Analytics />
				</ConsentManager>
			</body>
		</html>
	);
}

'use client';

import type { ReactNode } from 'react';
import { ClientSideOptionsProvider } from '@c15t/nextjs/client';
import { metaPixel } from '@c15t/scripts/meta-pixel';
import posthog from 'posthog-js';

/**
 * Client-side consent manager wrapper for handling scripts and callbacks
 *
 * This component is rendered on the client and provides the ability to:
 * - Load integration scripts (Google Tag Manager, Meta Pixel, TikTok Pixel, etc.)
 * - Handle client-side callbacks (onConsentSet, onError, onBannerFetched)
 * - Manage script lifecycle (onLoad, onDelete)
 *
 * @param props - Component properties
 * @param props.children - Child components to render within the client-side context
 *
 * @returns The client-side options provider with children
 *
 * @see https://c15t.com/docs/frameworks/next/callbacks
 * @see https://c15t.com/docs/frameworks/next/script-loader
 */
export function ConsentManagerClient({ children }: { children: ReactNode }) {
	return (
		<ClientSideOptionsProvider
			// 📝 Add your integration scripts here
			// Scripts are loaded when consent is given and removed when consent is revoked
			scripts={[
				metaPixel({
					pixelId: '1234567890',
				}),
			]}
			// 📝 Add your callbacks here
			// Callbacks allow you to react to consent events
			callbacks={{
				onConsentSet({ preferences }) {
					const phStatus = posthog.get_explicit_consent_status();
					if (preferences.measurement && phStatus !== 'granted') {
						posthog.opt_in_capturing();
						console.log('opt_in_capturing');
					} else if (!preferences.measurement && phStatus !== 'denied') {
						posthog.opt_out_capturing();
						console.log('opt_out_capturing');
					}
				},
			}}
		>
			{children}
		</ClientSideOptionsProvider>
	);
}

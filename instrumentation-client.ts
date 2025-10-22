import posthog from 'posthog-js';

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
	api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
	defaults: '2025-05-24',
	// PostHog will not set any cookies until the user has given consent.
	// cookieless_mode: "on_reject"
});

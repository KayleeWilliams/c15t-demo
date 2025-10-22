import type { NextConfig } from 'next';

const config: NextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/c15t/:path*',
				destination: 'https://consent-io-europe-c15t-examples.c15t.dev//:path*',
			},
		];
	},
};

export default config;

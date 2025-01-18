/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'tailwindui.com'
            },
        ]
    },
    experimental: {
        optimizePackageImports: ['@chakra-ui/react'],
    },
    env:{
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
    }
};

export default nextConfig;

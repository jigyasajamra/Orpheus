/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**",
            },
        ],
        domains: ["aceternity.com","imgv3.fotor.com"],
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "i.pinimg.com",
            pathname: "**",
        },{
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
        },{
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
        }],
    },
};

export default nextConfig;

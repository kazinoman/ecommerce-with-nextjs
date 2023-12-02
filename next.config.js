/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: [
        //     {
        //         protocol: "https",
        //         hostname: "api.escuelajs.co",
        //         port: "",
        //         pathname: "api.escuelajs.co",
        //     },
        // ],

        domains: [
            "api.escuelajs.co",
            "i.imgur.com",
            "encrypted-tbn0.gstatic.coms",
            "placeimg.com",
            "encrypted-tbn0.gstatic.com",
        ],
    },
};

module.exports = nextConfig;

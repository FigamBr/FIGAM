/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.prismic.io"], // Adicione o domínio aqui
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.prismic.io",
                port: "",
            },
        ],
    },
}

module.exports = nextConfig

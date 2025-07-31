/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.schlatech.com",
          },
        ],
        destination: "https://schlatech.com/:path*",
        permanent: true, // This gives you a 301
      },
    ];
  },
};

export default nextConfig;

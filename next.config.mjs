/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
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
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

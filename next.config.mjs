/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exam.elevateegy.com",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
      },
    ],
  },
};

export default nextConfig;

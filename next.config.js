/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/de",
        permanent: false,
      },
    ];
  },

  rewrites: async () => {
    return [
      {
        source: "/de",
        destination: "https://altes-neuwirtshaus.webflow.io",
      },
      {
        source: "/de/:slug*",
        destination: "https://altes-neuwirtshaus.webflow.io/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;

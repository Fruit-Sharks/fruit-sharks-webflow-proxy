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
        destination: "https://altesneuwirtshaus.webflow.io",
      },
      {
        source: "/de/:slug*",
        destination: "https://altesneuwirtshaus.webflow.io/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;

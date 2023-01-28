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
      {
        source: "/aktuelles",
        destination: "/de/aktuelles",
        permanent: false,
      },
      {
        source: "/aktuelles/:slug*",
        destination: "/de/aktuelles/:slug*",
        permanent: false,
      },
      {
        source: "/impressum",
        destination: "/de/legal/impressum",
        permanent: false,
      },
      {
        source: "/legal/impressum",
        destination: "/de/legal/impressum",
        permanent: false,
      },
      {
        source: "/datenschutz",
        destination: "/de/legal/datenschutz",
        permanent: false,
      },
      {
        source: "/legal/datenschutz",
        destination: "/de/legal/datenschutz",
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

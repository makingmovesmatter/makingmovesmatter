const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Locations -> /az/[city]
      { source: '/locations', destination: '/az', permanent: true },
      { source: '/locations/:city', destination: '/az/:city', permanent: true },
      { source: '/mesa-az', destination: '/az/mesa', permanent: true },
      { source: '/chandler-az', destination: '/az/chandler', permanent: true },
      { source: '/scottsdale-az', destination: '/az/scottsdale', permanent: true },
      { source: '/tempe-az', destination: '/az/tempe', permanent: true },
      { source: '/gilbert-az', destination: '/az/gilbert', permanent: true },
      { source: '/phoenix-az', destination: '/az/phoenix', permanent: true },
      { source: '/queen-creek-az', destination: '/az/queen-creek', permanent: true },
      { source: '/san-tan-valley-az', destination: '/az/san-tan-valley', permanent: true },

      // Services -> /services/[service]
      { source: '/furniture-moving', destination: '/services/furniture-moving', permanent: true },
      { source: '/local-moving', destination: '/services/local-moving', permanent: true },
      { source: '/long-distance-moving', destination: '/services/long-distance-moving', permanent: true },
      { source: '/commercial-services', destination: '/services/commercial-services', permanent: true },
      { source: '/furniture-assembly', destination: '/services/furniture-assembly', permanent: true },
      { source: '/packing-and-unpacking-services', destination: '/services/packing-and-unpacking-services', permanent: true },
      { source: '/large-and-heavy-item-moving', destination: '/services/large-and-heavy-item-moving', permanent: true },
      { source: '/storage', destination: '/services/storage', permanent: true },
      { source: '/hot-tub-relocation', destination: '/services/hot-tub-relocation', permanent: true },
      { source: '/residential', destination: '/services/residential', permanent: true },
      { source: '/in-state-moves', destination: '/services/in-state-moves', permanent: true },
      { source: '/moving-labor', destination: '/services/moving-labor', permanent: true },
      { source: '/moving-services', destination: '/services/moving-services', permanent: true },
      { source: '/movers', destination: '/services/movers', permanent: true },
      { source: '/arizona-movers', destination: '/services/arizona-movers', permanent: true },
    ];
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {};

// const withPWA = require('next-pwa')({
//   dest: 'public'
// })

module.exports = {
  images: {
    domains: [
      "storage.googleapis.com",
      "cmfirstgroup.com",
      "www.spencerclarkegroup.co.uk",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // pwa: {
  //   dest: "public",
  //   disable: true,
  //   // register: true,
  //   // skipWaiting: true,
  //   // exclude: []
  // },
  webpack: (nextConfig, options) => {
    const { isServer } = options;
    nextConfig.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: nextConfig.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: nextConfig.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: nextConfig.esModule || false,
          },
        },
      ],
    });

    nextConfig.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return nextConfig;
  },
};

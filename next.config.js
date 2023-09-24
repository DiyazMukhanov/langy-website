/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = {
//     webpack: (
//         nextConfig,
//         options
//     ) => {
//         const { isServer } = options;
//         nextConfig.module.rules.push({
//             test: /\.(ogg|mp3|wav|mpe?g)$/i,
//             exclude: nextConfig.exclude,
//             use: [
//               {
//                 loader: require.resolve('url-loader'),
//                 options: {
//                   limit: nextConfig.inlineImageLimit,
//                   fallback: require.resolve('file-loader'),
//                   publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
//                   outputPath: `${isServer ? '../' : ''}static/images/`,
//                   name: '[name]-[hash].[ext]',
//                   esModule: nextConfig.esModule || false,
//                 },
//               },
//             ],
//           });
      
//       return nextConfig
//     },
//   }


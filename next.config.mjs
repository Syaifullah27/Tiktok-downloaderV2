/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  };

export default nextConfig;

// module.exports = {
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: [
//             { key: 'Access-Control-Allow-Origin', value: '*' }
//           ]
//         }
//       ]
//     }
//   }
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    domains: ["https://testerika.in", "https://testerika.com"],
    unoptimized: true,
  }
})
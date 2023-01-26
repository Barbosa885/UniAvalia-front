/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV != 'production',
  dest: 'public',
  register: true,
  skipWaiting: true,
  sw: '/sw.js',
})

const nextConfig = withPWA({
  reactStricMode: true,
  images: {
    domains: ['www.provafacilnaweb.com.br'],
  },
})

module.exports = nextConfig

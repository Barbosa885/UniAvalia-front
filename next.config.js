/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  images: {
    domains: ['www.provafacilweb.com.br'],
  },
})

module.exports = withPWA();
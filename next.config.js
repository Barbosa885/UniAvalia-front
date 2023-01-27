/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = [
  {
    urlPattern: /^https?.*/,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'offlineCache',
      expiration: {
        maxEntries: 200,
      },
    },
  },
]

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})


const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para imagens se necessário
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    }
    return config
  },
}

module.exports = nextConfig

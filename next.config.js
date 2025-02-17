/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    cacheStartUrl: true,
    cacheOnFrontendNav: true,
    reloadOnOnline: true,
    sw: 'service-worker.js'
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
    images: {
        domains: ['job-infos.kyawzinthiha.com']
    },
    assetPrefix: isProd ? '/<repository-name>/' : '',
    basePath: isProd ? '/<repository-name>' : ''
})

/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? '/fiteasy-shima-training-menu' : '',
  trailingSlash: true,
};

module.exports = withVanillaExtract(nextConfig);

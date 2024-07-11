/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  output: 'standalone',
  basePath: '/api',
  experimental: {
    instrumentationHook: true
  }
}

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  nextConfig,
  {
    org: process.env.SENTRY_ORGANISATION,
    project: process.env.SENTRY_PROJECT,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: false,
    automaticVercelMonitors: false,
    autoInstrumentServerFunctions: false,
    authToken: process.env.SENTRY_AUTH_TOKEN
  }
);

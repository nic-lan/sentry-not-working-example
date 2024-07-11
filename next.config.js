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
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "my-org",
    project: "sentry-not-propagating-errors",
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: false,
    automaticVercelMonitors: false,
    autoInstrumentServerFunctions: false,
    authToken: process.env.SENTRY_AUTH_TOKEN
  }
);

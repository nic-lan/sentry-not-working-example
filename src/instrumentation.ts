import * as Sentry from '@sentry/nextjs'

export async function register() {
  if (process.env.NEXT_RUNTIME == 'nodejs') {
    Sentry.init({
      enableTracing: false,
      dsn: process.env.SENTRY_PROJECT_DSN,
      release: process.env.SENTRY_RELEASE,
      environment: process.env.SENTRY_ENVIRONMENT,
      debug: true
    })
  }

  if (process.env.NEXT_RUNTIME == 'edge') {
    Sentry.init({
      enableTracing: false,
      dsn: process.env.SENTRY_PROJECT_DSN,
      release: process.env.SENTRY_RELEASE,
      environment: process.env.SENTRY_ENVIRONMENT,
      debug: true
    })
  }
 }

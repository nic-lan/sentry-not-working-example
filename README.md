# Sentry Not Working

This repo is an minimal example whose goal is to allow replicate locally Sentry not propogating to the Sentry.io platform the errors happening in the api routes.

In particular one error is intentionally raised at src/app/api/clients/route.ts:6 to check if it gets propaged to the Sentry io organisation page.

## How To Replicate The Issue

```console
yarn install
yarn dev
❯ yarn dev
yarn run v1.22.22
$ next dev
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Environments: .env.local
  - Experiments (use with caution):
    · instrumentationHook

 ✓ Starting...
 ○ Compiling /instrumentation ...
 ✓ Compiled /instrumentation in 735ms (847 modules)
 ✓ Ready in 2.4s
```

Now, please visit `http://localhost:3000/api/api/clients`.


At least in my case locally, the error does not get propagated to Sentry.
Also, the following logs are visible:

```console
✓ Compiled /src/middleware in 191ms (274 modules)
Sentry Logger [log]: Integration installed: InboundFilters
Sentry Logger [log]: Integration installed: FunctionToString
Sentry Logger [log]: Integration installed: LinkedErrors
Sentry Logger [log]: Integration installed: WinterCGFetch
Sentry Logger [log]: Integration installed: DistDirRewriteFrames
Received Request /api/clients
 ○ Compiling /api/clients ...
 ✓ Compiled /api/clients in 892ms (1407 modules)
 ⨯ Error: ups inside GET clients
    at GET$1 (webpack-internal:///(rsc)/./src/app/api/clients/route.ts:26:11)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:57:44)
    at Object.handleCallbackErrors (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js:26:26)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:56:47)
    at handleCallbackErrors.handleCallbackErrors.status.status (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:63:15)
    at Object.handleCallbackErrors (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js:26:26)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:62:35)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:445:21)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:46:12)
    at AsyncContextStack.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:41:28)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:127:33)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js:55:18)
    at Object.startSpan (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:42:24)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:45:27)
    at AsyncContextStack.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:41:28)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:127:33)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js:61:14)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:41:23)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:140:12)
    at AsyncContextStack.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:41:28)
    at withIsolationScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:139:33)
    at Object.withSetIsolationScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:153:14)
    at Object.withIsolationScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js:93:16)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:40:21)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js:85:16)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js:84:40)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:220:12)
    at AsyncContextStack.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:41:28)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:127:33)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js:61:14)
    at withActiveSpan (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:218:24)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:258:12)
    at AsyncContextStack.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:41:28)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/asyncContext/stackStrategy.js:127:33)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js:61:14)
    at Object.startNewTrace (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:255:24)
    at Object.escapeNextjsTracing (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js:83:17)
    at Object.apply (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:22:27)
    at Object.apply (webpack-internal:///(rsc)/./src/app/api/clients/route.ts:64:10)
    at ./node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:55044
    at ./node_modules/next/dist/server/lib/trace/tracer.js:140:36
    at NoopContextManager.with (./node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:25:19)
    at ContextAPI.with (./node_modules/@opentelemetry/api/build/src/api/context.js:60:46)
    at NoopTracer.startActiveSpan (./node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:65:31)
    at ProxyTracer.startActiveSpan (./node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:36:24)
    at ./node_modules/next/dist/server/lib/trace/tracer.js:122:103
    at NoopContextManager.with (./node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:25:19)
    at ContextAPI.with (./node_modules/@opentelemetry/api/build/src/api/context.js:60:46)
    at NextTracerImpl.trace (./node_modules/next/dist/server/lib/trace/tracer.js:122:28)
 GET /clients 500 in 1111ms
```

# Sentry Not Working

This repo is an minimal example whose goal is to allow replicate locally Sentry not propogating to the Sentry.io platform the errors happening in the api routes.

In particular one error is intentionally raised at src/app/api/clients/route.ts:6 to check if it gets propaged to the Sentry io organisation page.

## How To Replicate The Issue

Before trying to run the example, please create a .env.local file and place there the valid values specified in the .env.example.

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
 ✓ Compiled /src/middleware in 185ms (274 modules)
Sentry Logger [debug]: Recording is off, propagating context in a non-recording span
Sentry Logger [debug]: @opentelemetry/instrumentation-http Applying instrumentation patch for nodejs core module on require hook { module: 'http' }
Sentry Logger [log]: Integration installed: InboundFilters
Sentry Logger [log]: Integration installed: FunctionToString
Sentry Logger [log]: Integration installed: LinkedErrors
Sentry Logger [log]: Integration installed: WinterCGFetch
Sentry Logger [log]: Integration installed: DistDirRewriteFrames
Received Request /api/clients
Sentry Logger [debug]: Recording is off, propagating context in a non-recording span
Sentry Logger [debug]: Recording is off, propagating context in a non-recording span
Sentry Logger [debug]: Recording is off, propagating context in a non-recording span
 ○ Compiling /api/clients ...
 ✓ Compiled /api/clients in 981ms (1407 modules)
Sentry Logger [debug]: Recording is off, propagating context in a non-recording span
Sentry Logger [debug]: @opentelemetry/instrumentation-http Applying instrumentation patch for nodejs core module on require hook { module: 'https' }
Sentry Logger [debug]: Recording is off, propagating context in a non-recording span
Sentry Logger [debug]: Recording is off, propagating context in a non-recording span
Sentry Logger [log]: SpanExporter exported 0 spans, 0 unsent spans remaining
 ⨯ Error: ups inside GET clients
    at GET$1 (webpack-internal:///(rsc)/./src/app/api/clients/route.ts:26:11)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:57:44)
    at Object.handleCallbackErrors (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js:26:26)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:56:47)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:853:15)
    at Object.handleCallbackErrors (webpack-internal:///(instrument)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js:26:26)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:852:19)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js:33:40)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1306:24)
    at ContextAPI.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js:95:54)
    at Tracer.startActiveSpan (webpack-internal:///(instrument)/./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js:136:76)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:849:19)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1098:21)
    at Object.startSpan (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:842:10)
    at Object.startSpan (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:36:16)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:45:27)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1181:14)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js:33:40)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1306:24)
    at ContextAPI.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js:95:54)
    at Object.withScope (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1180:28)
    at Object.withScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js:61:14)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:41:23)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1216:14)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js:33:40)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1306:24)
    at ContextAPI.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js:95:54)
    at Object.withSetIsolationScope (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1215:28)
    at Object.withIsolationScope (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js:93:16)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js:40:21)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js:85:16)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js:84:40)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:953:59)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js:33:40)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1306:24)
    at ContextAPI.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js:95:54)
    at Object.withActiveSpan (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:953:26)
    at withActiveSpan (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:215:16)
    at eval (webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js:258:12)
    at eval (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1181:14)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js:33:40)
    at SentryContextManager.with (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1306:24)
    at ContextAPI.with (webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js:95:54)
    at Object.withScope (webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js:1180:28)
 GET /clients 500 in 1319ms
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./src/app/api/clients/route.ts. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./src/app/api/clients/route.ts'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./src/app/api/clients/route.ts. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./src/app/api/clients/route.ts'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js'
Sentry Logger [error]: Failed to read file: webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js. Error: Error: ENOENT: no such file or directory, open 'webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js'
Sentry Logger [error]: Could not find line 1173 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 88 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js
Sentry Logger [error]: Could not find line 1299 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 26 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js
Sentry Logger [error]: Could not find line 1174 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 251 in file webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js
Sentry Logger [error]: Could not find line 208 in file webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js
Sentry Logger [error]: Could not find line 946 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 88 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js
Sentry Logger [error]: Could not find line 1299 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 26 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js
Sentry Logger [error]: Could not find line 946 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 77 in file webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js
Sentry Logger [error]: Could not find line 78 in file webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/utils/tracingUtils.js
Sentry Logger [error]: Could not find line 33 in file webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js
Sentry Logger [error]: Could not find line 86 in file webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js
Sentry Logger [error]: Could not find line 1208 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 88 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js
Sentry Logger [error]: Could not find line 1299 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 26 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js
Sentry Logger [error]: Could not find line 1209 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 34 in file webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js
Sentry Logger [error]: Could not find line 54 in file webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/currentScopes.js
Sentry Logger [error]: Could not find line 1173 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 88 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js
Sentry Logger [error]: Could not find line 1299 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 26 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js
Sentry Logger [error]: Could not find line 1174 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 38 in file webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js
Sentry Logger [error]: Could not find line 29 in file webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/tracing/trace.js
Sentry Logger [error]: Could not find line 835 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 1091 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 842 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 129 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js
Sentry Logger [error]: Could not find line 88 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/api/build/esm/api/context.js
Sentry Logger [error]: Could not find line 1299 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 26 in file webpack-internal:///(instrument)/./node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js
Sentry Logger [error]: Could not find line 845 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 19 in file webpack-internal:///(instrument)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js
Sentry Logger [error]: Could not find line 846 in file webpack-internal:///(instrument)/./node_modules/@sentry/opentelemetry/build/cjs/index.js
Sentry Logger [error]: Could not find line 49 in file webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js
Sentry Logger [error]: Could not find line 19 in file webpack-internal:///(rsc)/./node_modules/@sentry/core/build/cjs/utils/handleCallbackErrors.js
Sentry Logger [error]: Could not find line 50 in file webpack-internal:///(rsc)/./node_modules/@sentry/nextjs/build/cjs/common/wrapRouteHandlerWithSentry.js

...

```

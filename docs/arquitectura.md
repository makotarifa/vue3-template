# Architecture Overview

This template provides a pragmatic Vue 3 + TypeScript setup focused on strong developer experience, reliability, and testability. It balances simplicity with the right abstractions for API access, state, routing, internationalization, and error handling.

## Modules

- `domain/common`: Cross-cutting utilities and services (HTTP client, event bus, composables, forms, API helpers).
- `domain/layout`: Application shell components (Header, Footer, AppShell) and global UI concerns such as toasts.
- `domain/dummy`: Sample feature module showcasing a minimal service and component structure.
- `stores`: Pinia stores, one file per store, with clear actions and getters.
- `router`: Route definitions, guards, and navigation UX (auth guard, progress, dynamic titles, fallbacks).
- `locales`: i18n JSON files per locale; `i18n/index.ts` wires the runtime instance.
- `mocks`: Mock Service Worker (MSW) handlers for local dev and E2E tests.

## State Management (Pinia)

- Stores live in `src/stores/*`. Each store uses `defineStore` and exposes:
  - `state`: serializable state.
  - `getters`: derived values (e.g., `isAuthenticated`).
  - `actions`: side effects and mutations (e.g., `login`, `logout`).
- Authentication persists the `token` in `localStorage` and exposes `isAuthenticated` for guards and UI.

## API Client

- `domain/common/services/http.ts` creates the base Axios instance with `baseURL` from `VITE_API_BASE_URL` and attaches an `Authorization` header if a token exists.
- `domain/common/api/client.ts` adds typed helpers and request cancellation support via `AbortController`.
- Error responses are normalized and emitted to the global event bus (see Error Handling).

## Routing

- `router/index.ts` defines routes and enables navigation UX:
  - `meta.title` sets the document title per route.
  - `nprogress` shows navigation progress.
  - A `NotFound` fallback handles unknown routes.
- `router/authGuard.ts` enforces protected routes with `meta.requiresAuth` and redirects unauthenticated users to `Login`.

## Internationalization (i18n)

- `i18n/index.ts` initializes `vue-i18n` with `en` and `es` locales and persists locale in `localStorage`.
- UI components use `useI18n()` to render translated strings.

## Error Handling

- Global errors are handled in `plugins/errorHandler.ts`:
  - Vue runtime errors (`app.config.errorHandler`).
  - Unhandled promise rejections (`unhandledrejection`).
- The Axios response interceptor emits a normalized error message to the event bus.
- `AppShell.vue` subscribes to `error` events and displays PrimeVue toasts.

## Testing (E2E)

- Playwright is configured to run against the dev server with MSW enabled for deterministic tests.
- Traces are captured on the first retry; CI uploads HTML report and traces as artifacts.

## Deployment

- Vite build outputs are served via Nginx (see `Dockerfile` and `nginx.conf`).
- GitHub Actions pipelines run lint, type-check, build, and E2E tests.

## Design Decisions

- Keep a minimal but clear layering: feature modules (`domain/*`), shared services (`common/*`), and global shell (`layout`).
- Prefer typed API helpers and composables over heavy abstractions.
- Centralize error handling and surface errors to the user consistently via toasts.
- Use MSW to avoid flakiness in E2E and to develop independently of backend availability.

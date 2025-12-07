# Vue Template (TypeScript + Vite + Tailwind + PrimeVue)

This template uses Vue 3 and TypeScript with Vite. It includes a small set of tools to help you bootstrap new projects with a modern stack.

## Highlights

- TypeScript-ready Vue 3 project (TSX + SFCs) with `tsconfig.json` and `shims-vue.d.ts`
- Tailwind CSS (form + typography plugin)
- PrimeVue + PrimeIcons and theme support
- Axios client with interceptors and global error reporting
- Pinia store + Vue Router
- i18n with `vue-i18n` plus `EN/ES` locales
- Playwright E2E tests configured
- Basic domain folder structure: `domain/common` and `domain/dummy` with example services, composables and components
- Simple AppShell layout with Header / Footer and error toast

## Quick Commands

```bash
npm install
npm run dev
npm run lint
npm run lint:fix
npm run format
npm run test:e2e
```

## Structure Notes

- `src/main.ts` - app bootstrap (PrimeVue, Pinia, Router, i18n, Toasts)
- `src/domain/layout/components` - `AppShell`, `Header`, `Footer` components
- `src/domain` - domain modules. "common" houses http and utilities; "dummy" shows a simple domain example.
- `src/locales` - i18n JSON files (en, es)
- `src/stores` - Pinia stores

## Environment

Use `.env` or `.env.local` to populate runtime variables. Example in `.env.example`.

## E2E Tests

This project uses Playwright for full app functionality tests. Launch them with:

```bash
npm run test:e2e
```

## Running with MSW (mocked APIs)

This project includes Mock Service Worker (MSW) handlers for local dev and E2E. To start Vite with MSW enabled and the browser service worker loaded:

```bash
npm run dev:mock
```

The MSW handlers include a simple auth implementation with these credentials:
- username: `user`
- password: `password`

## Docker / Deploy

Build and serve the production image locally:

```bash
npm run build
docker build -t vue-template:latest .
docker run --rm -p 5173:80 vue-template:latest
```

## Next Steps / Suggestions

- Add a CI pipeline to run E2E tests.
- Add Vitest for unit/component tests if needed.
- Add MSW for mocking APIs during tests. (Already integrated; `npm run dev:mock`.)
- Add Dockerfile + deployment scripts (included: `Dockerfile` and `scripts/docker-publish.sh`).

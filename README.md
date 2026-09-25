# Demo Article Platform

A React and TypeScript frontend portfolio project for browsing articles, joining discussions, and managing user profiles. Built around Feature-Sliced Design, it demonstrates modular application architecture, asynchronous state management, reusable UI components, and automated testing.

The application runs against a local mock REST API, making its main workflows easy to explore without an external backend.

## Features

- **Article discovery:** search, category filters, sorting, grid/list views, infinite scrolling, and URL query parameters for filter state.
- **Article reading:** text, image, and code blocks, article recommendations, and comments.
- **Profile editing:** edit your own profile, validate fields, save changes, or cancel edits.
- **Authentication and routing:** demo sign-in, persisted user state, protected pages, and role-based access to the admin route.
- **Personalization:** light, dark, and orange themes; English and Ukrainian translations.
- **Interaction states:** loading skeletons, error feedback, an application error boundary, and scroll-position restoration.

## Engineering highlights

- **Feature-oriented organization.** Application setup, pages, widgets, features, entities, and shared utilities have separate responsibilities. Slice entry points expose public APIs through `index.ts` files.
- **On-demand loading.** Lazy-loaded pages and a custom reducer manager allow feature reducers to be registered dynamically.
- **Typed data flows.** Redux Toolkit async thunks use an injected Axios client; RTK Query handles article recommendations through an injected endpoint.
- **Reusable UI.** Shared components use SCSS Modules and theme variables, with Storybook stories for isolated development and visual states.
- **Custom build tooling.** Webpack configuration is split into typed modules for loaders, plugins, resolution, and the development server, with React Fast Refresh and bundle analysis in development.
- **Repeatable quality checks.** Unit/component tests, screenshot comparisons, linting, TypeScript checks, and GitHub Actions support the development workflow.

## Technologies and tools

| Area | Technologies | Purpose |
| --- | --- | --- |
| UI | React 17, TypeScript, Headless UI | Typed components and interactive controls |
| Routing | React Router 6 | Nested application navigation, lazy pages, and route guards |
| State and data | Redux Toolkit, React Redux, RTK Query, Axios | Client state, asynchronous requests, and query caching |
| Styling | Sass/SCSS, CSS Modules | Scoped component styles and themes |
| Internationalization | i18next, react-i18next | Translation namespaces, language detection, and HTTP-loaded translations |
| Build | Webpack 5, Babel, ts-loader, SVGR | Bundling, transpilation, and SVG components |
| Component development | Storybook 8 | Isolated UI examples and state previews |
| Testing | Jest, React Testing Library, ts-jest | Reducer, selector, async-service, and component tests |
| Visual testing | Loki, reg-cli | Chrome screenshot comparisons and HTML difference reports |
| Code quality | ESLint, Airbnb rules, Stylelint, Husky | Code/style checks and pre-commit automation |
| Local API | JSON Server | Seeded REST endpoints and simulated request latency |
| Automation | GitHub Actions, custom Node.js scripts | CI checks, slice scaffolding, and visual reports |

## Run locally

Use Node.js and npm; the checked-in CI workflow uses Node.js 20.x. Commit the lockfile when changing dependencies.

```bash
git clone https://github.com/skulden13/ti_project.git
cd ti_project
npm ci
```

Start the mock API in one terminal:

```bash
npm run start:dev:server
```

Start the frontend in a second terminal:

```bash
npm run start:frontend
```

Open [localhost:3000](http://localhost:3000). The API runs on port `8000`; no `.env` file is required for the default setup.

The combined `npm start` and `npm run start:st` commands reference `concurrently`, which is currently missing from the declared dependencies. Use the separate commands above for a fresh installation.

### Demo accounts

These accounts are seeded in [json-server/db.json](json-server/db.json):

| Username | Password | Role |
| --- | --- | --- |
| `admin` | `******` | Admin |
| `user` | `******` | User |
| `manager` | `******` | Manager |

For a quick walkthrough, sign in as `user`, open Articles, change filters and view modes, read an article, add a comment, and edit your profile. Switch the theme and language from the sidebar. Admin and manager accounts can also access `/admin`.

The API persists edits in `json-server/db.json` and adds an 800 ms delay to demonstrate loading states.

## Development commands

| Command | Description |
| --- | --- |
| `npm run build:prod` | Create a production frontend bundle in `build/` |
| `npm run build:dev` | Create a development bundle |
| `npm run ts` | Check TypeScript without emitting files |
| `npm run lint` | Run TypeScript/React and SCSS linting |
| `npm run lint:fix` | Apply automatic lint fixes |
| `npm run test:unit` | Run Jest tests |
| `npm run test:unit -- --coverage` | Run Jest with coverage reporting |
| `npm run storybook` | Start Storybook on port `6006` |
| `npm run storybook:build` | Build Storybook into `storybook-static/` |
| `npm run test:ui` | Build Storybook and compare screenshots with Loki |
| `npm run test:ui:report` | Generate a visual comparison report in `.loki/report.html` |
| `npm run generate:slice -- features ExampleFeature` | Scaffold a slice with model, UI, stories, and public API files |

The generator accepts `features`, `entities`, or `pages` as its layer argument. The Husky pre-commit hook runs TypeScript checks and lint auto-fixes, so review any files it changes.

### Testing and CI

Tests live alongside the implementation in `*.test.ts` and `*.test.tsx` files. Shared test helpers provide configured component rendering and mocked async-thunk dependencies. Jest also writes an HTML report to `reports/unit/report.html`.

Loki compares Storybook screenshots at laptop and iPhone 7 viewport sizes. Local visual tests require Chrome, Python 3, and an available port `6006`; stop the Storybook development server before running them. After reviewing intentional UI changes, use `npm run test:ui:update` to regenerate baselines.

[GitHub Actions](.github/workflows/main.yml) is configured to build the production app, lint TypeScript and SCSS, run unit tests, and build Storybook on pushes and pull requests to `main` or `master`. The screenshot-testing steps are currently commented out.

## Project structure

```text
src/
  app/         Application bootstrap, providers, routing, and global styles
  pages/       Route-level screens and page-specific state
  widgets/     Composed interface sections, such as navigation and page layout
  features/    User actions: authentication, profile editing, comments
  entities/    Domain models and UI: articles, users, profiles, comments
  shared/      UI primitives, API clients, configuration, hooks, and test helpers
config/        Webpack, Jest, Storybook, and Loki configuration
json-server/   Mock API server and seed data
public/        HTML template, translations, and static images
scripts/       Slice generator and visual-report tooling
.github/       CI workflow
.loki/         Visual regression baselines
```

### Suggested code tour

- [Article browsing](src/pages/ArticlesPage) — filtering, pagination, and page state.
- [Editable profile](src/features/editableProfileCard) — validation, asynchronous updates, and component tests.
- [Store provider](src/app/providers/StoreProvider) and [dynamic module loader](src/shared/components/DynamicModuleLoader/DynamicModuleLoader.tsx) — reducer registration and typed store setup.
- [Route configuration](src/shared/config/routeConfig/routeConfig.tsx) — protected routes and role requirements.
- [Shared UI](src/shared/ui) — reusable components and their stories.

## Project scope

This is a frontend learning and portfolio project with a mock backend. Authentication uses seeded credentials and a simple authorization-header check; it does not implement production identity or server-side permission enforcement. Article creation/editing and the admin panel currently contain placeholder screens. Article browsing, comments, and profile editing are the implemented workflows to explore.

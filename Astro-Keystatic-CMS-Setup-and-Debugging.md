# Astro + Keystatic CMS Setup & Debugging Log
**Date:** 2026-01-10
**Category:** #webdev #astro #keystatic #cms #devlog

## 🎯 Goal
Deploy a "Hello World" blog using Astro, Tailwind CSS, and Keystatic CMS with local storage in under 5 minutes.

## 🛠️ Tech Stack
- **Framework:** Astro (Latest)
- **Styling:** Tailwind CSS
- **CMS:** Keystatic (Local Mode)
- **Runtime:** Node.js

---

## 🚀 Step-by-Step Implementation

### 1. Project Initialization
- Initialized a minimal Astro project.
- Added Tailwind CSS integration: `npx astro add tailwind`.

### 2. Keystatic Integration
- Installed dependencies: `@keystatic/astro`, `@keystatic/core`, `react`, `react-dom`, `@astrojs/react`.
- Configured `astro.config.mjs` with `react()` and `keystatic()` integrations.
- Defined `keystatic.config.ts` with a `posts` collection.

---

## 🔍 What Went Wrong & How It Was Fixed

### Issue 1: Empty `/keystatic` Page (Route Injection)
- **Problem:** Navigating to `/keystatic` resulted in a blank page. 
- **Cause:** In some Astro environments/versions, the Keystatic integration does not automatically inject the required API and UI routes.
- **Fix:** Manually created explicit catch-all routes:
    - `src/pages/api/keystatic/[...params].ts` (API Handler)
    - `src/pages/keystatic/[...params].astro` (Admin UI Page)

### Issue 2: Filename Encoding Errors
- **Problem:** Astro failed to start with `ENOENT` errors for `[...params].ts`.
- **Cause:** Files were accidentally created with URL-encoded names (`%5B...params%5D`) instead of literal brackets.
- **Fix:** Renamed files to the correct `[...params]` syntax using PowerShell's `Rename-Item -LiteralPath`.

### Issue 3: Invalid Field Type in Config
- **Problem:** Keystatic Admin UI failed to hydrate with `TypeError: fields.string is not a function`.
- **Cause:** Used `fields.string()` in `keystatic.config.ts`, but Keystatic uses `fields.text()` for short strings.
- **Fix:** Updated the schema to use `fields.text()`.

### Issue 4: `output: 'hybrid'` Deprecation
- **Problem:** Astro 5 threw a configuration error regarding `output: 'hybrid'`.
- **Cause:** In Astro 5, `output: 'static'` is the default and handles SSR routes (like the Keystatic API) automatically in development.
- **Fix:** Reverted `output` to `'static'` in `astro.config.mjs`.

---

## 📂 File Structure Preview
```text
/
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   └── posts/
│   │       └── first-post.md
│   └── pages/
│       ├── api/
│       │   └── keystatic/
│       │       └── [...params].ts
│       ├── keystatic/
│       │   └── [...params].astro
│       └── index.astro
├── astro.config.mjs
└── keystatic.config.ts
```

## 📝 Suggested Hierarchy for Obsidian
- `root/`
    - `02 - Resources/`
        - `Programming/`
            - `Web/`
                - `Astro/`
                    - `CMS/`
                        - `Keystatic/`
                            - `Astro-Keystatic-CMS-Setup-and-Debugging.md`

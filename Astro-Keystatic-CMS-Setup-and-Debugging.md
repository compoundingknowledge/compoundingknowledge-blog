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
- **Cause:** In some Astro environments, the Keystatic integration does not automatically inject the required API and UI routes.
- **Initial Fix:** Manually created explicit catch-all routes in `src/pages`.
- **Note:** This later caused Issue 5 (Route Collision).

### Issue 2: Filename Encoding Errors
- **Problem:** Astro failed to start with `ENOENT` errors for `[...params].ts`.
- **Cause:** Files were created with URL-encoded names (`%5B...params%5D`).
- **Fix:** Renamed files to the correct `[...params]` syntax.

### Issue 3: Invalid Field Type in Config
- **Problem:** Keystatic Admin UI failed to hydrate with `TypeError: fields.string is not a function`.
- **Cause:** Used `fields.string()` in `keystatic.config.ts`.
- **Fix:** Updated the schema to use `fields.text()`.

### Issue 4: `output: 'hybrid'` Deprecation
- **Problem:** Astro 5 threw a configuration error regarding `output: 'hybrid'`.
- **Cause:** In Astro 5, `output: 'static'` (default) handles SSR routes automatically in development.
- **Fix:** Removed `output: 'hybrid'`.

### Issue 5: Vercel "Route Collision"
- **Problem:** Vercel deployment failed with "Route collision" errors for `/keystatic`.
- **Cause:** The `@keystatic/astro` integration was trying to inject routes that already existed manually in `src/pages`.
- **Fix:** Deleted the manual `src/pages/keystatic` and `src/pages/api/keystatic` folders. The integration now handles these automatically.

### Issue 6: Missing Vercel Adapter & Build Errors
- **Problem:** "NoAdapterInstalled" error during Vercel deployment.
- **Cause:** Using the default Astro build without a targeted deployment adapter.
- **Fix:** 
    - Installed `@astrojs/vercel`.
    - Updated `astro.config.mjs` to use `adapter: vercel()`.
    - Updated Vercel adapter import to the modern `@astrojs/vercel` entry point.


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

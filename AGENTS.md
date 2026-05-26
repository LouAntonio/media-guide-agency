# Media Guide Agency — Agent Instructions

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typecheck first, then bundle)
- `npm run lint` — ESLint on `.ts,.tsx`
- `npm run format` — Prettier on `src/`
- `npm run preview` — Vite preview of production build

CI (GitHub Actions, push/PR to main, Node 20/22): `lint:check` → `format:check` → `build`

**No test suite exists.** Do not look for test commands or fixtures.

## Architecture
- Entry: `src/main.tsx` → `src/App.tsx`
- Sections live under `src/components/{About,Services,Portfolio,Contact,Footer}/`
- Each section has an `index.ts` barrel file
- **Inconsistent exports.** About/Contact use `export default`; Services/Portfolio use named exports. Match the existing pattern when modifying a section.

## Tooling & Conventions
- **Tailwind CSS v4** — uses `@import "tailwindcss"` + `@theme {}` block (no `tailwind.config.js`). Custom colors: `vermelho` (#d40000), `amarelo` (#ffc20e), `cinza-claro` (#f2f2f2)
- **TypeScript:** `verbatimModuleSyntax` (use `import type` for type-only imports), `erasableSyntaxOnly` (no enums, namespaces, parameter properties)
- **Formatting:** tabs (4-space width), double quotes, trailing commas, printWidth 100
- **Framer Motion** for scroll-triggered animations (`whileInView`, `viewport: { once: true }`)

## Deploy
- Hosted on Vercel (project `mediaguideagency`). `.vercel/` is gitignored; Vercel auto-detects Vite.

## Assets
- Static images in `public/images/logo/` (referenced as `/images/logo/Camada 7.png`)

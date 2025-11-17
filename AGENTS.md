# Agent Guidelines for Blog Codebase

## Build & Commands

- **Dev**: `bun dev` or `bun start` (runs on http://localhost:4321)
- **Build**: `bun build` (runs astro check + build, prebuild runs indexnow.ts)
- **Lint**: `bun lint` (check) or `bun lint:fix` (auto-fix)
- **Format**: `bun format` (write) or `bun format:check` (check only)
- **Preview**: `bun preview`
- No test suite currently configured

## Code Style

- **Runtime**: Bun (use `bunx --bun` for commands)
- **Framework**: Astro 5 with TypeScript (strict mode), Tailwind CSS v4, MDX
- **Formatting**: Prettier with tabs, no semicolons, single quotes, 80 char width
- **Import Order**: Auto-organized by prettier-plugin-organize-imports (Astro imports first, then @/, then relative)
- **Path Aliases**: `@/*` → `src/*`, `@blogimages/*` → `src/assets/blogimages/*`
- **TypeScript**: Strict mode enabled, use explicit types, no `any`, no non-null assertions (`!`), no `console` statements
- **Naming**: camelCase for variables/functions, PascalCase for components/types, UPPER_SNAKE_CASE for constants
- **Components**: Astro components in `.astro` files, use ViewTransitions API (`transition:name` props)
- **i18n**: Multi-locale support (es/gl/en), use `Lang` type, `useTranslations()` helper, locale prefixes required
- **Content**: Blog posts in `src/content/blog/{locale}/{id}/index.md` with pubId frontmatter
- **Error Handling**: Use try-catch for async ops, validate with TypeScript types, handle edge cases explicitly
- **ESLint**: Enforce arrow functions, template literals, accessibility (jsx-a11y), Astro-specific rules

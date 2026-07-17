# Kaixu Tang — Academic Homepage

Source for [kaixutang.github.io](https://kaixutang.github.io), an English-language academic profile and research portfolio.

## Highlights

- Classic academic sidebar layout
- Light and dark themes with saved visitor preference
- Responsive desktop and mobile presentation
- Explicit PhD-search status
- Automated GitHub Pages deployment

## Local development

Requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm run dev
```

## Validate and export

```bash
pnpm run build
pnpm run export:static
node --test tests/rendered-html.test.mjs
```

The GitHub Actions workflow builds the application, exports a static artifact, and deploys it to GitHub Pages whenever `main` is updated.

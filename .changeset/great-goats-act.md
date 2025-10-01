---
'@gitlab/ui': minor
---

Update Tailwind config values to remove fallbacks

Update `tailwind_token_formatter.js` to remove alias resolutions for
design tokens. Instead resolve the immediate CSS custom property for
any given design token.

Build token output to update `/src/tokens/build/tailwind/tokens.cjs`
generated output with key/value pairs which reflect:

- Key: design token scale e.g. `default`, `1`, `blue-500`
- Value: design token CSS custom property e.g. `var(--gl-token-name)`

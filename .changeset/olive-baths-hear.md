---
'@gitlab/ui': minor
---

Add typography composite design tokens

- Add Tailwind component style-dictionary format to turn composite 
  design tokens into Tailwind components with a single class
- Add `expand` config to css, js, and scss style-dictionary platforms
  to expand composite design token properties into individual property
  output e.g. `--gl-heading-1-font-size`
- Add `heading.*` composite typography design token
- Add `font.weight.heading` semantic design token
- Add `letter-spacing.heading` semantic design token
- Add `line-height.heading` semantic design token


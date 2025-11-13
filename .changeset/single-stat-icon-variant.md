---
'@gitlab/ui': patch
---

GlSingleStat use design tokens and fix icon variant colors.

- Replaced hardcoded color classes (`gl-text-gray-700`, `gl-text-gray-900`) with design token classes (`gl-text-heading`, `gl-text-strong`)
- Fixed meta icon colors not updating when variant changes by using icon variant prop instead of CSS classes
- Added `badgeVariantToIconVariantMap` to properly map badge variants to icon variants
- Updated tests to verify icon variant prop instead of CSS classes

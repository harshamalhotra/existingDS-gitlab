---
'@gitlab/ui': patch
---

`GlFormCheckbox`: use a unique ID if the provided one is falsey

This ensures that `GlFormCheckbox` generates a proper ID internally when the consumer provides an
empty string, or other falsey values as the ID.

---
'@gitlab/ui': patch
---

Fix Chrome 142 select rendering by adding default size attribute to GlFormSelect

Chrome 142 changed how select elements render based on size and multiple attributes. Without an explicit size attribute, some selects were rendering as expanded in-page listboxes instead of collapsed dropdowns.
GlFormSelect now defaults to size="1", ensuring consistent collapsed dropdown rendering across all Chrome versions and preventing layout issues.

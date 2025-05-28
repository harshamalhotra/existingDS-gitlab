---
'@gitlab/ui': patch
---

GlBreadcrumb: Overflow problems when size=md and single item

Fix an issue that causes unexpected overflow handling problems and
accessibility issues when the size prop is set to `md` and there is a
single item with no avatarPath defined.

---
'@gitlab/ui': patch
---

GlDisclosureDropdown: Improve list container tag detection.

The component was incorrectly wrapping dropdown items in a `DIV` in a few cases instead of in a `UL`.

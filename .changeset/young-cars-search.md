---
'@gitlab/ui': minor
---

Make gl-popover customClasses flexible

Previously, the `<gl-popover>` `customClasses` prop only accepted arrays.

This change adds the option to additionaly pass in both Strings and Objects, so the API for adding
custom classes across all components stays consistent.

---
'@gitlab/ui': patch
---

Fix edge case of @max classes 

Media and container queries generated with the `@max-` prefix (e.g. `@max-sm`)
should consider sizes up to a given value **without** including that value.
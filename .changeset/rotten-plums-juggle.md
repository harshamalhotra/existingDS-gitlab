---
'@gitlab/ui': patch
---

GlToast: Fixed toast rendering in Vue 3 compat mode by deferring VNode creation to the render cycle, setting slots on the internal Vue 3 instance, and recovering from stale toaster DOM state.

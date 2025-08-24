---
'@gitlab/ui': minor
---

Create a Tailwind CQs/MQs plugin

This creates a Tailwind plugin that matches `@<breakpoint` utils. For
those utils, it generates media queries by default.
If Tailwind is executed with the `USE_TAILWIND_CONTAINER_QUERIES` flag
enabled, the plugin generates container queries instead of media
queries. Normal media query utils, like `md:gl-hidden`, behave as normal either way.
Consumers of GitLab UI can use this to generate the bundle(s) they need
depending on whether or not they are built using containers.

---
'@gitlab/ui': minor
---

Add control design tokens to tailwind classes

Add control border color, including states, as gl-border-control class
Add gl-bg-control class for background color for default, disabled, and
readonly states.
The other control design tokens are added as classes in build_tokens.mjs
to expose them to consumers who explicitly want to set non-stateful
(static) background, border, and text color.

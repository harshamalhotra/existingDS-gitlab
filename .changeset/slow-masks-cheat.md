---
'@gitlab/ui': minor
---

Create container queries mixins

This creates the `gl-container-width-up` and `gl-container-width-down` mixins.
These mixins generate container queries that only apply when the `body`
has the `.with-gl-container-queries` class.
By default, these mixins also generate media queries which only apply
when the `body` does not have the `.with-gl-container-queries` class.
This lets us iteratively migrate to container queries while still having
a way to fall back to media queries.
The media query fallback can be disabled by disabling the
`$includeMQFallback` flag.

Additionally, several internal usages of responsive mixins have been migrated
to these new mixins so that consumers can switch to container queries if neeeded.

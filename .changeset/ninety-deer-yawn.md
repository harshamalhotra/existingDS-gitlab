---
'@gitlab/ui': patch
---

Hide banners' illustrations below `md` breakpoint

We recently migrated `banner.scss` to our own responsive mixin.
However, due to how Bootstrap's `media-breakpoint-down` mixin
targets the _next_ breakpoint, doing a simple search and replace
like we did results in the wrong breakpoint being targetted.
This updates the mixin's usage to target the correct breakpoint.

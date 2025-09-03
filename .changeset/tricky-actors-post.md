---
'@gitlab/ui': major
---

Remove support for some of Bootstrap's card styles

We are dropping support for the following Bootstrap card styles:
* `card-deck`
* `card-group`
* `card-columns`

We don't use these styles in any of our projects, and they leverage media
queries which we are moving away from.

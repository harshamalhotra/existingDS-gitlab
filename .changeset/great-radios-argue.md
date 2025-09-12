---
'@gitlab/ui': minor
---

This change enhances the dashboard panel component by adding support for custom HTML content to be shown within the title popover.

Previously, the popover could only display simple text from a configuration property. Now developers can use special slots (template sections) called `info-popover-title` and `info-popover-content` to insert HTML content like formatted text, links, and complex layouts into the popover.

When these slots are provided, they take priority over the basic text configuration.

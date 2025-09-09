---
'@gitlab/ui': patch
---

Portal fixed dropdowns to the root

Fixed dropdowns can be mispositioned when they are within a container
context. To circumvent the issue, we can portal them to the root
(assuming it's not a container), so that Floating UI can properly
compute their position.

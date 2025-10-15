---
name: Truncate
description: The truncate component lets you truncate long texts with ellipsis.
---

## Examples

<story-viewer component="utilities-truncate" title="GlTruncate"></story-viewer>

## Code reference

```html
<gl-truncate :text="text" :position="position" />
```

By default, the ellipsis position is at the `end`.

Pro Tip: Truncating long filepaths from the `middle` / `start` can help preventing the important
information in the end, i.e. filenames.

### GlTruncate

<story-viewer component="utilities-truncate" title="GlTruncate" view-mode="docs"></story-viewer>

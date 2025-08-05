---
name: Hover Load
description: A Vue Directive to help with preloading resources when hovering over an element.
---

## Examples

<story-viewer component="directives-hover-load-directive" title="GlHoverLoadDirective"></story-viewer>

## Code reference

### GlHoverLoadDirective

```html
<script>
import { GlHoverLoadDirective } from '@gitlab/ui';

export default {
  directives: { GlHoverLoadDirective },
  methods: {
    handlePreload() {
      fetch('some/endpoint');
    },
  },
};
</script>

<template>
  <div v-gl-hover-load="handlePreload">Hover me to preload</div>
</template>
```

<story-viewer component="directives-hover-load-directive" title="GlHoverLoadDirective" view-mode="docs"></story-viewer>

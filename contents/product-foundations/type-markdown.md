---
name: Markdown
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=19965%3A0
docs: in-progress
related:
  - /product-foundations/type-fundamentals
  - /product-foundations/type-headings
---

The [fixed type scale](/product-foundations/type-fundamentals#type-scales) is used with [GitLab Flavored Markdown](https://docs.gitlab.com/ee/user/markdown.html) (GLFM) and for content such as tables, task lists, and code blocks. This includes styling for the following GLFM components.

## Blockquote

<todo>Add blockquote</todo>

## Code

### Code blocks

Wrap a block of `<code>` within a `<pre>` element. For example, multi-line code that has syntax highlighting. The size of the text will adjust based on the parent text size.

A code block fits the width of the parent container and its content scrolls horizontally if it overflows the block.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=19965%3A13)

### Inline code

Highlight inline text as `<code>`. For example, a short line of code, a CSS class, or a variable. The size of the text will adjust based on the parent text size.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=29627%3A56)

### Inline diffs

<todo>Add inline diffs</todo>

### Syntax highlight code block

<todo>Add syntax highlight code block</todo>

## Collapsible content

<todo>Add collapsible content</todo>

## Color chips

<todo>Add color chips</todo>

## Diagrams (mermaid)

<todo>Add mermaid diagrams</todo>

## Emoji

<todo>Add emoji</todo>

## Footnotes

<todo>Add footnotes</todo>

## Horizontal rule

<todo>Add horizontal rule</todo>

## Labels

<todo>Add labels</todo>

## Lists

### Unordered list

<todo>Add unordered lists</todo>

### Ordered list

<todo>Add ordered lists</todo>

### Table

<todo>Add tables</todo>

### Task list

<todo>Add task lists</todo>

### Definition list

<todo>Add definition lists</todo>

## Math (KaTeX)

<todo>Add KaTeX math</todo>

## Media

### Images

<todo>Add images</todo>

### Embedded video

<todo>Add embedded video</todo>

### Embedded audio

<todo>Add embedded audio</todo>

## Table of contents

<todo>Add horizontal rule</todo>

## Super/subscript

<todo>Add super/subscript</todo>

## User/group mentions

<todo>Add user/group mentions</todo>

## Code reference

The `GlMarkdown` component styles markdown-generated HTML following the Pajamas Documentation Markdown
[styling specifications](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit---Beta?node-id=542%3A2).

You can use the `GlMarkdown` component in two ways.

### GlMarkdown

```html
<script>
import { GlMarkdown } from '@gitlab/ui';

export default {
  components: {
    GlMarkdown,
  }
}
</script>
<template>
  <gl-markdown>
    <!-- All the content inside gl-markdown will inherit the documentation markdown styles -->
  </gl-markdown>
</template>
```

### `gl-markdown` class selector

Follow the [GitLab UI CSS guidelines](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/main/doc/css.md)
to include GitLab UI CSS in your application. Afterwards, you can apply the `gl-markdown` class
selector to the root element that contains the markdown-generated HTML.

```html
<body class="gl-markdown">
  <!-- All the content inside body.gl-markdown will inherit the documentation markdown styles -->
</body>
```

### Compact markdown

Set the `compact` property to true in `GlMarkdown` to apply the compact markdown styles.

```html
<gl-markdown compact></gl-compact>
```

You can also append the `gl-compact-markdown` class selector after `gl-markdown` in markdown-generated
HTML.

```html
<body class="gl-markdown gl-compact-markdown">
</body>
```

<story-viewer component="base-markdown" title="GlMarkdown" view-mode="docs"></story-viewer>

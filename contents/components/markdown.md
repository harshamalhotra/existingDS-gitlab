---
name: Markdown
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=19965%3A0
docs: in-progress
related:
  - /product-foundations/typography
---

Markdown is used for formatting text content within GitLab.

## Documentation Markdown type scale

Documentation Markdown is defined as any Markdown that is written outside of issuable pages, such as a README or Wiki page. Content written using Markdown includes typography that contains fixed margins and increased line-heights to improve readability. Label text is not available for documentation Markdown because all Markdown is considered long-form content.

### Base

`16px` is the base size of body copy for documentation Markdown.

### Responsive

The `h1`, `h2`, and `h3` headers within our documentation Markdown scale are responsive. All other type options within this scale are not dependent on screen size.

[View Documentation Markdown type scale in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=542%3A2)


## Compact Markdown type scale

Within certain views, the Markdown type scale is decreased in order to more closely align copy with other UI components. Compact Markdown is used for descriptions and comments on issue and merge request pages. Label text is not available for compact Markdown because all Markdown is long-form content.

### Base

`14px` is the base size of body copy for compact Markdown.

### Responsive

The `h1` header within our compact Markdown scale is responsive. All other type options within this scale are not dependent on screen size.

[View Compact Markdown type scale in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=542%3A132)


## Inline code

Highlight inline text as `<code>`. For example, a short line of code, a CSS class, or a variable. The size of the text will adjust based on the parent text size.

[View inline code design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=29627%3A56)

## Code blocks

Wrap a block of `<code>` within a `<pre>` element. For example, multi-line code that has syntax highlighting. The size of the text will adjust based on the parent text size.

A code block fits the width of the parent container and its content scrolls horizontally if it overflows the block.

[View code block design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=19965%3A13)

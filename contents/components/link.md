---
name: Link
description: A link is a navigational element that takes a user to another URL, an element within a page, or a file.
stories:
  - base-link--default-link
related:
  - button
---

## Examples

<story-viewer story-name="base-link--default-link" title="Link"></story-viewer>

<todo>Add Figma link once available in the Pajamas UI Kit.</todo>

## Structure

<todo>Add structure visual and list.</todo>

## Guidelines

### When to use

- A link (anchor `<a>`) element is used as navigation to:
  - A new URL.
  - An element within a page.
  - A file.

### When not to use

- If you are performing an action, like saving, consider using a [button](/components/button) element instead.

### Behavior

- A link opens the destination in the same window by default.
- Native controls to open a link in a new tab or window aren't suppressed.
- A link can use `target="_blank"` if it's intentional that the user cannot use the browser's back function to return to the reference, and that it's clear to the user they are leaving the current experience.

### Appearance

<todo>Add appearance guidlines.</todo>

### Content

- A user should be able to predict where they will go upon click.
- Avoid vague text such as "click here," URLs as link text, or creating a link from more than just a short sentence. Link texts should be clear and meaningful. For example, _Before reviewing a MR, review the [best practices](/accessibility/best-practices/)_.
- If a link is at the end of a sentence, the period should not be part of the link.
- An external link should use the external link icon. For example, <a href="#" class="gl-link gl-font-style-italic">Learn more about Kubernetes <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="vertical-align: text-bottom" role="img" aria-label="(external link)">
  <path fill="#000000" fill-rule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" style="fill: currentColor;"></path></svg></a>.

### Accessibility

<todo>Add accessibility guidlines.</todo>

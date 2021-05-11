---
name: Typography
related:
  - /components/markdown
---

## Typeface

GitLab utilizes a system font stack, which references the default system fonts used by any given OS. Using system fonts helps performance by eliminating the need to download font files, and maintains the language support of the user’s system.

### Body font stack

Todo: Add codeblock showing body font variable stack

### Monospace font stack

Todo: Add codeblock showing monospace variable stack

## UI typescale

UI typography is used for any text within GitLab that is not [Markdown](/components/markdown).

### Base

`14px` is the base size of body copy for UI typography.

### Label text

Our UI type scale includes “label” text which is used for short-form content. Label text differs from long-form text because it doesn’t include margins which allows for easier alignment with other UI elements.

Long-form content includes copy in modals and empty states, whereas short-form content includes help text and popover messages.

### Responsive

The `h1` and `h2` headers within our UI type scale are responsive. All other type options within this scale are not dependent on screen size.

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=542%3A334)

## Font weight

GitLab uses two font weights within the application: normal and bold. A bold font weight can be used to emphasize specific UI elements, such as a title or input label.

<table class="font-weight m-b-6">
<thead>
<tr>
<th>Weight</th>
<th>Variable</th>
<th>Value</th>
<th>Demo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal</td>
<td>$gl-font-weight-normal</td>
<td>400</td>
<td>The platform for modern developers</td>
</tr>
<tr>
<td>Bold</td>
<td>$gl-font-weight-bold</td>
<td>600</td>
<td class="f-bold">The platform for modern developers</td>
</tr>
</tbody>
</table>

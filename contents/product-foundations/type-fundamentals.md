---
name: Type fundamentals
related:
  - /product-foundations/type-scales
  - /product-foundations/type-markdown
  - /product-foundations/colors
---

## Typeface

GitLab utilizes a system font stack, which references the default system fonts used by any given OS. Using system fonts helps performance by eliminating the need to download font files, and maintains the language support of the user’s system.

The body font stack is used for all UI elements, except for code-related elements, which use the monospace font stack. Examples of code-related elements are: branch name, commit ID, and pipeline ID.

### Body font stack

```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell,
  'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';
```

### Monospace font stack

```
'Menlo', 'DejaVu Sans Mono', 'Liberation Mono', 'Consolas', 'Ubuntu Mono',
  'Courier New', 'andale mono', 'lucida console', monospace;
```

## Font weight

GitLab uses two font weights within the application: normal and bold. A bold font weight can be used to emphasize specific UI elements, such as a title or input label.

<table class="font-weight gl-mb-6">
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

## Text color

There are a number of text colors defined in GitLab. Which color is used when depends on the location and purpose of the text.

<table class="font-weight gl-mb-6">
<thead>
<tr>
<th>Type</th>
<th>Variable</th>
<th>HEX value</th>
<th>Demo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Primary</td>
<td>$gray-900</td>
<td>#303030</td>
<td class="gl-text-gray-900">Main titles and body</td>
</tr>
<tr>
<td>Secondary</td>
<td>$gray-500</td>
<td>#666666</td>
<td class="gl-text-gray-500">Accompanying help text or menu subtitles</td>
</tr>
<tr>
<td>Tertiary</td>
<td>$gray-400</td>
<td>#868686</td>
<td class="gl-text-gray-400">Placeholder or disabled</td>
</tr>
</tbody>
</table>




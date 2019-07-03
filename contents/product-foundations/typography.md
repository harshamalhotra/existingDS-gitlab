---
name: Typography
---

## Typeface

GitLab utilizes a system font stack. System fonts are the default fonts used by any given OS, helping performance by eliminating the need to download font files.

### Body font stack

Todo: Add codeblock showing body font variable stack

### Monospace font stack

Todo: Add codeblock showing monospace variable stack

## Typescale

The default typography uses line-heights that align with our UI components. Margins are not included to allow for easier alignment with other UI elements. The following scale is used throughout the application:

<table class="type-scale m-b-6">
<thead>
<tr>
<th>px</th>
<th>Demo</th>
</tr>
</thead>
<tbody>
<tr>
<td>12px</td>
<td class="ts-6">The platform for modern developers</td>
</tr>
<tr>
<td>14px</td>
<td class="ts-5">The platform for modern developers</td>
</tr>
<tr>
<td>16px</td>
<td class="ts-4">The platform for modern developers</td>
</tr>
<tr>
<td>20px</td>
<td class="ts-3">The platform for modern developers</td>
</tr>
<tr>
<td>28px</td>
<td class="ts-2">The platform for modern developers</td>
</tr>
<tr>
<td>42px</td>
<td class="ts-1">The platform for modern developers</td>
</tr>
</tbody>
</table>

### Markdown

Content written using markdown includes typography that contains fixed margins and increased line-heights to improve readability. GitLab uses two variations of typography when writing markdown: documentation markdown and compact markdown.

#### Documentation markdown

Documentation markdown is defined as any markdown that is written outside of issuable pages, such as a README or Wiki page.

Todo: Show class used for markdown

#### Compact markdown

Within certain views, the markdown type scale is decreased in order to more closely align copy with other UI components. Compact markdown is used for descriptions and comments on issue and merge request pages.

Todo: Show class used for compact markdown

## Body copy

GitLab uses 14px as the base size for body copy. This is consistent throughout both the interface and within markdown content.

Todo: Show base font variable

## Font weight

GitLab uses two font weights within the application: normal and bold. A bold font weight can be used to emphasize specific UI elements, such as a title or input label.

Todo: Show variables for normal and bold typography

Todo: Show class used for bold typography

<table class="font-weight m-b-6">
<thead>
<tr>
<th>Weight</th>
<th>Demo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal</td>
<td>The platform for modern developers</td>
</tr>
<tr>
<td>Bold</td>
<td class="f-bold">The platform for modern developers</td>
</tr>
</tbody>
</table>

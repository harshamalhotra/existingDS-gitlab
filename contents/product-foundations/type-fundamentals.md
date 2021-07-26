---
name: Type fundamentals
related:
  - /product-foundations/type-scales
  - /product-foundations/type-markdown
---

## Typeface

GitLab utilizes a system font stack, which references the default system fonts used by any given OS. Using system fonts helps performance by eliminating the need to download font files, and maintains the language support of the user’s system.

### Body font stack

Todo: Add codeblock showing body font variable stack

### Monospace font stack

Todo: Add codeblock showing monospace variable stack

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

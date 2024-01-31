---
name: Type fundamentals
related:
  - /product-foundations/type-headings
  - /product-foundations/type-markdown
  - /product-foundations/color
---

Text is the primary way of communicating within GitLab. A thoughtful use of semantics and visual hierarchy can provide consistency and clarity to aid in comprehension and action.

## Typefaces

GitLab Sans, based on [Inter](https://rsms.me/inter/), is used for most user interface (UI) elements, with system fonts used as a back-up. GitLab Mono, based on [JetBrains Mono](https://www.jetbrains.com/lp/mono/), is used for code-related elements, for example, code blocks, branch names, commit IDs, and pipeline IDs. The fonts are available to download in [this package](https://www.npmjs.com/package/@gitlab/fonts).

The decision to use custom typefaces supports a consistent core experience for users, regardless of their device. A finer control of font size, variable weight, and other attributes like disambiguation enable greater optimization of usability and polish.

The typefaces were chosen because:

- Tall x-height that improves legibility at small sizes and readability of mixed- and lower-case text.
- Features that include character disambiguation and [OpenType Font Variations](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview).
- Balanced and complementary pairing that supports the [GitLab brand expression](/brand/overview).
- Open source.

**Sans serif font stack**

```css
font-family: 'GitLab Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans',
  Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
  'Segoe UI Symbol', 'Noto Color Emoji';
```

**Monospace font stack**

```css
font-family: 'GitLab Mono', 'Menlo', 'DejaVu Sans Mono', 'Liberation Mono', 'Consolas',
  'Ubuntu Mono', 'Courier New', 'andale mono', 'lucida console', monospace;
```

## Type scales

GitLab utilizes two type scales: **dynamic** and **fixed**.

- The dynamic scale is used for any UI text within GitLab. The **500**–**800** options rely on the viewport width to dynamically change size between the **min** and **max**.
- The fixed scale is used for [Markdown](/product-foundations/type-markdown) (user generated content). Sizes match the **min** of the dynamic scale.

<table class="table-compact gl-mb-6">
<col>
<colgroup span="2"></colgroup>
<col>
<col>
<thead>
<tr>
<th rowspan="2">Variable</th>
<th colspan="2" class="gl-white-space-nowrap">Dynamic scale</th>
<th rowspan="2" class="gl-white-space-nowrap">Fixed scale</th>
<th rowspan="2">Use</th>
</tr>
<th>Min</th>
<th>Max</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="gl-white-space-nowrap">$size-text-100</code></td>
<td>12px</td>
<td>12px</td>
<td>12px</td>
<td>Meta text, small labels</td>
</tr>
<tr>
<td><code>$size-text-200</code></td>
<td>13px</td>
<td>13px</td>
<td>13px</td>
<td>Level 6 headings</td>
</tr>
<tr>
<td><code>$size-text-300</code></td>
<td>14px</td>
<td>14px</td>
<td>14px</td>
<td>Level 5 headings, body text, input labels, help text</td>
</tr>
<tr>
<td><code>$size-text-400</code></td>
<td>16px</td>
<td>16px</td>
<td>16px</td>
<td>Level 4 headings, large body text</td>
</tr>
<tr>
<td><code>$size-text-500</code></td>
<td>18px</td>
<td>20px</td>
<td>18px</td>
<td>Level 3 headings</td>
</tr>
<tr>
<td><code>$size-text-600</code></td>
<td>21px</td>
<td>25px</td>
<td>21px</td>
<td>Level 2 headings</td>
</tr>
<tr>
<td><code>$size-text-700</code></td>
<td>24px</td>
<td>30px</td>
<td>24px</td>
<td>Level 1 headings, limited to one per page (see <a href="#semantics">Semantics</a>).</td>
</tr>
<tr>
<td><code>$size-text-800</code></td>
<td>28px</td>
<td>36px</td>
<td>28px</td>
<td>A display option that can be applied to a level 1 heading to increase its prominence. This can be useful for a learning path or feature promotion. Limited to one per page.</td>
</tr>
</tbody>
</table>

Note that in implementation the variables use rem values ([relative units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units)) instead of pixels ([absolute units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#absolute_length_units)), so that text respects browser settings for size and scale.

## Font weight

GitLab uses contrasting font weights to support visual hierarchy within the application. Generally, three weights are used by default: **400**, **600**, and **700**.

<table class="table-compact gl-mb-6">
<thead>
<tr>
<th>Value</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td>Body copy and data tables</td>
</tr>
<tr>
<td style="font-weight:600;">600</td>
<td>Headings and specific UI elements, such as an input label</td>
</tr>
<tr>
<td style="font-weight:700;">700</td>
<td>Inline with 400 for content of greater importance</td>
</tr>
</tbody>
</table>

## Text color

There are a number of text colors defined in GitLab. Color choice depends on the location and purpose of the text.

<table class="table-compact gl-mb-6">
<thead>
<tr>
<th>Category</th>
<th>Variable</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Primary</td>
<td><code>$gray-900</code></td>
<td class="gl-text-gray-900">Main titles and body</td>
</tr>
<tr>
<td>Secondary</td>
<td><code>$gray-500</code></td>
<td class="gl-text-gray-500">Accompanying help text or menu subtitles</td>
</tr>
<tr>
<td>Tertiary</td>
<td><code>$gray-400</code></td>
<td class="gl-text-gray-400">Input placeholder or disabled (inactive or non-operable)</td>
</tr>
</tbody>
</table>

The tertiary text color (`$gray-400`) has a 3.52 contrast ratio on white, which falls short of the 4.5:1 ratio needed to pass [WCAG 2.2 SC 1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Inactive components are not required to have sufficient contrast, but we try to get as close as possible while still visually differentiating active and inactive text. Refer to the [Forms](/patterns/forms#form-elements) pattern details for more information about placeholder text.

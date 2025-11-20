---
name: Design tokens usage guide
---

## In design

Using design tokens as Figma variables is now GA.

1. Use colors from [Design tokens](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Design-tokens?node-id=2194-34&t=S8Qzj2r4h5sg8dIK-0) as Figma variables instead of styles from **📙&nbsp;Component library**. ([How do I apply a Figma variable?](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs))
1. Let us know how you get on in the [feedback issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1870). No problem too big, no feedback too small.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `text.color.default` can only be applied as a fill to a text element and not to a stroke or shape layer.

### Work with dark mode

To enable switching between light and dark modes in Figma, use **Design tokens library** with **📙&nbsp;Component library**. These libraries use Figma variables that adapt to the selected mode and sync directly with our design tokens in code.

Components in **📙&nbsp;Component library** are built using these variables from **Design tokens library**. Unlike color styles from  **📙&nbsp;Component library**, when you switch mode, variables automatically update to their scheme-specific values.

By default, Figma uses **Auto** mode which defaults to light theme. To change the mode, select **Apply variable mode** in either:

- the Page sidebar when nothing is selected
- the Appearance sidebar when an object is selected

<grid>
  <figure-img alt="Screenshot of Figma user interface sidebar cropped to the page section" label="'Apply variable mode' button in the Page sidebar" src="/img/design-tokens-figma-page-mode-select.png"></figure-img>
  <figure-img alt="Screenshot of Figma user interface sidebar cropped to the appearance section" label="'Apply variable mode' button in the frame appearance section" src="/img/design-tokens-figma-frame-appearance-mode-select.png"></figure-img>
</grid>

You should set the mode at the page or parent frame level. Elements with the **Auto** mode inherit the mode from their parent, which allows styles to cascade. In the GitLab product, the mode applies to the entire user interface.

If you design outside the design system, use color styles from **📙&nbsp;Component library**. For example, use `purple-400`. These colors remain static across modes, so document any special behaviors during [handoff](https://docs.gitlab.com/ee/development/contributing/design.html#handoff).

## In code

Use design tokens in code through these approaches, listed in order of preference:

1. **Components**: The primary way to implement design tokens in your UI.
2. **CSS utilities**: For custom styling needs not covered by components.
3. **CSS custom properties**: For precise control over specific CSS properties.

If these options don't meet your needs, [reach out to the design system team](https://handbook.gitlab.com/handbook/engineering/development/dev/foundations/design-system/) to discuss potential improvements.

### Components

Components use design tokens by default and support color modes like dark mode.

### CSS utilities

CSS utilities using Tailwind use design token CSS custom properties for values. CSS utilities can be used for general styling with classes or `@apply` rules. When required, CSS utilities can be used to customize components. See the [documentation](https://gitlab-org.gitlab.io/frontend/tailwind-documentation) for available classes.

For predictable styling between color modes use [semantic design token](/product-foundations/design-tokens#semantic-design-tokens) utilities, for example, `.gl-text-subtle` or `.gl-bg-default`.

<note>Using color scale values directly like `.gl-text-green-900` or `.gl-bg-white` with utilities is deprecated. [Constant design tokens](/product-foundations/design-tokens#constant-design-tokens) are not currently exposed as CSS utilities for use as they do not provide values for color modes.</note>

### CSS custom properties

GitLab UI provides all design tokens as CSS custom properties scoped to the `:root` element by default. In cases where CSS utilities don't provide appropriate styles, CSS custom properties can be used. For example, using a contextual design token like `button.default.primary.foreground.color.default` which is not provided as a CSS utility can be accessed as a CSS custom property:

```css
.element-with-button-foreground-color {
  color: var(--gl-button-default-primary-foreground-color-default);
}
```

Remember to use them [semantically](/product-foundations/design-tokens#semantic-design-tokens). Don't use `info` if you only want the color `blue`. In different modes, `info` may be a different color. So only use that token if the element it applies to is an informational element.

### Work with dark mode

Using [semantic](/product-foundations/design-tokens#semantic-design-tokens) design tokens provides support for color modes like dark mode.

#### Dark mode overrides

<note>Overrides will not reflect values when design tokens are updated, and do not scale as we add new modes. For instance, if we add a high contrast mode, we'd need a `high-contrast:` modifier in addition</note>

##### Using CSS utilities

If you must use an override, the preferred method is to use CSS utilities with the `dark:` modifier. For example, to override a subtle background in dark mode:

<do>

Override a semantic token with specific color token:

```html
<div class="gl-bg-subtle dark:gl-bg-neutral-900"></div>
```

</do>

<dont>

Use constants or override a semantic token with another semantic token:

```html
<div class="gl-bg-neutral-10 dark:gl-bg-neutral-900"></div>
<div class="gl-bg-subtle dark:gl-bg-section"></div>
```

</dont>

##### Using `@apply`

To apply CSS utilities in SCSS stylesheets use the [@apply method](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html#2-apply-utility-classes-in-component-classes-when-necessary) to specify dark variants inline. For example, to override a subtle background in dark mode:

```css
.my-class {
  @apply gl-bg-subtle dark:gl-bg-neutral-900;
}
```

See the [SCSS style guide](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html#2-apply-utility-classes-in-component-classes-when-necessary) for additional guidance on utility classes in HTML directly (preferred) vs. component classes (when necessary).

#### Bespoke dark mode solutions

Design tokens are a product of the design system, not a store of every variable or style that changes across modes.

If you cannot use an existing design token or override its value in dark mode, this is the preferred method for you to author and maintain your own styles that might change across modes.

Add your variables to a `root.css` file in your project, for example [root.scss](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/stylesheets/root.scss) in GitLab, using the following structure:

```css
:root {

  /**
   * <Name of styles>
   * Discussion: <#issue>
   * Owner: <stage:group>
   */
  --example-icon-color: var(--gl-color-green-700);

  &.gl-dark {
    --example-icon-color: var(--gl-color-green-300);
```

This approach:

- limits tech and design debt creation by making decisions visible.
- centralizes information for the design systems team to inform our roadmap.
- keeps teams moving quickly on fast-moving and experimental work.
- simplifies the transition to design tokens if the attributes become part of the design system.

##### Legacy `.gl-dark` Selector (Deprecated)

Legacy styles use the `.gl-dark` selector to apply dark mode styles directly. This approach is deprecated as it doesn't scale for additional color modes and requires manual updates with parent CSS selectors:

```scss
.exampleSelector {
  color: black;

  .gl-dark & {
    color: white;
  }
}
```

While you'll see this pattern in our codebase, we are actively phasing it out. If you believe you have a legitimate reason to use `.gl-dark`, reach out to the design system team — this likely indicates a gap in our design system that we need to fix.

---
name: Design tokens technical implementation
---

## Pajamas components

When you use a Pajamas component, you're automatically using design tokens under the hood. Use Pajamas components as your first approach when implementing a UI.

## CSS utilities

If you need something more custom or you need to customize a Pajamas component, CSS utilities can help you out. Since these are powered by Tailwind, your IDE will be able to autocomplete, see the [documentation](https://gitlab-org.gitlab.io/frontend/tailwind-documentation) for available classes.

For predictable styling between color modes use [semantic design token](/product-foundations/design-tokens#semantic-design-tokens) utility classes, for example, `.gl-text-subtle` or `.gl-bg-default`.
Using color scale values directly like `.gl-text-green-900` or `.gl-bg-white` with utility classes is deprecated. [Constant design tokens](/product-foundations/design-tokens#constant-design-tokens) are not currently exposed as CSS utility classes for use as they do not provide values for color modes.

There are multiple ways to apply these utility classes. For the current guidance on how best to do this, please refer to the [SCSS style guide](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html#leveraging-tailwind-css-in-html-and-in-stylesheets).

## CSS custom properties

While utility classes handle most styling needs, sometimes you need to work directly with a design token in a more flexible way. For these cases, CSS custom properties (also known as CSS variables) let you apply a design token to a specific CSS properties not covered by a utility class.

For example, to change the caret color of an input (don't actually do this), use a design token like so:

```css
.exampleInput {
  caret: var(--gl-text-color-info);
}
```

Remember to use them [semantically](/product-foundations/design-tokens#semantic-design-tokens). Don't use `info` if you only want the color `blue`. In different modes, `info` may be a different color. So only use that token if the element it applies to is an informational element.

## Dark mode

When you use design tokens correctly (focusing on their semantic meaning rather than specific colors), dark mode for your UI elements works out of the box.

However, there are times when you might need to change how something behaves in dark mode. Before implementing a custom dark mode style, ask yourself three times: "Do I really need to deviate from the standard pattern?" Consult with the design systems team, they can help determine if this is truly a gap in our design system that needs addressing.

### Using @apply

This is the preferred method.
Use the [@apply method](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html#2-apply-utility-classes-in-component-classes-when-necessary) to specify dark variants inline. For example, to override a subtle background in dark mode:

```css
.my-class {
  @apply gl-bg-subtle dark:gl-bg-neutral-900
}
```

Always override a semantic token with specific color token:

- ✅ `@apply gl-bg-subtle dark:gl-bg-neutral-900`
- ❌ `@apply gl-bg-neutral-10 dark:gl-bg-neutral-900`
- ❌ `@apply gl-bg-subtle dark:gl-bg-section`

Whilst this is the preferred method, it still comes with side-effects and should only be used when necessary.

### Legacy Approaches

#### `.gl-dark` Selector (Deprecated)

In the olden days, you could add dark mode overrides with the `.gl-dark` selector. Today, you still can, but this approach is deprecated as it doesn't scale for additional color modes and requires manual updates with parent CSS selectors:

```scss
.exampleSelector {
  color: black;

  .gl-dark & {
    color: white;
  }
}
```

While you'll see this pattern in our codebase, we are actively phasing it out. If you believe you have a legitimate reason to use `.gl-dark`, reach out to the design system team - this likely indicates a gap in our design system that we need to fix.

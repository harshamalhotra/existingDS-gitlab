---
name: Spacing
---

All GitLab components follow an 8px spacing system. We’ve defined this as our memorable base number to build upon in order to establish spatial values that are utilized by every component. By following a set spatial convention, we decrease design complexity while increasing consistency across the application.

## Geometric progression

We use 8px as the base for determining our spacial system. In order to create a scale that offers flexibility in spacing without providing an abundance of choices, we’ve defined a set of values using geometric progression: `8 * 2^n`. We have augmented the progression in order to provide the flexibility that a complex application needs to accommodate a large amount of content. To do this, we’ve added values after 16px using `n * 1.5`, where `n` is the previous value from the geometric progression.

### 12px outlier

We include 12px as one of our measures, but it should only be reserved for right and left padding of horizontal tabs, buttons, and form elements. This special padding amount allows for better alignment of stacked items while giving elements enough room to breathe. 12px should not be using for any other measurement other than those defined here.

## Standard spacing guidelines

`2px` or `4px` is used for spacing within a component.

```html
<!-- live-example -->
<dimension-scale size-class="gl-w-1"></dimension-scale>
<dimension-scale size-class="gl-w-2"></dimension-scale>
```

`8px` is used to separate related elements.

```html
<!-- live-example -->
<dimension-scale size-class="gl-w-3"></dimension-scale>
```

`16px` is used to separate unrelated elements.

```html
<!-- live-example -->
<dimension-scale size-class="gl-w-5"></dimension-scale>
```

`24px` is used to separate sub-sections of content.

```html
<!-- live-example -->
<dimension-scale size-class="gl-w-6"></dimension-scale>
```

`32x` is used to separate sections of content.

```html
<!-- live-example -->
<dimension-scale size-class="gl-w-7"></dimension-scale>
```

## Design tokens

The table is based on the configuration of `1rem = 16px`.

| Design token         | Value      | Pixel size |
| -------------------- | ---------- | ---------- |
| `spacing-scale.0`    | `0`        | `0`        |
| `spacing-scale.px`   | `1px`      | `1px`      |
| `spacing-scale.1`    | `0.125rem` | `2px`      |
| `spacing-scale.2`    | `0.25rem`  | `4px`      |
| `spacing-scale.2-5`  | `0.375rem` | `6px`      |
| `spacing-scale.3`    | `0.5rem`   | `8px`      |
| `spacing-scale.4`    | `0.75rem`  | `12px`     |
| `spacing-scale.5`    | `1rem`     | `16px`     |
| `spacing-scale.6`    | `1.5rem`   | `24px`     |
| `spacing-scale.7`    | `2rem`     | `32px`     |
| `spacing-scale.8`    | `2.5rem`   | `40px`     |
| `spacing-scale.9`    | `3rem`     | `48px`     |
| `spacing-scale.10`   | `3.5rem`   | `56px`     |
| `spacing-scale.11`   | `4rem`     | `64px`     |
| `spacing-scale.11-5` | `4.5rem`   | `72px`     |
| `spacing-scale.12`   | `5rem`     | `80px`     |
| `spacing-scale.13`   | `6rem`     | `96px`     |
| `spacing-scale.15`   | `7.5rem`   | `120px`    |
| `spacing-scale.18`   | `9rem`     | `144px`    |
| `spacing-scale.20`   | `10rem`    | `160px`    |

View the [design tokens directory](/product-foundations/design-tokens-directory) for spacing transforms and utilities.

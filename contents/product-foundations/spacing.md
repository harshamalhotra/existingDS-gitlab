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

<design-tokens-table group="spacing-scale"></design-tokens-table>

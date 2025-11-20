---
name: Reading design tokens
---

Understanding how design tokens are named will help you to use and apply them correctly.

## Naming convention

The naming convention enables you to choose a design token that matches your design intent. Design token names may include terms that define the **context**, **object**, and **modifier** for a design token. For example:

<img class="gl-block gl-mx-auto gl-mt-7" src="/img/design-tokens-naming-convention.svg" alt="Design tokens naming convention with context, object, and modifier groups" />

<small class="gl-block gl-text-center">`[group].[component].[variant/category].[element].[position].[relationship].[property].[type].[scale].[state]`</small>

### Context

Context provides the circumstances for the design token. For example, `action.danger.[…]` is the start of a design token that is in an _action_ group of the _danger_ variant. Similarly, `banner.promotion.[…]` is for a _banner_ component of the _promotion_ variant. Context can be either a group or component, but never both at the same time — the context is either broad or narrow. Design tokens that don't include a context are the most generally applied.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-naming-context.svg" alt="Design tokens naming convention for context, includes group, component, and variant/category" />

- **Group:** Broad context that can apply to many things. Examples are `feedback`, `action`, and `control`.
- **Component:** Narrow context that only applies to the component. Examples are `avatar`, `button`, and `toggle`.
- **Variant/category:** Further describes the context. Examples are `confirm`, `danger`, and `neutral`.

### Object

An object is the element that the design decision applies to, and may include its position and relationship to other elements or constraints. For example, `[…].icon.left.[…]` lets you know that the _icon_ element referenced is in the _left_ position. Another example is `[…].element.to-top.[…]` that tells you this is about a _generic element's_ relationship to the _top boundary_. An object is always present in a [semantic](/product-foundations/design-tokens#semantic-design-tokens) and [contextual](/product-foundations/design-tokens#semantic-design-tokens) design token name.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-naming-element.svg" alt="Design tokens naming convention for element, includes element, position, and relationship" />

- **Element:** What's being addressed. Examples are `background`, `border`, and `text`.
- **Position:** Location of the element. Examples are `top`, `right`, or `outer`.
- **Relationship:** Association to other elements or constraints. Examples are `to-edge`, `to-top`, and `gap`.

### Modifier

A modifier is an attribute of the object that's being addressed. The _property_ itself can be further described by other modifiers to give it more meaning or to understand how it's being changed. For example, `[…].color.strong.hover` identifies this as a _color_ property that is _strong_ in scale and in the _hover_ state. Likewise, `[…].font-weight.semibold` identifies that the _font weight_ property is _semibold_ in scale.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-naming-properties.svg" alt="Design tokens naming convention for properties, includes property, type, scale, and state" />

- **Property:** Defines what's being addressed. Examples are `color`, `space`, and `size`.
- **Type:** Similar to how a variant describes context, the type describes the property. Examples are `info`, `link`, and `overlay`. Type can include the same terms as a variant or category, like _danger_ or _success_, but the same term will never be in two places for a single design token. It's one of the most flexible parts of the naming convention.
- **Scale:** An ordinal range that is finite and doesn't define distance between steps. Example ordinal scale are `default`, `subtle`, `strong` and `sm`, `md`, `lg`.
- **State:** Interactive or programmatically unique state. Examples include `default`, `hover`, and `checked`.

## Examples

General design tokens with wide applicability.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-example-01.svg" alt="Design token example: text.color.default" />

More specific design tokens with specific use cases.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-example-02.svg" alt="Design token example: feedback.info.background.color" />

The most specific design tokens that are related to components.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-example-03.svg" alt="Design token example: dropdown.icon.right.to-edge.space" />

Next, [learn how to use design tokens →](/product-foundations/design-tokens-using)

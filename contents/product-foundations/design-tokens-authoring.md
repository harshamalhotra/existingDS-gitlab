---
name: Authoring design tokens
---

Design tokens represent foundational design decisions that should be stable and consistent across
the GitLab platform. Adding or modifying design tokens requires careful consideration. Before creating a new design token:

1. Check if existing design tokens or design token compositions match the required intent and appearance.
1. Verify that it will be used across multiple components or contexts.
1. Confirm the value represents a design system decision.

## Authoring

Design tokens are authored using the [Design Tokens W3C Community Group (DTCG)](https://www.designtokens.org/) specification.

Design tokens are defined in `*.token.json` files, and must include a:

1. [name and `$value`](https://www.designtokens.org/tr/2025.10/format/#name-and-value)
2. [`$type`](https://www.designtokens.org/tr/2025.10/format/#type-0):

```json
{
  "token-name": {
    "$value": "#000",
    "$type": "color"
  }
}
```

### Name

A design token [name](https://www.designtokens.org/tr/2025.10/format/#name-and-value) is a unique and case-sensitive identifier of a value. Design tokens follow a structured [naming convention](/product-foundations/design-tokens-reading#naming-convention) that helps establish their purpose and usage.
The full naming pattern includes:

`[group].[component].[variant/category].[element].[position].[relationship].[property].[type].[scale].[state]`

Principles:

- Name tokens to reduce ambiguity and increase clarity.
- Add the level of specificity needed for clarity by only including necessary parts of the pattern.
- Start with context (group or component) to establish scope.
- Include an object in all semantic and contextual token names.
- Maintain consistency in both terminology and patterns to enhance predictability.

<note>Names have [character restrictions](https://www.designtokens.org/tr/2025.10/format/#character-restrictions) and must not begin with `$` or contain `{`, `}`, or `.`</note>

### Value

Name and `$value` are the minimum required properties of a design token, `$value` is a reserved
word.

```json
{
  "token name": {
    "$value": "16"
  }
}
```

A design token value can be an object, string, number, or [alias](#aliases), for example:

| Example       | Value                    |
| ------------- | ------------------------ |
| color         | `"#18171d"`              |
| font weight   | `"bold"`                 |
| spacing scale | `16`                     |
| easing        | `"ease-out"`             |
| duration      | `200`                    |
| alias         | `"{text.color.default}"` |

### Aliases

[Aliases](https://www.designtokens.org/tr/2025.10/format/#alias-reference) allow a design token value to
reference to another token, for example the alias token `custom-token` has the value
`{text.color.heading}`:

```json
{
  "custom-token": {
    "$value": "{text.color.heading}"
  }
}
```

This allows generated CSS and SCSS that are output by using [output references](https://styledictionary.com/reference/hooks/formats/#references-in-output-files) to use
references as variables:

**CSS:**

```css
:root {
  --gl-custom-token: var(--gl-text-color-heading);
}
```

**SCSS:**

```scss
$gl-custom-token: $gl-text-color-heading;
```

### Type

The [$type](https://www.designtokens.org/tr/2025.10/format/#type) property is used to reliably interpret a value:

```json
{
  "color-token": {
    "$value": "#000",
    "$type": "color"
  },
  "dimension-token": {
    "$value": {
      "value": 16,
      "unit": "px"
    },
    "$type": "dimension"
  }
}
```

### Groups

[Groups](https://www.designtokens.org/tr/2025.10/format/#groups) are arbitrary ways to cluster tokens together in a category. Groups can also be nested for greater context setting:

```json
{
  "text": {
    "color": {
      "heading": {
        "$value": "#18171d",
        "$type": "color"
      }
    }
  }
}
```

<note>To infer the type or purpose of design tokens use the [`$type`](#type) property.</note>

Group names prepend design token names in generated output, for example:

**CSS:**

```css
:root {
  --gl-text-color-heading: #18171d;
}
```

**SCSS:**

```scss
$gl-text-color-heading: #18171d;
```

**JavaScript:**

```javascript
const GL_TEXT_COLOR_HEADING = '#18171d';
```

### Extensions

[Extensions](https://www.designtokens.org/tr/2025.10/format/#extensions), are custom properties that provide additional metadata or functionality.

The `com.figma.scope` extension indicates a token's scope within Figma. Value is an array (even for tokens with a single scope) and should follow the [VariableScope](https://www.figma.com/plugin-docs/api/VariableScope/) type from Figma's Plugin API.

```json
{
  "text": {
    "$value": "#000",
    "$type": "color",
    "$extensions": {
      "com.figma.scope": [
        "TEXT_FILL"
      ],
    }
  },
  "icon": {
    "$value": "#333",
    "$type": "color",
    "$extensions": {
      "com.figma.scope": [
        "SHAPE_FILL",
        "STROKE_COLOR"
      ],
    }
  }
}
```

## Deprecation

Add [`"$deprecated": true`](https://www.designtokens.org/tr/2025.10/format/#deprecated) to deprecated token
JSON. When all tokens in a file are deprecated move to a `deprecated.*.json` file.

## Automation

Design tokens use [Style Dictionary](https://styledictionary.com/) to automate compiling design token JSON definitions into consumable formats and assets for CSS, SCSS, JavaScript, and Tailwind utilities. Style Dictionary's [architecture](https://styledictionary.com/info/architecture/) handles resolving design token aliases, and allows complex mutations of design tokens to achieve desired output.

### Preprocessors

[Preprocessors](https://styledictionary.com/reference/hooks/preprocessors/) process the dictionary object for more complex transformations on the dictionary as a whole. We use preprocessors to select color values between default and dark mode.

### Transforms

[Transforms](https://styledictionary.com/reference/hooks/transforms/) modify the name, value, or attributes of a design token before being compiled. We use transforms to strip prefixes from legacy color design tokens in compiled output.

#### Transform groups

[Transform groups](https://styledictionary.com/reference/hooks/transform-groups/) apply transforms to platforms, for example, CSS and JavaScript have different transform groups for casing `kebab-case` for CSS and SCSS output, `CONSTANT_CASE` for JavaScript output.

### Formats

[Formats](https://styledictionary.com/reference/hooks/formats/) define compiled output files. We use a custom format definition to automate Tailwind configuration with design token values.

### Platforms

[Platforms](https://styledictionary.com/reference/config/#platform) are a build target that tells Style Dictionary how to properly transform and format your design tokens for output to a specific platform, for example CSS, SCSS, and JavaScript.

#### Prefixes

When using generated design token output like CSS custom properties, SCSS variable, and JavaScript constants, a "gl" namespace is included. This is to:

1. Clarify where values are coming from in developer tools.
2. Minimize clashes with custom properties and variables with the same scope.

## Modes

Modes allow design tokens to update value for different use cases, for example, light and dark mode colors.

Modes are defined as an object in the `$value` property:

```json
{
  "color-token": {
    "$value": {
      "default": "#000",
      "dark": "#fff"
    },
    "$type": "color"
  }
}
```

When defined each mode value is compiled into separate output:

**CSS:**

`tokens.css`

```css
:root {
  --gl-color-token: #000;
}
```

`tokens.dark.css`

```css
:root {
  --gl-color-token: #fff;
}
```

**SCSS:**

`tokens.scss`

```scss
$gl-color-token: #000;
```

`tokens.dark.scss`

```scss
$gl-color-token: #fff;
```

**JavaScript:**

`tokens.js`

```javascript
export const GL_COLOR_TOKEN = '#000';
```

`tokens.dark.js`

```javascript
export const GL_COLOR_TOKEN = '#fff';
```

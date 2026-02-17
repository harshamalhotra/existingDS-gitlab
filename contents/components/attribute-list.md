---
name: Attribute list
description: Displays attributes for a single entity in a grid layout.
related:
  - table
---

An attribute is a single piece of information about an entity. An entity is any distinct item in GitLab with its own properties, for example a user, a project, or a commit. Examples of attributes include role, owner, creation date, and size.

This component displays these attributes in a responsive grid layout, making them easy to scan and compare.

## Examples

```html
<!-- live-example -->
<gl-attribute-list
  :items="[
    { icon: 'calendar', label: 'Created', text: 'Feb 9, 2026' },
    { icon: 'clock', label: 'Run started', text: '2:30 PM' },
    { icon: 'hourglass', label: 'Runtime', text: '5 minutes 42 seconds' },
    { icon: 'status-health', label: 'Health', text: 'Healthy' }
  ]"
></gl-attribute-list>
```

[View in Pajamas UI Kit →](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=136188-11)

## Structure

<figure-img alt="Numbered diagram of an attribute list" label="Attribute list structure" src="/img/attribute-list-structure.svg"></figure-img>

1. **Icon** (optional): Supports or directly communicates the attribute meaning.
1. **Label**: Identifies the attribute.
1. **Value**: The attribute value.

## Guidelines

### When to use

- Display metadata for a single entity.
- Present read-only key-value pairs in a scannable, space-efficient layout.

### When not to use

- If displaying attributes from multiple entities, use separate lists for each entity.
- If labels vary between similar entities, ensure labels are consistent and only values change.
- For multi-row tabular data where you need to compare attributes across entities, use a [table](/components/table) instead.
- For editable data, use form components instead.
- If you have too many attributes and risk overwhelming users, consider grouping related attributes or using a [table](/components/table) instead.

### Variants

Both variants respond to container width and adapt their layout in narrow spaces, so choose based on the default presentation when space is available.

1. **Horizontal** (default): Use when you have short, consistent labels and want to show many attributes efficiently.
1. **Vertical**: Use when labels are long or you want each attribute to be clearly readable without scanning horizontally.

<grid>
  <figure-img alt="Wireframe of an attribute list with five attributes. The attributes are arranged in two columns. In each column the icon and labels are to the left, the value is to the right." label="Horizontal layout variant" src="/img/attribute-list-variant-horizontal.svg"></figure-img>
  <figure-img alt="Wireframe of an attribute list with five attributes. The attributes are arranged in two columns. The values are directly below the icon and labels." label="Vertical layout variant" src="/img/attribute-list-variant-vertical.svg"></figure-img>
</grid>

### Behavior

- Attribute list responds to container width and adapts its layout in narrow spaces.
- Attributes stack vertically when space is limited.
- Attribute focus order follows reading order; top to bottom per column.

<grid>
    <figure-img alt="Wireframe of an attribute list with five attributes. The attributes are arranged in two columns. An orange arrow indicates reading order: down the left column, then to the right column, then down." label="Attribute order when there is enough space for two columns" src="/img/attribute-list-behavior-order-full-width.svg"></figure-img>
    <figure-img alt="Wireframe of an attribute list with five attributes. The attributes are arranged in a single column. An orange arrow indicates reading order: straight down from the top to the bottom of the column." label="Attribute order when there is only space for one column" src="/img/attribute-list-behavior-order-limited-width.svg"></figure-img>
</grid>

<todo> Add way to experience the layout adaptations as container size changes. </todo>

### Content

#### Ordering

- Order attributes by importance or in a way that tells a story with the data, based on the information needs of your users.

#### Icons

- Icons are optional and appear before the label text.
- Icons should support or directly communicate the attribute meaning.
- Use icons consistently, either include them for all attributes or none. Mixing icon and non-icon attributes creates visual inconsistency and makes certain attributes appear more important than others.
- Maintain consistent icon-to-meaning mappings across the product. The same icon should always represent the same attribute type.

#### Labels

- Labels should be concise and consistent across similar entities.
- Use sentence case for labels.

#### Values

- Values can contain text, [links](/components/link), [avatars](/components/avatar), or other inline components.
- Long, untruncated values can disrupt the grid layout and make the list harder to scan.
- Implement [content truncation and overflow](/product-foundations/layout#content-truncation-and-overflow) for long values such as commit SHAs and descriptions, or consider presenting these outside of the attribute list.

#### Null values

Decide how to represent null values on a case-by-case basis. Some ways of addressing this are:

- Keep the cell empty. For example, if no data is returned.
- Use text to indicate what is missing. For example, "Unassigned" if there is no assignee.
- Use a dash ("-"). For example, if there is no data and a text explanation is not applicable.

### Accessibility

- Uses semantic HTML with `<dl>` (description list), `<dt>` (term/label), and `<dd>` (description/value) elements.
- Screen readers announce the relationship between labels and values.
- Icons in labels should be hidden from screen readers with `aria-hidden="true"` since the label text provides the accessible name.
- Ensure custom slot content maintains semantic structure and provides appropriate text alternatives.

## Code reference

### GlAttributeList

The `GlAttributeList` component displays key-value pairs in a grid layout.

#### Custom slot content

```html
<!-- live-example -->
<gl-attribute-list
  :items="[
    {
      type: 'issue',
      icon: 'work-item-issue',
      label: 'Issue',
      text: '#12345',
    },
    { type: 'merge-request', icon: 'merge-request', label: 'Merge request', text: '!12345' },
    {
      type: 'ref',
      icon: 'commit',
      label: 'Commit SHA',
      text: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    },
  ]"
>
  <template #description="{ item }">
    <gl-link v-if="item.type === 'issue'" href="#">{{ item.text }}</gl-link>
    <gl-badge
      v-else-if="item.type === 'merge-request'"
      href="#"
      icon="merge-request"
      variant="success"
    >
      {{ item.text }}
    </gl-badge>
    <div v-else-if="item.type === 'ref'" class="gl-font-monospace gl-truncate">{{ item.text }}</div>
    <template v-else>{{ item.text }}</template>
  </template>
</gl-attribute-list>
```

<story-viewer component="base-attribute-list" title="GlAttributeList" view-mode="docs"></story-viewer>

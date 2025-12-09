---
name: Token
description: A token represents a keyword used to add or filter objects.
related:
  - filter
  - badge
  - label
---

## Examples

<story-viewer component="base-token" title="Interactive"></story-viewer>

<story-viewer component="base-token" story="view-only" title="View-only"></story-viewer>

<story-viewer component="base-token" story="with-avatar" title="Avatar"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-141&mode=design)

## Structure

<figure-img alt="Numbered diagram of a token structure" label="Token structure" src="/img/token-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Avatar** (optional): Prefixes the text for a user, project, or group.
1. **Text**: Represents the query.
1. **Remove button** (optional): Permanently removes the token.

## Guidelines

### When to use

- In a search query where the user is expected to include multiple queries.
- To represent dynamic user input in a [filter](/components/filter) and verify the input by converting the text into a token.
- Allow a user to manage, filter, and search in a compact area.

### When not to use

- If you need to categorize an object, use a [label](/components/label) instead.
- To highlight more generic object metadata that is system-generated, use a [badge](/components/badge) instead.

### Variants

- **Interactive**: Include a [close](https://design.gitlab.com/product-foundations/iconography-directory/?q=~close) icon at the end of the token. When enabled, a user can click the icon to remove the token from the set.
- **View-only**: Can't be removed.
- **Avatar**: When querying for a user, project, or group, an avatar token should be used. These can be either interactive or view-only.

### Placement

- A token can be positioned inline with the text cursor in a field, or in a stacked list.
- A token can wrap to a new row.

### Behavior

A token can be used to both add and filter content where:

- An input token adds content in the form of an attribute attached to another object.
- A filter token narrows down content and is attached to a qualifier. The [filter](/components/filter) inherits a filter token.

### Accessibility

<todo>Add accessibility requirements and considerations.</todo>

## Code reference

### GlToken

<story-viewer component="base-token" title="GlToken" view-mode="docs"></story-viewer>

### GlTokenSelector

Choose from a provided list of tokens or add a user defined token.

```html
<script>
export default {
  data() {
    return {
      selectedTokens: [
        {
          id: 1,
          name: 'Vue.js',
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <gl-token-selector
      v-model="selectedTokens"
      :dropdown-items="[
        {
          id: 1,
          name: 'Vue.js',
        },
        {
          id: 2,
          name: 'Ruby On Rails',
        },
        {
          id: 3,
          name: 'GraphQL',
        },
        {
          id: 4,
          name: 'Redis',
        },
      ]"
    />
    {{ selectedTokens }}
  </div>
</template>
```

#### User created tokens

This component allows for users to create their own tokens when configured to do so.
There are two props that support this functionality: `allowUserDefinedTokens` and `showAddNewAlways`.

`allowUserDefinedTokens` is required to enable the functionality

When set to `true` and a user's search text returns nothing,
they will be presented with an additional dropdown item `Add ...`
that takes their current search input and emits `@input`.
The parent component can then handle the event accordingly.

Additionally, there are scenarios where the user may want the ability to add a new token
even if some search results are returned.  This functionality can be enabled by additionally
setting `showAddNewAlways` to `true`.
This will allow for the `Add ...` dropdown item to appear at all times
whenever a user has inputted text, regardless if results are found.

```html
<template>
  <div>
    <gl-token-selector
      v-model="selectedTokens"
      :dropdown-items="dropdownItems"
      allow-user-defined-items
      show-add-new-always
      @input="onTokenUpdate"
    />
    {{ selectedTokens }}
  </div>
</template>
```

<story-viewer component="base-token-selector" title="GlTokenSelector" view-mode="docs"></story-viewer>

---
name: Combobox
description: A combobox is a panel of options typically opened by a button or text input.
related:
  - dropdown-disclosure
  - button
  - accordion
---

## Examples

<story-viewer component="base-dropdown-collapsible-listbox" title="Simple listbox"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="header-and-footer" args-block="false" title="Listbox with header and footer actions"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="header-actions" args-block="false" title="Listbox with header action"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="groups" args-block="false" title="Listbox with groups"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="searchable" title="Listbox with search"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="searchable-groups" title="Listbox with searchable groups"></story-viewer>

<story-viewer component="base-dropdown-collapsible-listbox" story="custom-list-item" title="Listbox with custom list option"></story-viewer>

<note>Listbox styles will be updated to match the UI kit.</note>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-14&mode=design)

## Structure

<figure-img alt="Numbered diagram of a combobox widget structure" label="Combobox widget structure" src="/img/dropdown-combobox-structure.svg"></figure-img>

1. **Text input or button**: Triggers the panel to open or close.
1. **Panel**: Wraps the content.
1. **Header** (optional): Provides more context for the options.
1. **Header action** (optional): Changes the selected state of options.
1. **Listbox**: A group of options.
1. **Option**: Item available for selection.
1. **Scrim**: Gradient overlay when items overflow the panel.
1. **Footer** (optional): Contains 2 or less actions related to the options.
1. **Search within** (optional for [collapsible listbox](#variants)): A nested input can limit the number of available options.
1. **Section title** (optional): Groups options under a shared title.
1. **Selected option**: Option in selected state.

## Guidelines

### When to use

- To select options within a listbox ([`role="listbox"`](https://www.w3.org/TR/wai-aria-1.2/#listbox)) of single or multiselect options ([`role="option"`](https://www.w3.org/TR/wai-aria-1.2/#option)).
- For sorting a list (see [reference](#reference)).
- If an option is more than just text. For example, if an avatar or other graphical elements is included as part of the option.

### When not to use

- If you need to solely display a list of actions (semantic buttons or links, not `role="option"`), then use a [disclosure](/components/dropdown-disclosure) instead.
- If a user is selecting a single text option from a group of options within a [form](/patterns/forms), consider using a [select](/components/select), [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Variants

There are two combobox variants that vary based on how they are triggered, whether through a button or a text input.
See [diagram](/components/dropdown-overview#when-to-use-either-component) for additional help in choosing between them.

- **Collapsible listbox** (`GlCollapsibleListbox`, most common): A button triggers a panel of single or multiselect options.
- **Combobox** (`GlFormCombobox`): A text input triggers a panel of options. An optional button next to the input can also trigger the panel.

#### Trigger buttons

A [button](/components/button) that triggers a combobox comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](/product-foundations/iconography-directory?q=~chevron-down) icon to the right of the text label to indicate it will toggle additional content.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](/product-foundations/iconography-directory?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no visible text.

### Size

- **Trigger**: The [text input](/components/text-input) or [button](/components/button) width is determined by the properties available for each of those components.
- **Panel**: Has a minimum and maximum width and a maximum height to keep content near the trigger and to keep panels consistent throughout the UI. The height of the panel is initially set to the height of its content (dynamic height) when less than the maximum, but can optionally be set to always use a fixed height. See [fluid width](#fluid-width) and [match trigger width](#match-trigger-width) for guidance on when to allow the panel width to resize based on content.

#### Fluid width

The `fluid-width` prop is useful for a dropdown with variable-length content like usernames, file paths, or user-generated text.

Use it when avoiding truncation is more important than maintaining consistent widths across multiple dropdown components.

#### Match trigger width

The `panelMatchTriggerWidth` prop makes the dropdown panel match the width of its trigger element. This can be useful in focused flows like registration forms, wizards, or full-screen experiences where form fields are large (400-500px) and multiple dropdowns appear in close proximity.

Use it in the rare occasions when visual consistency between the trigger and panel is critical. Avoid using it in constrained spaces, alongside other dropdown size variants, or for secondary UI controls like filters and sort dropdowns.

### Behavior

- By default, the panel opens below the trigger button and is aligned to the left of it.
- The panel can be positioned to the right of the trigger button if it makes more sense in the layout.
- When there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger button.
- When the panel boundaries don't allow it to flip to the other side of the trigger button because there isn't enough space, it shifts along the x-axis.
- There will always be some padding between the vertical edges of the panel and the vertical edges of the viewport.
- The tip of the panel points at the trigger and is center-aligned with it by default.
- If the content within the panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- A panel is closed by clicking outside of it, using the <kbd>Esc</kbd> key, or by focus moving to an element outside of the component.
- Two or less actions that don't scroll can be fixed in a footer at the bottom of a panel. Unlike a header action, a footer action doesn't change the state of the options within the panel.
- Collapsible listbox:
  - An optional text input _within_ the panel can limit available options when a term is entered.
  - For single select:
    - When an option is selected, the panel is closed and the control updated.
    - If **Any** or **All** is included, it should be the first option to indicate that any or all parameters can apply.
  - For multiselect:
    - When one or more options are selected, they can optionally be grouped in a section above unselected options, although they may not be visibly grouped until the selections are applied and the panel is opened again.
    - When one or more options are selected, the panel stays open until the user closes it by one of the available methods. An **Apply** button is not necessary. Depending on the logic, the selection may sync with the database on each selection and update the UI in real-time, or it may sync with the database after the panel is closed and then update the UI.
    - A header action can change per use case. For example, a **Select all** action can change to **Unselect all** after options are selected.
- Combobox:
  - A user can either type a term in the text input or select an available option.
  - The text input can use autocomplete capability based on available options.
  - When an option is selected, the panel is closed and the text input updated with the selection.

#### Validation

- Error validation is shown inline and may happen in real-time or on submission if used in a form.
- Real-time validation should help a user understand and remedy the error if possible.
- A validation message should always be visible and not placed in a tooltip. The message is placed directly below the trigger element, similar to [form validation](/patterns/forms/#validation), and both are presented in an error state, which changes the text and border color of the trigger element to red.

### Content

- Placeholder text in an input should only be used for extra, non-essential information when the input purpose is still understood in its absence; it's not a replacement for a visible label. An exception is the [search](/components/search) input, which includes a [search](/product-foundations/iconography-directory?q=~search) icon to further clarify its purpose.
- A header can provide context for the list of options.
- Within a listbox:
  - Section titles can categorize options into meaningful groups.
  - Option text should be concise and clearly indicate the choice it represents.
  - When possible, the order of options should follow numeric (Option 1, Option 2, Option 3…), alpha (Option A, Option B, Option C…), or natural (Option 1–3, Option 4–7, Option 8–11…) ordering.
- Actions within a footer should be concise and relate to the options.

### Accessibility

- A text input must be clearly labeled and identified.
- See the [WAI-ARIA Combobox documentation](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) for more details.
- See the [WAI-ARIA Listbox documentation](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) for more details.
- When options in a panel are filtered, a screen reader should announce how many options are now available via `aria-live`.
- It should be clear for all modalities whether an option is selected or not.

## Code reference

A collapsible listbox is a button that toggles a panel containing a list of options.
It supports single and multi-selection.

**Single-select:** By default, selecting an option will update the toggle label with the choice.
But the custom toggle text can be provided.
When option is selected, the dropdown will be closed and focus set on the toggle button.

**Multi-select:** Selecting an option will not update the toggle, but it can be customized
providing `toggleText` property. Also, selecting or deselecting an item won't close the dropdown.

### Icon-only listbox

Icon-only listboxes must have an accessible name.
You can provide this with the combination of `toggleText` and `textSrOnly` props.
For single-select listboxes `toggleText` will be set to the selected item's `text` property value
by default.

Optionally, you can use `no-caret` to remove the caret and `category="tertiary"` to remove the border.

```html
<gl-collapsible-listbox
  icon="ellipsis_v"
  toggle-text="More options"
  text-sr-only
  category="tertiary"
  no-caret
>
```

### Labeling the listbox

#### Default toggle

- The `toggleId` prop sets the `id` of the toggle element. The `toggleId` value must match the form group's `labelFor` value to associate the label and toggle correctly.
- Prefer using `toggleId` over `toggleAriaLabelledBy`, as it is more similar to how label elements are associated with other form components.

```html
<gl-form-group label="Department" label-for="department-picker">
  <gl-collapsible-listbox
    toggle-id="department-picker"
    :items="departments"
  />
</gl-form-group>
```

```html
<!-- live-example -->
<script>
  export default {
    data() {
      return {
        items: [
          { value: 'jane-doe', text: 'Jane Doe' },
          { value: 'christine-calamary', text: 'Christine Calamary' },
          { value: 'spenser-griffin', text: 'Spenser Griffin' },
        ],
        selected: 'jane-doe',
      };
    },
  };
</script>

<template>
  <div style="min-height: 12rem;">
    <gl-form-group label="Assignee" label-for="unique-id-form-1">
      <gl-collapsible-listbox
        :items="items"
        toggle-id="unique-id-form-1"
        v-model="selected"
      >
        {{ selected }}
      </gl-collapsible-listbox>
    </gl-form-group>
  </div>
</template>
```

#### Custom toggle

- Set the `toggleId` as defined in the [Default toggle section](/components/dropdown-combobox#default-toggle)
- Destructure the `accessibilityAttributes` object onto the `#toggle` template
- Bind the accessibility attributes to the first child element in your custom toggle

```html
<template #toggle="{ accessibilityAttributes }">
  <button v-bind="accessibilityAttributes">
    // Custom toggle details
  </button>
</template>
```

```html
<!-- live-example -->
<script>
  export default {
    data() {
      return {
        items: [
          { value: 'jane-doe', text: 'Jane Doe' },
          { value: 'christine-calamary', text: 'Christine Calamary' },
          { value: 'spenser-griffin', text: 'Spenser Griffin' },
        ],
        selected: 'jane-doe',
      };
    },
  };
</script>

<template>
  <div style="min-height: 12rem;">
    <gl-form-group label="Custom assignee" label-for="unique-id-form-2">
      <gl-collapsible-listbox
        :items="items"
        toggle-id="unique-id-form-2"
        v-model="selected"
      >
        <template #toggle="{ accessibilityAttributes }">
          <button class="gl-rounded-action gl-border-none gl-p-2 gl-bg-strong" v-bind="accessibilityAttributes">
            <span class="gl-sr-only">
              {{ selected }}
            </span>
            <gl-avatar :size="32" :entity-name="selected"/>
          </button>
        </template>
      </gl-collapsible-listbox>
    </gl-form-group>
  </div>
</template>
```

### Custom toggle

Override the default toggle button using the `#toggle` scoped slot. Use the `accessibilityAttributes` slot prop to make sure the component is accessible for keyboard and screen reader users. Ensure the `id` prop is placed on a text container inside the `#toggle` slot. The text container must not be the toggle button itself, due to constraints of the `combobox` role that is applied to the button.
  
```html
<template #toggle="{ accessibilityAttributes: { id, ...accessibilityAttributes } }">
  <button v-bind="accessibilityAttributes">
    <span :id="id">
      // Custom toggle details
    </span>
  </button>
</template>
```

```html
<!-- live-example -->
<script>
  export default {
    data() {
      return {
        items: [
          { value: 'jane-doe', text: 'Jane Doe' },
          { value: 'christine-calamary', text: 'Christine Calamary' },
          { value: 'spenser-griffin', text: 'Spenser Griffin' },
        ],
        selected: 'jane-doe',
      }
    },
  };
</script>

<template>
  <div style="min-height: 12rem;">
    <gl-collapsible-listbox
      :items="items"
      v-model="selected"
    >
      <template #toggle="{ accessibilityAttributes: { id, ...accessibilityAttributes } }">
        <button
          class="gl-rounded-action gl-border-none gl-p-2 gl-bg-strong"
          v-bind="accessibilityAttributes"
        >
          <span class="gl-sr-only" :id="id">
            {{selected}}
          </span>
          <gl-avatar :size="32" :entity-name="selected" />
        </button>
      </template>
    </gl-collapsible-listbox>
  </div>
</template>
```

### Opening the listbox

Listbox will open on toggle button click (if it was previously closed).
On open, `GlCollapsibleListbox` will emit the `shown` event.

### Closing the listbox

The listbox is closed by any of the following:

- pressing <kbd>Esc</kbd>
- clicking anywhere outside the component
- selecting an option in single-select mode

After closing, `GlCollapsibleListbox` emits a `hidden` event.

#### Closing the listbox programmatically

It's possible to close the listbox programmatically by calling the `closeAndFocus` or `close` methods
on the listbox via a template ref. For example:

```js
this.$refs.listbox.closeAndFocus()
```

The `closeAndFocus` method is preferred in most cases, especially when triggering it from some action
within the listbox, because it will move focus back to the listbox trigger.

The `close` method should only be used when closing the listbox and moving the focus to some other element.
For example, closing the listbox to focus a newly revealed text input.

### Selecting items

Set the `v-model` on the listbox to have 2-way data binding for the selected items in the listbox.
Alternatively, you can set `selected` property to the array of selected items
`value` properties (for multi-select) or to the selected item `value` property for a single-select.
On selection the listbox will emit the `select` event with the selected values.

### Resetting the selection

`GlCollapsibleListbox` can render a reset button if the `headerText` and
`resetButtonLabel` props are provided.
When clicking on the reset button, a `reset` event is emitted. It is the consumer's responsibility
to listen to that event and to update the model as needed.

### Setting listbox options

Use the `items` prop to provide options to the listbox. Each item can be
either an option or a group. Below are the expected shapes of these
objects:

```typescript
type Option = {
  value: string | number | null
  text?: string
}

type Group = {
  text: string
  options: Array<Option>
  textSrOnly?: boolean
}

type ItemsProp = Array<Option> | Array<Group>
```

#### Options

The `value` property of options must be unique across all options
provided to the listbox, as it's used as a primary key.

The optional `text` property is used to render the default listbox item
template. If you want to render a custom template for items, use the
`list-item` scoped slot:

```html
<gl-collapsible-listbox :items="items">
  <template #list-item="{ item }">
    <span class="gl-flex gl-items-center">
      <gl-avatar :size="32" class-="gl-mr-3" />
      <span class="gl-flex gl-flex-col">
        <span class="gl-font-bold gl-whitespace-nowrap">{{ item.text }}</span>
        <span class="gl-text-subtle"> {{ item.secondaryText }}</span>
      </span>
    </span>
  </template>
</gl-collapsible-listbox>
```

#### Groups

Options can be contained within groups. A group has a required `text`
property, which must be unique across all groups within the listbox, as
it's used as a primary key. It also has a required property `items` that
must be an array of options. Optionally, you can hide the group heading
by setting `textSrOnly` to `true`. In this case the `text` is only used
for accessibility purposes.

Groups can be at most one level deep: a group can only contain options.
Options and groups _cannot_ be siblings. Either all items are options,
or they are all groups.

To render custom group labels, use the `group-label` scoped slot:

```html
<gl-collapsible-listbox :items="groups">
  <template #group-label="{ group }">
    {{ group.text }} <gl-badge size="sm">{{ group.options.length }}</gl-badge>
  </template>
</gl-collapsible-listbox>
```

#### Dealing with long option texts

- Some options might have long non-wrapping text that would overflow the dropdown maximum width. In
  such cases, it's recommended to override the `#list-item` slot and to truncate the option text using
  `GlTruncate`.
- If the toggle text reflects the selected option text, it might be necessary to truncate
  it too by overriding the `#toggle` slot.

### Search

To filter out items by search query set `searchable` property to `true`.
Listbox will render the search field and will emit `search` event with the `searchQuery` value.
Performing the search is the responsibility of the listbox's consumer component.
When performing search set `searching` prop to `true` - this will render the loader
while search is in progress instead of the list of items.
To update content of the listbox, toggle the `searching` property
and update the `items` property with a new array. Be sure to debounce (or
similar) the `search` event handler to avoid rendering stale results.
To improve the accessibility, provide the `search-summary-sr-only` scoped slot
with a number of found search results text, alternately, you can pass a plural translate function.
An example of the plural translate function can be found [the GitLab Docs internationalization section](https://docs.gitlab.com/ee/development/i18n/externalization.html#plurals)
Screen reader will announce this text when the list is updated.

```html
<gl-collapsible-listbox :items="items" searchable>
  <template #search-summary-sr-only>
    5 users found
  </template>
</gl-collapsible-listbox>
```

### Split dropdown

See [button group documentation](/components/button-group).

### GlCollapsibleListbox

<story-viewer component="base-dropdown-collapsible-listbox" title="GlCollapsibleListbox" view-mode="docs"></story-viewer>

## Reference

- Why use a listbox for sorting? After much [discussion](https://gitlab.com/gitlab-org/gitlab/-/issues/346804#note_749546915), we determined that this route provides the most consistent implementation while aligning with a user's goal of selecting an option (in this case the option for how they'd like to sort) and having the selected choice reflected in the UI and the control itself.
- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute

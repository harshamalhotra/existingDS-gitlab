---
name: Disclosure
description: A disclosure widget includes a button that opens a panel of links or actions.
related:
  - dropdown-combobox
  - button
  - accordion
---

## Examples

<story-viewer component="base-dropdown-disclosure-dropdown" title="Simple disclosure"></story-viewer>

<story-viewer component="base-dropdown-disclosure-dropdown" story="more-actions-dropdown" title="More actions dropdown"></story-viewer>

<story-viewer component="base-dropdown-disclosure-dropdown" story="custom-list-item" args-placement="left" title="Disclosure with custom list item"></story-viewer>

<story-viewer component="base-dropdown-disclosure-dropdown" story="groups" title="Disclosure with groups"></story-viewer>

<story-viewer component="base-dropdown-disclosure-dropdown" story="custom-groups-items-and-toggle" title="Disclosure with complex content"></story-viewer>

<note>Disclosure styles will be updated to match the UI kit.</note>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-14&mode=design)

## Structure

<figure-img alt="Numbered diagram of a disclosure widget structure" label="Disclosure widget structure" src="/img/dropdown-disclosure-structure.svg"></figure-img>

1. **Button**: Triggers the panel to open or close.
1. **Panel**: Wraps the content.
1. **Action**: Button or link styled as an option.
1. **Scrim**: Gradient overlay when items overflow the panel.
1. **Header** (optional): Provides more context for the actions.
1. **Custom content** (optional): Custom content included in a slot.

## Guidelines

### When to use

- Use a disclosure dropdown to toggle a panel of links (`<a>`) or actions (`<button>`) that can be performed in a specific context, including the [navigation sidebar](/patterns/navigation-sidebar).
- In the instance where a combination of links and actions are present in the dropdown, a disclosure is preferred over other dropdown options that are more semantically prescriptive.

### When not to use

- If the options within the panel are selectable instead of directly performing an action, refer to the [combobox](/components/dropdown-combobox) component.
- If a user is selecting a single text option from a group of options within a [form](/patterns/forms), consider using a [select](/components/select), [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.
- With two or fewer links or actions, consider showing them directly as a [button group](/components/button/#group) if appropriate for your context. A disclosure dropdown can help free up space in the UI, but it can also add unnecessary steps to access options. For example, if the only options are **Edit** and **Delete**, you could use a group of [icon-only buttons](/components/button/#icon-only-buttons).
- If there is only ever a single option, display that option directly. For example, if the only option is **Edit**, use a [button](/components/button) instead.
  - An exception applies when a [destructive action](/patterns/destructive-actions) is the only option in a dropdown, either to deliberately increase friction against accidental clicks or to avoid competing with a primary action.

### Trigger button variants

A [button](/components/button) that triggers a dropdown panel comes in a few variants to fit different situations.

- **Dropdown button**: A dropdown button has a [chevron-down](https://design.gitlab.com/product-foundations/iconography-directory?q=~chevron-down) icon to the right of the text label to indicate it will toggle additional content.
- **Split dropdown button**: A split dropdown button is a [button](/components/button) with two segments. The left text button is for the most common option and an attached dropdown button to the right opens a panel with additional options.
- **Icon dropdown**: An icon button, like one that uses the vertical or horizontal [ellipsis icons](https://design.gitlab.com/product-foundations/iconography-directory?q=elli), functions similarly to other trigger buttons with the only difference being only an icon label with no text.

### Size

- **Trigger**: The [button](/components/button) width is determined by its available properties.
- **Panel**: Has a minimum and maximum width and a maximum height to keep content near the trigger button and to keep panels consistent throughout the UI. The height of the panel is initially set to the height of its content (dynamic height) when less than the maximum, but can optionally be set to always use a fixed height.

### Behavior

- By default, the panel opens below the trigger button and is aligned to the left of it.
- The panel can be positioned to the right of the trigger button if it makes more sense in the layout.
- When there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger button.
- When the panel boundaries don't allow it to flip to the other side of the trigger button because there isn't enough space, it shifts along the x-axis.
- There will always be some padding between the vertical edges of the panel and the vertical edges of the viewport.
- The tip of the panel points at the trigger and is center-aligned with it by default.
- If the content within the panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- When a link is selected the user is taken to the destination.
- When an action is selected that impacts the current view, the panel is closed and the action performed.
- When an action option is selected that causes a page refresh or other change of context the panel returns to a closed state.
- All panels can be closed by clicking outside of them, using the <kbd>Esc</kbd> key, or by focus moving to an element outside of the component.
- A limited amount of options that don't scroll can be fixed at the bottom of a dropdown panel.

### Content

- Text should be concise and clearly indicate the link destination or action it performs.
- Destructive actions should be the last of the available options.

### More actions dropdown

Position the more actions button on the outer edge as an exception to the [standard button order](/components/button#Order).

Use the `ellipsis_v` icon, 'More actions' for the tooltip text, and use `aria-label="More actions for ..."` to provide a contextual label.

### Accessibility

- See the [WAI-ARIA Disclosure (Show/Hide) documentation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) for more details.
- For simple disclosures, use `aria-label` to provide a contextual label. For more details, see [WCAG 4.1.2 Name, Role, Value (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html). For example:

```html
<gl-button aria-label="More actions for ..." title="More actions" v-gl-tooltip icon="ellipsis_v" />
```

## Code reference

A disclosure dropdown is a button that toggles a panel containing a list of actions and/or links. Use
[this decision tree](https://design.gitlab.com/components/dropdown-overview#when-to-use-either-component)
to make sure this is the right dropdown component for you.

```html
<gl-disclosure-dropdown toggle-text="More actions" :items="items" />
```

### Icon-only disclosure dropdown

Icon-only disclosure dropdowns must have an accessible name.
You can provide this with the combination of `toggleText` and `textSrOnly` props.

Optionally, you can use `no-caret` to remove the caret and `category="tertiary"` to remove the border.

```html
<gl-disclosure-dropdown
  icon="ellipsis_v"
  toggle-text="More actions"
  text-sr-only
  category="tertiary"
  no-caret
/>
```

### Opening the disclosure dropdown

Disclosure dropdown will open on toggle button click (if it was previously closed).
On open, `GlDisclosureDropdown` will emit the `shown` event.

### Closing the disclosure dropdown

The disclosure dropdown is closed by any of the following:

- pressing <kbd>Esc</kbd>
- clicking anywhere outside the component
- clicking the action or link inside the dropdown

Before closing, `GlDisclosureDropdown` emits a `beforeClose` event with these properties:

1. `originalEvent` – the event that triggered closing of the dropdown
2. `preventDefault` – a method which will prevent closing of the dropdown

An example of using this event to prevent the dropdown from closing:

```html
<gl-disclosure-dropdown @beforeClose="$event.preventDefault()" />
```

Note that this method will also prevent the dropdown from closing even if the trigger button is clicked.

You can use the `preventDefault` to filter out events that are causing undesired dropdown closing:

```html
<gl-disclosure-dropdown
  @beforeClose="(e) => { ignoreElement.contains(e.originalEvent.target) && e.preventDefault() }"
/>
```

After closing, `GlDisclosureDropdown` emits a `hidden` event.

#### Closing the disclosure dropdown programmatically

It's possible to close the disclosure dropdown programmatically by calling the `closeAndFocus` or
`close` methods on the disclosure dropdown via a template ref. For example:

```js
this.$refs.disclosureDropdown.closeAndFocus();
```

The `closeAndFocus` method is preferred in most cases, especially when triggering it from some action
within the disclosure dropdown, because it will move focus back to the disclosure dropdown trigger.

The `close` method should only be used when closing the disclosure dropdown and moving the focus to
some other element. For example, closing the disclosure dropdown to focus a newly revealed text input.

### Setting disclosure dropdown items

Use the `items` prop to provide actions/links to the disclosure dropdown. Each
item can be either an item or a group. For `Item`s, provide an `href` or `to` string or
[`to` location descriptor object](https://v3.router.vuejs.org/api/#to) to
make them render as links. Otherwise, they will be buttons. Provide an `action`
function to items to be called when they are pressed, or, listen for the
`action` event on the top-level component. Both will receive the given item as
an argument.
A [validation error](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/6cbff4f908b429cc01f17a4cc2868e881db1aa31/src/components/base/new_dropdowns/disclosure/utils.js#L1)
will be triggered if neither field is set.

Below are the expected shapes of these objects:

```typescript
type Item = {
  // The item text
  text: string;
  // href link
  href?: string;
  // or, a Vue router link with `to`
  to?: string;
  // Item action
  action?: (item: Item) => void;
  // Set of extra attributes applied directly to the element
  extraAttrs?: Object;
  // Additional class/classes applied to the item wrapper
  wrapperClass?: string;
};

type Group = {
  // Name of the group, used as a header
  name?: string;
  // Items of the group
  items: Array<Item>;
  // Set of extra attributes applied directly to the element
  extraAttrs?: Object;
};

type ItemsProp = Array<Item> | Array<Group>;
```

#### Actions/links

The `text` property is used to render the default disclosure dropdown item
template. If you want to render a custom template for items, use the
`list-item` scoped slot:

```html
<gl-disclosure-dropdown :items="items">
  <template #list-item="{ item }">
    <span class="gl-flex gl-items-center gl-justify-between">
      {{item.text}}
      <gl-icon v-if="item.icon" :name="item.icon" />
    </span>
  </template>
</gl-disclosure-dropdown>
```

#### Groups

Actions/links can be contained within groups. A group can have a `name`
property, which will be used as the group header if present.
It also has a required property `items` that must be an array of links/actions.

Groups can be at most one level deep: a group can only contain actions/links.
Items and groups _cannot_ be siblings. Either all items are actions/links,
or they are all groups.

To render custom group labels, use the `group-label` scoped slot:

```html
<gl-disclosure-dropdown :items="groups">
  <template #group-label="{ group }">
    {{ group.name }} <gl-badge size="sm">{{ group.items.length }}</gl-badge>
  </template>
</gl-disclosure-dropdown>
```

To draw a horizontal line that separates two groups, set the `bordered` property.
By default, the border appears above the group. You can change the border position
using the `border-position` property:

```html
<gl-disclosure-dropdown>
  <gl-disclosure-dropdown-group bordered border-position="bottom" :group="group" />
</gl-disclosure-dropdown>
```

#### Miscellaneous content

Besides default components, disclosure dropdown can render miscellaneous content inside it.
In this case the user is responsible for handling all events and navigation inside the disclosure.

#### Dealing with long option texts

- Some options might have long non-wrapping text that would overflow the dropdown maximum width. In
  such cases, it's recommended to override the `#list-item` slot and to truncate the option text using
  `GlTruncate`.
- If the toggle text reflects the selected option text, it might be necessary to truncate
  it too by overriding the `#toggle` slot.

### Split dropdown

See [button group documentation](/components/button-group).

### GlDisclosureDropdown

<story-viewer component="base-dropdown-disclosure-dropdown" title="GlDisclosureDropdown" view-mode="docs"></story-viewer>

## Reference

- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute
- [Link + Disclosure Widget Navigation](https://adrianroselli.com/2019/06/link-disclosure-widget-navigation.html), by Adrian Roselli

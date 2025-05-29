## Usage

The `GlBreadcrumb` component comes with a smart auto-resize feature. When there is not enough space
to show all breadcrumb `items` in a single row, the component moves items into an ellipsis dropdown,
starting with the first one. The last breadcrumb item (which represents the current page) stays
always visible.

### Auto-resize

**Important:** For the auto-resize to function correctly it is necessary that the `GlBreadcrumb`
component itself takes all the horizontal space it can get. How to do this depends on the
CSS `display` mode (block, flex, grid) of its parent element.

**Example:** In a flexbox layout, allow the component to `flex-grow`:

```js
<gl-breadcrumb class="gl-grow" :items="items" />
```

### `items` prop

This component also allows for optional avatars on each item.

`avatarPath` should passed along with `text` and `href` in `items`.
Here is an example of how an item with an avatar should look:

**note:** the component supports passing the property `to` in the list items to enable navigation
through `vue-router`

#### Example

```js
items = [
  {
    text: 'First item',
    href: '#',
    avatarPath: '/avatar.png',
  },
];

<gl-breadcrumb :items="items" />
```

### `size` prop

The size prop determines the size of the breadcrumb component. It accepts the following values:

"sm" (default): Small size
"md": Medium size

Using the default 'sm' size for all page breadcrumbs is considered a best practice
to ensure consistency across the application.

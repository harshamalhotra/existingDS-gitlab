---
name: Link
description: A link is a navigational element that takes a user to another URL, an element within a page, or a file.
related:
  - button
---

## Examples

### Inline Text Link

```html
<!-- live-example -->
<gl-link variant="inline" href="#">This is an inline link</gl-link>
```

### Inline Text Link (external url)

```html
<!-- live-example -->
<gl-link
  variant="inline"
  href="https://example.com"
  target="_blank"
  show-external-icon
>
  I have an arrow character because my target URL is external
</gl-link>
```

### UI Link

```html
<!-- live-example -->
<gl-link href="#">This is a UI link</gl-link>
```

### Meta Link

```html
<!-- live-example -->
<gl-link variant="meta" href="#">This is a meta link</gl-link>
```

### Mention Link

```html
<!-- live-example -->
<gl-link variant="mention" href="#">@anotheruser</gl-link>
```

### Mention Link (current user)

```html
<!-- live-example -->
<gl-link variant="mentionCurrent" href="#">@currentuser</gl-link>
```

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=81916-116837&mode=design)

## Structure

<figure-img alt="Numbered diagram of a link structure" label="Link structure" src="/img/link-structure.svg"></figure-img>

1. **Text**: Specifies or references the link's destination.
1. **Icon** (optional): Indicates the destination is on an external domain.

## Guidelines

### When to use

- A link (anchor `<a>`) element is used as navigation to:
  - A new URL.
  - An element within a page.
  - A file.

### When not to use

- If you are performing an action, like saving, consider using a [button](/components/button) element instead.

### Categories

There are four categories of links in GitLab. Although all links are navigational, those that persist from page to page and guide users through the application – such as those within the [navigation sidebar](/patterns/navigation-sidebar), [breadcrumbs](/components/breadcrumb), and [pagination](/components/pagination) – are described separately, and not included as part of the link component.

1. **Inline text link**: Link that appears within body text, like a paragraph or sentence. In order to distinguish a linked reference from surrounding content, a link within body copy must be underlined. Inline text links can be user-generated, for example, referencing an issue with "#3126" in the markdown editor of a merge request description where the link's primary function is linking to the referred issue. They can also be in text generated from a source file, for example, a "learn more about pipelines" link in the paragraph of an empty state template.
1. **User interface (UI) link**: Standalone link in the UI. User interface links are not user-generated. For example, a link in the system notes that compares the changes in a new commit to a previous one. The placement, color, and actionable text all provide link affordance. A [link button](/components/button#variants) has a similar style, but is used for an action and not a link.
1. **Meta link**: Standalone text or text within a short string of system-generated content may contain multiple meta links. Meta links share a meaningful datapoint or reference, and are only links secondarily. For example, the primary function of including "%15.8" in a string is to communicate the milestone, though it can also link to more information about it.
1. **Mention**: Indicates when a user is "@" mentioned in the content. The username links to the user's profile. A mention link can be within body or meta content.

### Appearance

- An inline text link should always be underlined to distinguish it from surrounding text, regardless of formatting applied (bold, italic, or monospace) or parent text element (heading, paragraph, list, or code).
- A UI link has no underline at rest, but is underlined for hover, focus, and active states.
- Meta links represent a wide variety of content and their style adapts for each context. Meta links don't have an underline at rest, but are underlined for hover, focus, and active states. Similar to inline links, they appear this way regardless of formatting applied (bold, italic, monospace). Because of the available styling, which can appear similar to unlinked text, it's critical to ensure that users understand what is linked and what isn't in each context. Additionally, similar types of linked meta content should be styled the same throughout the product.
- A mention link has a background color that depends on whether it's for the current user or another user. When embedded in body text and on hover the text is underlined.
- Although a UI or meta link can have a style similar to a [link button](/components/button#variants), select the correct component based on meaning rather than by appearance alone. See [When to use](#when-to-use) above.
- All links have a visible focus state. See [Accessibility](#accessibility) notes below.

### Behavior

- A link opens the destination in the same window by default. By doing so a user can still choose to open the link in a new tab or window, whereas using `target="_blank"` removes all other methods.
- A link can use `target="_blank"` if it's intentional that the user cannot use the browser's back function to return to the reference, and that it's clear to the user they are leaving the current experience.
- Native controls to open a link in a new tab or window aren't suppressed.
- When linking to GitLab documentation, follow the [formatting help content](/patterns/contextual-help/#formatting-help-content) guidelines.
- Text [truncation](/product-foundations/layout#truncation) guidelines also apply to links.

### Content

- A user should be able to predict where they will go upon click.
- Avoid vague text such as "click here," URLs as link text, or creating a link from more than just a short sentence. Link texts should be clear and meaningful. For example, _Before reviewing a MR, review the [best practices](/accessibility/best-practices/)_.
- If a link is at the end of a sentence, the period should not be part of the link.
- An external link should use the external link icon. The icon should use `aria-label="(external link)"`, or similar, to communicate the purpose to screen reader users. For example, <a href="#" class="gl-link gl-italic">Learn more about Kubernetes <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="gl-align-text-bottom" role="img" aria-label="(external link)">
  <path fill="#000000" fill-rule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" style="fill: currentColor;"></path></svg></a>.

### Accessibility

For all links:

- All links and their states must have a contrast ratio of at least 4.5:1 against the background color ([Understanding WCAG SC 1.4.3 Contrast Minimum](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)).
- A link must have a visible focus state ([Understanding WCAG SC 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)).
- As noted above, links open in the same window by default. Forcing a link to open in a new tab or window can be an unexpected change of context for some users. Additionally, it may prevent the use of a browser's back capability, making it difficult to return to the previous context. See [Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html). Also, consider these articles: [Link Targets and 3.2.5](https://adrianroselli.com/2020/02/link-targets-and-3-2-5.html), [External links: In or Out](https://www.digitala11y.com/external-links-in-or-out/).

For inline text links:

- Color can't be the only way to visually distinguish a link. The link color doesn't have at least a 3:1 contrast ratio from surrounding text, therefore, an underline is used for all states as a visual means to indicate it. See [Understanding WCAG SC 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html).
- Since an underline is used as a required graphical element to distinguish a link, it must have at least a 3:1 contrast ratio against the background color for all states. See [Understanding WCAG SC 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG21/#non-text-contrast).

For user interface links:

- The placement and text of a link should identify itself as such in a predictable way.
- An underline is not required at rest, but present for hover.
- Consecutive interface links should have sufficient space between them so that they appear as separate elements and not one continuous sentence or link.

For meta links:

- As mentioned in the [categories](#categories) section, the main purpose of a meta link is first and foremost as content. It's not necessary for the text to be linked, but it is so that a user could get more information if desired. Therefore, the visual emphasis that would come from an underline is not used, even if the link is within a string of unlinked text. An underline is present on hover. This is an intentional decision to visually simplify certain sections in the UI that contain multiple meta links and may change in the future. More discussion and consideration can be found [this issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1266).

For mention links:

- When the link is within body copy, follow the above guides for inline text links. The background color and/or `@` prefix don't qualify for sufficient contrast or visual distinction in this context.
- When the link is used as meta information, that is, first and foremost as content where linking to a user isn't necessary or consequential, then follow the above guides for meta links.

## Code reference

Use `<gl-link>` to render links. It can render standard `<a>` elements,
and also Vue Router and Nuxt links.

```html
<gl-link href="#foo">Link</gl-link>
```

### External link indicator

The `show-external-icon` prop displays a "↗" character after the link text to indicate external links.
This feature is available for **inline**, **UI (default)**, and **meta** variants only.

```html
<!-- External link with indicator -->
<gl-link href="https://kubernetes.io/docs" target="_blank" show-external-icon>
  Kubernetes documentation
</gl-link>
<!-- Renders as: Kubernetes documentation ↗ -->

<!-- Different variants with external indicator -->
<gl-link variant="inline" href="https://prometheus.io" target="_blank" show-external-icon>
  Learn more about Prometheus monitoring
</gl-link>

<gl-link variant="meta" href="https://docker.com" target="_blank" show-external-icon>
  Docker Hub
</gl-link>
```

**Requirements for the external icon to appear:**

- `show-external-icon` prop must be `true`.
- `href` prop must be provided.
- `target="_blank"` must be set.
- Destination domain must be [determined as external](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/b5e4b0b4241455ed0fa45e0f6f5b83a3b76755ff/packages/gitlab-ui/src/directives/safe_link/safe_link.js#L12).
- Link variant must be `inline`, `meta`, or default (UI).

**Note:** The external icon is not available for `mention` or `unstyled` variants as these have
specific design purposes that don't align with external link indication.

### Link type

By specifying a value in the `href` prop, a standard link (`<a>`) element will be rendered. To
generate a `<router-link>` instead, specify the route location via the `to` prop.

#### Router links

Router links support various additional props.

If your app is running under [Nuxt.js](https://nuxtjs.org), the
[`<nuxt-link>`](https://nuxtjs.org/api/components-nuxt-link) component will be used instead of
`<router-link>`. The `<nuxt-link>` component supports all the same features as `<router-link>` (as
it is a wrapper component for `<router-link>`) and more.

##### `to`

- type: `string | Location`
- required to generate a `<router-link>`

Denotes the target route of the link. When clicked, the value of the `to` prop will be passed to
`router.push()` internally, so the value can be either a string or a location descriptor object.

```html
<!-- Literal string -->
<gl-link to="home">Home</gl-link>
<!-- Renders to -->
<a href="home">Home</a>

<!-- Omitting `v-bind` is fine, just as binding any other prop -->
<gl-link :to="'home'">Home</gl-link>

<!-- Same as above -->
<gl-link :to="{ path: 'home' }">Home</gl-link>

<!-- Named route -->
<gl-link :to="{ name: 'user', params: { userId: 123 } }">User</gl-link>

<!-- With query, resulting in `/register?plan=private` -->
<gl-link :to="{ path: 'register', query: { plan: 'private' } }">Register</gl-link>

<!-- Render a non-router link by omitting `to` and specifying an `href` -->
<gl-link href="/home">Home</gl-link>
```

##### `replace`

- type: `boolean`
- default: `false`

Setting `replace` prop will call `router.replace()` instead of `router.push()` when clicked, so the
navigation will not leave a history record.

```html
<gl-link :to="{ path: '/abc'}" replace></gl-link>
```

##### `active-class`

- type: `string`
- default: `'router-link-active'` (`'nuxt-link-active'` when using Nuxt.js)

Configure the active CSS class applied when the link is active. Note the default value can also be
configured globally via the `linkActiveClass`
[router constructor option](https://router.vuejs.org/api/#linkactiveclass).

With components that support router links (have a `to` prop), you will want to set this to the class
`'active'` (or a space separated string that includes `'active'`) to apply Bootstrap's active
styling on the component when the current route matches the `to` prop.

##### `exact-active-class`

- type: `string`
- default: `'router-link-exact-active'` (`'nuxt-link-exact-active'` when using Nuxt.js)
- availability: Vue Router 2.5.0+

Configure the active CSS class applied when the link is active with exact match. Note the default
value can also be configured globally via the `linkExactActiveClass`
[router constructor option](https://router.vuejs.org/api/#linkexactactiveclass).

With components that support router links (have a `to` prop), you will want to set this to the class
`'active'` (or a space separated string that includes `'active'`) to apply Bootstrap's active
styling on the component when the current route matches the `to` prop.

### Links with `href="#"`

Typically `<a href="#">` will cause the document to scroll to the top of page when clicked.
`<gl-link>` addresses this by preventing the default action (scroll to top) when `href` is set to
`#`.

If you need scroll to top behaviour, use a standard `<a href="#">...</a>` tag.

### Link disabled state

Disable link functionality by setting the `disabled` prop to true.

```html
<gl-link href="#foo" disabled>Disabled Link</gl-link>
```

Disabling a link handles stopping event propagation, preventing the default action from occurring,
and removing the link from the document tab sequence (`tabindex="-1"`).

### Security

This component implements a few security measures to make it as safe as possible by default.
See [SafeLinkDirective docs] for more details.

#### Linking to an unsafe URL

If you're trying to link to a location considered unsafe by the `SafeLink` directive (when rendering
a download link with a [Data URL] for example), you'll need to bypass the `href` attribute's
sanitization. This component exposes the `is-unsafe-link` prop for that purpose.

<note>Warning! Only disable URL sanitization when absolutely necessary.</note>

```html
<gl-link
  is-unsafe-link
  download="file.txt"
  href="data:text/plain;charset=utf-8,GitLab%20is%20awesome"
>
  Download
</gl-link>
```

### GlLink

<story-viewer component="base-link" title="GlLink" view-mode="docs"></story-viewer>

[SafeLinkDirective docs]: https://design.gitlab.com/storybook?path=/docs/directives-safe-link-directive--default
[Data URL]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs

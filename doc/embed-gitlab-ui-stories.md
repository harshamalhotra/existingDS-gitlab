# Embed GitLab UI stories

> **Note:** The approach documented here assumes that the stories you are embedding have been
> migrated to the Component Story Format (CSF). While it is technically possible to embed non-CSF
> stories, the result will most likely not look right and you might prefer to follow the
> [legacy approach](./component-examples.md) for including component examples instead.
> If you'd like to help migrate stories to CSF, please head to the [migration epic](https://gitlab.com/groups/gitlab-org/-/epics/5651).

GitLab UI stories can be embedded inside component docs pages to provide usage examples or to expose
technical documentation. Stories support two view modes than we can both leverage in Pajamas:

- `story` is the standard view mode where a bare canvas is rendered. In GitLab UI, this is typically
  used to develop a component's variants in isolation. In Pajamas, we can leverage this view mode to
  include an example right in the component's documentation.
- `docs` is a special view mode that combines a component's stories with a props table as well as
  some documentation written as Markdown files in GitLab UIs. This can be useful to provide a
  playground to experiment with a component's props, or simply to expose its technical documentation.

## Embedding component examples in a docs page

To include examples with the `story` view mode, use the `story-viewer` component anywhere in a
component's Markdown docs file.

The component requires the component's ID to be passed as the `component` prop:

```markdown
<story-viewer component="base-alert"></story-viewer>
```

Optionally, a specific story can be rendered by providing the story's ID as the `story` prop:

```markdown
<story-viewer component="base-alert" story="variants"></story-viewer>
```

If omitted, `story` defaults to `'default'`, which is the most commonly used story ID.

To find a story's ID and its corresponding component's ID, open it in GitLab UI's Storybook.
The component ID is whatever is after `/story/` or `/docs/` and before the `--` in the URL's `path`
parameter. The story ID is what after the `--`. Consider the following URL for example:

```plaintext
https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/base-alert--default
```

The component ID is `base-alert` and the story ID is `default`.

### Custom title

Stories included in Pajamas docs pages are rendered in a card where the title defaults to the story
ID. To use a custom title, pass it as the `title` prop:

```markdown
<story-viewer component="base-alert" title="My custom title"></story-viewer>
```

### Storybook controls

Storybook's [controls](https://storybook.js.org/docs/vue/essentials/controls) provide a way to
interact with components' props. The `story-viewer` can pass controls' values to embedded stories.
This is useful when we need to demonstrate a component's use cases without adding a full-blown story
to GitLab UI. Controls must be passes as props to `story-viewer`. The prop name is the control's
kebab-cased name, prefixed with `args-`. For example, to set `GlToggle`'s `isLoading` control to
`true`, you would provide the `args-is-loading` prop like so:

```html
<story-viewer component="base-toggle" :args-is-loading="true"></story-viewer>
```

## Embedding GitLab UI docs pages

To include GitLab UI docs pages, list component IDs in the frontmatter's `component` section. The docs
pages will be available in the component's **Implementation** tab. Multiple story IDs can be
provided, docs pages will be rendered one after the other in the **Implementation** tab.

```markdown
---
components:
  - base-alert
---
```

## Embed from another GitLab UI instance

By default, Pajamas attempts to import stories from GitLab UI's [hosted Storybook](https://gitlab-org.gitlab.io/gitlab-ui/).
This means that the stories you are embedding need to have been merged in GitLab UI's `main` branch
and deployed to the live app. If you'd like to import stories from some other GitLab UI instance,
provide the `GITLAB_UI_URL` variable when running Pajamas. This can be useful if you are building
new stories locally and want to see how they would look once imported in Pajamas. Here's an example
with a local GitLab UI instance running at `http://localhost:9001`:

```sh
GITLAB_UI_URL=http://localhost:9001 yarn start
```

## Removing examples

After replacing a component's examples (from the `/examples/` directory) with stories, be sure to remove the examples folder for that component.

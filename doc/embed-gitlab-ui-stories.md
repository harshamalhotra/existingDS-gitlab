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

To include examples with the `story` view mode, use the `[[Story:]]` short code anywhere in a
component's Markdown docs file.

The shortcode requires a story ID to be passed after the semi-colon:

```markdown
[[Story:base-alert--default]]
```

To find a story's ID, open it in GitLab UI's Storybook. The ID is whatever is after `/story/`
or `/docs/` in the URL `path` parameter. Consider the following URL for example:

```plaintext
https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/base-alert--default
```

The story ID is `base-alert--default`.

### Custom title

Stories included in Pajamas docs pages are rendered in a card where the title defaults to the story
ID. To use a custom title, append a vertical bar (`|`) to the story ID in the shortcode and add your
title after it:

```markdown
[[Story:base-alert--default|My custom title]]
```

## Embedding GitLab UI docs pages

To include GitLab UI docs pages, list story IDs in the frontmatter's `stories` section. The docs
pages will be available in the component's **Implementation** tab. Multiple story IDs can be
provided, docs pages will be rendered one after the other in the **Implementation** tab.

```markdown
---
stories:
  - base-alert--default
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

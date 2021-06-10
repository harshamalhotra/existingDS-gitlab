# Component examples

Component examples are a handy way of demonstrating how a GitLab UI component implements Pajamas
specifications. They can be included in documentation pages and can be browsed through in the
**Implementation** tab when properly linked to a page.

## Writing examples

All examples are located in the `/examples/` directory. To create examples for
a new component, do the following:

1. Create a new directory in `/examples/`. It doesn't matter how deep in the files structure the
   new directory is, as long as it descends from `/examples/`. A good practice would be to mimick
   GitLab UI's files structure, but it is not a requirement. The directory name should be the GitLab UI
   component's name in snake_case, without the `Gl` prefix. For example, you would create a
   `broadcast_message/` directory for the `GlBroadcastMessage` component.
2. In the new directory, create `.vue` files for all of your examples. Examples are basic Vue Single
   File Components. By convention, those files should be named like
   `<component_name>.<example_id>.example.vue`, for example `broadcast_message.basic.example.vue`.

   - You don't need to explicitly import/register GitLab UI components in examples as they are globally available.
   - Example templates are visible in the **Implementation** tab. Keep in mind that, while you can use `<script>` tags in your examples, their content will not be visible in the source panel. Thus, try to rely on the `<template>` as much as possible to make examples more relevant.

3. Create an `index.js` file in the new directory. This is where you'll register all of your
   examples to make them available in the docs. Here's how this file should look:

```javascript
// Import all of your examples at the top
import MyComponentDefaultExample from './my_component.default.example.vue';

export default [
  {
    // The example group's name, you can add more groups to better organize examples
    name: 'Basic',

    items: [
      {
        // Give your example an ID. Keep this unique across all examples
        id: 'my-component-default',

        // The name will appear in the examples selector in the Implementation tab
        name: 'Default',

        // The example component as imported at the top
        component: MyComponentDefaultExample,
      },
    ],
  },
];
```

You should now be ready to use your examples.

If you're adding to an existing set of examples, just create new `.vue` files and update the
`index.js` file in the appropriate directory.

## Using examples in docs

Component examples can easily be included in docs pages thanks to the `[[Example:<component_id>]]`
shortcode. Simply replace `<component_id>` with the ID that's in the `index.js` entry file. For
example, with the code snippet above, the ID is `my-component-default`, so you would include the
example with `[[Example:my-component-default]]`.

## Enabling the examples selector

To enable the examples selector in a page's **Implementation** tab, add the component's name to the
page's frontmatter, in the `vueComponents` section. For example, to associate `GlBroadcastMessage`'s
examples to `broadcast-message.md`, you would update the frontmatter as follows:

```markdown
---
name: Broadcast message
vueComponents:
  - GlBroadcastMessage
---
```

## FAQ

### Why am I seeing similar examples in GitLab UI's repository?

You might have noticed that GitLab UI also contains component examples, and that most of them are
identical to the ones in this repo. That's because we've started migrating GitLab UI's examples to
`design.gitlab.com`. We will eventually start removing GitLab UI examples altogether. From now on,
please write all examples here in `design.gitlab.com`. At the moment, the best place to read about
this decision in this GitLab UI issue: https://gitlab.com/gitlab-org/gitlab-ui/-/issues/978.

### I have created some examples in GitLab UI and want to move them to design.gitlab.com, what are my options?

Since the API for writing examples in `design.gitlab.com` is the same as in GitLab UI, migrating
examples should be as easy as moving the `.example.vue` files to the appropriate directory, and
making sure they are loaded in the corresponding `index.js` file.

You can also use [migrate-gitlab-ui-examples](https://gitlab.com/pgascouvaillancourt/migrate-gitlab-ui-examples),
a small CLI tool that does the migration for you in your local environment. When using this, make
sure to pull the latest changes from GitLab UI and `design.gitlab.com` locally.

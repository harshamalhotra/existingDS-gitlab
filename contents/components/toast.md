---
name: Toast
description: A toast displays a short system message as a result of a user's action.
related:
  - alert
  - modal
  - popover
  - tooltip
---

## Examples

<story-viewer component="base-toast" title="Toast" iframe-padding="1rem 1rem 120px 1rem"></story-viewer>

<story-viewer component="base-toast" story="with-long-content" title="With long content" args-action="false" iframe-padding="1rem 1rem 240px 1rem"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-139&mode=design)

## Structure

<figure-img alt="Numbered diagram of a toast structure" label="Toast structure" src="/img/toast-structure.svg"></figure-img>

1. **Container**: Wraps the content.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Action** (optional): A single text action is available, but not recommended because it creates [accessibility](#accessibility) barriers. Consider [alternative patterns](#guidelines) for actionable notifications.
1. **Dismiss button**: Removes the toast for a user.

## Guidelines

### When to use

- Provide a contextual message based on a user's action in the same view the action took place.

### When not to use

- If you need to communicate an error to a user, consider using a [danger or warning alert](/components/alert#variants) instead.
- If there's a page refresh, or a message needs to be communicated after a user visits a new page, consider using an [alert](/components/alert) instead.
- If a user needs to perform a follow‑up action (for example, "Undo" or "View details"), consider using a [modal](/components/modal), an [in-page alert](/components/alert#placement), or a persistent contextual action.
- If the action is irreversible, consider using a [modal](/components/modal) instead.

### Behavior

- A toast appears with an ease-in animation from the bottom of the viewport after a user's action.
- A toast auto-dismisses after a short interval.
- A user can dismiss the toast by clicking the “dismiss” icon button.

### Content

- The message should be a concise full sentence that ends with a period.

### Placement

- Centered above all content at the bottom of the viewport for smaller breakpoints and bottom left of the viewport for larger breakpoints.
- Multiple toasts stack vertically from top to bottom with the oldest on top.

### Accessibility

- Auto-dismiss helps ensure that a toast works well for a screen reader or keyboard user, since they can listen to the announcement or continue navigating without needing to tab through many elements just to dismiss it.
- Avoid using actions in a toast. Because a toast is added at the end of the DOM, it can be difficult for a screen reader or keyboard user to reach it before the timer expires or without a significant number of tab stops. Without reliable focus management, a user also can’t easily return to their original place, which can create a loss of context. These challenges can make actions in a toast unreliable and inaccessible.

## Code reference

### GlToast

Toasts are used to display system messages. The messages are short and straightforward. It may
contain a dismiss button, and an action button depending on the situation.

#### Using the plugin

In order to use the plugin, it needs to be included in your application with `Vue.use`.

```js
// myApp.js

import { GlToast } from '@gitlab/ui';

// Note, this has to be done before `Vue.new()`
Vue.use(GlToast);
```

Once included in your application, the toast plugin is globally available.

```js
// myComponent.vue

this.$toast.show('Hello GitLab!');
```

Below is an example with options

```js
// myComponent.vue

this.$toast.show('This is a toast with an option.', {
  action: {
    text: 'Undo',
    onClick: () => { ... },
  },
});
```

##### Options

Below are the options you can pass to create a toast

| **Option**    | **Type**      | **Default** | **Description**                          |
| ------------- | ------------- | ----------- | ---------------------------------------- |
| autoHideDelay | Number        | 5000        | Display time of the toast in millisecond |
| action        | Object        | close       | Add single actions to toast              |
| toastClass    | String, Array | 'gl-toast'  | Custom css class name of the toast       |
| onComplete    | Function      | null        | Trigger when toast is completed          |

<story-viewer component="base-toast" title="GlToast" view-mode="docs"></story-viewer>

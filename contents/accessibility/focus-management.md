---
name: Focus-management
---

Focus management is setting focus on a page element after a user or system action. Active focus management supports WCAG [Success Criteria 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html), enabling meaningful content navigation and efficient task completion.

Focus management is a core part of web accessibility. Common situations include:

- Updating an interface without a full page reload, such as submitting a form, adding or removing a list item, or submitting a comment.
- Navigating a form with multiple steps.
- Implementing a skip link to jump to content further on the page.
- Auto-focusing an input field for time-sensitive data entry.

## Setting focus deliberately

Set focus deliberately to improve the user experience. Keyboard and mouth stick users benefit when focus is set on the next logical action, avoiding extra <kbd>Tab</kbd> presses. A sip and puff device user can navigate forms and links by triggering <kbd>Tab</kbd> with their breath. A screen reader user hears important cues that a change has occurred.

### What happens when focus is set?

For keyboard users, focus indicates where they are on the page, and helps them predict where pressing <kbd>Tab</kbd> will go next. This becomes more useful as the number of focusable elements increases.

For screen reader users, the focused element's text is read aloud. This lets users know their form was submitted or their comment was received. Screen reader users depend on these verbal updates because they can't always see visual changes or may experience them differently.

### What happens when focus is lost?

Focus is lost when the focused element is removed from the document object model (DOM). The browser then decides where focus should be applied the next time a user presses <kbd>Tab</kbd>. Some browsers apply focus to the next interactive element. Others reset focus to the end of the DOM, forcing a user to re-orient themselves by tabbing or listening for headings or landmark regions.

### Whose responsibility is it to manage focus?

The short answer is, everyone's! The longer answer is, designers and engineers should work together to identify user flows and interactions that need focus management. Designers [should include annotations](https://docs.gitlab.com/development/contributing/design/#handoff) with their prototypes and make sure engineers have access to these notes during handoff.

## Setting focus when elements are closed

Focus must be returned meaningfully when an element such as a modal dialog or drawer is closed. Usually this is a button further up the page. Returning focus helps a user return to their previous flow. It cues a screen reader user that the element has been closed, and helps them re-orient by reading the button aloud.

## Setting focus on non-interactive elements

A non-interactive element like `<div>` or `<li>` doesn't receive keyboard focus by default. Adding `tabindex="-1"` allows an element to receive focus with JavaScript, without placing it in the [tab order](https://www.tpgi.com/using-the-tabindex-attribute/).

The element may need a custom `:focus` style to orient users. Use the Pajamas SCSS `@mixin gl-focus` to match existing components.

```html
<style>
  .gl-example {
    @apply gl-focus;
  }
</style>

<div id="target-elem" class="gl-example" tabindex="-1">Content to be announced or acted upon</div>

<script>
  const target = document.getElementById('target-elem');
  // Screen readers will announce text inside target
  target.focus();
</script>
```

## When to use `autofocus`

The HTML [autofocus attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) can be applied to any interactive element. Browsers typically scroll to the element if it is not in view. Screen readers announce the element's accessible name immediately, skipping contextual clues like the page `<title>` or `<h1>` text.

Autofocus can improve the user experience when immediate attention is called for:

- **Inline editing:** Autofocus the input or textarea that replaces a block of text.
- **Time-sensitive data entry:** Autofocus an input field when users need to enter time-sensitive data like a two-factor authentication token.
- **When additional action is needed:** Autofocus an element that needs additional actions, such as an uploaded image that needs `alt` text or a document that requires a signature.

### Testing autofocus

Test autofocus with live code whenever possible. Autofocus must make a task faster or easier to complete. If it doesn't, consider removing it.

## Related topics

- [Keyboard only](./keyboard-only)

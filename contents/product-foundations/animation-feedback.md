---
name: Feedback animation
---
  
Feedback animation is used to confirm a user interaction with an interactive element.

## Examples

<todo>Add examples from gitlab-ui</todo>

## Guidelines

### When to use

1. State change transitions for interactive elements, such as hover, focus, and active.
1. To confirm a user interaction, including positive or negative feedback.

### Behavior

#### State change transitions

Interactive elements typically have four states: rest, hover, focus, and active. A component's appearance often changes between states as a response to interaction.

When the appearance changes, animate the transition between states using the following combinations.

| State | Example | Duration | Easing |
| --- | --- | --- | --- |
| `hover` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on hover: background and border colors are changing with ease easing" width="200"><source src="/video/feedback-hover.mp4"></video> | `200m` | `$gl-easing-out-cubic` |
| `focus` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on focus: outline ring appears with easeOutCubic easing" width="200"><source src="/video/feedback-focus.mp4"></video> | `200ms` | `$gl-easing-out-cubic` |
| `active` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on click: water rings surround the button" width="200"><source src="/video/feedback-active.mp4"></video> | `500ms` | `$gl-easing-out-cubic` |

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Video showing recommended input focus ring animation." width="300"><source src="/video/feedback-transition-duration-do.mp4"></video><br />Mimic the animation timing of real-world objects. Focus ring animates in 200ms. | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Video showing instant input focus ring animation." width="250"><source src="/video/feedback-transition-duration-dont-1.mp4"></video><video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Video showing slow input focus ring animation." width="250"><source src="/video/feedback-transition-duration-dont-2.mp4"></video><br />Avoid both instant and slow animations. The instant animation in the first example makes the interface feel less lively. The slow animation in the second example makes the interface feel sluggish. |
| <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Video showing recommended input focus ring animation." width="250"><source src="/video/feedback-transition-easing-do.mp4"></video><br />Use cubic-bezier easing for focus feedback to make the animation appear more natural. The input focus ring accelerates quickly and slows as it stops. | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Video showing a linear input focus ring animation." width="250"><source src="/video/feedback-transition-easing-dont-1.mp4"></video><video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animating the text field focus ring with default ease function" width="250"><source src="/video/feedback-transition-easing-dont-2.mp4"></video><br />Avoid using linear or other default easing functions for focus feedback animations. The first example uses linear easing for the focus ring. The second example uses default easing. These transitions make the focus ring feel less lively. |

#### List components state change

Components like navigation, tables, or those that contain a list of options have many interactive elements in close proximity. To prevent perceptions of slow performance, feedback should be fast.

| State | Example | Duration | Easing |
| --- | --- | --- | --- |
| `hover` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Select option list animation on hover: background and border colors are changing with ease easing" width="200"><source src="/video/feedback-list-hover.mp4"></video> | `100m` | `$gl-easing-out-cubic` |
| `focus` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Select option list animation on focus: outline ring appears with easeOutCubic easing" width="200"><source src="/video/feedback-list-focus.mp4"></video> | `100ms` | `$gl-easing-out-cubic` |

#### Loading feedback

Set the button to the loading state following a user action, if the result of the action occurs on the same page without a reload.

<story-viewer component="base-button" title="Loading button" :args-loading="true"></story-viewer>

#### Positive and negative feedback

<todo>Add positive and negative feedback</todo>

### Accessibility

A component should change state instantly when `prefers-reduced-motion` is enabled unless it's essential for the workflow. Instantly changing state doesn't mean no animation. It should be invisible for users, but visible for the browser because some JavaScript actions rely on UI animation, so animation should last `0.01ms`.

```css
@media (prefers-reduced-motion: reduce) {
    .element {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Resources

- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) - Sara Soueidan
- [Focus!](https://a11y-101.com/design/focus) - A11y-101

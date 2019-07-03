---
name: Motion
---

Motion is a tool to help convey important relationships, changes, or transitions between elements. It is used sparingly and intentionally, highlighting the right elements at the right moment.

### Timings

The farther an object travels, the longer the timing is for the animation. Avoid large, full screen animations.

Subtle animations, or objects leaving the screen should take 100 milliseconds. Objects entering the screen, or motion we want to use to direct user attention take 200 milliseconds. Avoid longer animations as they will make the experience appear sluggish. If a specific animation feels like it will need more than 400 milliseconds, revisit the animation to see if there is a simpler, easier, shorter transition to implement.

### Easing

Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the motion feel more natural, cohesive, and connected.

Todo: Define easing standards

## Types of animations

### Hover

Interactive elements (links, buttons, etc.) should have a hover state. A subtle animation for this transition adds a polished feel. We use 100 milliseconds linear transition for a color hover effect.

Todo: Add hover example

### Quick update

When information is updating in place, a quick, subtle animation is needed. The previous content should cut out, and the new content should have a 200 milliseconds linear fade in.

Todo: Add quick update example

### Skeleton loading

Skeleton loaders use a horizontally pulsing animation with a linear 1s timing. Learn more about [skeleton loaders](/components/skeleton-loader).

Todo: Add skeleton loader transition example

### Moving transitions

When elements move on-screen, there should be a quick animation so it is clear to users what moved where. These types of animations use a 200 milliseconds transition time.

Todo: Add modal appearence example

#### Shifting elements

An example of a moving transition is when elements have to rearrange when you [drag an element](/foundations/interactions#drag-and-drop).

Todo: Add drag animation example

#### Page autoscroll

To keep an active element visible, a page auto scroll transition can be used. An example of this includes clicking an issue board card that is out of screen.

Todo: Add auto scroll example (issue board cards)

---
name: Motion
---

Motion is a tool to help convey important relationships, changes, or transitions between elements. It is used sparingly and intentionally, highlighting the right elements at the right moment.

## Easing

Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the motion feel more natural, cohesive, and connected.

Todo: Define easing standards

## Timings

The scale of an animation, it's easing curve, and the complexity of the element which is being animated should influence the total animation duration. This means the further the traveled distance and the more complex the animated object, the longer the timing for the animation should be.

### Macro animations

Macro animations cover larger scale objects or surface area such as page changes, drawer reveals, and scrolling or other movement across the screen, etc. We should be mindful with larger scale animations and make sure they convey enough meaning in order to add value towards the user experience. These animations may take up to 400ms.

### Mircro animations

Micro animations cover smaller scale objects or surface areas such as icons, color changes, buttons interactions, tooltips, etc. They are used to direct user attention and add a small amount of meaning which can help the user. We should be mindful with smaller scale animations and make sure they don't take too long as they will make the experience appear sluggish. If the complexity of an object requires a longer animation time please revisit it and look for an alternative solution. These animations may take up between 100ms and 200ms.

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

Todo: Add modal appearance example

#### Shifting elements

An example of a moving transition is when elements have to rearrange when you [drag an element](/foundations/interactions#drag-and-drop).

Todo: Add drag animation example

#### Page autoscroll

To keep an active element visible, a page auto scroll transition can be used. An example of this includes clicking an issue board card that is out of screen.

Todo: Add auto scroll example (issue board cards)

## Resources

* [Spectrum design system - Adobe](https://spectrum.adobe.com/page/motion/)

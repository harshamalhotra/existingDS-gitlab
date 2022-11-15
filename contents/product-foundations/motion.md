---
name: Motion
---

Motion is a tool to help convey important relationships, changes, or transitions between elements. It is used sparingly and intentionally, highlighting the right elements at the right moment.

## Easing

Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the motion feel more natural, cohesive, and connected.

<todo>Define easing standards</todo>

## Timings

The scale of an animation, its easing curve, and the complexity of the element which is being animated should influence the total animation duration. This means the further the traveled distance and the more complex the animated object, the longer the timing for the animation should be.

### Macro animations

Macro animations cover larger scale objects or surface areas such as page changes, drawer reveals, and scrolling or other movements across the screen, and so on. We should be mindful of larger-scale animations and make sure they convey enough meaning to add value to the user experience. These animations may take up to 400ms.

### Micro animations

Micro animations cover smaller-scale objects or surface areas such as icons, color changes, buttons interactions, tooltips, and so on. They are used to direct user attention and add a small amount of meaning which can help the user. We should be mindful of smaller scale animations and make sure they don't take too long as they will make the experience appear sluggish. If the complexity of an object requires a longer animation time please revisit it and look for an alternative solution. These animations may take up between 100ms and 200ms.

## Types of animations

### Hover

Interactive elements (links, buttons, and so on) should have a hover state. A subtle animation for this transition adds a polished feel. We use a 100ms linear transition for a color hover effect.

<todo>Add hover example</todo>

### Quick update

When information is updating in place, a quick, subtle animation is needed. The previous content should cut out, and the new content should have a 200ms linear fade in.

<todo>Add quick update example</todo>

### Skeleton loading

Skeleton loaders use a horizontally pulsing animation with a linear 1s timing. Learn more about [skeleton loaders](/components/skeleton-loader).

<todo>Add skeleton loader transition example</todo>

### Moving transitions

When elements move on-screen, there should be a quick animation so it is clear to users what moved where. These types of animations use a 200 milliseconds transition time.

<todo>Add modal appearance example</todo>

#### Shifting elements

An example of a moving transition is when elements have to rearrange when you [drag an element](/usability/drag-and-drop).

<todo>Add drag animation example</todo>

#### Page auto-scroll

To keep an active element visible, a page auto-scroll transition can be used. An example of this includes clicking an issue board card that is out of the screen.

<todo>Add auto-scroll example (issue board cards)</todo>

## Resources

- [Spectrum design system - Adobe](https://spectrum.adobe.com/page/motion/)

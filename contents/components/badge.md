---
name: Badge
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A3
docs: complete
vueComponents:
  - GlBadge
related:
  - label
---

Badges highlight metadata of objects, the kind of information that always needs some context and isn't useful on its own. For example, they can be used to indicate an issue's status, a member's role, or if a branch is protected.

Showing metadata does not require the use of badges, you can just use plain icons, text, or both. But if the metadata is worth highlighting or differentiating, badges can help.

Badges should not be confused with [labels](/components/label). Labels also show object metadata, but they are much more specific in usage and scope — they are editable objects for users to manually categorize other objects, like issues, merge requests, and epics.  Other terms that are commonly used to refer to badges: counters, statuses, chips, tags, metadata, lozenges, pills, and bubbles.

## Usage

Information can be rendered in badges as icons, text, or both. If they only have an icon, provide a quick explanation for users in a [tooltip](/components/tooltip). Text badges can contain not only words, but also numbers. These act as _counters_ (for example, number badges in [tabs](/components/tabs)).

Badges should always link to the object they refer to unless the user is already seeing the most detailed state of that object (that is, the object's detail page).

Long text in badges should be avoided. When text overflows the badge width, it is truncated and aided by a tooltip. Badge contents don't wrap.

### Variations

Depending on the context and the value of the badge's information, some style attributes can be changed from the defaults:
- **Font weight**: Text is regular weight by default.
- **Visual weight**: “Neutral average” is the default variation. Start with that and see if it works. If necessary, decrease or increase the visual weight of the badge by switching to “neutral soft” or “neutral loud” respectively. Be mindful of not attracting too much attention to the badge and prioritizing it over other surrounding elements.
- **Color**: Neutral color (gray) variations are the default. If the kind of information being communicated aligns with our [guidelines for the four primary colors](/foundations/colors), the badge can adopt a more colorful variation. Color should be used with care and as a last resort for highlighting badges. Like the visual weight point before, start with “average” and be mindful when using the “loud” variation.
- **Size**: There are 3 badge sizes - `sm`, `md`, and `lg`. Determining badge size depends on the surrounding content. Use the `sm` badge when content is crowded, `md` as the default, and `lg` in headers or titles where there is ample space. 

## Demo

### Basic badge

[[Example:badge-basic]]

### Badge variants

[[Example:badge-variants]]

### Linked badges

[[Example:badge-actions]]

### Badges with icons

[[Example:badge-icon]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Globals-beta?node-id=1659%3A119)

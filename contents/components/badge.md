---
name: Badge
vueComponents: 
  - GlBadge
related:
  - labels
---

Badges highlight metadata of objects, the kind of information that always needs some context and isn't useful on its own. For example, they can be used to indicate an issue's status, a member's role, or if a branch is protected.

Showing metadata does not require the use of badges, you can just use plain icons, text, or both. But if the metadata is worth highlighting or differentiating, badges can help.

Badges should not be confused with [labels](/components/labels). Labels also show object metadata, but they are much more specific in usage and scope — they are editable objects for users to manually categorize other objects, like issues, merge requests, and epics.  Other terms that are commonly used to refer to badges: counters, statuses, chips, tags, metadata, lozenges, pills, and bubbles.

## Usage

Information can be rendered in badges as icons, text, or both. If they only have an icon, provide a quick explanation for users in a [tooltip](/components/tooltip). Text badges can contain not only words, but also numbers. These act as _counters_ (e.g. number badges in [tabs](/components/tabs)).

Badges should always link to the object they refer to unless the user is already seeing the most detailed state of that object (i.e. the object's detail page).

Long text in badges should be avoided. When text overflows the badge width, it is truncated and aided by a tooltip. Badge contents don't wrap.

### Variations

Depending on the context and the value of the badge's information, some style attributes can be changed from the defaults:
* **Font weight**: Text is bold by default but some or all of it can be changed to regular weight. For example, non-active [tabs](/components/tabs) use regular weight but revert to the bold weight when active.
* **Visual weight**: “Neutral average” is the default variation. Start with that and see if it works. If necessary, decrease or increase the visual weight of the badge by switching to “neutral soft” or “neutral loud” respectively. Be mindful of not attracting too much attention to the badge and prioritizing it over other surrounding elements.
* **Color**: Neutral color (gray) variations are the default. If the kind of information being communicated aligns with our [guidelines for the four primary colors](/foundations/colors), the badge can adopt a more colorful variation. Color should be used with care and as a last resort for highlighting badges. Like the visual weight point before, start with “average” and be mindful when using the “loud” variation.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for badges](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/badges-spec-previews/)

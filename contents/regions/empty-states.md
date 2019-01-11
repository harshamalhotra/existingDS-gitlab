---
name: Empty States
related: 
  - banners
  - buttons
  - illustration
---

An empty state is our way of communicating to the user that there is no content to load and what action they should take next. They are vital in making the experience feel more approachable and understandable.

## Usage

Empty states are composed of 3 elements: the illustration, description, and call to action. The illustration is optional but strongly recommended as it adds personality and aides the user in understanding the situation.

**1\. Illustration**

The illustration should compliment the need for the empty state and help the user understand the situation.

**2\. Description**

The title and message should be clear, concise, and explain why the user is seeing this screen.

**3\. Call to action**

Taking the form of a primary button with the option to add a secondary button, the text within should be direct and actionable.

[See buttons for more usage information](/components/buttons)

### When to use an empty state

Empty states can be employed to:

*   Make users aware that a feature is not configured for use.
*   Act as a placeholder for regions in the app left blank intentionally.
*   Convey an error state, which will depend on the nature of the error and should be used judiciously. An example of this would be a server response error, i.e., 404 or 500.
*   Display empty search results.

Empty states differ from banners in that they are not intended to promote or advertise new features or functionality.

[See banners for more usage information](/components/banners)

## Demo

Todo: Add live component block with code example

## Design specifications

### Illustration Style

[See illustration guidelines](/foundations/illustration)

### Size

Max size on empty state illustrations is **512px wide by 512px tall**. Do not scale smaller illustrations up to this size as they will look too large. Instead use the original size of the illustration if it has already been drawn.

### Fonts

*   Header title: UI H4 style
*   Description: UI paragraph style

### Description

*   If the description needs to wrap on desktop, align it to the left.
*   If the title needs to wrap on desktop, align both the title and description to the left.
*   If the title and description do not wrap on desktop, center them horizontally.

### Call to action

*   The call to action button in the empty state should be a primary button.
*   There is only one primary button since there can only be one primary button per form. If there is a need for more than one button, the other should be a secondary button.

### Mobile

On mobile, the layout is same as the one on desktop. It only scales down the illustrations and changes the width of paragraph.

Add Sketch Measure Preview for empty states

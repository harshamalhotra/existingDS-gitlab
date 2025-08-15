---
name: Truncate Text
description: The truncate text component lets you truncate a large text by number of lines.
---

## Examples

<story-viewer component="utilities-truncate-text" title="GlTruncateText"></story-viewer>

## Code reference

The `GlTruncateText` component lets you truncate a large text by number of lines.
The last line ends with an ellipsis if the text is truncated.
Truncation can be toggled by a 'Show more' / 'Show less' button.
The button will not be shown when no truncation is necessary.
There is a separate property to set the number of lines initially shown on small screens.
Use the `showMoreText` and `showLessText` properties to provide translated strings.

```html
<gl-truncate-text :show-more-text="__('Show more')" :show-less-text="__('Show less')" :lines="3" :mobile-lines="10">
  {{ largeText }}
</gl-truncate-text>
```

### Caveats

When the size of the window is large,
and the text is displayed on a number of lines greater than the value of the `lines` property,
but smaller than the value of the `mobileLines` property,
and the `Show more` button has been clicked to show the entire content of the text,
and the window is resized to a small size,
then instead of disappearing,
the `Show less` button will remain visible and will do nothing when clicked.

### GlTruncateText

<story-viewer component="utilities-truncate-text" title="GlTruncateText" view-mode="docs"></story-viewer>

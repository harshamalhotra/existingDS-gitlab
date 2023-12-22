---
name: Link
description: A link is a navigational element that takes a user to another URL, an element within a page, or a file.
components:
  - base-link
related:
  - button
---

## Examples

<story-viewer component="base-link" story="default-link" title="Link"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=81916-116837&mode=dev)

## Structure

<figure-img alt="Numbered diagram of a link structure" label="Link structure" src="/img/link-structure.svg"></figure-img>

1. **Text**: Specifies or references the link's destination.
1. **Icon** (optional): Indicates the destination is on an external domain. 

## Guidelines

### When to use

- A link (anchor `<a>`) element is used as navigation to:
  - A new URL.
  - An element within a page.
  - A file.

### When not to use

- If you are performing an action, like saving, consider using a [button](/components/button) element instead.

### Categories

There are four categories of links in GitLab. Although all links are navigational, those that persist from page to page and guide users through the application – such as [navigation](/patterns/navigation), [breadcrumbs](/components/breadcrumb), and [pagination](/components/pagination) – are described separately, and not included as part of the link component.

1. **Inline text link**: Link that appears within body text, like a paragraph or sentence. In order to distinguish a linked reference from surrounding content, a link within body copy must be underlined. Inline text links can be user-generated, for example, referencing an issue with "#3126" in the markdown editor of a merge request description where the link's primary function is linking to the referred issue. They can also be in text generated from a source file, for example, a "learn more about pipelines" link in the paragraph of an empty state template.
1. **User interface (UI) link**: Standalone link in the UI. User interface links are not user-generated. For example, a link in the system notes that compares the changes in a new commit to a previous one. The placement, color, and actionable text all provide link affordance. A [link button](/components/button#variants) has a similar style, but is used for an action and not a link.
1. **Meta link**: Standalone text or text within a short string of system-generated content may contain multiple meta links. Meta links share a meaningful datapoint or reference, and are only links secondarily. For example, the primary function of including "%15.8" in a string is to communicate the milestone, though it can also link to more information about it.
1. **Mention**: Indicates when a user is "@" mentioned in the content. The username links to the user's profile. A mention link can be within body or meta content.

### Appearance

- An inline text link is always underlined and `$blue-700` at rest. On hover, the color darkens and the underline persists. It appears this way regardless of formatting applied (bold, italic, or monospace) or parent text element (heading, paragraph, list, or code).
- A UI link is always `$blue-500` at rest with no underline. On hover, the color darkens and an underline appears.
- As meta links can represent a wide variety of content, their styles can also adapt for each context. The attribute all meta links share is an underline only on hover. At rest they can be `$blue-500`, `$gray-900`, or `$gray-700`. On hover, the color darkens. Similar to inline links they appear this way regardless of formatting applied (bold, italic, monospace). Because of the available styling, which overlaps with static text, it's critical to ensure that users understand what is linked and what isn't in each context. Additionally, similar types of linked meta content should be styled the same throughout the product.
- A mention link is always `$blue-700` and has a background color behind the link at rest; `$blue-100` for any user, and `$orange-100` for the current user. When embedded in body text and on hover the text is underlined.
- An inline or mention link uses a darker blue to ensure sufficient contrast on surfaces that use a `50` or `100` step from the [UI color palette](/product-foundations/color#ui), while a UI or meta link uses a more vibrant blue and relies on CSS blend modes to increase contrast on different surfaces.
- Although a UI or blue meta link has a style similar to a [link button](/components/button#variants), select the correct component based on meaning rather than by appearance alone (see [When to use](#when-to-use) above).
- All links have a visible focus state (see [Accessibility](#accessibility) notes below).

<todo>Add visual example of link appearance.</todo>

### Behavior

- A link opens the destination in the same window by default.
- Native controls to open a link in a new tab or window aren't suppressed.
- A link can use `target="_blank"` if it's intentional that the user cannot use the browser's back function to return to the reference, and that it's clear to the user they are leaving the current experience.
- Text [truncation](/product-foundations/layout#truncation) guidelines also apply to links.

### Content

- A user should be able to predict where they will go upon click.
- Avoid vague text such as "click here," URLs as link text, or creating a link from more than just a short sentence. Link texts should be clear and meaningful. For example, _Before reviewing a MR, review the [best practices](/accessibility/best-practices/)_.
- If a link is at the end of a sentence, the period should not be part of the link.
- An external link should use the external link icon. The icon should use `aria-label="(external link)"`, or similar, to communicate the purpose to screen reader users. For example, <a href="#" class="gl-link gl-font-style-italic">Learn more about Kubernetes <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="vertical-align: text-bottom" role="img" aria-label="(external link)">
  <path fill="#000000" fill-rule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" style="fill: currentColor;"></path></svg></a>.

### Accessibility

For all links:

- All links and their states must have a contrast ratio of at least 4.5:1 against the background color ([Understanding WCAG SC 1.4.3 Contrast Minimum](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)).
- A link must have a visible focus state ([Understanding WCAG SC 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)).

For inline text links:

- Color can't be the only way to visually distinguish a link. The link color doesn't have at least a 3:1 contrast ratio from surrounding text, therefore, an underline is used for all states as a visual means to indicate it ([Understanding WCAG SC 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)).
- Since an underline is used as a required graphical element to distinguish a link, it must have at least a 3:1 contrast ratio against the background color for all states ([Understanding WCAG SC 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG21/#non-text-contrast)).

For user interface links:

- The placement and text of a link should identify itself as such in a predictable way.
- An underline is not required at rest, but present for hover.
- Consecutive interface links should have sufficient space between them so that they appear as separate elements and not one continuous sentence or link.

For meta links:

- As mentioned in the [categories](#categories) section, the main purpose of a meta link is first and foremost as content. It's not necessary for the text to be linked, but it is so that a user could get more information if desired. Therefore, the visual emphasis that would come from an underline is not used, even if the link is within a string of unlinked text. An underline is present on hover. This is an intentional decision to visually simplify certain sections in the UI that contain multiple meta links and may change in the future. More discussion and consideration can be found [this issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1266).

For mention links:

- When the link is within body copy, follow the above guides for inline text links. The background color and/or `@` prefix don't qualify for sufficient contrast or visual distinction in this context.
- When the link is used as meta information, that is, first and foremost as content where linking to a user isn't necessary or consequential, then follow the above guides for meta links.

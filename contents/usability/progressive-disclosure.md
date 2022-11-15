---
name: Progressive disclosure
related:
  - /usability/destructive-actions
  - /usability/onboarding
  - accordion
  - button
  - modal
  - skeleton-loader
  - progress-bar
---

Progressive disclosure is an interaction pattern that defers less important information and features to secondary screens. By initially only showing the most important information, users are less likely to become overwhelmed when there is a large amount of content to consume. Using a trigger to reveal an object hidden from view, it can reduce the amount of content on the page at any one time without sacrificing features.

When employing progressive disclosure, display key information prominently to reduce cognitive load, and reveal additional information only upon request. Keeping the interface simple in this way allows users to focus their attention and also helps with new user [onboarding](onboarding).

## Best practices

Best practices for progressive disclosure include:

- Clearly distinguishing between the primary and secondary actions. Determine which actions are most important using a combination of available user research and usage data.
- Creating clear trigger actions for secondary content. Use established calls to action such as [links](/components/link) or [buttons](/components/button) that set the expectation for what to do next.
- Avoiding multiple levels of disclosure. If an interaction has three or more levels of disclosure, it could be a sign that the feature is too complex.

## Examples

There are a number of ways to gradually reveal content in the UI, including:

- Adding items to a table by filling out a form in a [modal](/components/modal) or new page
- Displaying information in [accordions](/components/accordion)
- Hiding navigation items behind a hamburger menu
- Truncating content and previews
- Enabling scrolling for overflow content
- Using [skeleton loaders](/components/skeleton-loader) while lazy loading a page
- Introducing step-by-step flows for complex scenarios

---
name: Calls to action
related:
  - /usability/ai-human-interaction
  - /usability/feature-management
  - /components/button
  - /components/link
---

## Overview

A _call to action_ (CTA) is an interactive element that prompts users to take a specific action. GitLab Duo CTAs follow [button](/components/button) and [link](/components/link) guidelines, with some additional considerations.

## Guidelines

### Icon

When reasonable, use an AI-specific icon to set expectations about a CTA's relationship to AI. For Duo Chat features, use the [duo-chat icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~duo-chat). For other AI features, use the [tanuki-ai icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~tanuki-ai).

| Do                                                                                                                                       | Don't                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <figure-img alt="Default button with tanuki-ai icon" label="Button uses AI-specific icon." src="/img/ai-cta-with-icon.svg"></figure-img> | <figure-img alt="Default button without tanuki-ai icon." label="Button omits AI-specific icon." src="/img/ai-cta-without-icon.svg"></figure-img> |

## Color

There is no specific color associated with AI or GitLab Duo. The color of the icon follows the component-specific guidelines, like [button](/components/button) variants. This differs from marketing, which has specific colors for the [GitLab Duo visual identity](https://docs.google.com/presentation/d/1G849KWal8XDAEdusoR5YN8ZrZlvcgFVnqr4Nsjdy9Rc/edit#slide=id.g252cac05ee9_0_17).

### Label

Avoid CTA labels with "GitLab Duo" or "AI" to keep them simple and brief. Instead, indicate that the feature is AI-powered through onboarding, supplemental UI copy, or iconography. For guidance on how to use "GitLab Duo" in the UI, refer to the [AI transparency guidelines](/usability/ai-human-interaction#be-transparent).

| Do                                                                                                                                              | Don't                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <figure-img alt="Button with label: Summarize comments" label="Button label is simple and brief." src="/img/ai-cta-with-icon.svg"></figure-img> | <figure-img alt="Button with label: Summarize comments with GitLab Duo" label="Button label is too complex and long." src="/img/ai-cta-too-long.svg"></figure-img> |

### Feature maturity

When a feature is experimental or beta, display that information with a badge outside of the CTA. See also: [how to highlight feature versions](/usability/feature-management#highlighting-feature-versions).

| Do                                                                                                                                                                                                                     | Don't                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Feature maturity is indicated outside of the CTA with a Beta badge embedded in UI copy" label="Feature maturity is indicated outside of the button." src="/img/do-feature-maturity.svg"></figure-img> | <figure-img alt="An AI button containing a Beta badge" label="Feature maturity is indicated in the button." src="/img/dont-feature-maturity.svg"></figure-img> |

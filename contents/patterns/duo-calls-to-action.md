---
name: Calls to action for GitLab Duo
summary: Guidelines for designing and implementing AI-specific interactive elements that prompt user actions within GitLab.
extendedNotice:
  owners: group::ai framework
  contacts:
    - text: '#ux-ai-integration'
      url: 'https://gitlab.slack.com/channels/ux-ai-integration'
related:
  - /patterns/ai-human-interaction
  - /patterns/feature-management
  - /components/button
  - /components/link
---

## Overview

A _call to action_ (CTA) is an interactive element that prompts users to take a specific action. GitLab Duo CTAs follow [button](/components/button) and [link](/components/link) guidelines, with some additional considerations.

## Guidelines

### Icon

When reasonable, use an AI-specific icon to set expectations about a CTA's relationship to AI. For Duo Chat features, use the [duo-chat icon](/product-foundations/iconography-directory?q=~duo-chat). For other AI features, use the [tanuki-ai icon](/product-foundations/iconography-directory?q=~tanuki-ai).

<grid>
  <do>
    <figure-img class="!gl-my-0" alt="Default button with tanuki-ai icon" label="Button uses AI-specific icon." src="/img/ai-cta-with-icon.svg"></figure-img>
  </do>
  <dont>
    <figure-img class="!gl-my-0" alt="Default button without tanuki-ai icon." label="Button omits AI-specific icon." src="/img/ai-cta-without-icon.svg"></figure-img>
  </dont>
</grid>

### Color

There is no specific color associated with AI or GitLab Duo. The color of the icon follows the component-specific guidelines, like [button](/components/button) variants. This differs from marketing, which has specific colors for the [GitLab Duo visual identity](https://docs.google.com/presentation/d/1G849KWal8XDAEdusoR5YN8ZrZlvcgFVnqr4Nsjdy9Rc/edit#slide=id.g252cac05ee9_0_17).

### Label

Avoid CTA labels with "GitLab Duo" or "AI" to keep them simple and brief. Instead, indicate that the feature is AI-powered through onboarding, supplemental UI copy, or iconography. For guidance on how to use "GitLab Duo" in the UI, refer to the [AI transparency guidelines](/patterns/ai-human-interaction#be-transparent).

<grid>
  <do>
    <figure-img class="!gl-my-0" alt="Button with label: Summarize comments" label="Button label is simple and brief." src="/img/ai-cta-with-icon.svg"></figure-img>
  </do>
  <dont>
    <figure-img class="!gl-my-0" alt="Button with label: Summarize comments with GitLab Duo" label="Button label is too complex and long." src="/img/ai-cta-too-long.svg"></figure-img>
  </dont>
</grid>

### Feature maturity

When a feature is experimental or beta, display that information with a badge outside of the CTA. See also: [how to highlight feature versions](/patterns/feature-management#highlighting-feature-versions).

<grid>
  <do>
    <figure-img class="!gl-my-0" alt="Feature maturity is indicated outside of the CTA with a Beta badge embedded in UI copy" label="Feature maturity is indicated outside of the button." src="/img/do-feature-maturity.svg"></figure-img>
  </do>
  <dont>
    <figure-img class="!gl-my-0" alt="An AI button containing a Beta badge" label="Feature maturity is indicated in the button." src="/img/dont-feature-maturity.svg"></figure-img>
  </dont>
</grid>

### Styling and importance

The highest priority action should have the most noticeable CTA.

When GitLab Duo is [off](https://docs.gitlab.com/ee/user/gitlab_duo/turn_on_off.html#turn-off-gitlab-duo-features), AI CTAs usually disappear, which can change how the page looks. If an AI action was the main CTA:

- Choose a new main action.
- Adjust the page layout accordingly.

Always make sure the page makes sense, with or without AI actions.

<grid>
  <div>
    <strong>GitLab Duo is on</strong>
    <figure-img class="!gl-my-0" alt="AI button is primary confirm"  src="/img/primary-action-ai.svg"></figure-img>
  </div>
  <div>
    <strong>GitLab Duo is off</strong>
    <figure-img class="!gl-my-0" alt="AI button is not shown, other button is primary confirm"  src="/img/primary-action-not-ai.svg"></figure-img>
  </div>
</grid>

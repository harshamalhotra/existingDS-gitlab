---
name: Component lifecycle
---

The component lifecycle is a flexible set of guidelines to help product teams efficiently and iteratively add components to Pajamas. The goal of this process is to make it easy to submit new designs (including documentation), propose changes to existing designs, and translate component designs into built components.

The component lifecycle has the following stages (identified by labels):

- **Define:** A need for a component or a gap within an existing component is identified and usage guidelines are written/updated within [Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com). <span class="app-styles"><gl-label background-color="#8C73A1" title="pajamas::define" scoped /></span>
- **Design:** The component is added to or modified in the [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit) in Figma. <span class="app-styles"><gl-label background-color="#7CA189" title="pajamas::design" scoped /></span>
- **Build:** The component is added to [Gitlab UI](https://gitlab.com/gitlab-org/gitlab-ui), including
  documentation. The component is styled according to design specs found
  in [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit).
  Components function correctly, match usage guidelines, and are added to Pajamas. <span class="app-styles"><gl-label background-color="#6787BB" title="pajamas::build" scoped /></span>
- **Integrate:** The documented component is integrated into [GitLab the
  product](https://gitlab.com/gitlab-org/gitlab). This stage could involve removing old HAML components
  in order to replace them with the newly defined Vue components. <span class="app-styles"><gl-label background-color="#A17A73" title="pajamas::integrate" scoped /></span>

Stages may happen in tandem and in different orders, depending on how mature the component currently
is. For example:

- If the component is already in GitLab and widely used, the **build** stage would involve migrating styles from GitLab to gitlab-ui. The **define** and **design** stages may occur at the same time, or even sometimes after.
- If a component is brand new, the **define** and **design** stages may need some revisions as the
  **build** stage progresses.
- If a component is built in GitLab UI and included in Pajamas, it may be partially
  **integrated** into the product, even if not all variants needed exist in Pajamas yet.

## Creating or updating a component

There are three distinct areas that should be reviewed when adding or updating a component:

1. [Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)
1. [Pajamas UI Kit (Figma)](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit)
1. [GitLab UI](https://gitlab.com/gitlab-org/gitlab-ui)

The following diagram outlines the various component lifecycle stages and is available to help
determine how to add or update a component in Pajamas, based on the current state
of the component. This diagram is meant to be a guide and is flexible to account for the needs
of your team.

<div class="figma-embed" aria-label="Component lifecycle diagram depicting the various stages of contributing to Pajamas." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fsd0mmLWaejswQUSJ3ei3kj%2FComponent-Lifecycle%3Fpage-id%3D0%253A1%26node-id%3D77%253A2122%26viewport%3D-2283%252C1047%252C0.36993077397346497%26scaling%3Dscale-down" allowfullscreen></iframe>
</div>

[View component lifecycle in Figma →](https://www.figma.com/file/sd0mmLWaejswQUSJ3ei3kj/Component-Lifecycle?node-id=77%3A2122)

## Determining whether a component should be included in Pajamas

Adding, or not adding, a component to Pajamas should be a deliberate choice. To
help facilitate this decision, you should be able to answer the following questions:

- Is this a new component or a variation of an existing one?
- Why do existing components not support this use case?
- Will this component be reused beyond the current scope? Is it relevant to multiple
  use cases?
- Is the proposed component technically feasible?

Not all components belong in the design system. These are occasional instances
where a component may live in only one area of the application and is not included
as part of Pajamas. The design system is here to help build reusable interfaces,
but not be limiting in terms of how to solve user needs.

If you are able to answer the above questions and are still unsure about whether
a component should be added to Pajamas, use the following to help you make a
decision:

- If it's unknown whether the component will be used, then wait until we do know
  before putting it in Pajamas.
- If the component is _only_ relevant in one place (and we suspect it will only
  ever be relevant in one place), do not add to Pajamas.
- If we validate that it’s useful in more than just one place, add it to Pajamas.

We may find over time that a component we once considered unique is more broadly
relevant. In that case, we reevaluate the component to ensure it’s scalable, and
we add it in.

## Viewing changes in Pajamas

When a change to GitLab UI is made, it will not be reflected in
Pajamas until the package is updated. See 
[Updating Gitlab Packages](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/main/doc/updating-gitlab-ui-packages.md) for details.

## Component status

Not all Pajamas components are fully integrated within the GitLab product at this 
time. Some components may be partially integrated and others have been migrated 
from [GitLab](https://gitlab.com/gitlab-org/gitlab) to [GitLab UI](https://gitlab.com/gitlab-org/gitlab-ui). 

GitLab UI components should be used within GitLab even if they do not yet fully 
conform to design specs.

## Complex components

There are a few cases where components have been migrated from GitLab to
GitLab UI, but do not yet reflect Pajamas documentation. When a complex component
is difficult to style or update because many features use it, we recommend creating a migration plan and coordinating with the [Foundations team](https://about.gitlab.com/company/team/?department=fe-ux-foundations-team) on its rollout.

In the past, a `New` version of the component has been created to allow the team to build and
style the component according to design specs without causing inadvertent side effects to features
that are already using the migrated Vue component. However, this has led to confusion about which components to use; technical debt involved in migrating the component and not allowing them both to flourish; and follow-on effects keeping other complex components up-to-date. Until there is an officially determined path, we recommend coordinating a plan with the wider group.

## Completing a component

A completed component should not have the warning alert on the **Implementation** tab.

An MR should be created to add any necessary demos to the **Usage** tab. To prevent confusion, we should omit demos until the build phase is complete and the component matches style and usage documentation.

Once a component is complete, add it to the [Engineering Week in Review](https://docs.google.com/document/d/1Oglq0-rLbPFRNbqCDfHT0-Y3NkVEiHj6UukfYijHyUs/edit)
in order to keep the department informed.

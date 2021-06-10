---
name: Component lifecycle
---

The goal of this process is to make it easy to: submit new designs (including documentation), propose changes to existing designs, and translate component designs into built components.

The component lifecycle has the following stages:

- **Create:** A need for a component is identified. The component is added to the [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit) in Figma and usage guidelines are written.
  ~"pajamas::create"
- **Build:** The component is added to gitlab-ui, including examples
  and documentation. The component is added to Pajamas. ~"pajamas::build"
- **Style:** Each component is styled according to the design specs found in
  Pajamas. Components function correctly and match usage guidelines. ~"pajamas::style"
- **Integrate:** The documented component is integrated into GitLab the
  product. ~"pajamas::integrate"

Some stages may happen in tandem, depending on how mature the component currently
is. For example:

- If the component is already in GitLab and widely used, **build** and
  **style** stages may happen together. This often involves migrating styles from GitLab
  to gitlab-ui.
- If the component is not yet available as a Vue component, the **style** stage
  may come after the **build** stage.
- If a component is brand new, the **create** stage may need some revisions as the
  **build** and **style** stages progress.

The **integrate** stage will come last and could involve removing old HAML components
in order to replace them with the newly defined Vue components.

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

## Creating a new component

The following diagram outlines the **create** stage and is available to help
determine when and how a component should be added to Pajamas. Additionally, [see the Component Lifecycle diagram on Figma](https://www.figma.com/file/5kvnjKbcQ8FlzdwrXM80hk/Component-lifecycle-gitlab-design-2053?node-id=1%3A207).

<img class="d-block a-center m-b-7" src="/img/component-lifecycle.svg" alt="Pajamas Create component lifecycle" role="img" />

## Building and styling components

Next are the **build** and **style** stages. This occurs
in the [gitLab-ui project](https://gitlab.com/gitlab-org/gitlab-ui) and follows
the [**build** and **style** diagram](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/main/doc/component-lifecycle.md).

## Completing a component

Once a component has gone through the **create**, **build**, and **style** stages,
it can then be marked as _Complete_ on our [status page](https://design.gitlab.com/components/status).

A completed component should not have the warning alert on the **Implementation** tab.

An MR should be created to add any necessary demos to the **Usage** tab. To prevent confusion, we should omit demos until styles are correct.

Once a component is complete, add it to the [Engineering Week in Review](https://docs.google.com/document/d/1Oglq0-rLbPFRNbqCDfHT0-Y3NkVEiHj6UukfYijHyUs/edit).
in order to keep the department informed.

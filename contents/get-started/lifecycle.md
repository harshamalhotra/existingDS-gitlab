---
name: Contribution lifecycle
---

The contribution lifecycle explains the scope of changes needed to keep Pajamas healthy. Every update should consider design, code, and documentation together. When these stay in sync, Pajamas remains reliable, consistent, and ensures quality. The lifecycle is a flexible guide that shows the kinds of steps most contributions go through. Not every change will follow every stage in the same way.

Why this matters:

- **Parity prevents confusion:** a change in Figma without code, or code without documentation, creates gaps that slow teams down.
- **Consistency builds trust:** knowing that the design system is accurate and up to date allows teams to apply it with confidence.
- **Quality is sustained:** addressing all parts of a change together keeps the design system complete rather than filled with partial improvements.

## Lifecycle stages

The contribution lifecycle has the following stages:

- **Define:** Clarify what change is needed and why. This could be identifying a gap, reporting a bug, suggesting an adjustment, or proposing a new element. The goal is to make the need visible and start orienting toward a solution.
- **Design:** Create or update the design assets in the [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit). This might mean adding a new element, updating an existing one, or creating a new template. The goal is to make sure designers can apply the change consistently.
- **Build:** Implement the change in [GitLab UI](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/packages/gitlab-ui). This may involve adding a new component, updating an existing one, or fixing a bug. The goal is to implement the change so it matches the design, functions correctly, and is covered by tests.
- **Document:** Add or update Pajamas documentation with guidelines, examples, and references. The goal is to provide clear guidance so the change can be adopted with confidence.

Not every contribution requires the same depth in each stage. A documentation fix may only touch the document stage. A small style adjustment may involve only the design and build stages. The lifecycle ensures that changes to Pajamas are stay aligned across all assets. Stages may happen in tandem and in different orders, depending on how mature the contribution currently is. Changes in one stage may necessitate updates in another.

Some contributions may also require an [integration step](#integration) before they are implemented in the GitLab product.

## Determining whether something belongs in Pajamas

Adding or updating items in Pajamas should be a deliberate choice. Ask these questions to guide the decision:

- Is this a new element or a variation of an existing one?
- Why do existing elements not support this need?
- Will this be useful beyond a single use case?
- Is it feasible to maintain alongside other Pajamas assets?

If the answers suggest the change is only relevant in a single area, it should stay local. If it is unclear whether there will be reuse, wait until more evidence emerges before adding it.

If the answer points to reuse across multiple domains, the contribution likely belongs in Pajamas. Many new components and patterns will begin in the extended layer, which makes it possible to share useful solutions across teams without requiring global adoption. When in doubt, follow [the contribution process](/get-started/contributing) and open an issue to propose a change. The Design System team will help determine whether it belongs in Pajamas.

## Integration

Not every Pajamas element is immediately reflected in the GitLab product. Integration covers how changes in Pajamas move into GitLab, and how we handle elements that are partially adopted or technically complex.

### Viewing changes in Pajamas

When a change to GitLab UI is made, it will not be reflected in Pajamas until the package is updated. See [Updating Gitlab Packages](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/packages/gitlab-ui/doc/updating-gitlab-ui-packages.md) for details.

### Component status

Not all Pajamas components are fully integrated within the GitLab product at this time. Some components may be partially integrated and others have been migrated from [GitLab](https://gitlab.com/gitlab-org/gitlab) to [GitLab UI](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/packages/gitlab-ui).

GitLab UI components should be used within GitLab even if they do not yet fully conform to design specs.

### Complex components

There are a few cases where components have been migrated from GitLab to GitLab UI, but are not yet reflected in Pajamas documentation.

When a complex component is difficult to style or update because many features use it, we recommend creating a migration plan and coordinating with the Design System team on its rollout.

In the past, a `New` version of the component has been created to allow the team to build and
style the component according to design specs without causing inadvertent side effects to features
that are already using the migrated Vue component. However, this has led to confusion about which components to use; technical debt involved in migrating the component and not allowing them both to flourish; and follow-on effects keeping other complex components up-to-date. Until there is an officially determined path, we recommend coordinating a plan with the wider group.

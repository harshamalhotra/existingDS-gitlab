---
name: Settings management
summary: Empower users to control product behavior and appearance while maintaining system-wide consistency.
related:
  - tooltip
  - popover
  - alert
  - toast
  - /usability/navigation-sidebar
  - /content/ui-text
  - /usability/saving-and-feedback
  - /usability/progressive-disclosure
---

Settings allow a user to control how the product's features or capabilities should behave or appear. A user can modify these configurable options to adjust baseline functionality.

The Admin area, group, project, and user have dedicated areas to aggregate their settings, while [permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) dictate which settings a user can access.

## Considerations

When adding a setting to the product, consider these questions:

- **Necessity:** Is this control necessary or just nice to have? Remember to strive for [convention over configuration](https://handbook.gitlab.com/handbook/product/product-principles/#convention-over-configuration).
- **Access:** Which type of user is responsible for making configuration decisions? Only specific [roles](https://docs.gitlab.com/ee/user/permissions.html) can manage settings. Avoid placing a setting only in the Admin area, as only Administrators on self-managed instances can view it.
- **Availability:** In which namespace should this setting be available? There is a difference in [functionality between user and group namespaces](https://docs.gitlab.com/ee/user/namespace/#types-of-namespaces).
- **Flexibility and control:** Is this setting intended to set a default value or enforce a specific configuration? A setting's wording and UI elements should reflect its capability.
- **Inheritance:** Will a child namespace inherit its values from its parent namespace? While there is a standardized model for implementing [cascading settings](https://docs.gitlab.com/ee/development/cascading_settings.html), it does not solve all configuration challenges.
- **Relationship:** How does this setting relate to others? Evaluating where users expect to find it in a workflow or user journey can help identify effective placement.

## Patterns

The current settings structure is less than ideal, which means most solutions have drawbacks. The combination of powerful administration features with simple configuration options can result in an overwhelming and complex user experience. It requires a strong familiarity with GitLab's structure and feature set.

There is no perfect solution that will address all usability challenges with settings, so a reasonable approach is to examine what already exists for extrapolation. This section outlines patterns that can optimize the user experience of settings within the given constraints.

### Clarify setting restrictions

A user should never wonder why they cannot change something.

- If a setting depends on another configuration or is limited to a specific role, then provide an explanation to minimize the need for cross-referencing documentation.
- A parent setting should indicate if it can be overridden, which may require adding informative text.
- If a child setting is inherited and not changeable, clearly indicate that in the UI. One pattern for indicating this restriction is to disable the child setting and introduce a [popover](/components/popover) or [tooltip](/components/tooltip) to explain why the setting isn't editable.

<figure-img label="Example of locked setting" src="/img/locked-setting-example.png"></figure-img>

### Changes should be saved in a sensible manner

Ideally, the experience of saving a settings selection should be consistent, but not all settings can be treated the same. The impact of a change to a theme color is far less consequential than an adjustment to the default branch. The necessity for a `Save changes` button should match the expected user experience.

Full guidelines for [saving progress](/usability/saving-and-feedback#saving-progress) are described separately, but remember never to use a combination of manual and auto-save within the same form.

### Shortcuts to relevant settings

To make configuration options more discoverable, add links to relevant settings from the feature page.

- Add a cross-link to the top right corner of a page, below the breadcrumbs. This placement sets the expectation that the settings apply only to that specific feature.
- Redirect a user to the specific configuration section in the dedicated settings area. For example, a user who selects the settings link on the **Package Registry** page will be redirected to the **Settings / Packages and registries** section.
- It's recommended to use the icon-only [button](/components/button/#icon-only-buttons), with the [settings icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=settings) and a [tooltip](/components/tooltip) stating, "Configure in settings."

<figure-img label="Settings button with tooltip on hover" src="/img/settings-hover.svg"></figure-img>

## Additional guidance

### Avoid new navigation entries

Proposals to add new setting pages to the navigation sidebar often aim to boost discoverability. To increase discoverability, consider the use of in-page [shortcuts](#shortcuts-to-relevant-settings) to highlight settings elsewhere. Any changes to the navigation should be justified through an [evaluation](https://handbook.gitlab.com/handbook/product/ux/navigation/#how-do-i-evaluate-navigation-changes) to prevent bloat.

### Check the URL structure

Thoughtfully construct the URL to match the page it maps to since it will be painful to change later.

### Maintain consistency and adhere to the knowledge structure

Consider settings as features that introduce capabilities into GitLab, so consistency and logical organization are crucial for effective settings management. Users expect to find settings in predictable locations, so it's important to integrate each one within the broader information architecture.

- Group related options logically and position them where users would intuitively look for them.
- Ensure consistent placement of settings across different GitLab areas (such as Admin area, group, project, and user settings).
- Align the UI treatment with similar configuration options throughout the product.
- When you introduce new settings or capabilities, adhere to the [established knowledge structure](https://handbook.gitlab.com/handbook/product/product-principles/#principled-adherence-to-the-established-knowledge-architecture).

### Avoid direct links to docs

It is not an encouraged pattern to link to documentation from settings, because the UI should be self-explanatory. Follow [when to use a link to documentation](/usability/contextual-help#when-to-use-a-link-to-documentation) for guidance.

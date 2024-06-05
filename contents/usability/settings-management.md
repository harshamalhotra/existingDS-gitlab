---
name: Settings management
related:
  - accordion
  - /usability/navigation-sidebar
  - /content/ui-text
  - /usability/saving-and-feedback
---

Settings allow users to control how the platform's features or capabilities should behave or appear. They are configurable options and attributes, which present choices to the user to modify baseline functionality.

Admin, groups, projects, and users have dedicated areas to aggregate their settings. [Permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) dictate which settings users have access to.

## Considerations

### Implementation

When considering how to construct a setting within the product, use these questions to help guide your decision-making:

- **Access:** Which type of user is responsible for making configuration decisions? Only specific [roles](https://docs.gitlab.com/ee/user/permissions.html) can manage settings.
- **Availability**: In which [namespace](https://docs.gitlab.com/ee/user/namespace/#types-of-namespaces) should this setting be available?
- **Flexibility and control:** Is this setting intended to set a default value or enforce a specific configuration?

### Inheritance

A child namespace will typically inherit its values from its parent namespace. Inheriting values allows for rudimentary control over child namespaces and flexibility to deviate from default values. It may be required to clarify the state in the UI depending on how a setting will be inherited, controlled, adjusted, restricted, or banned.

#### Examples

- When a parent setting is overridable, making that clear in the parent setting's UI may necessitate adding informative text.
- When a parent setting is enforced, making this clear in the child setting's UI may require changing the child setting state to disabled and adding a lock icon with a [popover](/components/popover) to explain the nature of the restriction:

<figure-img label="Example of locked setting" src="/img/locked-setting-example.png"></figure-img>

### Surfacing settings

Consider making configuration options more discoverable to users by linking to settings from the feature page.

#### Pattern

<figure-img label="Settings button with tooltip on hover" src="/img/settings-hover.svg"></figure-img>

- Add a cross-link to the top right corner of a page, below the breadcrumbs. This placement sets the expectation that the settings apply only to that specific feature.
- It's recommended to use the icon-only [button](/components/button) with the [settings icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=settings) that, when hovered, shows a [tooltip](/components/tooltip) with the text `Configure in settings`.
- Redirect a user to the specific configuration section in the dedicated settings area. For example, navigating via the Package Registry page will end up on the **Settings > Packages & Registries** section in settings.

## Behavior

### Saving settings

To keep the experience of settings consistent, avoid using a combination of manual and auto-save in form options. Learn more about [saving progress](/usability/saving-and-feedback#saving-progress).

### User feedback

- Use an [alert](/components/alert) for validation messages that are not directly correlated with an input (for example, failures). These alerts utilize [in-page placement](/components/alert#placement) when data is saved asynchronously.
- Use a [toast](/components/toast) for success messages that provide immediate confirmation of an action (for example, saving).

## Structure

<figure-img label="Example of settings layout" src="/img/settings-1-column.png"></figure-img>

- Settings should appear stacked in a single column.
- Related settings should be grouped together into expandable sections. Use a title and a brief explanation of what users should expect when a section is expanded. Configuration of settings can happen directly within a section or can be deferred to a linked, secondary screen following the principles of [progressive disclosure](/usability/progressive-disclosure) to avoid overwhelming users and impacting the page performance.
- Horizontal separators are placed between each section to give elements enough room to breathe.
- When a settings page contains multiple sections, each section header remains sticky on scroll to provide context.
- Setting form elements use the [form layout sizes](/patterns/forms#layout).
- A sticky footer containing action buttons (for example, Save and Cancel) should appear when a setting has been changed.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

<todo>Add Figma specs for settings</todo>

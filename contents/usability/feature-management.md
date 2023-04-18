---
name: Feature management
related:
  - /patterns/forms
---

## Configuration

Disabling unwanted [features is possible in projects](https://docs.gitlab.com/ee/user/project/settings/#sharing-and-permissions), but adding more to this list is not recommended. Disabled features may adversely impact the the [System Usability Scale](https://about.gitlab.com/handbook/engineering/ux/performance-indicators/system-usability-scale/), since it may lead to an unexpected and inconsistent user experience. Admin users cannot disable features at the instance or group levels, as they do not know what functionality end users may need.

## Discovery moments

Feature discovery moments are notices presented in the UI that inform users of additional features. These could be features available in higher tiers, or free features that unlock significant value to users. These notices are contextual and immediately dismissable. Contextual notices relate directly to an action that a user or namespace has performed. Once dismissed, the notice does not reappear unless the user attempts to re-engage with that feature. Re-engaging with a dismissed feature discovery moment might include clicking on a page that contains a locked feature, or clicking on a badge or placeholder. Acceptable patterns for feature discovery moments will be added here as they are tested and approved.

Use discovery moments to promote features that aren't in use rather than to introduce new interactions on features already in use. When thinking about whether to introduce a discovery moment, consider the following:

* Why does this feature need to be promoted? Is it a value driver that leads to an increase in conversion?
* Is it possible to design the feature so that it doesn't need to be actively promoted? 
* Does the discovery moment need to be shown to all users or only a subset? Who is the target [user persona](https://about.gitlab.com/handbook/marketing/strategic-marketing/roles-personas/#user-personas) or user role?
* If a feature is already being promoted on the page, will the new notice compete with it? Should it replace it instead?
* If two features need a discovery moment, can they be bundled into one? This may be possible, for example, if they are part of the same [Job to be Done](https://about.gitlab.com/handbook/engineering/ux/jobs-to-be-done/).

Use input data to determine where, when, and why a feature discovery moment is needed. After introducing a feature discovery moment, measure its effect on both conversion and feature adoption before making it a permanent part of the product.

### Highlighting higher tier features

Higher tier features should be easy to identify from the rest of the interface. Consider using the following badge to highlight them: 

<figure-img alt="Premium feature badge" label="Higher tier feature badge" src="/img/higher-tier-feature-badges.svg"></figure-img>

<todo>Replace badge image with live example or link once the new variant has been added to GitLab UI.</todo>
 
#### Specification

* Component name: [`GlBadge`](https://design.gitlab.com/components/badge/code)
* Variant: `Tier`
* Size: `MD`
* Icon: `16`

#### How to use

* Ensure there is a clear connection between the badge and the feature being highlighted. For example, place the badge next to the name of the feature.
* When using the icon only badge, use a [tooltip](/components/tooltip) to display the tier name.
* Tier badge should only be displayed if the active plan is lower than that of the feature. For example if the active plan is Ultimate, and the related feature is also Ultimate, there is no need to display the tier badge.
* For trials, the tier badge should always be displayed.

#### Behaviour

* Links to [tiers details](https://about.gitlab.com/pricing/).
* Can be removed from the UI via group or instance level settings.

<todo>Add links to the documentation.</todo>

### Highlighting feature versions

Similar to higher tier features, feature versions like Experiment and Beta should be easily identifiable. When a feature can be enabled via a setting, consider adding a badge next to the setting header. Include a link
to the [feature management documentation](https://docs.gitlab.com/ee/policy/alpha-beta-support.html) in a [popover](/components/popover).

| Experiment | Beta |
| ------ | ------ |
| Features in [Experiment](https://docs.gitlab.com/ee/policy/alpha-beta-support.html) aren't fully tested and may break. | Features in [Beta](https://docs.gitlab.com/ee/policy/alpha-beta-support.html) may still contain bugs or inconsistencies. |
| <figure-img label="Experiment feature badge" src="/img/experiment-feature-badge.svg"></figure-img> | <figure-img label="Beta feature badge" src="/img/beta-feature-badge.svg"></figure-img> |

#### Specification

* Component name: [`GlBadge`](https://design.gitlab.com/components/badge/code)
* Variant: `Info`
* Size: `MD`

#### How to use

* Ensure there is a clear connection between the badge and the feature being highlighted. For example, place the badge next to the name of the feature.
* When the feature becomes Generally Available, make sure the badge is removed.

## Visibility

Feature visibility is dependent on a user's permissions or subscription levels, and on which features they've chosen to enable.

### When to hide a feature

* A feature is hidden when the user shouldn't have access to it due to a lack of permissions. Hiding the feature is recommended because the user doesn't need to be aware of the functionality, and there is no UI that would allow them to obtain access. For example, we should hide the delete branch button if the user's role does not allow deletion of branches.

### When to keep a feature visible

* When the user has access to a feature but it's not currently enabled. In this scenario, a feature may be visible but disabled. When a feature is disabled, there should be an explanation for why it's disabled, or controls that allow a user to enable or request access to the feature.
* When child-level settings are enabled from a parent level. In this scenario, a feature may be disabled or replaced with a read-only equivalent. There should be text explaining that the setting is configured at the parent level.
* Avoid using a [tooltip](/components/tooltip) to explain why an element is disabled as keyboard users can't move focus to the trigger to reveal the message. Exposing the message in the UI is preferred. For example, instead of disabling the merge button on a merge request with outstanding approvals, the button is replaced with copy to explain the state, _Merge blocked: all required approvals must be given_.

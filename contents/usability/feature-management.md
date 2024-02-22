---
name: Feature management
related:
  - /patterns/forms
  - /usability/feature-discovery  
---

## Configuration

Disabling unwanted [features is possible in projects](https://docs.gitlab.com/ee/user/project/settings/#sharing-and-permissions), but adding more to this list is not recommended. Disabled features may adversely impact the the [System Usability Scale](https://about.gitlab.com/handbook/engineering/ux/performance-indicators/system-usability-scale/), since it may lead to an unexpected and inconsistent user experience. Admin users cannot disable features at the instance or group levels, as they do not know what functionality end users may need.


## Discovery moments

[Feature discovery](/usability/feature-discovery) moments are notices presented in the UI that inform a user of additional features. These could be features available in higher tiers, or free features that unlock significant value to a user. 


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

Experiment and Beta features are subject to legal terms, which must be displayed next to the settings to enable said feature. Use the following UI text:

| Number of features | Group setting | User setting |
|-|-|-|
| Single | When you enable this feature, you accept the [GitLab Testing Agreement](https://handbook.gitlab.com/handbook/legal/testing-agreement/). | Subject to the [GitLab Testing Agreement](https://handbook.gitlab.com/handbook/legal/testing-agreement/). |
| Multiple | When you enable any of these features, you accept the [GitLab Testing Agreement](https://handbook.gitlab.com/handbook/legal/testing-agreement/). | These features are subject to the [GitLab Testing Agreement](https://handbook.gitlab.com/handbook/legal/testing-agreement/). |

<figure-img label="Example of legal disclaimer" src="/img/legal-disclaimer-exp-beta.svg"></figure-img>

Similar to higher tier features, feature versions like Experiment and Beta should be easily identifiable, using a [badge](/components/badge/) with an explanation in a [popover](/components/popover):

| Experiment | Beta |
| ------ | ------ |
| <figure-img label="Experiment feature badge" src="/img/experiment-feature-badge.svg"></figure-img> | <figure-img label="Beta feature badge" src="/img/beta-feature-badge.svg"></figure-img> |
| <strong>What's an Experiment?</strong><br>An Experiment is not yet production-ready, but is released for initial testing and feedback during development. <br><br>Experiments:<ul><li>Might be unstable or cause data loss.</li><li>Are not supported and might not be documented.</li><li>Could be changed or removed at any time.</li><li>Are subject to the <a href="https://handbook.gitlab.com/handbook/legal/testing-agreement/">GitLab Testing Agreement</a>.</li></ul> | <strong>What's a Beta feature?</strong><br>A Beta feature is not yet production-ready, but is ready for testing and unlikely to change significantly before it's released.<br><br>Beta features:<ul><li>Have a low risk of data loss, but might still be unstable.</li><li>Are supported on a commercially-reasonable effort basis.</li><li>Have a near complete user experience.</li><li>Are subject to the <a href="https://handbook.gitlab.com/handbook/legal/testing-agreement/">GitLab Testing Agreement</a>.</li></ul> |

<todo>Replace badges with live example or link once a dedicated component has been added to GitLab UI.</todo>
#### Specification

* Component name: [`GlBadge`](https://design.gitlab.com/components/badge/code)
* Variant: `neutral`
* Size: `md` or `sm`

#### How to use

* Ensure there is a clear connection between the badge and the feature being highlighted. For example, place the badge next to the name of the feature. 
* When placing the badge, consider the available space and opt for a small badge if needed. The badge can be displayed either before or after the user interacts with the feature.
* When the feature becomes Generally Available, make sure the badge is removed.  

## Visibility

Feature visibility is dependent on a user's permissions or subscription levels, and on which features they've chosen to enable.

### When to hide a feature

* A feature is hidden when the user shouldn't have access to it due to a lack of permissions. Hiding the feature is recommended because the user doesn't need to be aware of the functionality, and there is no UI that would allow them to obtain access. For example, we should hide the delete branch button if the user's role does not allow deletion of branches.

### When to keep a feature visible

* When the user has access to a feature but it's not currently enabled. In this scenario, a feature may be visible but disabled. When a feature is disabled, there should be an explanation for why it's disabled, or controls that allow a user to enable or request access to the feature.
* When child-level settings are enabled from a parent level. In this scenario, a feature may be disabled or replaced with a read-only equivalent. There should be text explaining that the setting is configured at the parent level.
* Avoid using a [tooltip](/components/tooltip) to explain why an element is disabled as keyboard users can't move focus to the trigger to reveal the message. Exposing the message in the UI is preferred. For example, instead of disabling the merge button on a merge request with outstanding approvals, the button is replaced with copy to explain the state, _Merge blocked: all required approvals must be given_.

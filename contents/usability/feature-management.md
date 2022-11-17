---
name: Feature management
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

<figure class="figure" role="figure" aria-label="Higher tier feature badge">
  <img class="figure-img" src="/img/higher-tier-feature-badges.svg" alt="Premium feature badge" role="img" />
</figure>

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

### Highlighting Alpha and Beta features

Similar to higher tier features, Alpha and Beta features should be easily identifiable. When a feature can be enabled via a setting, consider adding a badge next to the setting header. Include a link
to the [feature management documentation](https://docs.gitlab.com/ee/policy/alpha-beta-support.html) in a [popover](/components/popover).

| Alpha | Beta |
| ------ | ------ |
| Features in Alpha aren't fully tested and may break. | Features in Beta may still contain bugs or inconsistencies. |
| <figure class="figure" role="figure" aria-label="Alpha feature badge"><img class="figure-img" src="/img/alpha-feature-badge.svg" alt="Alpha feature badge" role="img" /></figure> | <figure class="figure" role="figure" aria-label="Beta feature badge"><img class="figure-img" src="/img/beta-feature-badge.svg" alt="Beta feature badge" role="img" /></figure> |

#### Specification

* Component name: [`GlBadge`](https://design.gitlab.com/components/badge/code)
* Variant: `Info`
* Size: `MD`

#### How to use

* Ensure there is a clear connection between the badge and the feature being highlighted. For example, place the badge next to the name of the feature.
* When the feature is no longer Alpha or Beta, make sure the badge is removed.

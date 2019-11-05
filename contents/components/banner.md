---
name: Banner
related:
  - alert
  - broadcast-message
  - empty-states
---

Banners promote user awareness for new or unused features. Unlike [alerts](/components/alert), banners are solely for in-product marketing, conveying information about a priority feature to the user.

## Usage

Designating the use of a banner should be the result of careful consideration and planning between a Designer and their Product Manager. Reserve the use of banners for high priority features and configurations that would benefit the user to activate. Banners can be placed either inline with the content or at the top of a page. The location is flexible depending on the promotion and the context in which the promotion is taking place.

### When to use banners

Use banners to:

* Inform a user of a feature that has yet to be enabled. For example, Auto DevOps.
* Promote a new feature. For example, a free trial of GitLab Ultimate by featuring the new squash commit functionality in merge requests.

### When not to use banners

Do not use banners to:

* Communicate when a feature has not yet been configured or used. For example, when the security dashboard needs further setup or no issues have been added to a project. Instead, use an [empty-state](https://design.gitlab.com/regions/empty-states).
* Give tips and hints on the use of a feature. For example, configuring a review app. Instead, use a tip style [alert](/components/alert).

### Dos and Dont's

| Do | Don't |
| ------ | ------ |
| Use to promote a new or unconfigured feature. | Use to communicate system status or events to the user. Instead, use an [alert](/components/alert). |
| Allow banners to be dismissible. | Use banners to communicate instruction or critical information that should not be dismissible by a user. |
| Use sparingly and with consideration of other components in proximity. | Overuse and clutter the experience with promotions. |
| Display to users who can take immediate action if they desire. | Display to users who cannot activate the feature or benefit from its use. |
| Use a single action-oriented button as the only call to action. | Use multiple buttons or text links as primary actions. |

### Specifications

#### Container

Use a container to bound the banner within the page or page section. This is important for dismissible elements as it gives the banner a temporal visual affordance, indicating to users that this component is not permanent.

#### Dismiss action

The dismiss action is always represented by the `Close` icon and anchored to the top right of the banner.

#### Header

The header should always be present and written to follow our [voice and tone](https://design.gitlab.com/content/voice-tone/) guidelines.

#### Paragraph

The supporting text should be concise and only include information specific to what is being promoted. The content should also follow our [voice and tone](https://design.gitlab.com/content/voice-tone/) guidelines.

#### Illustration *(optional)*

A small illustration may be used but is optional. Keep in mind size and placement when including an [illustration](https://design.gitlab.com/product-foundations/illustration).

#### Call to action

A banner should always include a [button](https://design.gitlab.com/components/buttons) as the primary call to action. Avoid using multiple buttons and linking the user to different pages. An exception can be made in cases where we need to [help users](https://design.gitlab.com/usability/helping-users) by linking to documentation.

## Demo

Todo: add banner example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for Banners](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/banners-spec-previews/)

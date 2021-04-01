---
name: Banner
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A4
docs: complete
vueComponents:
  - GlBanner
related:
  - alert
  - broadcast-message
  - button
  - empty-states
---

Banners promote user awareness for new features or high-priority research initiatives. Unlike [alerts](/components/alert), banners are solely for in-product marketing or for conveying information about a priority feature or study to the user.

## Usage

Reserve banners for high priority features or initiatives that benefit the user. Banners can be placed either inline with the content or at the top of a page depending on the promotion and the context.

### When to use banners

Use banners to:

- Inform a user of a feature that has yet to be enabled. For example, Auto DevOps.
- Promote a new feature. For example, a free trial of GitLab Ultimate featuring the new squash commit functionality in merge requests.
- Solicit user feedback. For example, evaluating a set of new features to help prioritize your roadmap through a survey. 

### When not to use banners

Do not use banners to:

- Communicate when a feature has not yet been configured or used. For example, when the security dashboard needs further setup or no issues have been added to a project. Instead, use an [empty-state](https://design.gitlab.com/regions/empty-states).
- Give tips and hints on the use of a feature. For example, configuring a review app. Instead, use a tip style [alert](/components/alert).

### Dos and Dont's

| Do | Don't |
| ------ | ------ |
| Use to promote a new or unconfigured feature. | Use to communicate system status or events to the user. Instead, use an [alert](/components/alert). |
| Allow banners to be dismissible. | Use banners to communicate instruction or critical information that should not be dismissible by a user. |
| Use sparingly and with consideration of other components in proximity. | Overuse and clutter the experience with promotions. |
| Display to users who can take immediate action if they desire. | Display to users who cannot activate the feature or benefit from its use. |

### Specifications

#### Container

Banners appear within containers in the page or section. This is important for dismissible elements as it gives the banner a temporal visual affordance, indicating to users that this component is not permanent.

#### Dismiss

Users are able to permanently dismiss banners by default. Banners may also be dismissed temporarily, depending on the use case.

##### Permanent dismissal

The dismiss action is always represented by the `Close` icon and anchored to the top right of the banner.

Banner dismissal should work as follows:
* Banner dismissal must be associated with the user in the system database. Dismissal must persist, even across version upgrades and clients.
* Banners do not reappear by default. In rare circumstances, you may present the banner again to a user after some time has passed.
* Banners should only be shown to users who are logged in.

**Implementation Notes:**
* The dismissal of the banner is achieved using the `UserCallout` model on the backend and the `PersistentUserCallout` JS file on the frontend. If both parameters are implemented correctly, the banner will adhere to the dismissal guidelines above.

##### Temporary dismissal
To introduce temporary dismissal, include a secondary or tertiary button placed alongside the primary action button. Follow the [button](/components/button#alignment-and-order) alignment and order guidelines.

Temporary dismissals should work as follows: 
* Banners dismissed temporarily will reappear after **7 days**.
* After a banner is dismissed temporarily, use a [toast](/components/toast) message to let the user know they will see the banner again in 7 days.

TODO: Include implementation notes, see [#839](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/839)

#### Header

The header should always be present and written to follow our [voice and tone](https://design.gitlab.com/content/voice-tone/) guidelines.

#### Paragraph

The supporting text should be concise and only include information specific to what is being promoted. The content should also follow our [voice and tone](https://design.gitlab.com/content/voice-tone/) guidelines.

#### Illustration *(optional)*

A small illustration may be used but is optional. Keep in mind size and placement when including an [illustration](https://design.gitlab.com/product-foundations/illustration).

#### Call to action

A banner should always include a [button](https://design.gitlab.com/components/button) as the primary call to action. Avoid using multiple buttons to link the user to different pages. An exception can be made in cases where we need to [help users](https://design.gitlab.com/usability/helping-users) by linking to documentation or allowing the user to temporarily dismiss the banner.

## Demo

### Basic Introduction

[[Example:banner-introduction]]

### Promotion with Illustration

[[Example:banner-promotion-illustration]]

### Basic Promotion

[[Example:banner-promotion]]


## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4845%3A7873)

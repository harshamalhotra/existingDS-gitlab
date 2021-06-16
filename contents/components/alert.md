---
name: Alert
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A1
docs: complete
gitlab_ui: /components/alert/code
vueComponents:
  - GlAlert
related:
  - broadcast-message
  - form
  - toast
---

Alerts provide relevant information to the user without impeding their task. Alerts are system generated and may or may not result from a user's action.

## Usage

### When to use an alert

Determining which alert variant to use can sometimes be tricky. See the purpose and examples for each variant below to get a better understanding of when to use each.

| Variant | Purpose | Example |
| ------ | ------ | ------ |
| Danger | Advise the user that their attention is needed to address or be aware of a critical issue that relates to the current context. | A danger alert appears when there is a configuration issue with the **.gitlab-ci.yml** file. |
| Warning | Caution the user that their attention or action may be needed within the current context, but it may not be critical. | A warning alert appears when the user has added an SSH key that doesn't appear to be public. |
| Success | Reaffirm to the user that a prior action they have taken, often in a different location within the application, has been successful. | A success alert appears in the pipeline view after the user activates SAST using the Web IDE and the SAST job runs properly for the first time. |
| Information | Provide supplemental information to the user in regards to the current context or action they are about to take. | An information alert appears in **Settings/Export-project** to detail what will happen when a project is exported. |
| Tip | Educate the user about new or unused features, and other useful information. | A tip alert appears in **Operations/Kubernetes** to make the user aware of a GCP credit offer. |

[[Example:alert-variants]]

### When not to use an alert

There are times when using a component other than an alert is necessary to provide the best experience. See the purpose and examples for the following components to get a better idea of when not to use an alert and what to use instead. 

| Component | Purpose | Example | Why an alert was not used |
| ------ | ------ | ------ | ------ |
| [Broadcast Message](/components/broadcast-message) | Deliver critical, user-generated messages to all users. | A broadcast message is present when an admin relays a critical message to all users at the instance level. | Broadcast messages are created by an admin and not the system. System-generated and user-generated messages are visually differentiated, so a broadcast message is used in this case. |
| [Validation error](/components/form#validation) | Notification of invalid data. | An error message appears when invalid characters are entered into a form field. | A validation error is tied to a specific invalid data that the user entered or left empty. An alert should be present though to indicate that a validation error has occurred. See the [accessibility](#accessibility) section for details. |
| [Toast](/components/toast) | Immediate confirmation of an action. | A toast appears when a vulnerability is dismissed and no longer appears in a list. |  A toast message immediately affirms that the system recognized the action and that no further action is needed. |

### Placement

#### Global

A global alert impacts the entire experience, is full-width, and is placed directly below the navigation bar. For example, after a user has authenticated an alert appears that states, “Your subscription has expired.”

<figure class="figure" role="figure" aria-label="Full-width danger alert under the global navigation and above the contextual navigation">
  <img class="figure-img" src="/img/alert-global.png" alt="Global alert position" role="img" style="width:100%; max-width:332px; height:auto" />
  <figcaption class="figure-caption">Full-width danger alert under the global navigation and above the contextual navigation</figcaption>
</figure>

#### Page-level

A page-level alert appears at the top of a page, directly below the navigation bar and above the breadcrumbs. For example, an alert on an issue page might state, “Something went wrong while fetching latest comments.” Page-level alerts are restricted to the content container width which can be either fixed or fluid, depending on user’s preference.

<figure class="figure" role="figure" aria-label="Page-level alert in the main content area with space above and below">
  <img class="figure-img" src="/img/alert-page-level.png" alt="Page-level alert position" role="img" style="width:100%; max-width:332px; height:auto" />
  <figcaption class="figure-caption">Page-level alert in the main content area with space above and below</figcaption>
</figure>

#### In-page

Place an alert within a section of the page when the message is specific to that content. For example, an alert that states “You have used 50374 out of 50000 of your shared Runners pipeline minutes” within an individual CI/CD job page. 

<figure class="figure" role="figure" aria-label="In-page alert contextually placed with space above and below">
  <img class="figure-img" src="/img/alert-in-page.png" alt="In-page alert position" role="img" style="width:100%; max-width:332px; height:auto" />
  <figcaption class="figure-caption">In-page alert contextually placed with space above and below</figcaption>
</figure>

#### Sticky positioning

A "sticky" alert uses `position: sticky` to keep critical information in view as the page scrolls. It can be helpful when an alert is added without a page refresh and its position would otherwise be out of view. This typically is reserved for errors, as they need to be addressed by users. Only one sticky alert should be used at a time.

### Multiple alerts

Multiple alerts should be avoided if at all possible, but if necessary ensure the [placement](#placement) of each is in the same context as the content it relates to. When multiple alerts are present in the same location, order them from most to least severe.

## Specifications

### Alert structure

All copy within an alert should be short, actionable, and use clear language. Be sure to keep translations in mind when writing copy.

<figure class="figure" role="figure" aria-label="Alert structure">
  <img class="figure-img" src="/img/alert-diagram.svg" alt="Numbered diagram of an alert structure" role="img" />
</figure>

1. **Icon**
   - Each variant has an icon (required) associated with it:
     - [error](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~error) icon for error and danger alerts.
     - [warning](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~warning) icon for the warning alert.
     - [check-circle](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~check-circle) icon for the success alert.
     - [information-o](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~information-o) icon for the information alert.
     - [bulb](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~bulb) icon for the tip alert.
1. **Title**
   - A title (optional) conveys what event triggered the alert.
   - Be brief and keep the title to a single line by utilizing a sentence fragment.
   - Avoid using punctuation such as periods, commas, or semicolons.
   - Use a full stop only when the title is a full sentence.
1. **Dismissal**
   - A close (×) button (optional) positioned at the top right closes an alert.
   - An alert can be permanently dismissed by a user with an explicit [action button](#actions) only when the alert relates to their individual instance and wasn't triggered by a system condition.
   - Allow an alert to be dismissed when a task isn't blocked if no action is taken.
   - Don't use a dismiss button or action when the user is prevented from completing a task until a system-condition is met.
   - Dismissible alerts can be removed by the user and can reappear if an action or system event reproduces the alert.
   - Non-dismissible alerts can only be removed after a system condition is met.   
   - Alerts may contain a dismiss action (in addition to the close button), as well as an additional action button below the body content, depending on the use case.
   - By default, if a user dismisses an alert, it won't show again unless they're on a different device.
1. **Message**
   - Alert body copy (required) clarifies what needs to be done. For example, providing next steps, troubleshooting actions, or links to learn about or remedy the event that triggered the alert.
   - Avoid paraphrasing the title if one is included. Write the body copy as if the title was the first sentence of this message.
   - Keep to one or two sentences when possible.
   - Use sentence case and appropriate punctuation based on our [punctuation guidelines](/content/punctuation). 
1. **Actions**
   - Buttons (optional) can be used to provide explicit action(s) the user can take to either remedy the alert or continue with a task.
   - Up to two actions can be used at a time where the primary action uses the info button variant and the secondary action uses the default button variant.
   - Buttons are always left aligned, except in right-to-left languages where they are right aligned and the order is the same. See [button alignment and order](/components/button#alignment-and-order) for more details.

### Design

- The contents of an alert are constrained by a `max-width` variable that:
  - Prevents the line length (measure) of the text from being too wide and impacting readability.
  - Keeps short alert content and the close button more central in the layout, preventing it from getting lost in a user's peripheral vision or too stretched out in a wide viewport.
  <figure class="figure" role="figure" aria-label="An alert background fills container width after content reaches max-width">
    <img class="figure-img" src="/img/alert-max-width.png" alt="Alert with left and right content edges marked to show max-width" role="img" style="width:100%; max-width:332px; height:auto" />
    <figcaption class="figure-caption">An alert background fills container width after content reaches max-width</figcaption>
  </figure>
- Color, spacing, dimension, and layout information can be viewed in the [Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A278)

### Accessibility

- Alerts should receive focus and leverage `aria-live` to announce their presence and allow a user to interact with them immediately.
- Ensure that if sticky positioning is used the user can still access and view focusable elements they may be covering.
- Alerts are separate from, but complimentary to [validation](/components/form#validation) error messages. In this way an alert announces that there are validation errors and links a user to each instance.
<figure class="figure" role="figure" aria-label="An alert that links to form errors">
  <img class="figure-img" src="/img/alert-form-validation.png" alt="Alert with arrow pointing to an input with an error" role="img" style="width:100%; max-width:332px; height:auto" />
  <figcaption class="figure-caption">An alert that links to form errors</figcaption>
</figure>

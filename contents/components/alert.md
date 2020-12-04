---
name: Alert
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A1
docs: complete
vueComponents:
  - GlAlert
related:
  - broadcast-message
  - form
  - toast
---

Alerts allow the application to pass along relevant system information to the user without impeding their journey. Alerts are system generated and may or may not be derived by a user's action. They are not [validation](/components/form#validation) error messages, nor are they feedback notifications after the user takes action — see [toasts](/components/toast) for more information.

## Usage

| Component type | Purpose |
| --- | --- |
| Error alert | To indicate that an action has failed. |
| Danger alert | To advise the user that their attention is needed to address a critical issue in the system. |
| Warning alert | To caution the user that their attention may be needed due to an issue in the system, however, it is not critical that they take action. |
| Information alert | To provide supplemental information to the user in regards to the action they are about to take. | 
| Tip alert | To educate the user about new or unused features, and other useful information. |
| Success alert | To reaffirm to the user that a prior action they have taken, often in a different location within the application, has been accepted by the system. |

### Actionable

Where possible, ensure alerts are actionable so they can be easily resolved.

### Dismissal

Alerts may contain a dismiss action, as well as an additional action button, depending on the use case.

#### Dismissible alerts

Dismissible alerts can be removed by the user and can reappear if an action or system event reproduces the alert.

Use dismissible alerts when the user's task is not blocked if they do not take action.

- The user dismisses a system-generated alert notifying them their `.gitlab-ci.yml` config file has an issue. Alert reappears the next time the config problem stops a process from running.

#### Non-dismissible alerts

Non-dismissible alerts can only be removed after a system condition is met.

Use non-dismissible alerts when the user is prevented from completing a task until a system-condition is met.

- The user encounters an alert notifying them their license has expired. The alert is only removed when they have uploaded a new license in the admin area.

### Page-level alerts

Place alerts on top of the page when they’re referring to something that happened on the page level, “Something went wrong while fetching latest comments.” on the issue page, for example. These alerts should be placed directly below the navigation bar and above the breadcrumbs with vertical spacing on top and bottom to separate it from the page content. Page-level alerts never appear below the breadcrumbs. Additionally, error alerts can be made sticky to make it more likely that the user notices them. The width of the page-level alerts should be restricted to the content container width which can be either fixed or fluid, depending on user’s preference.

### Global alerts

Use a global alert when something affects the system at large. For example, “Your subscription has expired.” Global alerts are triggered by the system, and not by an admin. They’re positioned the same as page-level alerts, but they should be full width instead of being constrained by the page’s content container width. They should have top and bottom margin to separate the alert from other page content.

### Embedded alerts

Place alerts within a section of the page or UI element when the user needs to be informed of the status of that particular area the alert is referring to. For example, if we want to show an alert inside a modal we first need to know its purpose. If the alert is informing the user of what will happen once they confirm an action by clicking the primary button in that modal, placing the alert at the bottom of the modal and above the action bar is the best option here. In most cases, sticky alerts should not be used.

### When to use alerts

Alerts should be used when the system needs to notify the user of its status or to provide the user with information about their current experience. Deciding when to use a broadcast message, error, toast, or an alert can be tricky. See the below use cases to get a better understanding of when to use an alert:

| Alert | Use case | Example |
| ----- | -------- | -------- |
| Error | Loading error | Use an error alert when the backend fails to load a long list of issue comments and the user must reload to try again. |
| Danger | Configuration issue | Use a danger alert when there is a configuration issue with the `.gitlab-ci.yml` file. |
| Warning | Potential issue | Use a warning alert when the user has added an SSH key that doesn't appear to be public. |
| Information | Provide supplemental information | Use an information alert in Settings/Export-project to detail what will happen when a user exports a project. |
| Tip | Promotional offer | Use a tip alert in Operations/Kubernetes to make the user aware of a GCP credit offer. |
| Success | Subsequent confirmation of a proper configuration | Use a success alert in the pipeline view after the user activates SAST using the Web IDE and the SAST job runs properly for the first time. |

### When not to use alerts

There are times when using an alternative component other than an alert is necessary to provide the best experience to the user. See the following use cases to get a better idea of when not to use an alert: 

| Component | Use case | Example | Why an alert was not used |
| ---- | ---- | ---- | ---- |
| [Broadcast Message](https://design.gitlab.com/components/broadcast-message) | Deliver critical, user-generated messages to all users | Use a broadcast message when an admin wants to relay a critical message to all users at the instance level. | Broadcast messages are created by an admin and not the system. We want to differentiate between system-generated and user-generated messages, hence a broadcast message is used in this case. |
| [Validation error](https://design.gitlab.com/components/form#validation) | Notification of an invalid action | Use an error when the user has entered invalid characters into the project name field. | A validation error is tied to a specific invalid action that the user performed, whereas danger alerts inform users of when something has gone wrong separate from any immediate action the user has taken. |
| [Toast](https://design.gitlab.com/components/toast) | Immediate confirmation of an action | Use a toast when the user has dismissed a vulnerability and it no longer appears in the list. |  We want to immediately reaffirm to the user the system recognized their action and that no further action is needed on their part. |

### Copy and content guidelines
All copy within an alert should be short, actionable, and use clear language. Be sure to keep translations in mind when writing copy. 

#### Titles

- Alert titles are optional. When used, they should convey to the user what event triggered the alert.
- Be brief. Keep titles to a single line by utilizing a sentence fragment.
- Avoid using punctuation such as periods, commas, or semicolons.
- Use a full stop only when the title is a full sentence. 


#### Body copy

- Alert body copy should clarify to the user what they need to do. For example, providing next steps, troubleshooting actions, or links needed for the user to learn about or remedy the event that triggered the alert.
- Avoid paraphrasing the title if one is included. Write the body copy as if the title was the first sentence of this message.
- Keep to one or two sentences when possible.
- Use sentence case and appropriate punctuation.


## Demo

The alert pattern is designed to be flexible and accounts for as many use cases as possible.

### Basic example

[[Example:alert-default]]

### Non-dismissible

[[Example:alert-non-dismissible]]

### With actions

[[Example:alert-actions]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A278)

---
name: Error messages
related:
  - form
  - alert
  - broadcast-message
  - banner
---

Error messages are an indication of system status. They let users know that they have encountered a problem and provide ways to resolve it, teaching them to avoid future impediments. Whenever possible, the system should keep potential errors to a minimum. See [error prevention](/usability/error-prevention) guidelines.

Error messages can be persistent, dismissible, or temporary. In order to be effective, error messages should be concise, specific, and consistent.

<todo>Add guidelines on when an error message should be persistent, dismissible, or temporary.</todo>

## Error message guidelines

### Concise

An error message should be helpful and clear. Describe the error, inform users about what has happened, and if possible, how to resolve it. The general [voice and tone](/content/voice-tone/#clear-error-messages) guidelines for GitLab’s public communications should apply to all error messages. An overly familiar tone of voice can be perceived as careless in the context of error resolution, especially if the error can't be easily resolved by the user.

Avoid using messages like:

- Whoops, GitLab is currently unavailable.

Instead, use messages like:

- An error occurred while importing the project to GitLab. For more information, see how to [import your project from GitHub to GitLab](https://docs.gitlab.com/ee/user/project/import/github.html).
- The project name must be 40 characters or fewer.
- Your email is required to sign up with GitLab.

### Specific

Generic error messages are not helpful, and they don't make sense out of context. Try to provide different errors for different messages and scenarios. For example, errors in text fields can be too long, too short, in the wrong format, and so on.

Error messages for specific situations are more helpful to users.

- `Your project title needs to have at least 3 characters` is more specific and direct than `Name is too short`.
- `Display name is required` is more specific than `Field is empty` and more succinct than `Your display name can't be blank`.

### Consistent

To reduce the cognitive effort needed from users to understand the error, use a contextual error message with the same phrasal structure for error messages. All messages should look, sound, and mean the same, according to the component they're displayed in.

Avoid writing different messages that have the same meaning:

- Your password needs to have at least 8 characters.
- Your password should not have less than 8 characters.
- Your password has fewer than 8 characters.

Instead, use the same phrasal structure for all messages:

- Your project title needs to have at least 3 characters.

## Error messages and scenarios

Error messages can be used in the following scenarios:

- Errors in forms: see [form validations](/components/form/#validation).
- Errors in the system or on a page: see [alert](https://design.gitlab.com/components/alert).

## Related patterns

- [Error prevention](/usability/error-prevention)
- [Helping users](/usability/helping-users)
- [Saving and feedback](/product-foundations/saving-and-feedback)

---
name: Terminology
---

For clear and consistent communication, it’s important to always use correct terminology.

You can find most terms in the [word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html) that's maintained by the Technical Writing team. If you do not see the term you need, open a merge request to add it, or contact a technical writer for assistance.

In addition:

- Search the product for the term before creating a new term.
- Be extremely cautious when using [jargon](https://examples.yourdictionary.com/examples-of-jargon.html) and [colloquialisms](https://www.quickanddirtytips.com/education/grammar/writing-with-slang). They can confuse new users and cause problems with internationalization.
- Consider [screen readers](https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/) and their ability to interpret non-standard terminology.

Use the following guidance in addition to the guidance in the word list.

## Settings & Configuration

The term "Settings" should be used within the product for consistent language.

| Do  | Don’t |
| --- |  ---  |
| Configure the settings. | Configure the configuration. |
| Set the `Show default award emojis` setting to `true`.  | Set the `Show default award emojis` property to `true`.<br />Set the `Show default award emojis` configuration to `true`. |
| The script deploys our setup configuration. | The script deploys our setup settings. |

### Settings

A setting changes the default behavior of the product. A setting consists of a key/value pair, typically represented by a label with one or more options.

### Configuration

A configuration is a collection of settings commonly associated with setup and installation to determine the foundation of execution.

### Preferences

Preferences are a collection of user-specific, system-level settings like theme and layout.

## Verbs & adjectives

When using verbs or adjectives:

If the context clearly refers to the object, use them alone.
- **Example:** `Edit` or `Closed`

If the context isn’t clear enough, use them with the object.
- **Example:** `Edit issue` or `Closed issues`

Destruction buttons should be clear and always say what they are destroying.
- **Example:** `Delete page` instead of just `Delete`

Buttons that copy content to the clipboard don’t need the “to clipboard” part.
- **Example:** `Copy branch name` instead of `Copy branch name to clipboard`

<todo>Add comprehensive list of terminology Do/Don’t</todo>

## Frequently confused words

### Authentication: sign in and sign-in

As noted in our [Documentation style guide](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html#sign-in),
we use `sign in` (verb) and `sign-in` (noun) instead of
`log in` (verb) and `login` (noun).

- **Usage:** You can _sign in_ using the _sign-in_ screen.
- **Related:** You can _sign out_ through the _sign-out_ screen.

### Download and Export

Use `Download` when saving a copy of data to the user's device. The data is already represented by files in GitLab.

- **Example:** I want to download pipeline artifacts.

Use `Export` when translating data into one (or more) standard format(s), which can then be imported elsewhere.
The data is _not_ represented by files in GitLab, but needs to be translated into files. Often there are some export
options to tweak the output. 

- **Example:** I want to export the content of a Vulnerability Report to CSV format.

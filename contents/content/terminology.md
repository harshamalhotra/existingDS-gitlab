---
name: Terminology
---

For clear and consistent communication, it’s important to always use correct terminology. Remember:

- If you’re unsure which term to use, look for existing terminology in the product.
- Never create a new term when an existing one is available to you.
- Be extremely cautious when using [jargon](https://examples.yourdictionary.com/examples-of-jargon.html) and [colloquialisms](https://www.quickanddirtytips.com/education/grammar/writing-with-slang). They can confuse new users and cause problems with internationalization.
- Consider [screen readers](https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/) and their ability to interpret non-standard terminology.

Following are common terms you will find throughout GitLab.

## Nouns

### Projects & Groups

#### Project

A project is where you house your files (repository), plan your work (issues), and publish your documentation (wiki).

#### Group

Groups allow you to assemble related projects together and grant members access to several projects at once. Groups can also be nested in subgroups.

#### Members

Use the term members when discussing the people who are a part of a project or a group. Don’t use the term users.

#### Roles

Users have different abilities depending on the access level they have in a particular group or project. These permission levels are defined under a set of roles. These roles include administrator, owner, maintainer, developer, reporter, and guest.

### Comments & Discussions

#### Comment

A comment is a written piece of text that users of GitLab can create. Comments have author and timestamp metadata. Comments can be added in a variety of contexts, such as issues, merge requests, and discussions.

#### Discussion

A discussion is a group of 1 or more comments. A discussion can include subdiscussions. Some discussions have the special capability of being able to be resolved. Both the comments in the discussion and the discussion itself can be resolved.

### Issues & Merge Requests

#### Issues

Issues can have endless applications. They allow you, your team, and your collaborators to share and discuss proposals before and while implementing them.

#### Merge Requests

Merge requests allow you to exchange changes you made to source code and collaborate with other people on the same project.

#### Milestones

Milestones in GitLab are a way to track issues and merge requests created to achieve a broader goal in a certain period of time. Milestones allow you to organize issues and merge requests into a cohesive group, with an optional start date and an optional due date.

#### Activity

Activity refers to any action taken by a user that results in the creation of a system note. Commenting, resolving/opening an issue, resolving/opening a merge request, and creating/deleting a branch are all types of activities.

### Settings & Configuration

The term "Settings" should be used within the product for consistent language.

| Do  | Don’t |
| --- |  ---  |
| Configure the settings. | Configure the configuration. |
| Set the `Show default award emojis` setting to `true`.  | Set the `Show default award emojis` property to `true`.<br />Set the `Show default award emojis` configuration to `true`. |
| The script deploys our setup configuration. | The script deploys our setup settings. |

#### Settings

A setting changes the default behavior of the product. A setting consists of a key/value pair, typically represented by a label with one or more options.

#### Configuration

A configuration is a collection of settings commonly associated with setup and installation to determine the foundation of execution.

#### Preferences

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

---
name: Contributing
---

Contributions are welcome to the [Pajamas UI Kit](/get-started/uik-file-structure). Contributions include bug fixes, component usability improvements, or updating component instances.

### Before You Start

1. Check the [issue tracker](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues) for an existing issue.
1. If no issue exists, [create a new issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Figma%20update) using the `Figma update` template. This template provides a helpful checklist to guide your work.
1. Refer to the [component](/get-started/uik-components) and [breaking change](/get-started/uik-breaking-changes) guides while working.

### Review requests

[Requesting a branch review](https://help.figma.com/hc/en-us/articles/5691414603543-Request-a-branch-review) from a [Figma maintainer](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/.gitlab/CODEOWNERS#L18) is part of the `Figma update` template.

The review request description field is used to automatically generate [release notes](https://design.gitlab.com/get-started/uik-release-notes). Use [comments](https://help.figma.com/hc/en-us/articles/360039825314-Guide-to-comments-in-Figma) to add additional context for reviewers and link to the related issue.

#### Description format rules

- Start each line with a hyphen `-`.
- Begin with one of these verbs: "Adds", "Enhances", "Changes", "Removes", "Fixes", or "Deprecates".
- Be clear and concise.

#### Examples

Do:

```markdown
- Adds multiple-choice icon
```

Don't:

```markdown
- Hey can you take a look at this? I added a new icon
```

#### Multiple-line merge descriptions

Additional details can be added after the first line. Subsequent lines don't need to start with action verbs:

```markdown
- Removes header property from Modal
- Header property is not optional in GitLab UI
- Updates instances to have realistic content
```

---
name: Contributing
---

Contributions are welcome to the [Pajamas UI Kit](/get-started/uik-file-structure). This page outlines different contribution pathways depending on your access level and relationship to GitLab.

**GitLab team members** with Figma organization access can directly contribute to the UI Kit files. **Wider community contributors** can contribute through alternative pathways as we cannot share edit access directly because of licencing and security restrictions. This means not all types of wider contribution are possible as the Figma implementation will always need to be completed by a GitLab team member and not all files are publically available.

## Contributing as a GitLab team member

<note>

**Figma Organization Access Required**: Contributing to the Pajamas UI Kit requires access to GitLab's paid Figma organization. This access is only available to GitLab team members with a designated Figma seat. The UI Kit files have dependencies on shared libraries, variables, and other assets that can only be accessed by members of our Figma organization.

</note>

Contributions include bug fixes, component usability improvements, or updating component instances.

### Before you start

1. Please review the [design system contribution process](/get-started/contributing).
1. Check whether an [existing issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues) already covers your contribution.
1. If one exists, add your work there; if not, [create a new issue with the Figma update template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Figma%20update). The template provides a checklist to guide your updates and ensures your work stays aligned with the design system process.
1. Refer to the [component](/get-started/uik-components) and [breaking change](/get-started/uik-breaking-changes) guides while working.

### Review requests

[Requesting a branch review](https://help.figma.com/hc/en-us/articles/5691414603543-Request-a-branch-review) from a [Figma maintainer](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/.gitlab/CODEOWNERS#L18) is part of the `Figma update` template.

The review request description field is used to automatically generate [release notes](https://design.gitlab.com/get-started/uik-release-notes). Use [comments](https://help.figma.com/hc/en-us/articles/360039825314-Guide-to-comments-in-Figma) to add additional context for reviewers and link to the related issue.

#### Description format rules

- Start each line with a hyphen `-`.
- Begin with one of these verbs: "Adds", "Enhances", "Changes", "Removes", "Fixes", or "Deprecates".
- Be clear and concise.

#### Examples

<grid>
  <do>
  
  ```markdown
  - Adds multiple-choice icon
  ```
  
  </do>
  <dont>

```markdown
- Hey can you take a look at this? I added a new icon
```

  </dont>
</grid>

#### Multiple-line merge descriptions

Additional details can be added after the first line. Subsequent lines don't need to start with action verbs:

```markdown
- Removes header property from Modal
- Header property is not optional in GitLab UI
- Updates instances to have realistic content
```

## Contributing as wider community contributor

If you are not a GitLab team member with access to our paid Figma organization, you cannot directly edit the Pajamas UI Kit files. However, there are still valuable ways to contribute to the design system:

### Getting started

1. **Explore the public resources**: Review the [Pajamas design system documentation](https://design.gitlab.com) and [community Figma files](https://www.figma.com/@GitLabDesign).
2. **Start a conversation**: Create an issue to discuss your ideas before investing significant time.
3. **Follow the contribution process**: Refer to the [design system contribution process](/get-started/contributing) for guidance on how contributions are evaluated and integrated.

### Alternative contribution pathways

#### Share design concepts and feedback

- **Create your own Figma files**: Develop design concepts, improvements, or new components in your own Figma workspace.
- **Share via issues**: [Create an issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new) with screenshots, links to your Figma files, or detailed descriptions of your proposed changes.
- **Provide feedback**: Comment on existing issues or merge requests with suggestions and insights.

#### Documentation and code contributions

Whether or not you can access our paid Figma organization, you can contribute to our open-source documentation and component code repositories in GitLab.

- **Improve documentation**: Contribute to design system documentation, guidelines, and best practices in our [Pajamas design system](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) project.
- **Code contributions**: Help improve the [GitLab UI](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/packages/gitlab-ui) component library that implements the design system.
- **Accessibility improvements**: Suggest or implement accessibility enhancements.

#### Community engagement

- [**Report issues**](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new): Help identify bugs, inconsistencies, or usability problems in the design system.
- **Share use cases**: Describe how you're using or would like to use design system components.
- **Participate in discussions**: Engage in design system conversations and provide community perspective.

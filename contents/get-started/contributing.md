---
name: Contributing
---

Thank you for your interest in contributing to the Pajamas Design System! We
welcome all feedback regarding designs, guidelines, and implementation. The
following details how to contribute easily and efficiently.

## Contribute an issue

If you are interested in contributing to our design system, the first step is
ensuring that an issue exists in our [issue tracker](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues).
There are many applications that an issue can have, including:

- Submitting feature proposals
- Asking questions
- Reporting bugs and malfunctions
- Obtaining support
- Enhancing code implementations

If you were unable to find a related issue in our [issue tracker](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues),
begin by creating a new one. Creating an issue for each change allows us to
easily track all proposals in one place. For changes that affect visual designs
or user experiences, it can be helpful to include a mockup.

To contribute an issue, follow one of these paths depending on its nature:

1. **Component**: Get familiar with our [Component lifecycle](/get-started/lifecycle/).
1. **Object**: Create an issue with the [“Object documentation” template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Object%20documentation) and follow its instructions.
1. Everything else: [Create an issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/new) with no template.

### UX proposals

If your proposal involves a new guideline or UX paradigm, ping a
[UX reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com)
to review and provide feedback.

### Frontend proposals

If your proposal involves a change to the frontend implementation, ping a
[frontend reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com)
to review and provide feedback.

## Contribute a merge request

To make changes within our Design System, follow these instructions:

1. Choose an issue to work on. If one does not exist, please review the
   contribution guidelines regarding creating a new one. This opens the conversation
   and allows feedback to happen early, preventing risks such as duplicated or
   unnecessary work. It can be helpful to comment in the issue to verify that no one
   is working on it and that the issue is still relevant.
1. Fork [this project](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com).
1. Make changes reflecting the issue you’ve chosen to work on.
1. Create a merge request using the `Documentation` template. The earlier you
   open a merge request, the sooner you can get feedback. You can mark it as a
   draft to signal that you’re not done yet.
1. We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
   in Pajamas, so make sure you write commits this way in your merge request.
   [How to write conventional commits](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/commits.md).
1. Get your merge request approved. If your changes involved a new guideline or
   UX paradigm, then ping a [UX reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com)
   to approve your changes. If your changes involve an update to frontend implementation,
   ping a [frontend reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com)
   to approve. Some merge requests will require both a UX and frontend approver.
1. Get your changes merged! After the necessary approvals have been added, a UX
   or frontend maintainer can then merge your merge request. 🙌

## Contribute to design

Everyone can contribute to GitLab, including our UI design library in Figma. To contribute to our Pajamas UI Kit, follow these steps:

1. [Create an issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/new) (or assign yourself an existing one) for the work you’re doing. To create a new component or update an existing one, use the [Figma component issue template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Figma%20update).
1. Choose one of the following based on your contribution:
   - If you’re making updates or breaking changes to an existing component in the Pajamas UI Kit, start with a [branch](https://www.figma.com/best-practices/branching-in-figma/) of the UI kit. Prefix the branch name with the issue, MR, or epic number, and add your GitLab username as the suffix. For example, **#860-table-component-updates-lvanc**.
   - To create a new component, duplicate our [component template](https://www.figma.com/file/OmvFfWkqEsdGhXAND133ou/Component-template?node-id=0%3A1) to your drafts.
   - For all other changes, create a new file in your drafts.
1. Review the **Figma Guides** section to learn about how we structure and document our work within Figma.
1. Share a link to your branch or draft in the issue.
1. High-five yourself and go brew some coffee while you wait for the review. Thanks!

We accept contributions from wider community members who share a Figma [draft](https://help.figma.com/hc/en-us/articles/360041543473#drafts) with proposed changes.

We also encourage design contributions/improvements to GitLab itself — use its [issue tracker](https://gitlab.com/gitlab-org/gitlab/-/issues) to add your ideas to an existing or new issue and refer to this guide on [design and user interface changes](https://docs.gitlab.com/ee/development/contributing/design.html#design-and-user-interface-changes).

For the design of GitLab, please see this guide on [design and user interface changes](https://docs.gitlab.com/ee/development/contributing/design.html#design-and-user-interface-changes).

## Code of conduct

As contributors and maintainers of this project, we pledge to respect all
people who contribute through reporting issues, posting feature requests,
updating documentation, submitting pull requests or patches, and other
activities.

We are committed to making participation in this project a harassment-free
experience for everyone, regardless of level of experience, gender, gender
identity and expression, sexual orientation, disability, personal appearance,
body size, race, ethnicity, age, or religion.

Examples of unacceptable behavior by participants include the use of sexual
language or imagery, derogatory comments or personal attacks, trolling, public
or private harassment, insults, or other unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct. Project maintainers who do not
follow the Code of Conduct may be removed from the project team.

This code of conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community.

Instances of abusive, harassing, or otherwise unacceptable behavior can be
reported by emailing `contact@gitlab.com`.

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org),
version 1.1.0, available at [http://contributor-covenant.org/version/1/1/0/](http://contributor-covenant.org/version/1/1/0/).

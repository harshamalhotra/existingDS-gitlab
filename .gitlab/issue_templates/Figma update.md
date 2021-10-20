<!--
Start by choosing one of the following based on the nature of your contribution:
   - For changes or additions to an existing file, create a branch in Figma (this new file is considered the “working file”). Include the issue or MR number in the branch name. Make changes in the working file and request a review when ready. See https://www.figma.com/best-practices/branching-in-figma/ for details about branching.
   - For new files, duplicate the template that is most relevant (https://www.figma.com/files/project/5846042/Templates) to the project that also is the most relevant. Update the file name and cover details (this new file is considered the “working file”) and proceed with the design.
   - For community contributions, create a new file in your drafts, or duplicate an existing file to your drafts.

To move a duplicate file:
Open the duplicate, then use the dropdown next to the file name to select
“Move to Project…” and select the desired project as the new location. The duplicate is now the “working file.”
-->

### Description

<!-- Add a short description of your contribution. Consider adding
a checklist of variations, states, and breakpoints to the description so that reviewers can be sure to cross reference everything that has been completed. -->

### Figma file

<!-- Before pasting the link to your Figma file/frame, in the file sharing settings, make sure that “anyone with the link” can view or that a specific user has been invited to the file. -->

[View working file in Figma →](ADD LINK TO FIGMA FILE/FRAME)

### Checklist

Make sure the following are completed before closing the issue:

1. [ ] **Assignee**: Design in your working file. When applicable, follow our 
   [structure][structure], [building][building], and [annotation][annotation] guidelines. If you have any questions, reach out to a [FE/UX Foundations designer][foundations-team].
1. [ ] **Assignee**: Update the link to the working file in the issue 
   description.
1. [ ] **Assignee**: Ask a [FE/UX Foundations designer][foundations-team]
   to review your design (ensure they have edit permissions in Figma).
1. [ ] **Reviewer**: Review and approve assignee’s design. Specific design 
   questions can be addressed with comments in Figma. Comment in this issue when the content is less specific to the design or requires greater visibility.
1. [ ] **Reviewer**: Assign to a [Figma maintainer][figma-maintainer]
   for final review (make sure they have edit permissions in Figma).
1. [ ] **Maintainer**: Review and approve assignee’s changes.
1. [ ] **Maintainer**: Merge the branch or add the changes or additions to the
   target file.
     1. [ ] Ensure that all styles and components now belong to the target file.
     1. [ ] For changes to the **Component Library** file, view the components in the Assets panel to ensure they align with our [asset library structure guidelines][structure].
1. [ ] **Maintainer**: When applicable, [publish][publishing] any library 
   changes along with a clear commit message.
1. [ ] **Assignee**: If work was not done in a branch (a merged branch will automatically be archived), move your working file 
   to the shared Figma project:
     1. [ ] For Component Library changes, move your file to the [**Component archive**][component-archive] project.
     1. [ ] For all other changes, move your file to the [**Misc archive**][misc-archive] project.
     1. [ ] If you’re a community contributor, please consider [transfering ownership of your draft file](https://help.figma.com/hc/en-us/articles/360040530853) to the maintainer so they can move it to our archive, along with its version history and comments.
1. [ ] **Assignee** (or Maintainer, for community contributions): If it’s a new
   pattern or a significant change, add an agenda item to the next UX weekly call to inform the team.
1. [ ] **Assignee**: When applicable, [create an MR in this repository][new-gitlab-ui-mr] and apply the "component-guideline" template 
   to create or update the component’s documentation page. If you do not have capacity, [create an issue in this repository using the "Component documentation" issue template][pajamas-component-documentation-template]. Bring the issue to your team planning session for prioritization and scheduling. Mark the new issue as related to this one.
1. [ ] **Assignee**: When applicable, [create an issue in GitLab UI using the "Component" issue template][gitlab-ui-component-template] to build or update the component code. Bring the issue to your team planning session for prioritization and scheduling. Mark the new issue as related to this one.
1. [ ] **Assignee**: 🎉 Congrats, you made it! You can now close this issue.

/label ~"UX" ~"Figma"

[annotation]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#adding-descriptions-notes-and-annotations
[building]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#building-components
[foundations-team]: https://about.gitlab.com/company/team/?department=fe-ux-foundations-team
[figma-maintainer]: https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com
[publishing]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#publishing-changes
[structure]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#structure
[component-guideline-template]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/.gitlab/merge_request_templates/component-guideline.md
[component-archive]: https://www.figma.com/files/project/5472112/Component-archive
[misc-archive]: https://www.figma.com/files/project/10620392/Misc-archive
[gitlab-ui-component-template]: https://gitlab.com/gitlab-org/gitlab-ui/-/issues/new?issuable_template=Component
[pajamas-component-documentation-template]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Component%20documentation
[new-gitlab-ui-mr]: https://gitlab.com/gitlab-org/gitlab-ui/-/merge_requests/new


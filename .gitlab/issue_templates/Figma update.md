## Description

<!-- Add a short description of your contribution. Consider adding
a checklist of variations, states, and breakpoints to the description so that reviewers can be sure to cross reference everything that has been completed. -->

<!--
- For changes or additions to an existing file, create a branch in Figma (this new file is considered the “working file”). Include the issue or MR number in the branch name. Make changes in the working file and request a review when ready. See https://www.figma.com/best-practices/branching-in-figma/ for details about branching.
- For new files, duplicate the template that is most relevant (https://www.figma.com/files/project/5846042/Templates) to the project that also is the most relevant. Update the file name and cover details (this new file is considered the “working file”) and proceed with the design.
- For community contributions, create a new file in your drafts, or duplicate an existing file to your drafts.

To move a duplicate file:
Open the duplicate, then use the dropdown next to the file name to select
“Move to Project…” and select the desired project as the new location. The duplicate is now the “working file.”
-->

### Figma file

<!-- Before pasting the link to your Figma file/frame, in the file sharing settings, make sure that “anyone with the link” can view or that a specific user has been invited to the file. -->

[❖ View working file in Figma →](ADD LINK TO FIGMA FILE/FRAME)

## Checklist

Make sure the following are completed before closing the issue:

### Assignee tasks:

<details><summary>Getting started:</summary>

1. [ ] Title the issue using this structure "Figma > [Component name] - [Description]". For example, Figma > Badges - Fix icon override bug.
1. [ ] Add the relevant [component label](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/labels?subscribed=&search=component%3A). For example ~"component:badge".
1. [ ] If you’re making updates or breaking changes to an existing component in the [Pajamas UI Kit](https://www.figma.com/community/file/781156790581391771), start with a [branch](https://www.figma.com/best-practices/branching-in-figma/) of the UI kit. Prefix the branch name with the issue, MR, or epic number, and add your GitLab username as the suffix. For example, `#860-table-component-updates-lvanc`. 
1. [ ] When applicable, follow our [structure][structure], [building][building], and [annotation][annotation] guidelines. If you have any questions, reach out to a [Foundations designer][foundations-team].
1. [ ] Update the link to the working file under the **Figma link** section below.
1. [ ] If work was not done in a branch (a merged branch will automatically be archived), move your working file 
   to the shared Figma project:
     1. For Component library changes, move your file to the [**Component archive**][component-archive] project.
     1. For all other changes, move your file to the [**Misc archive**][misc-archive] project.
     1. If you’re a community contributor, please consider [transferring ownership of your draft file](https://help.figma.com/hc/en-us/articles/360040530853) to the maintainer so they can move it to our archive, along with its version history and comments.
</details>

<details><summary>Prior to review:</summary>

The purpose of these tasks is to ensure consistency with the rest of the components and to save time during the review process. When you are finished with your update, please go through the following clean-up tasks in Figma:

1. [ ] **Canvas**: Make sure no hidden elements have been accidentally left behind. Use **View > Show Outlines** (<kbd>⌘</kbd> + <kbd>Y</kbd>) to reveal invisible objects. Use **View > Zoom to Fit** (<kbd>Shift</kbd> + <kbd>1</kbd>) to view all items on the page.
1. [ ] **Components**: Where applicable, make sure all components have updated descriptions and have external documentation links.
1. [ ] **Frames**: Make spacing within and between frames consistent with components found on other pages.
1. [ ] **Layers**: Make sure all your layers are correctly named and the order match visual from left to right. In the case of Auto Layout, Figma will determine layer order.
1. [ ] **Variants**: Remove the default dashed purple stroke, border radius, and padding from all variants.
1. [ ] **Variants**: Reorder variants in properties panel to match visual order. In the case of Auto Layout, Figma will determine layer order.
1. [ ] **Comments**: Make sure all comments and discussion are resolved.

If any of these tasks are unclear, see the [Table component](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=47785%3A58915) for reference. 

</details>

<details><summary>Requesting a review:</summary>

Ask a [Foundations designer][foundations-team] to review your design.

1. [ ] Ensure the designer that will be reviewing your file has edit permissions in Figma.
1. [ ] From the dropdown to the right of the file name, select "Request review".
1. [ ] Then from the modal window, remember to include a description of the changes being made and select a reviewer from the right hand column. 
1. [ ] Consider [creating a new version](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history#Create_a_new_version) (optional) titled "Review requested" in the history which will create a reference point in the file's history.

Once your file is in review, you should see a yellow "In review" badge to the right of the file name.

</details>

<details><summary>Post review:</summary>
Once the Reviewer or Maintainer has approved your update, consider the following tasks: 

1. [ ] If it’s a new pattern or a significant change, add an agenda item to the next UX weekly call to inform the team.
1. [ ] When applicable, add or update relevant documentation and create an MR with your changes using the `Documentation` MR template. If you do not have the capacity, [create another issue using the `Component documentation` issue template][issue-component-template] so we don't forget about it. Mark the new issue as related to this one. Bring the issue to your team planning session for prioritization and scheduling. 
1. [ ] When applicable, [create a GitLab UI issue using the `Component` issue template][gitlab-ui-component-template] to build or update the component code. Mark the new issue as related to this one. Bring the issue to your team planning session for prioritization and scheduling. 
1. [ ]  🎉 Congrats, you made it! You can now close this issue.

</details>

### Reviewer tasks:

<details><summary>See tasks:</summary>

1. [ ] Review and approve assignee’s design. Specific design questions can be addressed with comments in Figma. Comment in this issue when the content is less specific to the design or requires greater visibility.
1. [ ] Make sure all layers are correctly named and organized.
1. [ ] Stress test final component by changing the component's size, editing content, and changing any available variants and properties. 
1. [ ] Ensure component descriptions and external documentation links are clear and accurate.
1. [ ] Approve assignee’s design. Let the assigning know that their changes have been approved by mentioning them in this issue.
1. [ ] Assign to a [Figma maintainer][figma-maintainer] for final review (make sure they have edit permissions in Figma).
1. [ ] Ask a [Foundations designer][foundations-team] to review your design (ensure they have edit permissions in Figma).

</details>

### Maintainer tasks:

<details><summary>See tasks:</summary>

1. [ ] Review and approve assignee’s changes.
   questions can be addressed with comments in Figma. Comment in this issue when the content is less specific to the design or requires greater visibility.
1. [ ] Merge the branch or add the changes or additions to the
   target file.
     1. [ ] Ensure that all styles and components now belong to the target file.
     1. [ ] For changes to the **Component Library** file, view the components in the Assets panel to ensure they align with our [asset library structure guidelines][structure].
1. [ ] When applicable, [publish][publishing] any library changes along with a clear commit message.

</details>

[annotation]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#adding-descriptions-notes-and-annotations
[building]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#building-components
[foundations-team]: https://about.gitlab.com/company/team/?department=ecosystem-foundations-team
[figma-maintainer]: https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com
[publishing]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#publishing-changes
[structure]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#structure
[component-archive]: https://www.figma.com/files/project/5472112/Component-archive
[misc-archive]: https://www.figma.com/files/project/10620392/Misc-archive
[gitlab-ui-component-template]: https://gitlab.com/gitlab-org/gitlab-ui/-/issues/new?issuable_template=Component
[issue-component-template]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Component%20documentation

<!-- Do not delete below this line -->

/labels ~Figma ~"Pajamas UI Kit" ~"pajamas::design"

<!--
Thanks for your interest in contributing to Pajamas!

This issue template is for changes or additions to an object documentation, such as their documentation page, the conceptual model, or their semantic layout. Learn more about objects in https://design.gitlab.com/objects/overview

Follow the checklist at the bottom of this template to use it appropriately.
-->

### Description

<!-- Add a short description of your contribution. Why are those changes or additions necessary? Consider adding a task list that details the changes you are aiming to make, such as specific modifications in Figma or in the object documentation page.-->

### Figma file

<!-- Before pasting the link to your Figma file/frame, in the file sharing settings, make sure that “anyone with the link” can view or that a specific user has been invited to the file. -->

[View working file in Figma →](ADD LINK TO FIGMA FILE/FRAME)

### Checklist

Make sure these tasks are completed before closing the issue. If you have any questions, reach out to a [Foundations designer][foundations-team].

1. [ ] **Assignee**: Identify the necessary updates or additions, and define a clear scope of your contribution in the “Description” section above. Learn more about objects in the [object overview page](https://design.gitlab.com/objects/overview).
1. [ ] **Assignee**: Change or add an object's **conceptual model**.
   1. [ ] [Create a branch in Figma][figma-branching] from the [Conceptual model file](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=5422%3A470), and add the issue/MR number to the new branch name. That new branch is your “working file”.
    - [ ] Follow the existing product data structure as closely as possible. The [GitLab API documentation](https://docs.gitlab.com/ee/api/) is a good starting point to identify the existing objects, their attributes, actions and relationships. 
    - [ ] Study the UI layouts that represent the object to inform your diagram. However, keep the object model UI-agnostic. Sometimes an attribute or action in the UI is inherited from a different object. For example, a CI Job might have a reference branch associated with it in the UI, but the reference branch attribute is actually inherited by the Job from the Pipeline object. 
    - [ ] Use [the existing file components](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/branch/bMpqqGQtDoPqty4sAFPUsy/Conceptual-model?node-id=5423%3A453) to map out the object diagram.
    - [ ] If possible, gather feedback from Engineers, Product Manager, or Technical Writer to make sure your object diagram is accurate and understandable.
1. [ ] **Assignee**: Change or add an object's **semantic layout**. This may be required if the object's conceptual model was also changed.
   1. [ ] [Create a branch in Figma][figma-branching] from the [Semantic layouts file]((https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/Semantic-layouts?node-id=1%3A79), and add the issue/MR number to the new branch name. That new branch is your “working file”.
    - [ ] Map out the primary layout for the object you're adding or updating. View [Layouts](https://design.gitlab.com/objects/overview#layouts) for more information.
1. [ ] **Assignee**: Update the link to the working file(s) in the issue 
   description.
1. [ ] **Assignee**: Ask a [Foundations designer][foundations-team]
   to review your working file(s) (ensure they have edit permissions in Figma).
1. [ ] **Reviewer**: Review and approve assignee’s working file(s). Specific 
   questions can be addressed with comments in Figma. Comment in this issue when the content is less specific to the working file(s) or requires greater visibility.
1. [ ] **Reviewer**: Assign to a [Figma maintainer][figma-maintainer]
   for final review (make sure they have edit permissions in Figma).
1. [ ] **Maintainer**: Review and approve assignee’s changes.
1. [ ] **Maintainer**: Merge the branch or add the changes or additions to the
   target file.
     1. [ ] Ensure that all styles and components now belong to the target file.
1. [ ] **Assignee** (or Maintainer, for community contributions): If it’s a new
   object or a significant change, add an agenda item to the next UX weekly call to inform the team.
1. [ ] **Assignee**: When applicable, add or update the object’s documentation page and create an MR with your changes using the `Documentation` MR template. If you do not have the capacity, [create another issue using the `Object documentation` issue template][issue-object-template] so we don't forget about it. Mark the new issue as related to this one. Bring the issue to your team planning session for prioritization and scheduling. 
1. [ ] **Assignee**: 🎉 Congrats, you made it! You can now close this issue.

/label ~"UX" ~"Figma" ~"pajamas::define" 

[figma-branching]: https://www.figma.com/best-practices/branching-in-figma/
[foundations-team]: https://about.gitlab.com/company/team/?department=ecosystem-foundations-team
[figma-maintainer]: https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com
[issue-object-template]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Object%20documentation

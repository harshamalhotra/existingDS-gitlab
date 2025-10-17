## Description

<!-- Briefly describe the purpose and use case for the new icon. -->

### Concept

<!-- Explain how the concept(s) align with the purpose and use. If metaphors are used, explain how they relate. Note if there’s an existing icon in the library that may conflict with this new one. If the icon require any variants, for example, a solid version or different states for open and closed, you can include them all in one issue. If possible, provide screenshots of the icon in context. You can also embed the SVG here for visual reference. -->

### Figma file

<!-- Before pasting the link to your Figma file/frame, in the file sharing settings, make sure that “anyone with the link” can view or that a specific user has been invited to the file. -->

[❖ View working file in Figma →](ADD LINK TO FIGMA FILE/FRAME)

---

## Checklists

**After all of the following tasks are complete you can close this issue:**

### Assignee tasks

<details><summary>See tasks:</summary>

1. [ ] Create or update an icon
    - If you’re a community contributor, please fork the [GitLab Product Icons file](https://www.figma.com/community/file/1051267829358377715) when updating or creating an icon.
    - If you’re a GitLab team member, please create a [branch](https://www.figma.com/best-practices/branching-in-figma/) of the [GitLab Product Icons file](https://www.figma.com/file/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons). Prefix the branch name with the issue, MR, or epic number, and add your GitLab username as the suffix. For example, `#860-new-icon-lvanc`. Then update or create an icon.
1. [ ] Update the link to the working file under the **Figma link** section above.
1. [ ] If work was not done in a branch (a merged branch will automatically be archived), move your working file to the shared Figma project:
     1. For all other changes, move your file to the [**Misc archive**][misc-archive] project.
     1. If you’re a community contributor, please consider [transferring ownership of your draft file](https://help.figma.com/hc/en-us/articles/360040530853) to the maintainer so they can move it to our archive, along with its version history and comments.
1. [ ] When applicable, follow our [iconography][iconography] guidelines. For third-party trademarks, please review the [third-party trademark usage guidelines](https://about.gitlab.com/handbook/legal/policies/product-third-party-trademarks-guidelines/).
1. [ ] Ask a [Foundations designer][foundations-team] to review your design.
    - If you’re a community contributor, ensure the designer that will be reviewing your file has edit permissions in Figma.
    - If you’re a GitLab team member, request a [review in Figma](https://help.figma.com/hc/en-us/articles/5691414603543-Request-a-branch-review).

</details>

### Reviewer tasks

<details><summary>See tasks:</summary>

1. [ ] Review the icon in the author’s branch. Add design-specific comments in Figma to maintain context. Add general comments to this issue, including your approval status.
1. [ ] Once review is approved, assign to a [Figma maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com) for final review.

</details>

### Maintainer tasks

<details><summary>See tasks:</summary>

1. [ ] Merge the branch to the **GitLab Product Icons** file, convert the icon to a component, add keywords and usage notes (optional) in the description, and view it in the Assets panel to ensure it aligns with what’s outlined in the
       [document and asset library structure](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#structure) documentation.
1. [ ] Publish the library changes along with a clear message about the update.

</details>

### Library addition tasks

Once the Reviewer or Maintainer has approved your icon design, consider the following tasks to add the icon the `gitlab-svgs` library.

<details><summary>See tasks:</summary>

<!-- This checklist helps streamline the process of getting an icon from Figma to the library. -->

1. [ ] Create a new merge request (MR) from this issue.
1. [ ] Assign a label to the MR, such as ~foundation::iconography, and any other relevant labels as needed.
1. [ ] Open the branch in the Web IDE.
1. [ ] In Figma, export the icon component from the [GitLab Product Icons](https://www.figma.com/community/file/1051267829358377715/gitlab-product-icons) file. The parent frame of the icon should not have "Clip content" checked in the Design panel. Consider using the [Advanced SVG Export](https://www.figma.com/community/plugin/782713260363070260) plugin to export an optimized SVG file (the plugin settings can also control what attributes are included or removed).
1. [ ] In the Web IDE, upload the file to the **/sprite_icons** folder. The file name should be lowercase, and use hyphens as a separator between terms.
1. [ ] Open the icon file and:
   - Ensure that the `viewBox` attribute is present and matches the icon frame dimensions (either `viewBox="0 0 12 12"` or `viewBox="0 0 16 16"`).
   - Remove any `desc` or `clipPath` attributes.
   - Remove the `fill="none"` attribute from the `<svg>` element.
1. [ ] After you’ve committed the changes and the pipeline passes, double-check your icon in the review app by changing settings in the **Icon configuration** panel of the site. The icon should change color and size with no issues.
1. [ ] Assign the MR to be reviewed and merged by a [maintainer](https://about.gitlab.com/handbook/engineering/projects/#gitlab-svgs), and proceed with any changes.
1. [ ] Add a reference to the change in the [Pajamas UI Kit release notes](https://design.gitlab.com/get-started/uik-release-notes) by adding a commit to the current draft MR.

If you run into any problems, ensure that all other steps in the project [README](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/packages/gitlab-svgs/README.md) have been followed.

</details>

---

## Links / references

<!-- Add external links and references if necessary -->

/label ~"UX" ~"Pajamas UI Kit" ~"icon"

[foundations-team]: https://about.gitlab.com/company/team/?department=ecosystem-foundations-team
[iconography]: https://design.gitlab.com/product-foundations/iconography
[misc-archive]: https://www.figma.com/files/project/10620392/Misc-archive

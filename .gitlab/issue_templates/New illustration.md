## Purpose

<!-- Briefly describe the purpose and use case for the new illustration. -->

## Concept

<!-- Explain how the illustration aligns with the purpose and use. If metaphors are used, explain how they relate. If possible, provide screenshots of the illustration in context. You can also embed the SVG here for visual reference. -->

---

## Checklists

**After all of the following tasks are complete you can close this issue:**

### Assignee tasks:

<details><summary>See tasks:</summary>

<!-- This checklist ensures that illustrations are created and reviewed according to the guidelines and a predictable workflow. -->
1. [ ] Start with a [branch](https://www.figma.com/best-practices/branching-in-figma/) of the [GitLab Illustration file][illustration-file] in Figma. Prefix the branch name with the issue number, and add your GitLab username as the suffix. For example, `#120-feature-illustration-jelder`.
1. [ ] Choose/copy a grid frame from the **Grid** page. Work on your illustration in the appropriate component or library page. A small illustration that can be used as a standalone "spot" illustration, or as a reusable element in a larger illustration can be added in the **Components** page, while all others can be added to the library page that makes the most sense.
1. [ ] Ensure that the illustration follows the [Illustration guidelines](https://design.gitlab.com/product-foundations/illustration-creation-guide). For third-party trademarks, please review the [third-party trademark usage guidelines](https://about.gitlab.com/handbook/legal/policies/product-third-party-trademarks-guidelines/).
1. [ ] [Request a review](https://help.figma.com/hc/en-us/articles/5691414603543-Request-a-branch-review) from a [FE/UX Foundation designer](https://about.gitlab.com/company/team/?department=fe-ux-foundations-team) for your Figma branch. If they have the capacity, they should assign themselves to this issue. If not, try pinging another designer.

</details>

### Reviewer tasks:

<details><summary>See tasks:</summary>

1. [ ] Review the illustration. Add design-specific comments in Figma to maintain context. Add general comments to this issue, including your approval status. Once approved, assign to a [Figma maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com) for final review.

</details>

### Maintainer tasks:

<details><summary>See tasks:</summary>

1. [ ] Either merge the branch and publish library changes, or copy/paste the illustration from a draft file to the [illustration file][illustration-file] under the appropriate page and category. The frame name should match the exported file name (without the extension).

</details>

### Library addition tasks:

Once the Reviewer or Maintainer has approved your illustration, consider the following tasks to add it to the `gitlab-svgs` library.

<details><summary>See tasks:</summary>

<!-- This checklist helps streamline the process of getting an illustration from Figma to the library. -->

1. [ ] Create a new merge request (MR) from this issue.
1. [ ] Checkout the new branch locally.
1. [ ] Export the illustration from the [illustration file][illustration-file] in Figma to the **/illustrations** folder in your local instance of the repo. The file name should be lowercase, and use hyphens as a separator between terms. If necessary, place the illustration in one of the sub-directories.
1. [ ] In a terminal window, run `yarn run dev` to preview the SVG library locally. Find the new illustration and ensure it is rendered accurately.
1. [ ] After you’ve committed the changes and the pipeline passes, double-check your illustration in the review app and test that it matches your expectations.
1. [ ] Assign the MR to a review by a [maintainer](https://about.gitlab.com/handbook/engineering/projects/#gitlab-svgs), and proceed with any changes.
1. [ ] Add a reference to the change in the [Pajamas UI Kit release notes](https://design.gitlab.com/get-started/uik-release-notes) by adding a commit to the current draft MR.

If you run into any problems, ensure that all other steps in the project [README](https://gitlab.com/gitlab-org/gitlab-svgs/-/blob/main/README.md) have been followed.

</details>

---

## Links / references

<!-- Add external links and references if necessary -->

/label ~"UX" ~"Illustration"

[illustration-file]: https://www.figma.com/file/1ui9w228X0S5WxaD0SRdIA/Illustration-library

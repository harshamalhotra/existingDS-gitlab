Release notes cover all files in the Figma UI kit. These include those used by GitLab team members, and files published to the community.

<table>
<tr>
<th>Figma UI kit files</th>
<th>Published to community</th>
</tr>
<tr>
<td>

- [:orange_book: Component library](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library)
- [Design tokens](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Beta%3A-Design-tokens?m=auto)
- [Patterns and Page Templates](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT-Patterns-and-Page-Templates)
- [Annotations and utilities](https://www.figma.com/design/dWP1ldkBU4jeUqx5rO3jrn/Annotations-and-utilities)
- [Data Visualization](https://www.figma.com/design/17NxNEMa7i28Is8sMetO2H/Data-Visualization)
- [GitLab Product Icons](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons)
- [GitLab Product Illustrations](https://www.figma.com/design/1ui9w228X0S5WxaD0SRdIA/GitLab-Product-Illustrations?m=auto&node-id=0-1&t=vlm6Z1nH72oWFBqR-1)
</td>
<td>

- :orange_book: Component library
- GitLab Product Icons
</td>
</tr>
</table>

Before you start:

- View the [release process](https://design.gitlab.com/get-started/uik-release-process) for detailed information about formatting the release notes.
- View the latest [release notes](https://design.gitlab.com/get-started/uik-release-notes) to familiarize yourself with recent changes.

## Figma UI Kit release notes tasks

Complete the following items for each release:

**Figma release notes tasks:**

- [ ] Ensure all merges have a description of the merge in the [version history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history).
- [ ] Generate the release notes with the [Figma release notes automation](https://gitlab.com/figma-release-notes-automation/figma-release-notes-automation.)
- [ ] Review and edit the release notes:
  - Ensure all changes to the Figma UI kit files are documented in the release notes.
  - Check updates to the release notes for accuracy.
  - Include reference links when necessary.
  - Ensure release note items share consistent formatting.
  - Consider combining related updates into a single item when the changes happen in the same release.

**Publish Figma libraries:**

- [ ] Publish any libraries with changes. When applicable, the **Design tokens** library should be published first, followed by the **:orange_book: Component library**.
- [ ] Check for incoming updates to other Figma UI kit files that consume the published libraries. Review, apply, and publish these updates. Add release notes when needed.

**Publish release notes:**

- [ ] Create a [new issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Pajamas%20UI%20Kit%20release%20notes) and draft merge request for next milestone's release notes, assigning to a DRI for the release.
- [ ] Proceed with a maintainer review and merge of the release notes.

**Wrap up:**

- [ ] Ask a [Figma admin](https://handbook.gitlab.com/handbook/product/ux/ux-resources/#tools) to publish update to the **📙 Component library** [community file](https://help.figma.com/hc/en-us/articles/360040035974-Publish-files-to-the-Community#01H8CZTYDFRRNCR4VR7FT95J39). Keep the existing metadata.
- [ ] Create a merge request to back up **.fig** files of any changed UI kit file to the [**/ui-kit**](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/ui-kit) folder in the Pajamas project.

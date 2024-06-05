Release notes cover all files in the Figma UI kit. These include those used by GitLab team members, and files published to the community.

<table>
<tr>
<th>Figma UI kit files</th>
<th>Published to community</th>
</tr>
<tr>
<td>

- [:orange_book: Component library](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library)
- [:construction: DRAFT Patterns and Page Templates](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT-Patterns-and-Page-Templates)
- [Annotations and utilities](https://www.figma.com/design/dWP1ldkBU4jeUqx5rO3jrn/Annotations-and-utilities)
- [Data Visualization](https://www.figma.com/design/17NxNEMa7i28Is8sMetO2H/Data-Visualization)
- [GitLab Product Icons](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons)
- [Product Pages](https://www.figma.com/design/tzpLCamRZNr2tTPwCP2UY4/Product-Pages)
- [Type scale - Compact Markdown](https://www.figma.com/design/mjAZxHkK95TlQ6L14aNp2M/Type-scale---Compact-Markdown)
- [Type scale - Documentation Markdown](https://www.figma.com/design/V3HKN83B7rf2T6sseLMrxa/Type-scale---Documentation-Markdown)
</td>
<td>

- :orange_book: Component library
</td>
</tr>
</table>

Before you start:

- View the [release process](https://design.gitlab.com/get-started/uik-release-process) for detailed information about formatting the release notes.
- View the latest [release notes](https://design.gitlab.com/get-started/uik-release-notes) to familiarize yourself with recent changes.

## Figma UI Kit release notes tasks

Complete the following items for each release:

**Before publishing Figma libraries:**

- [ ] Figma release notes tasks:
  - [ ] Review all merges into Figma UI kit files for this milestone.
  - [ ] Ensure all merges have a description of the merge in the [version history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history).
- [ ] Review and edit the release notes:
  - Ensure all changes to the Figma UI kit are documented in the release notes.
  - Check updates to the release notes for accuracy. For example, ensuring all breaking changes are documented.
  - Ensure release note items share consistent formatting.
  - Consider combining related updates into a single item when the changes happen in the same release.

**Publish Figma libraries:**

- [ ] Publish the **📙 Component Library**.
- [ ] Check for incoming updates to other Figma UI kit files that consume the **:orange_book: Component library**. Review, apply, and publish these updates. Add release notes when needed. Take care to check for circular updates back to **:orange_book: Component library**.

**Publish release notes:**

- [ ] Create a [new issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Pajamas%20UI%20Kit%20release%20notes) and draft merge request for next milestone's release notes, assigning to a DRI for the release.
- [ ] Link to the new draft MR by adding the following to the top of this milestone's `uik-release-notes.md`.

  ```
  ## 17.X

  [_Draft: 17.X release notes_](LINK TO MR)
  ```

- [ ] Proceed with a maintainer review and merge of the release notes.

**Wrap up:**

- [ ] Publish update to the **📙 Component library** [community file](https://help.figma.com/hc/en-us/articles/360040035974-Publish-files-to-the-Community#01H8CZTYDFRRNCR4VR7FT95J39). Keep the existing metadata.
- [ ] Create a merge request to back up **.fig** files of any changed UI kit file to the [**/ui-kit**](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/ui-kit) folder in the Pajamas project.

---
name: Release process
---

The Pajamas UI Kit will have a new release (version) published at the end of each milestone. At the moment there's no formal version numbering other than the milestone number.

- At minimum, an update to the [release notes](/get-started/uik-release-notes) will be published to document the changes that happened during the milestone.
- Release notes categories are:
  - Additions - New components, icons, variants, icons, and illustrations.
  - Enhancements - Improvements to everything from leveraging Figma features to component, workflow, and documentation. Breaking changes can also be due to an enhancement.
  - Changes - Neutral or breaking changes and deprecation mentions. Also consider mentioning deprecations that will happen in the next release.
  - Fixes - Squashing bugs, errors, or otherwise broken items.
- When possible, a video will accompany the release to highlight any changes, demonstrate how to triage impact, and how to work with new features.
- New .fig files will be saved and updated in the [ui-kit](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/ui-kit) folder of the repo. These leverage the git history to track versions.
- The [version history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history) of a Figma file will summarize all updates along with notes on [breaking changes](uik-breaking-changes). Figma will automatically update the history with:
  - Autosaved versions
  - Merged branches
  - Created branches
  - Branch updates from main
- Maintainers may also edit the version history or manually [add a new version](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history#Create_a_new_version). The new version includes a title and description, and is used to track specific changes to a component or styles.
- We favor continuous delivery, so bug fixes, patches, and other minor updates that don’t include breaking changes can be published at any time during the milestone, and files can be updated on the [community page](https://www.figma.com/@GitLabDesign) if necessary. They will also be summarized in the release notes.
- Changes within files that don't impact components or styles, like updating an instance, are immediately available in the file and everything else will be available when the next version is released.

## Publishing

Figma library updates are published by a [Figma maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com_maintainers_Figma), regardless of how minor. To support our [transparency value](https://about.gitlab.com/handbook/values/#transparency), follow these best practices:

- Changes should be reviewed by another designer in a branch or draft before a Maintainer adds it to the Pajamas UI Kit file.
- Use dashes to list changes in the publish description field.
- Community files follow the same release cadence and can be published there after publishing library updates for the organization.

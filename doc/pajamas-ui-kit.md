# Pajamas UI Kit contribution and updating guidelines

<!-- Table of contents generated with DocToc: https://github.com/thlorenz/doctoc -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Contributions to Pajamas UI Kit](#contributions-to-pajamas-ui-kit)
- [Structure](#structure)
  - [Files](#files)
  - [Components](#components)
  - [Examples](#examples)
    - [Icons](#icons)
    - [Alert](#alert)
    - [Pagination](#pagination)
    - [Badge](#badge)
    - [Button](#button)
- [Building components](#building-components)
  - [Base components](#base-components)
  - [Elements](#elements)
  - [Variants](#variants)
  - [Using Constraints](#using-constraints)
  - [Using Auto Layout](#using-auto-layout)
- [Adding descriptions, notes, and annotations](#adding-descriptions-notes-and-annotations)
- [Releasing a new version](#releasing-a-new-version)
  - [Breaking changes](#breaking-changes)
  - [Publishing](#publishing)
- [Sharing or linking to designs](#sharing-or-linking-to-designs)
- [Updating the libraries locally](#updating-the-libraries-locally)
- [Deprecation](#deprecation)
- [Plugins](#plugins)
- [Code of conduct](#code-of-conduct)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Contributions to Pajamas UI Kit

Everyone can contribute to GitLab, including our UI design library in Figma, [Pajamas UI Kit][ui-kit-figma]. To contribute to our Pajamas UI Kit, follow these steps:

1. [Create an issue][new-issue] (or assign yourself an existing one) for the work you’re doing. To create a new component or update an existing one, use the [Figma component issue template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Figma%20update).
1. Choose one of the following based on your contribution:
   - If you’re making updates or breaking changes to an existing component in the [Pajamas UI Kit][ui-kit-figma], start with a [branch][figma-branch] of the UI kit. Prefix the branch name with the issue, MR, or epic number, and add your GitLab username as the suffix. For example, **#860-table-component-updates-lvanc**.
   - To create a new component, duplicate our [component template][component-template] to your drafts.
   - For all other changes, create a new file in your drafts.
1. Review the [Structure](#structure) section to learn about how we structure and document our work within Figma.
1. Share a link to your branch or draft in the issue.
1. High-five yourself and go brew some coffee while you wait for the review. Thanks!

We accept contributions from wider community members who share a Figma [draft][figma-docs-drafts] with proposed changes. We also encourage design contributions/improvements to GitLab itself — use its [issue tracker][gitlab-issue-tracker] to add your ideas to an existing or new issue.

## Structure

### Files

The Pajamas UI Kit is comprised of several different files. These files organize separate, but related concepts. Each publishes an asset library that can be enabled in other design files.

The current files are:

- [**Component library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library): This is the main file for design components that are used in Pajamas and in all other files. The asset library is published as the "Component library" and enabled for all team files. This file has both typescale and data visualization enabled for use within, but those libraries are not published as part.
- [**Typescale - Documentation Markdown**](https://www.figma.com/file/V3HKN83B7rf2T6sseLMrxa/Typescale-Documentation-Markdown): Documentation markdown is defined as any markdown that is written outside of issuable pages, such as a README or Wiki page. Content written using markdown includes typography that contains fixed margins and increased line-heights to improve readability. Published as the "Typescale - Documentation Markdown" library.
- [**Typescale - Compact Markdown**](https://www.figma.com/file/mjAZxHkK95TlQ6L14aNp2M/Typescale-Compact-Markdown): Within certain views, the markdown type scale is decreased in order to more closely align copy with other UI components. Compact markdown is used for descriptions and comments on issue and merge request pages. Content written using markdown includes typography that contains fixed margins and increased line-heights to improve readability. Published as the "Typescale - Compact Markdown" library.
- [**Data Visualization**](https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization): Components, styles, and charts used within GitLab. Published as the "Data Visualization" library.
- [**Product pages**](https://www.figma.com/file/tzpLCamRZNr2tTPwCP2UY4/Product-Pages): Components, layouts, regions, and page templates used within GitLab. Items herein are not globally used throughout the product and not included in the main component library. Published as the "Product Pages" library.
- [**Figma for GitLab**](https://www.figma.com/file/73OcYdBfOaK2xlChC3tbNX/Figma-for-GitLab): An intro deck into how GitLab uses Figma.

### Components

With Figma, components are organized in the asset library by how they are structured and named in the file. The default hierarchy is **File/Page/Frame/Layer**. There are two methods for organizing components:

1. Using Figma's [Variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) feature.
2. Using a slash naming convention.

For the rest of this article, components created with Figma’s variants feature will be referred to as **variant** or **variants**. Here’s our working hierarchy for structure and naming, the file name has been left out for brevity:

- **Page:** [Component]
- **Frame:** [Component], [Category], [Group], [Elements] or literally “Variants.” “Variants” is the default frame name when components aren’t created with the variants feature.
- **Layer:** [Property=Value, Property=Value] as a variant or [Breakpoint/Item/Size/State] when manually organized.
  - Optional breakpoints: XS, SM, MD, LG, XL, breakpoints can also use symbols to indicate range, such as ≥MD or ≤SM
  - Optional sizes: XS, SM, MD, LG, XL, XXL

When creating a component as a variant, only a single instance of that component will be listed in the asset library. After adding the component to your design you’ll have the ability to choose the variant needed based on available properties (see [examples](#examples) below).

If a component is not part of a variant container, numerically prefixing the breakpoint and size abbreviations correctly orders them in the asset library in a way that helps a user understand hierarchy (see [examples](#examples) below).

Lastly, when you create a component variant in Figma it automatically adds a border radius and dashed purple border to the frame. Remove both the border radius and border.

### Examples

#### Icons

- **Page:** Icons
- **Frame:** Actions
- **Layer:** Export
- **Result:** Icons/Actions/Export

#### Alert

- **Page:** Alert
- **Frame (container):** Alert
- **Layer:** Variant=Danger, Max-width=False
- **Result:** Alert/Alert

#### Pagination

- **Page:** Pagination
- **Frame:** Pagination
- **Layer:** Variant=Default, Breakpoint=≥MD, Truncation=None
- **Result:** Pagination/Pagination

#### Badge

- **Page:** Badge
- **Frame:** Pipeline badge
- **Layer:** Variant=Running, Size=SM
- **Result:** Badge/Pipeline badge

#### Button

- **Page:** Button
- **Frame:** Default
- **Layer:** Category=Primary, Type=Dropdown split, Size=MD
- **Result:** Button/Default

| **Layers panel** | **Assets panel** |
| ------ | ------ |
| ![Component layer in the layers panel](images/alert-layer.png) | ![Component listed in the assets panel](images/alert-asset.png) |

## Building components

### Base components

Some components are built from **base** components. Base components provide foundational configuration, structure, or other settings for components to be built from. They are not published to the library, because we only want the variants created from them to be available for direct use. A base component name is prefixed with "_Base" and the underscore prevents it from being published. A base component can also use variants. A change to a base component should propagate to any components built from it. In other systems you may see them called primitives, or master components. We chose “base” to indicate a starting place.

![Base button component with all configuration options](images/base-btn.png)

### Elements

With a nod to [atomic design](https://bradfrost.com/blog/post/atomic-web-design/), an **element** is something that cannot be broken down any further, and is primarily used in the construction of other components. In other words, it’s rarely used alone. Since elements can be used and swapped in other components, they’re published to the library. A good example of an element is a checkbox, which could be used in forms with a label, or as part of a multiselect dropdown.

### Variants

A **variant** is the most common form of a component. It is available to use as-is from the asset library, and does not require style overrides, although they may be available. In most cases, the content can be overridden for the context. Variants are often built from a [base component](#base-components), but this isn’t required. A variant often has properties associated with it that can be quickly swapped in the properties panel.

### Using Constraints

Objects within a component will [use constraints][figma-docs-constraints] when they need to maintain their position relative to the component bounds, or content within. Complex, responsive components can be created by combining frames and [layout grids][figma-article-layout-grid]. A tooltip is a good candidate for constraints, so that directional tips can always be placed correctly in relation to the component bounds as the content grows.

### Using Auto Layout

Components with [Auto Layout][figma-docs-auto-layout] dynamically resize based on the content within. This works well for components that need to maintain padding and spacing. A button is a good candidate for auto layout, because it can resize horizontally based on label length, and whether or not icons are included. Complex responsive-like components, like a modal, can be created with auto layout.

## Adding descriptions, notes, and annotations

We use three primary methods to add descriptive, helper content for components and design assets in Figma.

1. **Layer**
   - Audience: designers and users of the design file.
   - Use text layers for headings to categorize variants and instances.
   - Use the **Utility/Sticky** component to add a visible note in relation to the design. There are plugins that do similar, but we don’t want to rely on them staying up-to-date. Notes like these should be temporary in nature, and not need to persist.
1. **Comment**
   - Audience: everyone.
   - Use comments to engage with others in a conversation about the design. These conversations can be resolved and will persist as part of the history of the design file.
   - Use comments for annotations on instances, where descriptions are not possible.
   - Use comments when the intended audience may not have edit permissions, since component descriptions are limited to editors at the point of use. This would be beneficial for developer handoff.
1. **Component description**
   - Audience: designers who are referencing or using final components in new designs.
   - Use descriptions to identify the purpose and intended use of the component.
   - Consider using keywords in the description as meta for search. For example, “Keywords: wrench, tool, admin” used for a wrench icon that is used to represent admin in the product.
   - Consider mentioning where the component is used in the product, or for what purpose.
   - Include usage notes that are applicable at the point of use.
   - Keep descriptions short, when possible.
   - Add a documentation link (to Pajamas) when possible.

| **Component description and link in library** | **Description and link when inspecting** |
| ------ | ------ |
| ![Editing component description in Figma properties panel](images/component-desc.png) | ![Reading component description in Figma inspect panel](images/component-inspect.png) |

## Releasing a new version

The Pajamas UI Kit will have a new release (version) published at the end of each milestone. At the moment there's no formal version numbering.

- At minimum, a text release post (format TBD) will be published to document the changes that happened during the milestone.
- When possible, a video will accompany the release to highlight any changes, demonstrate how to triage impact, and how to work with new features.
- New .fig files will be saved and updated in the [ui-kit](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/ui-kit) folder of the repo. These leverage the git history to track versions.
- The [version history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history) of a Figma file will summarize all updates along with notes on [breaking changes](#breaking-changes). Figma will automatically update the history with:
  - Autosaved versions
  - Merged branches
  - Created branches
  - Branch updates from main
- Maintainers may also edit the version history or manually [add a new version](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history#Create_a_new_version). The new version includes a title and description, and is used to track specific changes to a component or styles.
- We favor continuous delivery, so bug fixes, patches, and other minor updates that don’t include breaking changes can be published at any time during the milestone, and files can be updated on the [community page](https://www.figma.com/@GitLabDesign) if necessary. They will also be summarized in the release notes.
- Changes within files that don't impact components or styles, like updating an instance, are immediately available in the file and everything else will be available when the next version is released.

### Breaking changes

A breaking change is anything that would require a designer to take any action after updating. Examples include, but aren't limited to, changed dimensions, incompatibility with previously used properties, and lost overrides.

Breaking changes have different levels of impact. Each breaking change must include a level and explanation of the impact of the change. If a breaking change to a single component or other design asset includes multiple changes at different levels of impact, default to using the highest impact.

- **Low impact**: A change has been made that has a low likelihood of introducing regression. For example, Auto Layout replaces a spacer component where the resulting spacing isn’t changed.
- **Medium impact**: A change has been made which requires validating the impact. For example, the size of a component has changed and may require layout adjustments in a design.
- **High impact**: A change has been made that breaks overrides, introduces new features that aren’t backwards compatible, or requires a designer to validate instances in their designs. For example, a new property causes text content to be lost, requiring it to be re-added. High impact changes require a new version of the component, where the previous version is deprecated but is available for at least a milestone (see current notes on [deprecation](#deprecation)).
- **Extreme impact**: A change that requires an entirely new component library file and associated library. For example, styles are moved to their own file with an independent library consumed by the component library.

### Publishing

Figma library updates are published by a [Figma maintainer][figma-maintainers], regardless of how minor. To support our [transparency value][handbook-transparency], follow these best practices:

- Changes should be reviewed by another designer in a branch or draft before a Maintainer adds it to the Pajamas UI Kit file.
- Use dashes to list changes in the publish description field.
- Community files follow the same release cadence and can be published there after publishing library updates for the organization.

## Sharing or linking to designs

Because components can be in multiple frames on a page, it’s best to link to the entire page when referencing as a design spec in the [Pajamas documentation][pajamas]. Otherwise, you can link directly to the specific frame in issues, merge requests, and other places where a specific portion of the design is referenced.

## Updating the libraries locally

If you have any of the available libraries enabled in a file you’ll occasionally see a toast message in Figma notifying you that there are updates to those library assets. You can choose to update items individually or in a batch.

![Component updates modal](images/update-modal.png)

Not all updates will be desireable or immediately needed however, and some may even introduce [breaking changes](#breaking-changes). For that reason it’s recommended to review the release notes. If you’re still uncomfortable with how your work might be impacted, first make a duplicate of your file and test the updates there or ask a maintainer.

## Deprecation

When a component or style is deprecated it should remain available for at least one milestone before fully being removed from the UI kit. After that, it can be accessed through the file history and a read only (FYI) agenda item should be added to the next [UX weekly call](https://docs.google.com/document/d/1Y_t6Oq4vqwA2eHPaXx0H6HkZiZ4um_lWHsqJIDstnEE) to inform everyone of the deprecation and how to proceed.

For a component:

- Move it to the **DEPRECATED** section at the bottom of the page list.
- Append '(⚠️ DEPRECATED)' to the page name.
- When the component has been deprecated due to breaking changes in a newer version, link to the new version from the deprecated page.
- Deprecated pages have a `$red-100` (`#FDD4CD`) background color and `$red-700` (`#AE1800`) for page headings and descriptions that aren't part of the component.
- In the component configuration, add '⚠️ DEPRECATED' to the 'How to use this component' field, and add the link to the new component (if applicable) to the 'Link to documentation' field.

For a style:

- Move the style to the **⚠️ DEPRECATED** section at the bottom of the style list.
- Maintain the style name and structure. For example, 'UI/Display/md' → '⚠️ DEPRECATED/UI/Display/md'.
- In the style editor, add '⚠️ DEPRECATED' to the description field.

## Plugins

We don’t use plugins for critical actions or capabilities, to avoid making any part of the design process reliant on plugin updates or functionality. Rather, we believe that each user should determine which plugins to use for their own workflow.

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

[component-template]: https://www.figma.com/file/OmvFfWkqEsdGhXAND133ou/Component-template?node-id=0%3A1
[figma-article-layout-grid]: https://www.figma.com/blog/everything-you-need-to-know-about-layout-grids-in-figma/
[figma-docs-auto-layout]: https://help.figma.com/article/453-auto-layout
[figma-docs-constraints]: https://help.figma.com/article/54-constraints
[figma-docs-drafts]: https://help.figma.com/hc/en-us/articles/360041543473#drafts
[handbook-transparency]: https://about.gitlab.com/handbook/values/#transparency
[gitlab-issue-tracker]: https://gitlab.com/gitlab-org/gitlab/issues
[new-issue]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/new
[pajamas]: https://design.gitlab.com/
[figma-maintainers]: https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com_maintainers_Figma
[ui-kit-figma]: https://www.figma.com/community/file/781156790581391771
[figma-branch]: https://www.figma.com/best-practices/branching-in-figma/

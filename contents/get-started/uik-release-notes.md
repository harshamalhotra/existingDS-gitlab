---
name: Release notes
navigationHeadingLevels: [2]
---

## 18.3

<small>Published 2025-08-15</small>

This release fixes library access issues (thanks for reporting Katie!) and adds some recent icon and illustration updates.
We've resolved publishing settings that prevented some teams from accessing Annotations, Product Illustrations, and Patterns & Page Templates.
Plus, a new icon, a new illustration, and a fix for a nasty icon bug that was breaking instance swapping.

Full highlights:

- Annotations, Product Illustrations, and Patterns & Page Templates libaries now properly published to the whole GitLab Organization.
- New empty-ai-catalog-md illustration for AI catalog empty states.
- Fixed broken status icon rotation when instance swapping.
- Update UI kit files to use the latest assets.

### Changelog

#### ➕ Additions

- (Product Illustrations): Adds [**empty-ai-catalog-md**](https://design.gitlab.com/product-foundations/illustration-directory/?q=~illustrations/empty-state/empty-ai-catalog-md.svg) illustration.
- (Product Icons): Adds [**kind**](https://design.gitlab.com/product-foundations/iconography-directory?q=~kind) icon.

#### 🔄 Changes

- (Component Library): Use latest assets from the Design tokens and Product Illustrations libraries.
- (Patterns & Page Templates): Use latest assets from the Product Illustrations library.
- (Patterns & Page Templates): Unpublish components that were internal to the file.
- (Patterns & Page Templates): Publish to GitLab (Organization), previously was only visible to members of the GitLab Product Design Figma team.
- (Annotations): Publish to GitLab (Organization), previously was only visible to members of the GitLab Product Design Figma team.
- (Product Illustrations): Publish to GitLab (Organization), previously was only visible to members of the GitLab Product Design Figma team.

#### 🛠️ Fixes

- (Product Icons): Fixes [**status**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=835-1110&t=hqZ5q8sxGP7as4DR-4) icon rotation that impacted instance swapping.

#### Contributors

Annabel Gray, Dan Mizzi-Harris, Jeremy Elder, Julia Miocene, Libor Vanc, Nick Leonard, Sascha Eggenberger, Taylor Vanderhelm

## 18.2

<small>Published 2025-07-11</small>

We can't contain ourselves this release. Well actually, we can, now that we've added both the card and CRUD design assets to help designers structure content. Accessibility gets a boost with the addition of annotation assets, making it easier to communicate accessible design intent across your work. We've also enhanced link documentation with improved guidance, examples, and cross-component references. Elsewhere, visual refinements help maintain consistency with recent product changes.

Full highlights:

- New card component for flexible content containers.
- CRUD component with starter product examples.
- Accessibility blueline annotation assets to help communicate accessibility details.
- Comprehensive link documentation improvements.
- Merge request reports refinements to match product changes.

**💡 Figma tip:** There are several ways to select layers, but one that's really helpful is being able to use the [Select Layer menu](https://help.figma.com/hc/en-us/articles/360040449873-Select-layers-and-objects) to select those hard to find [locked and hidden layers](https://help.figma.com/hc/en-us/articles/360040449873-Select-layers-and-objects#h_01HNBC5A064H0Y0TJA9PT9J8H9) (on a trackpad use a two-finger click to reveal the Select Layers menu).

### Changelog

#### ➕ Additions

- (Component Library): Adds simple [**❖&nbsp;Card**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=131231-5825&p=f&t=n4LGVP8W7mwDeQPi-11) component.
- (Annotations): Adds [**accessibility bluelines**](https://www.figma.com/design/dWP1ldkBU4jeUqx5rO3jrn/Annotations-and-utilities?node-id=2406-34&p=f&t=6MxraATsgKdBZTqJ-11) annotation assets (also available as a [community file](https://www.figma.com/community/file/779827094223635810/accessibility-bluelines)).
- (Patterns & Page Templates): Adds [**CRUD component**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/Patterns-and-Page-Templates?node-id=1845-34&p=f&t=7KuVcE1MKT3IwltD-11) pattern and product examples ("component" in the name relates to how this is set up in the product, it isn't constructed as a component in Figma).
- (Product Illustrations): Adds [**error-429-lg**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=~error-429-lg) illustration.
- (Product Icons): Adds [**work-item-parent**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~work-item-parent), [**work-item-child**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~work-item-child), and [**recipe**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~recipe) icons.

#### 🔄 Changes

- (Component Library): Updates link concepts, component documentation, and examples:
  - Adds [link section](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=72017-103312&t=kkXnciK7CA9NXjeU-11) under typography text styles with brief details about link use.
  - Adds more [**❖&nbsp;Link**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=81916-116837&p=f&t=n4LGVP8W7mwDeQPi-11) product examples.
  - Adds cross links between typography and link component pages.
  - Updates [**❖&nbsp;Link/Meta**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=86229-117441&t=AfjkHZIudoOnsyj4-11) and [**❖&nbsp;Link/UI**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=86229-117440&t=AfjkHZIudoOnsyj4-11) descriptions to include external link guidance.
- (Patterns & Page Templates): Increase [**merge request reports**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/Patterns-and-Page-Templates?node-id=1-106&p=f&t=kqPheBmsas3bFZl8-11) border radius to match recent product changes along with additional border cleanup.

#### Contributors

Dan Mizzi-Harris, Graham Bachelder, Jeremy Elder, Julia Miocene, Libor Vanc

## 18.1

<small>Published 2025-06-13</small>

This release adds new highlight design tokens and animated product icon artifacts while cleaning up library dependencies and fixing deprecated components across the design system.

### Changelog

#### ➕ Additions

- (Design tokens): Adds `highlight.*` design tokens. [Use highlight design tokens](https://design.gitlab.com/product-foundations/design-tokens-using#highlighting) to support drawing attention to matched results, identifying referenced elements, or visualizing relationships between content.

#### 🔄 Changes

- (Annotations): [Detaches icons](https://www.figma.com/design/dWP1ldkBU4jeUqx5rO3jrn/Annotations-and-utilities?m=auto&node-id=2084-34&t=QVBj7GaHUeR2bQTs-1) to remove library dependency.
  - Removes component library, design tokens, and product icons from enabled libraries in this file.
- (Product Icons): Includes [animated icon artifacts](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto&node-id=7806-471&t=ZALoVOXK3nIFe8Ix-1). These static shapes are used to construct animated icons. Animated icons are not currently available in Figma, [see them in action in gitlab-ui](https://design.gitlab.com/storybook/?path=/docs/base-animated-icon--docs).

#### 🛠️ Fixes

- (Design tokens): Updates `feedback-info-background-color` [description](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Design-tokens?m=auto&node-id=2195-80&t=t81pCKYeLWLBkL0H-1).
- (Data Visualization): Fixes [deprecated button instances](https://www.figma.com/design/17NxNEMa7i28Is8sMetO2H/Data-Visualization?m=auto&node-id=3-0&t=ii1nxhS8vXe8Tlaw-1).

#### Contributors

Dan Mizzi-Harris, Jeremy Elder, Julia Miocene, Libor Vanc, Mark Unthank, Sascha Eggenberger

## 18.0

<small>Published 2025-05-12</small>

This release brings important color updates across our UI kit. Since these changes affect nearly every component, you'll want to update your files as soon as possible.

We identified that highly saturated colors in our 600–950 range weren't performing optimally against dark surfaces. By reducing saturation in these specific values, we've significantly improved dark mode experiences.

Also, we've made design tokens easier to use in Figma. Semantic design tokens now appear first in the picker and color styles (chromatic, theme, and brand constants) have been moved to the **Design token** library.

Full highlights:

- Reduce saturation in the 600–950 chromatic hue values in order to have the colors work better in dark mode against darker surfaces.
- Reordered semantic design tokens to appear first in the style picker.
- Updated dark mode styles for selected buttons.
- Refined dropdown styles for improved visual hierarchy.

**💡 Figma updates:** Figma recently launched new products and features including changes to the editor UI. See everything announced at Config 2025 at [config.new](https://config.new).

### Changelog

#### ➕ Additions

- (Product Illustrations): Adds [**package-sm**](https://www.figma.com/design/1ui9w228X0S5WxaD0SRdIA/GitLab-Product-Illustrations?node-id=7320-1269&t=vP66JWHcINQDQM3H-4) illustration.

#### 🔄 Changes

- (Design Tokens): Reduces saturation in the 600–950 chromatic hue values in order to have the colors work better in dark mode against darker surfaces.
- (Design tokens): Moves [constant](/product-foundations/design-tokens#constant-design-tokens) color styles from [**📙&nbsp;Component&nbsp;library**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ) to [**Design&nbsp;tokens**](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD) library.
- (Component Library): Updates [**❖&nbsp;Button**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=122559-8763&t=ad6mk81EhMpPFpIH-4) selected styles.
- (Component Library): Updates [**❖&nbsp;Dropdown**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-14) component styles.

#### 🛠️ Fixes

- (Product icons): Fixes **face-neutral** mouth color.

#### Contributors

Dan Mizzi-Harris, Ian Gloude, Jeremy Elder, Julia Miocene, Libor Vanc

## 17.11

<small>Published 2025-04-11</small>

In this release we're continuing the spring cleaning theme. April deprecations bring May implementations! With the latest batch of removals hopefully it's easier for you to find and implement the latest supported components. At the same time, it helps reduce our maintenance overhead so we can focus on future improvements. Here are the highlights from this release:

- **Deprecation removal:** When things are deprecated we keep them around for a few milestones to give you time to migrate to the latest assets. We've had many things hanging around for too long and they've finally been ushered out. Some of these were rather large component sets so finding what you need in the component library should faster and more efficient.
- **Filter builder pattern:** Copy and paste this new pattern to quickly mock up layouts that include filtering. If there's a pattern you'd like to see added, create an issue and ping the design system team to get started.

**💡 Figma tip:** Okay, so instead of highlighting something specific, here's a simple tip to keep up to date with all new features—check Figma's [release notes](https://www.figma.com/release-notes/). Sometimes features are apparent in the UI, and other times not so much. This is a great way to learn about them straight from the source. Stay tuned for more frequent feature releases as we near Figma's annual [Config](https://config.figma.com/) conference too.

### Changelog

#### ➕ Additions

- (Patterns & Page Templates): Adds [**filter builder**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/Patterns-and-Page-Templates?node-id=1485-14186&p=f&t=4MfuaVZA5G8gh4pR-11) pattern.

#### 🔄 Changes

- (Data Visualization): Updates deprecated instances of buttons, dropdown, and tooltips to use the latest supported components.
- (Component Library): Breaking(medium): Fix padding and clear button visibility for [**❖&nbsp;Text/Search**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=49871-77784&t=5QLYWiucYKw8bj8A-11) in the _Submit, Filled_ variant. Updating this component will cause the clear button to appear in some circumstances and disrupt some existing layouts.
- (Product Icons): Updates "Issue types" category to "Work items" and renames icons with `issue-type-*` to `work-item-*`. This change has only been completed in Figma with updates the SVG library and product coming soon.

#### 🛠️ Fixes

- (Component Library): Fixes some dropdown list example descriptions that were incorrectly marked as deprecated.
- (Component Library): Fixes emoji and ellipsis button variant descriptions by removing individual variant descriptions and relying on a single component description.

#### 🗑️ Removals

- (Data Visualization): Removes blank chart pages (bar, gauge, pie).
- (Component Library): Removes deprecated avatar page and styles.
- (Component Library): Removes deprecated button page.
- (Component Library): Removes deprecated button group page.
- (Component Library): Removes deprecated dropdown page and deprecated component variants.
- (Component Library): Removes deprecated tooltip page.
- (Component Library): Removes deprecated token page.
- (Component Library): Removes deprecated tabs page and styles.

#### Contributors

Dan Mizzi-Harris, Jeremy Elder, Julia Miocene, Libor Vanc, Nick Brandt, Sascha Eggenberger

## 17.10

<small>Published 2025-03-14</small>

Spring is approaching in some parts of the world and we couldn't help but tidy up our release notes corner. This milestone marks our first step toward more engaging and helpful notes. Puns will be used. Changes will be logged. Credit will be given. Rest API assured we've got some automation in here for efficiency sake, but we're excited about the work and want to share that side of things with you too. With that, here are the highlights and particulars to pay attention to in this release.

- **Work items icons debut:** Updates and additions to our product icons family. Is that a coffee cup or an issue icon? You don't have to worry anymore, it's a work item. More updates to come in the next milestone as well as updates in the SVGs library.
- **Modal Improvements:** Don't dismiss the fixes that popped up this release, give them a go and let us know what other improvements you'd like to see.
- **Spring cleaning:** Multiple deprecated items have been removed, making our library lighter and more maintainable so we have more time to write these highlights. Most, if not all, of these things have had replacements for some time, but if you need any help migrating to a new version or replacement reach out in Slack.
- **Contributors:** We want to give credit to every one who contributes to the UI kit during the milestone. Inclusion is automated based on who created a branch that got merged and the maintainers who provide reviews and final merging. That doesn't cover everyone though, so we're trying to be mindful to add anyone we know to have contributed in a meaningful way. If you or someone you know contributed and got missed, just let us know and we'll be sure to make an update. Thank you for continuing to make these resources better with each release!

**💡 Figma tip:** You can now lock the aspect ratio when resizing elements on the canvas. This is helpful for maintaining the proportions of containers and media. [Here's how to do it ↗︎](https://www.youtube.com/watch?v=SITklmLqXo4)

### Changelog

#### ➕ Additions

- (Product Icons): Adds [**work-items**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=930-1284&t=54zN16OqLtNRmY3J-11) icon.

#### 🔄 Changes

- (Component Library): Updates instances of issue related icons with new designs from the product icons library.
- (Data Visualization): Changes variables and components based on upstream library updates. Component updates are in instances and not published.
- (Data Visualization): Changes color styles to use variables instead of hex values.
- (Design Tokens): Updates icon variables to reference text counterparts where possible and the [design token table](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Design-tokens?node-id=2195-80&t=JIhiuthFgkBsB3Wu-11) to reflect the changes. Learn about the color changes in [!4981](https://gitlab.com/gitlab-org/gitlab-ui/-/merge_requests/4981).
- (Patterns & Page Templates): Changes variables based on upstream library updates.
- (Patterns & Page Templates): Migrates page template components to not use deprecated components.
- (Product Icons): Updates [**issues**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=1-234&t=54zN16OqLtNRmY3J-11), [**issue-new**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=1-234&t=54zN16OqLtNRmY3J-11), and [**issue-type-issue**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=1-234&t=54zN16OqLtNRmY3J-11) icons with new design.
- (Product Illustrations):  Changes variables based on upstream library updates in a prior release.

#### 🛠️ Fixes

- (Component Library): Fixes [**❖&nbsp;Modal**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=125537-3862&t=Xy8KHK6cNrwR9op4-11) issues, including: add example content slot components; update component description to simplify and remove incorrect deprecated warning; and fix prop order.
- (Data Visualization): Fixes some things that were broken after the 17.7 release due to library changes not propagating correctly.
- (Patterns & Page Templates): Fixes problem where some [page template components](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/Patterns-and-Page-Templates?node-id=6-34&p=f&t=sr1k60LCXfaoV8EX-11) were published and had similar names to other components. Those components are no longer published and the names have been scoped to the page templates.

#### 🗑️ Removals

- (Component Library): Removes deprecated modal page and component.
- (Component Library): Removes deprecated file uploader component and documentation.
- (Component Library): Removes deprecated icon grids now that they've been added directly in the product icon file along with the remaining two deprecated grid styles.
- (Component Library): Removes deprecated status page and components.
- (Component Library): Removes deprecated progress bar page and components.
- (Data Visualization): Removes transparent white 8% style in favor of alpha variable.

#### 🤝 Contributors

Dan Mizzi-Harris, Emily Bauman, Jeremy Elder, Julia Miocene, Libor Vanc, Nick Brandt, Nick Leonard, Sascha Eggenberger

## 17.9

<small>Published 2025-02-18</small>

### Additions

**[Annotations](https://www.figma.com/file/dWP1ldkBU4jeUqx5rO3jrn)**

- Adds [**design status**](https://www.figma.com/design/dWP1ldkBU4jeUqx5rO3jrn/Annotations-and-utilities?m=auto&node-id=2084-34&t=snYVq3uSs77s6OkA-1), an optional tool to manage design progress and milestones. Available to copy into your files for transparent status sharing.

**[Product icons (Figma)](https://www.figma.com/file/h4YjjttHL5YI0mXZfQ4uuU)**

- Adds [**duo-chat-new**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~duo-chat-new) icon.

### Changes

**[Component library](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ)**

- Updates variables from design token library in [**banner**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=126604-7807&p=f&t=ySP3eq9nA4WgueJj-11), [**dropdown**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-14&p=f&t=ySP3eq9nA4WgueJj-11), and [**❖&nbsp;Link&nbsp;/&nbsp;Mention**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=86229-117442&t=ySP3eq9nA4WgueJj-11).

**[Product illustrations (Figma)](https://www.figma.com/design/1ui9w228X0S5WxaD0SRdIA/GitLab-Product-Illustrations?m=auto)**

- File now included as part of the UI kit project. Library access remains unchanged.

**[Patterns & page templates](https://www.figma.com/file/Amn6vBN9edRtuaTgy6ygkl)**

- Patterns & page templates is now live. Containing shared global resources that includes components and design assets owned by feature teams, maintained in a shared space due to their wide usage. The file also contains globally useful abstractions and combinations that promote a more consistent UI. Published as the "Patterns and Page Templates" library, although many assets are only available as "sticker sheets" to copy/paste. Initial release includes:
  - Empty states
  - Merge request reports
  - Navigation

### Removals

**[Component library](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ)**

- Removes the following deprecated component pages and assets because updated versions have been available for some time:
  - Alert (⚠️ DEPRECATED)
  - Banner (⚠️ DEPRECATED)
  - Drawer (⚠️ DEPRECATED)
  - Tree (⚠️ DEPRECATED)
- Removes the following deprecated pattern pages and assets because new assets have been available for some time in the [patterns & page templates](https://www.figma.com/file/Amn6vBN9edRtuaTgy6ygkl) file:
  - Empty states (⚠️ DEPRECATED)
  - Merge request reports (⚠️ DEPRECATED)
  - Navigation (⚠️ DEPRECATED)

## 17.8

<small>Published 2025-01-10</small>

Several small design token (variable) updates from the [design tokens](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Beta%3A-Design-tokens?m=auto) library.

## 17.7

<small>Published 2024-12-17</small>

Dark mode is now fully supported in the component library. All components have been updated to support both light and dark themes through color tokens, ensuring seamless switching between modes while maintaining accessibility standards. Create consistent dark theme experiences using system components and design tokens.

### Changes

**[Component library](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ)**

- Updates red 300 style hex value to match red 300 design token constant.
- Changes color styles to be linked to constant design tokens.
- Update color style names to match constants in Figma.
- Refactor Color page chips to show all transparencies.
- Reset [**❖&nbsp;Popover**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-131&node-type=canvas&t=syEEokKptoVKbvfR-11) and [**❖&nbsp;Accordion**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-0&node-type=canvas&t=syEEokKptoVKbvfR-11) component styles to default.

**[Design tokens](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Beta%3A-Design-tokens?m=auto)**

- The design tokens library is now out of beta and will be available by default for all new files created under the R&D workspace. Learn more in [using design tokens in design](https://design.gitlab.com/product-foundations/design-tokens-using#in-design).

**[Product illustrations (Figma)](https://www.figma.com/file/1ui9w228X0S5WxaD0SRdIA)**

- Illustrations now use design tokens to change color mode.
- Changes a stroke width to a variable to support dark theme.

### Fixes

**[Component library](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ)**

- Fixes neutral 50 and 100 chips in the color ramp that were using incorrect styles.
- Fixes [**❖&nbsp;Token**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-141&node-type=canvas&t=syEEokKptoVKbvfR-11) 'states' instances.

### Deprecations

**[Component library](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ)**

- Deprecate constants no longer supported: `$t-indigo-gradient`, `$alpha-dark-64`.

## 17.6

<small>Published 2024-11-12</small>

### Additions

[**📙 Component library**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto):

- Adds the following to replace deprecated versions:
  - [**❖&nbsp;Alert**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=124931-1309&t=TBq7yrU2nclAcYSv-1):
    - Uses latest buttons.
  - [**❖&nbsp;Button group&nbsp;/&nbsp;actions**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125951-4496&t=TBq7yrU2nclAcYSv-1):
    - Uses latest buttons.
  - [**❖&nbsp;Button group&nbsp;/&nbsp;options**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125969-4528&t=TBq7yrU2nclAcYSv-1):
    - Uses latest buttons.
  - [**❖&nbsp;Drawer**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125418-1519&t=TBq7yrU2nclAcYSv-1):
    - Uses latest buttons.
    - Lays the groundwork for slots.
  - [**❖&nbsp;Progress&nbsp;bar**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125508-99&t=TBq7yrU2nclAcYSv-1):
    - Adds support for variants.
  - [**❖&nbsp;Modal**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125537-3862&t=TBq7yrU2nclAcYSv-1):
    - Uses latest buttons.
    - Header property no longer optional.
    - Footer cleanup.
    - Mobile instance reflects dynamic header size and button wrapping.
  - Adds [**❖&nbsp;Token**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-141&t=TBq7yrU2nclAcYSv-1) and [**❖&nbsp;Filtered&nbsp;search&nbsp;token**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126861-728&t=TBq7yrU2nclAcYSv-1).
    - Replaces deprecated **❖&nbsp;Token** with two components.
  - Adds **❖&nbsp;Dropdown** [list examples](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126831-104323&t=TBq7yrU2nclAcYSv-1) that use latest components and design tokens.
    - **❖&nbsp;Create&nbsp;label**
    - **❖&nbsp;Create&nbsp;tag**
    - **❖&nbsp;Pipeline**
    - **❖&nbsp;Users**

[**🚧 DRAFT: Patterns and page templates**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT%3A-Patterns-and-Page-Templates?m=auto):

- Adds [**navigation**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT%3A-Patterns-and-Page-Templates?m=auto&node-id=1-107&t=ho82mWdWFThf3DbU-1) components, which were formerly in the component library.
- Adds [**merge requests reports**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT%3A-Patterns-and-Page-Templates?m=auto&node-id=1-106&t=ho82mWdWFThf3DbU-1), which was formerly in the component library. Now a template that uses design tokens rather than a component for more flexible composition.
- Adds [**empty state**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT%3A-Patterns-and-Page-Templates?m=auto&node-id=1-105&t=ho82mWdWFThf3DbU-1) as a pattern, which was formerly in the component library.

[**Product icons**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto):

- Adds: [hash](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto&node-id=1-234&t=WUwUyItekcWAWP5U-1) and [multiple-choice](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto&node-id=1-234&t=WUwUyItekcWAWP5U-1) that will be used to represent custom field types.

[**Product illustrations**](https://www.figma.com/design/1ui9w228X0S5WxaD0SRdIA/GitLab-Product-Illustrations?m=auto&t=S7juWznExTHOShY2-7):

- Adds [avatar-bot-duo-code-review](https://www.figma.com/design/1ui9w228X0S5WxaD0SRdIA/GitLab-Product-Illustrations?m=auto&node-id=6804-1327&t=LEjvsAi6Z0QAv5ll-1).

### Changes

[**📙 Component library**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto):

- Breaking (medium): [**❖&nbsp;Toggle**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-140&t=TBq7yrU2nclAcYSv-1) uses new dimensions.
- Breaking (medium): Changes [**❖&nbsp;Pagination**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=48275-166113&t=TBq7yrU2nclAcYSv-1) width, but overrides are maintained.
- Breaking (medium): Change [**❖&nbsp;Broadcast&nbsp;message**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=19944-369&t=TBq7yrU2nclAcYSv-1) component structure to use a border rather than inner shadow to create bottom edge highlight.
- Breaking (medium): Change [**❖&nbsp;Popover**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=57879-91946&t=TBq7yrU2nclAcYSv-1) and instances to use design tokens. This update is likely to cause style overrides for content to be lost, for example setting blue for a link color.
- Update [forms](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=49840-75722&t=TBq7yrU2nclAcYSv-1) components to use design tokens:
  - Breaking (high): Refactor **❖&nbsp;\_Base&nbsp;Prefix** and **❖&nbsp;\_Base&nbsp;Suffix** to use latest button component.
  - Refactor form element construction to use latest auto layout features.
  - Refactor documentation and instances.
- Applies design tokens to components, elements, and instances:

  - [**❖&nbsp;Alert**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=124931-1309&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Accordion**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-0&t=TBq7yrU2nclAcYSv-1) link text color and body content.
  - [**❖&nbsp;Banner**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126604-7819&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Broadcast&nbsp;message**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=19944-369&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Date&nbsp;picker**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=19944-386&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Dropdown**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=61252-95177&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Filtered&nbsp;search&nbsp;token**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126861-728&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Form&nbsp;group**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=49856-76520&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Inline&nbsp;link**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=84073-117532&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Modal**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125537-3862&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Pagination**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=48275-166113&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Progress&nbsp;bar**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125508-99&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Table**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=51766-80830&t=TBq7yrU2nclAcYSv-1):
    - Update **❖&nbsp;Checkbox** used in **❖&nbsp;Header** row and **❖&nbsp;Body row**.
    - Update **❖&nbsp;Button** and **❖&nbsp;Avatar** used in **❖&nbsp;\_Base body cell**.
  - [**❖&nbsp;Toast**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=20171-225&t=TBq7yrU2nclAcYSv-1)
    - Resets instance overrides.
    - Adds shadow.
  - [**❖&nbsp;Toggle**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-140&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Token**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126843-5902&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Dropdown** list examples](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126831-104323&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Dropdown** elements](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-14&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Dropdown** base](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-14&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Form** base](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125990-31629&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Skeleton&nbsp;loader**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=2844-0&t=TBq7yrU2nclAcYSv-1)
  - [**❖&nbsp;Tree&nbsp;connector**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=123676-558&t=TBq7yrU2nclAcYSv-1)
  - [Typography documentation](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=440-0&t=TBq7yrU2nclAcYSv-1)

- Changes [**❖&nbsp;Dropdown**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-14&t=TBq7yrU2nclAcYSv-1) page layout and instances.
- Changes [**❖&nbsp;UI&nbsp;link**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=84019-117532&t=TBq7yrU2nclAcYSv-1) and [**❖&nbsp;Meta link**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=81916-116888&t=TBq7yrU2nclAcYSv-1) blend mode to support dark mode.
- Changes [**❖&nbsp;Mention&nbsp;link**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=29627-56&t=TBq7yrU2nclAcYSv-1) frame to use default Figma styles.
- Adds shadow to [**❖&nbsp;Tooltip**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=121178-28119&t=TBq7yrU2nclAcYSv-1).

[**Product illustrations**](https://www.figma.com/design/1ui9w228X0S5WxaD0SRdIA/GitLab-Product-Illustrations?m=auto&t=S7juWznExTHOShY2-7):

- Inherits `$neutral-*` color change from the [component Library](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=3050-0&t=TBq7yrU2nclAcYSv-1).

### Fixes

[**📙 Component library**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto):

- Fixes order of color chips in several [color ramps](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=581-1&t=TBq7yrU2nclAcYSv-1).
- Fixes icon in [**❖&nbsp;Button** instances](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=123887-8348&t=TBq7yrU2nclAcYSv-1).
- Fixes [**❖&nbsp;Alert**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=124931-1309&t=TBq7yrU2nclAcYSv-1) background color.
- Fixes [**❖&nbsp;Tree** instance](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=123677-3212&t=TBq7yrU2nclAcYSv-1).
- Updates [**❖&nbsp;Table** instances](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=49122-76749&t=TBq7yrU2nclAcYSv-1) to remove overrides.

### Deprecations

[**📙 Component library**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto):

- Deprecates the following components, replaced by new versions that use design tokens:
  - **❖&nbsp;Alert**. Use [**❖&nbsp;Alert**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=124931-1309&t=TBq7yrU2nclAcYSv-1) instead.
  - **❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Actions**. Use [**❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Actions**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125951-4496&t=TBq7yrU2nclAcYSv-1) instead.
  - **❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Options**. Use [**❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Options**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125969-4528&t=TBq7yrU2nclAcYSv-1) instead.
  - **❖&nbsp;Drawer**. Use [**❖&nbsp;Drawer**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125418-1519&t=TBq7yrU2nclAcYSv-1) instead.
  - **❖&nbsp;Progress&nbsp;bar**. Use [**❖&nbsp;Progress&nbsp;bar**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125508-99&t=TBq7yrU2nclAcYSv-1) instead.
  - **❖&nbsp;Modal**. Use [**❖&nbsp;Modal**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=125537-3862&t=TBq7yrU2nclAcYSv-1) instead.
  - **❖&nbsp;Token**. Use [**❖&nbsp;Token**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126843-5902&t=TBq7yrU2nclAcYSv-1) and [**❖&nbsp;Filtered&nbsp;search&nbsp;token**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=126861-728&t=TBq7yrU2nclAcYSv-1) instead.
  - Deprecates some **❖&nbsp;Dropdown** list examples. Use [**❖&nbsp;Create&nbsp;label**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=126751-11319&t=pFvCnnwkpBxXdpTL-4), [**❖&nbsp;Create&nbsp;tag**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=126751-11668&t=pFvCnnwkpBxXdpTL-4), [**❖&nbsp;Pipeline**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=126751-10051&t=pFvCnnwkpBxXdpTL-4), and [**❖&nbsp;Users**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=126751-8655&t=pFvCnnwkpBxXdpTL-4) instead.
- Deprecates **navigation** components, use [**navigation** components](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT%3A-Patterns-and-Page-Templates?m=auto&node-id=1-107&t=ho82mWdWFThf3DbU-1) in the patterns and page templates library instead.
- Deprecates merge request reports, use [**merge&nbsp;request&nbsp;reports**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT%3A-Patterns-and-Page-Templates?m=auto&node-id=1-106&t=ho82mWdWFThf3DbU-1) in the patterns and page templates library instead.
- Deprecates **❖&nbsp;Empty&nbsp;state**. [**Empty&nbsp;state**](https://www.figma.com/design/Amn6vBN9edRtuaTgy6ygkl/%F0%9F%9A%A7-DRAFT%3A-Patterns-and-Page-Templates?m=auto&node-id=1-105&t=ho82mWdWFThf3DbU-1) is now a pattern in the patterns and page templates file.
- Deprecates status (severity) because it's not part of the design system.
- Deprecates **❖&nbsp;File&nbsp;uploader** as there as no plans to include this in the design system.

### Removals

[**📙 Component library**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto):

- Removes empty "coming soon" pages.

[**Product illustrations (GitLab SVGs)**](https://gitlab-org.gitlab.io/gitlab-svgs/):

- Removes: chart-empty-state, empty-dag-md, export-import, lock_promotion, manual_action, multi-editor_no_changes_empty, multi_file_editor_empty and web-ide_promotion.

## 17.5

<small>Published 2024-10-11</small>

### Additions

- Adds **❖&nbsp;Empty&nbsp;state** [search product examples](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=74155-102783&t=tzJb0RWWdNOQA8bU-1).
- Adds icons: [**resize**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto&node-id=1-1037&t=EjNPtuAD76KsfJG8-1) and [**thumbs-down**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto&node-id=1-234&t=9pu9UXkFE9Y9uaz6-1).

### Changes

- Changes [**shadows**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=94196-93324&t=tzJb0RWWdNOQA8bU-1) to use design tokens, changes shadow size and shape.
- Changes [deprecated product icons](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=7433-494) to make them easier to recognize as deprecated.

### Fixes

- Fixes an issue where the **thumbs-down** icon would flip in component insertion.

### Deprecations

- Deprecates **thumbs-down** icon. Use new [**thumbs-down**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto&node-id=1-234&t=9pu9UXkFE9Y9uaz6-1) icon instead.

### Removals

- Removes illustrations: error-403, error-404, empty-serverless-lg, empty-escalation, empty-state-clusters, docker-empty-state, docker-error-state, deploy-board, Dependency-list-empty-state, analytics/no-access, productivity-analytics-empty-state, multi-editor_all_changes_committed_empty, and tracing.

## 17.4

<small>Published 2024-09-16</small>

### Additions

- Adds icons: [**calendar-overdue**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~calendar-overdue), [**tanuki-ai-off**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~tanuki-ai-off).
- Adds illustrations: [**empty-cloud-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-cloud-md), [**empty-epic-add-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-epic-add-md), [**empty-issues-add-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-issues-add-md), [**empty-key-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-key-md), [**empty-labels-add-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-labels-add-md), [**empty-organizations-add-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-organizations-add-md), [**empty-secure-add-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-secure-add-md), [**empty-subgroup-add-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-subgroup-add-md), [**empty-user-alert-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-user-alert-md), [**empty-user-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-user-md), [**status-alert-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-alert-md), [**status-alert-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-alert-sm), [**status-fail-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-fail-md), [**status-fail-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-fail-sm), [**status-new-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-new-md), [**status-new-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-new-sm), [**status-nothing-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-nothing-md), [**status-nothing-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-nothing-sm), [**status-settings-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-settings-md), [**status-settings-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-settings-sm), [**status-success-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-success-md) and [**status-success-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=status-success-sm).
- Breaking (high): Adds all-new [**❖&nbsp;Button**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=122559-8763&). This powerhouse component unifies multiple button types, offering unprecedented flexibility and ease of use. Highlights include:
  - Seamless switching between 12(!) styles.
  - Four of your favorite button types - text, icon only, dropdown, and icon only dropdown.
  - Built-in icon picker for lightning-fast customization ⚡️
  These changes make it easier to create and edit buttons while maintaining consistency across designs. The new Button component replaces several previous button components, offering a more streamlined and flexible approach to button use in your Figma artifacts.
- Breaking (high): Adds [**❖&nbsp;Split&nbsp;dropdown&nbsp;button**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123024-2869), [**❖&nbsp;Emoji&nbsp;button**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123515-16040), and [**❖&nbsp;Ellipsis&nbsp;button**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123733-4517) for specialized button needs. Full features detailed in the [instances](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-7).
- Adds [**❖&nbsp;Sorting**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123918-20385). While button-like in appearance, this component is purpose-built for sorting interactions, offering a distinct set of features tailored for this specific use case.
- Breaking (high): Adds [**❖&nbsp;Tab&nbsp;group**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123608-8100). Choose the number of tabs, current tab, justification style, and more from the property panel of this completely rearchitected component. Need something else? This release also adds [**❖&nbsp;Tab&nbsp;item**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123607-1296&t=AE3du9yzDlchT7UE-4) to allow you to go where tab group can't.
- Breaking (high): Adds [**❖ Tree row**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123674-393), we've planted the seed for heirarchy by rethinking this component from the soil up. No longer do you need to leaf through multiple components to get to the root of it all. Stem spacing confusion by branching out with [**❖ Tree connector**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123676-558). Just line it up to the top left for perfect spacing every time — treemendous!

### Enhancements

- You asked, we delivered. [**Avatars**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=120518-1378) have more photo and new illustration profile picture options built in.

### Changes

- Breaking (medium): Changes some [**❖&nbsp;Badge**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121748-1095&t=7o3kOm8LY0kYnQbR-4) properties to use Figma variables. Take care if using custom size overrides, such as those found in issue and pipeline statuses, as these will be reset.
- Updated illustrations: [**empty-epic-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-epic-md), [**empty-issues-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-issues-md), [**empty-labels-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-labels-md), [**empty-organizations-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-organizations-md), [**empty-secure-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-secure-md), [**empty-subgroup-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=empty-subgroup-md) and [**rocket-launch-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=rocket-launch-md).
- Updates **❖&nbsp;Label**, combining interactive states into a single property to match other components.
- Updates **Button** components, **Link** components, **❖&nbsp;Sorting**, **Tab** components, and **Tree** components to use design tokens.
- Updates deprecated component descriptions to link to current component version.

### Fixes

- Fixes old **❖&nbsp;Code** and Color chip component usage in instances.
- Fixes [**Documentation**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=96698-362) utilities to use new **❖&nbsp;Doc&nbsp;divider** instead of the deprecated **Divider** that's from the deprecated navigation.

### Deprecations

- Deprecates **Button** components. Use new [**Button**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-7) components instead. Components deprecated:
  - **❖&nbsp;_Base Button**
  - **❖&nbsp;Button&nbsp;/&nbsp;Default**
  - **❖&nbsp;Button&nbsp;/&nbsp;Confirm**
  - **❖&nbsp;Button&nbsp;/&nbsp;Danger**
  - **❖&nbsp;Button&nbsp;/&nbsp;Loading**
  - **❖&nbsp;Button&nbsp;/&nbsp;Disabled**
  - **❖&nbsp;Button&nbsp;/&nbsp;Selected**
  - **❖&nbsp;Button&nbsp;/&nbsp;Dashed**
  - **❖&nbsp;Button&nbsp;/&nbsp;Emoji**
  - **❖&nbsp;Button&nbsp;/&nbsp;Link**
- Deprecates **Tabs** components. Use new [**❖ Tab group**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123608-8100) component instead. Components deprecated:
  - **❖&nbsp;Tab&nbsp;-&nbsp;Base**
  - **❖&nbsp;Fitted&nbsp;tab&nbsp;-&nbsp;Base**
  - **❖&nbsp;Fitted&nbsp;tab&nbsp;group&nbsp;-&nbsp;3&nbsp;up**
  - **❖&nbsp;Fitted&nbsp;tab&nbsp;group&nbsp;-&nbsp;2&nbsp;up**
  - **❖&nbsp;Fitted&nbsp;active**
  - **❖&nbsp;Fitted&nbsp;default**
  - **❖&nbsp;Tab&nbsp;group**
  - **❖&nbsp;Active**
  - **❖&nbsp;Hover**
  - **❖&nbsp;Default**
- Deprecates **Tree** components. Use new [**Tree**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=123602-116112) components instead. Components deprecated:
  - **❖&nbsp;Connector**
  - **❖&nbsp;Branch&nbsp;-&nbsp;Base**
  - **❖&nbsp;Row**
- Deprecates **issue-block** icon. Use new [**entity-blocked**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~entity-blocked) instead.

### Removals

- Removes **Page&nbsp;layouts** page that relied on the old navigation design.
- Removes deprecated **Navigation** components and removes remaining usage from instances.
- Removes deprecated **Breadcrumb** components and removes remaining usage from instances.
- Removes deprecated **Label** components and removes remaining usage from instances.

## 17.3

<small>Published 2024-08-08</small>

### Additions

- Breaking (high): Adds [**❖&nbsp;Badge**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121748-1095&t=ecNprMcPJ9xOuyYp-4). One size to rule them all! Also fixes an intermittent icon color bug.
- Breaking (high): Adds [**❖&nbsp;Breadcrumb**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121134-113210&t=ecNprMcPJ9xOuyYp-4). Loafs more useful options, much butter avatars, and go with the grain with new quick presets  — it's the yeast we can do!
- Breaking (high): Adds [**❖&nbsp;Tooltip**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121178-28119&t=bv54MAp5zJRiIlrJ-4). New, shiny, informative. All the same features, but refactored to not use a base component.
- Adds icons: [**duo-chat**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~duo-chat), [**duo-chat-off**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~duo-chat-off), and [**entity-blocking**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~entity-blocking).
- Adds illustrations: [**catalog-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/catalog-sm.svg), [**empty-catalog-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-catalog-md.svg), [**error-500-lg**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations%2Ferror%2Ferror-500-lg.svg), [**error-502-lg**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations%2Ferror%2Ferror-502-lg.svg), [**error-503-lg**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations%2Ferror%2Ferror-503-lg.svg), and [**empty-secrets-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-secrets-md.svg).

### Enhancements

- Animates [**❖&nbsp;Spinner**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=19944-0&t=ecNprMcPJ9xOuyYp-4) so it now spins in prototypes. Rotates component properties to use naming convention.

### Changes

- Updates [**tanuki-ai**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~tanuki-ai) icon sparkles shape.
- Updates [**comment**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment), [**comment-next**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-next), [**comment-lines**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-lines) and [**comment-dots**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-dots) icons bubble shape.
- Breaking (high): Updates avatar project/group fallback structure to prepare for dark mode. If you are the 1 person currently affected your letter overrides need to be reset.
- Updates **❖&nbsp;Label** usage in the UI kit and adds [instances](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121579-18249&t=saeRBlcQWRfDkFuM-4).
- Updates **❖&nbsp;Badge**, **❖&nbsp;Breadcrumbs**, **❖&nbsp;Spinner**, and **❖&nbsp;Tooltip** to use design tokens.

### Fixes

- Fixes color swatches on [**Color**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=581-1).

### Deprecations

- Deprecates **❖&nbsp;Breadcrumb**. Use new [**❖&nbsp;Breadcrumb**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121134-113210&t=ecNprMcPJ9xOuyYp-4) instead.
- Deprecates **❖&nbsp;Badge**. Use new [**❖&nbsp;Badge**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121748-1095&t=ecNprMcPJ9xOuyYp-4) instead.
- Deprecates **❖&nbsp;Tooltip**. Use new [**❖&nbsp;Tooltip**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=121178-28119&t=bv54MAp5zJRiIlrJ-4) instead.
- Deprecates **long-arrow** icon. Use [**arrow-right**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~arrow-right) instead.
- Deprecates **merge-request-open** and **git-merge** icons. Use [**merge-request**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~merge-request) instead.
- Deprecates **folder-o** icon. Use [**folder**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~folder) instead.
- Deprecates **messages** icon. Use [**bullhorn**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~bullhorn) instead.
- Deprecates **remove-all** icon. Use [**remove**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~remove) instead.
- Deprecates **task-done** icon. Use [**todo-done**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~todo-done) instead.
- Deprecates **tachometer** icon. Use [**dashboard**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~dashboard) instead.
- Deprecates **issue-blocked** icon. Use [**entity-blocking**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~entity-blocking) or [**entity-blocked**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~entity-blocked) instead.

## 17.2

<small>Published 2024-07-12</small>

<note>Speed up common color decisions through our design tokens Figma library, now in open beta. Start using it today, and let us know what you think in the [feedback issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1870).</note>

### Additions

- Added [**❖&nbsp;Avatar**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=120518-1434&m=design). Component now includes multiple options for people, logo, and fallback states to chose from.
- Added [**❖&nbsp;Avatar-labeled**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=120518-1489&t=gt0xr6Kwr1Zg3tWb-4). The new avatar, but now includes text labels. Choose a stacked or inline label, with or without a sub-label, change the size or shape… the possibilities are (almost) endless.
- Added [**❖&nbsp;Label**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=120776-3617&t=gt0xr6Kwr1Zg3tWb-4). This new version of the component includes many long awaited features including: a remove button, a single place to change color, a single size, and options for lighter labels and darker labels. Happy labelling.
- Added [**❖&nbsp;Profile&nbsp;navigation**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=119486-16353&t=r5eNZvmP0hqq3rhR-4).
- Added [**❖&nbsp;User&nbsp;settings&nbsp;navigation**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=120077-12557&t=g77WTJQQTCbubeMt-1).
- Added opt in [**Beta:&nbsp;Design&nbsp;tokens**](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Beta%3A-Design-tokens?m=auto) library file. Using design tokens as Figma variables is moving to open-beta following a successful invite-only pilot. In the future, color styles will be removed from the component library and these Figma variables will be updated to support dark mode.
- Added the following icons: [**insert**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~insert).
- Added the following illustrations: [**empty-variables-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-variables-md.svg), [**variables-sm.svg**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/variables-sm.svg).

### Enhancements

- Updated [**❖&nbsp;Banner**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-4) to make illustrations easier to swap. Property names are now also more consistent with other components.

### Changes

- Updated [**Color**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=581-1&t=kEI3wvJ1158SVYZV-1) foundation:
  - Renamed "gray" color ramp styles to "neutral", "white" to "neutral-0", and "black" to "neutral-1000" to align with design token work
  - Updated hex values for neutral 700–1000 (see [#2751](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2751) for details)
  - Removed contrast ratios from color chips since they are present in [Pajamas](https://design.gitlab.com/product-foundations/color) and plugins or native apps can also inspect ratios.
  - Other miscellaneous auto layout and layer naming improvements
- Breaking (low): Remove hidden title layer from the `Has title:false` **❖ Alert** variant.
- Updated **❖&nbsp;Alert**, **❖&nbsp;Avatar**, **❖&nbsp;Avatar-labeled**, **❖&nbsp;Banner**, **❖&nbsp;Label**, and **❖&nbsp;Focus&nbsp;ring** to use design tokens.
- Updated icons in [**GitLab&nbsp;Product&nbsp;Icons**](https://www.figma.com/design/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?m=auto) to not use styles from **📙&nbsp;Component&nbsp;Library**.
- Note: As **❖&nbsp;Focus&nbsp;ring**, icons, and neutral colors are used in nearly every component, nearly every component was 'modified' in this release.

### Deprecations

- Deprecated **❖&nbsp;Avatar**. Use the new [**❖&nbsp;Avatar**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=120518-1434&t=gt0xr6Kwr1Zg3tWb-4) and [**❖&nbsp;Avatar-labeled**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=120518-1489&t=gt0xr6Kwr1Zg3tWb-4) instead.
- Deprecated [**❖&nbsp;Breadcrumb**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=425-5&t=DC92KFBAiBwU50Ng-1). New version of component will have properties for:
  - number of page levels
  - show ellipsis button for narrow viewports
- Deprecated **❖&nbsp;Label**. Use the new [**❖&nbsp;Label**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=120776-3617&t=gt0xr6Kwr1Zg3tWb-4) instead.
- Deprecated `Focus ring` layer styles.

## 17.1

<small>Published 2024-06-18</small>

### Additions

- Added [**❖&nbsp;Your&nbsp;work&nbsp;navigation**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=118599-11728&t=IDKzXiM7w25vEb8L-1).
- Added the following illustrations: [**commit-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/commit-sm.svg), [**wiki-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/wiki-sm.svg), [**train-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/train-sm.svg), [**scan-alert-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/scan-alert-sm.svg) and [**empty-train-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-train-md.svg).

### Changes

- Change name of variable collection to **Legacy**. This collection intentionally left blank. This collection cannot be deleted due to a bug in Figma.
- Change name of **Navigation** components to:
  - **❖&nbsp;Project&nbsp;Navigation**
  - **❖&nbsp;Group&nbsp;Navigation**
  - **❖&nbsp;Admin&nbsp;Navigation**

### Fixes

- Fix [**❖&nbsp;Broadcast&nbsp;message**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=19944-369&t=94RKn28VOYyQ6egs-4) dismiss button visbility.

## 17.0

<small>Published 2024-05-14</small>

### Additions

- Added [**Navigation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=107958-34) components, including:
  - [**❖&nbsp;Navigation&nbsp;/&nbsp;Project&nbsp;navigation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=107958%3A2300&mode=dev&t=dhSrpEWep5xpbMeB-1)
  - [**❖&nbsp;Navigation&nbsp;/&nbsp;Group&nbsp;navigation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=118382%3A8241&mode=dev&t=1z5mcG90JxppszZc-1)
  - [**❖&nbsp;Navigation&nbsp;/&nbsp;Admin&nbsp;navigation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=117918%3A4864&mode=dev&t=dhSrpEWep5xpbMeB-1)
- Added an [annotations and utilities library](https://www.figma.com/file/dWP1ldkBU4jeUqx5rO3jrn/Annotations-and-utilities). The library is optional as it's not automatically enabled for everyone by default. It launches with [**❖&nbsp;Design&nbsp;token**](https://www.figma.com/file/dWP1ldkBU4jeUqx5rO3jrn/Annotations-and-utilities?type=design&node-id=2002-34), which is a utility used to annotate where design tokens are used in a design. Expect more tools to help document and present design decisions to be added in upcoming milestones. Learn more about our upcoming [plans for the UI kit](https://gitlab.com/groups/gitlab-org/gitlab-services/-/epics/22).

### Changes

- Added an additional property to the **❖&nbsp;Navigation** sub-component [**❖&nbsp;_Page**](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?m=auto&node-id=107958%3A2360&t=BJeCsFnYIyQZulYc-1) to support different hover interactions.

### Fixes

- Updated the min width in the [**❖&nbsp;Dropdown**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/📙-Component-library?type=design&node-id=61252-95177&mode=design&t=6uorytul0fvm1FFl-11) description to match code implementation.
- Corrected icon colors in [**❖&nbsp;Button**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-7) components to match code implementation for all states.
- Updated the [**❖&nbsp;Navigation&nbsp;/&nbsp;Admin&nbsp;navigation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=117918%3A4864&mode=dev&t=dhSrpEWep5xpbMeB-1) to use the correct icons.

## 16.11

<small>Published 2024-04-15</small>

### Additions

- Added the following icons: [**milestone**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~milestone), [**regular expression**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~regular-expression).
- Added the following illustrations: [**cloud-tanuki-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/cloud-tanuki-sm.svg), [**cloud-user-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/cloud-user-sm.svg).

### Changes

- Moved [**Button group**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=117033%3A15878) components to their own page.

## 16.10

<small>Published 2024-03-15</small>

### Additions

- Added [**❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Actions**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=114508-15861&mode=design&t=ypVPOQwRDr8weeWN-4) to support button group use cases with only actions.
- Added [**❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Options**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=114050-39090&mode=design&t=0qlM6D5oUArRbPqn-4) to support button group use cases with selectable items.
- Added the following illustrations: [**empty-environment-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-environment-md.svg), [**empty-commit-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-commit-md.svg), [**empty-private-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-private-md.svg), [**empty-scan-alert-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-scan-alert-md.svg), [**empty-service-desk-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-service-desk-md.svg), [**empty-user-settings-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-user-settings-md.svg), [**service-desk-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/service-desk-sm.svg).

### Enhancements

- Updated **❖&nbsp;Dropdown** [behavior instances](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65182-99209&mode=design&t=qiXNFeLRSjRCAUcd-11) to include descriptions, update the option text to be more descriptive, and ensure the tip is centered in panel alignment.

### Changes

- Updated the [**❖&nbsp;Popover**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=57879-91946&mode=design&t=zI9YVVtzzzJBTVVp-11) description to match Pajamas ([!3742](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3742)) and [default instance](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=57879-93337&mode=design&t=zI9YVVtzzzJBTVVp-11) text to match GitLab UI ([!3970](https://gitlab.com/gitlab-org/gitlab-ui/-/merge_requests/3970)).
- Breaking (medium): Updated [❖❖&nbsp;Text/Multiline](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49888%3A76378&mode=design&t=Mya6LjBjoNEiXJh2-1) form element to display as four lines, up from one line.
- Added `Size: SM`, `Type: Icon` and `Badge: True` variants to [**❖&nbsp;Button&nbsp;/&nbsp;Selected**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=78884-115024&mode=design&t=qRgcVzE9T0RdK8uf-4) to better support swapping with Default buttons.
- Updated **Table** / [**_Base&nbsp;header&nbsp;cell**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=48707-59823&mode=design&t=ETApnqRp7cnd70Dz-11) sortable variants to use glyphs (↑, ↓) instead of icon buttons. The glyph color is the same as the text. More details in [#1780](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1780).
- Updated **❖&nbsp;Table** [Configuration: Sortable (on hover) instance](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49122-76749&mode=design&t=ETApnqRp7cnd70Dz-11) cell background so that it doesn't reflect a color change on hover. More details in [#1780](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1780).

### Fixes

- Updated the sm tertiary dropdown [**❖&nbsp;Button**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=13756-14840&mode=design&t=3ryi0NDtczpu54o3-4) icon from upload to chevron-down to appear as a dropdown.

### Deprecations

- Deprecated [**❖&nbsp;Button&nbsp;Group**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=20378-296&mode=design&t=Pykxj5xxikTefumb-4).
  - Use [**❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Actions**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=114508-15861&mode=design&t=ypVPOQwRDr8weeWN-4) for button group use cases with only actions.
- Use [**❖&nbsp;Button&nbsp;group&nbsp;/&nbsp;Options**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=114050-39090&mode=design&t=0qlM6D5oUArRbPqn-4) for button group use cases with selectable items.

## 16.9

<small>Published 2024-02-12</small>

### Additions

- Added the following icons: [**dash-circle**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~dash-circle), [**partner-verified**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~partner-verified).
- Added the following illustrations: [**empty-job-failed-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-job-failed-md.svg), [**empty-job-manual-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-job-manual-md.svg), [**tanuki-ai-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/tanuki-ai-md.svg), [**tanuki-ai-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/tanuki-ai-sm.svg), [**empty-devops-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/devops-sm.svg).

### Removals

- Removed a number of unused and out-of-date illustrations and replaced them with updated versions. Refer to these MRs for a full list: [!991](https://gitlab.com/gitlab-org/gitlab-svgs/-/merge_requests/991), [!1005](https://gitlab.com/gitlab-org/gitlab-svgs/-/merge_requests/1005).
- The following elements have been permanently removed to streamline future updates and limit the scope of upcoming design token work. All related pages, components, and styles are included in the removal. Please refer to the Figma file history if you need to retrieve an old design artifact.
  - Alert (⚠️ DEPRECATED), use [**❖&nbsp;Alert**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=95988-11501&mode=design&t=pOLKkgUyFwpTsdSO-11).
  - Skeleton loader (⚠️ DEPRECATED), use [**❖&nbsp;Skeleton&nbsp;loader**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-27&mode=design&t=pOLKkgUyFwpTsdSO-11).

## 16.8.1

<small>Published 2024-01-29</small>

<note>Special spooky update to address [ghost changes (#1766)](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1766) 👻</note>

### Changes

- Non-visual and dependancy updates have been published for:
  - **❖ Alert (⚠️ DEPRECATED)**
  - **❖ Banner**
  - **❖ Breadcrumb**
  - **❖ Broadcast message**
  - **❖ Button / Default**
  - **❖ Drawer**
  - **❖ Dropdown**
  - **❖ Option**
  - **❖ Create label**
  - **❖ Create tag**
  - **❖ Extended**
  - **❖ Icon list**
  - **❖ Lables**
  - **❖ Multiple groups**
  - **❖ Pipeline**
  - **❖ Simple action list**
  - **❖ Simple option list**
  - **❖ Users**
  - **❖ Empty state**
  - **❖ Drag & Drop (Square)**
  - **❖ Markdown**
  - **❖ Upload**
  - **❖ MR widget**
  - **❖ MR widget expand**
  - **❖ Modal**
  - **❖ Header (⚠️ DEPRECATED)**
  - **❖ Popover**
  - **❖ Body row**
  - **❖ Header row**
  - **❖ Table**
  - **❖ Token**

## 16.8

<small>Published 2024-01-12</small>

### Additions

- Added an additional, lighter color step (`10`) for all [theme color styles](/product-foundations/color#themes) as used in the navigation. For example, `$t-blue-10 :: #E6ECF0`. More details in [!3871](https://gitlab.com/gitlab-org/gitlab-ui/-/merge_requests/3871#3829ff34663f6062ba80354aeb0153aa6a67939a).
- Added a small (16px) [**stacked&nbsp;avatar**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=1833-2791&mode=design&t=VXWJcH1lk47GpFn9-11) instance to support stacked avatars in list layouts. More details in [!2441](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2441).
- Added the following illustration: [**devops-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/devops-sm.svg).

### Enhancements

- Aligned the design spec for [**stacked&nbsp;avatars**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=1833-2791&mode=design&t=VXWJcH1lk47GpFn9-11) with the latest changes in [!2441](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2441). Changes include using a mask instead of a border for the mask cutout effect, reducing the cutout effect from `2px` to `1.5px`, reducing badge padding, and adding hover and focus instance examples.

## 16.7

<small>Published 2023-12-19</small>

### Additions

- Added the following illustration: [**purchase-success-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/purchase-success-md.svg)

## 16.6

<small>Published 2023-11-17</small>

### Additions

- Added [**x**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~x) icon to replace the twitter icon.
- Added the following illustrations: [**empty-access-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-access-md.svg), [**empty-chart-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-chart-md), [**empty-dashboard-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-dashboard-md), [**empty-devops-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-devops-md), [**empty-epic-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-epic-md), [**empty-geo-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-geo-md), [**empty-job-canceled-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-job-canceled-md), [**empty-job-not-triggered-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-job-not-triggered-md), [**empty-job-pending-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-job-pending-md), [**empty-job-scheduled-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-job-scheduled-md), [**empty-job-skipped-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-job-skipped-md), [**add-user-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/add-user-sm.svg), [**chart-bar-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/chart-bar-sm), [**chat-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/chat-sm), [**cloud-check-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/cloud-check-sm), [**merge-requests-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/merge-requests-sm), [**milestone-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/milestone-sm), [**pipeline-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/pipeline-sm).

### Enhancements

- Improved organization of icons in the [**GitLab Product Icons**](https://www.figma.com/community/file/1051267829358377715/gitlab-product-icons) file to align with a recent Pajamas update to document [icon collections](https://design.gitlab.com/product-foundations/iconography#icon-collections).

### Changes

- Updated the twitter icon to use the new "X" logomark and renamed it to [**x**](https://www.figma.com/file/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?type=design&node-id=5441-445&mode=design). The name in the SVGs repo will remain unchanged for the time being so the visual can propagate more easily. Migration to the new x.svg icon is in progress.
- Updated the following issue-type icons to use the default stroke style: [**issue-type-enhancement**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-enhancement), [**issue-type-feature-flag**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-feature-flag), [**issue-type-feature**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-feature), [**issue-type-incident**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-incident), [**issue-type-issue**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-issue), [**issue-type-key-result**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-keyresult), [**issue-type-maintenance**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-maintenance), [**issue-type-objective**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-objective), [**issue-type-requirements**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-requirements), [**issue-type-task**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-task), [**issue-type-test-case**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-test-case), [**issue-type-ticket**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~issue-type-ticket).
- Updated the [**sort-lowest**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~sort-lowest) icon arrow direction.
- Minor changes to the line placement within the [**sort-lowest**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~sort-lowest) and [**sort-highest**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~sort-highest) icons.
- Updated the default [**❖&nbsp;Banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425%3A4&mode=design&t=FlHqwVl4tjEmkjyD-1) background color from `white` to `$gray-10` to offset it more from the background.
- Updated the [**❖&nbsp;Banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425%3A4&mode=design&t=FlHqwVl4tjEmkjyD-1) illustration to use the `sm` size instead of `md`.

## 16.5

<small>Published 2023-10-24</small>

### Additions

- Added [**❖&nbsp;_Base/Dividing&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=101961-16255&mode=design) for use in dropdown dividers. Removed an old link to a deprecated dividing line component as part of this change.

### Enhancements

- The following [**❖&nbsp;Empty&nbsp;state**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=74155-103184&mode=design) variants now reflow correctly when changing width:
  - `Type=Full page, Breakpoint=xs-md`
  - `Type=Full page, Breakpoint=lg+`
  - `Type=Inline, Breakpoint=xs-md`
- [**❖&nbsp;Modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=102241-821&mode=design) now has a `size` property, enabling faster selection of supported sizes.

### Changes

- Breaking (medium): Update [**❖&nbsp;Empty&nbsp;state**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=74155-103184&mode=design) to have maximum line length. Some instances might now be taller if text wraps.
- Update [**❖&nbsp;Avatar**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19910-0&mode=design) identicons and text fallbacks to use the [dynamic type scale](https://design.gitlab.com/product-foundations/type-fundamentals#type-scales).
- Update [**❖&nbsp;Popover**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=57879-91946&mode=design) titles to use styles from the heading scale. Component now follows property naming guidelines.
- Update [**Dropdown&nbsp;>&nbsp;❖&nbsp;Divider**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=dev&node-id=61256-135451&mode=design) dropdown element color for consistent borders in dropdowns. Now uses **❖&nbsp;_Base/Dividing&nbsp;line**.
- Update [**Utility&nbsp;>&nbsp;❖&nbsp;Divider**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=dev&node-id=72160-103548&mode=design) documentation utility component, removing an old link to a deprecated navigation dividing line component.
- Refactor [**❖&nbsp;Option**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65765%3A98174&mode=design) to remove an unnecessary 2px spacing so that it's easier to align lists.

## 16.4

<small>Published 2023-09-18</small>

### Additions

- Added [**❖&nbsp;Deprecated&nbsp;component**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96846-7111&mode=design&t=II2cG0v81YYjiISQ-4) utility component, to mark variants as deprecated in a non-destructive way.
- Added [**❖&nbsp;Simple&nbsp;action&nbsp;list**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96856-7469&mode=design&t=II2cG0v81YYjiISQ-4) dropdown list example to make it faster to build flat and grouped action lists.

### Changes

- [**❖&nbsp;Option**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=60828-98007&mode=design&t=II2cG0v81YYjiISQ-4) dropdown element has multiple changes:
  - Increase separation between actions and selectable options.
  - Add variants for all 'checked' option state and selected combinations, including prototyping features.
  - Update interactive state styles for checked options.
  - Add destructive and disabled [state documentation](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65182-99449&mode=design&t=QCgwyA33tKeMfCu7-4). These states are not able to be added to the Figma component because of a technical limitation.
  - Property naming updated to match naming guidelines.
- Update [**❖&nbsp;Footer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=61252-96383&mode=design&t=II2cG0v81YYjiISQ-4) dropdown element to make clear the buttons here are actions, not options.
- Update [**❖&nbsp;Checkbox**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49856%3A76501&mode=design) icons to match production.

### Fixes

- Fixed the [**❖&nbsp;Danger&nbsp;button**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=21920%3A273&mode=design) tertiary hover and focus state background colors to use the correct style.

### Deprecations

- Deprecate multiple ❖&nbsp;Option variants when `Is action:true` and `Is selected:true` as this is not a possible combination. Use `Is action:false` and `Is selected:true` (most common), or `Is action:true` and `Is selected:false` instead.

## 16.3

<small>Published 2023-08-22</small>

### Additions

- Added component-specific heading text styles for alert, banner, drawer, and modal. More details in [#1652](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1652) and in the **Changes** section below.

### Enhancements

- Improved instances for the [**alert**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95997%3A103802&mode=design), [**banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=57885%3A91856&mode=design), [**drawer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=48150%3A59211&mode=design), [**dropdown**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=65182%3A99209&mode=design), [**modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=4263%3A5&mode=design), and [**tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=29835%3A71&mode=design) components to make it easier to understand options, behavior, and usage.
- Updated [**dropdown types**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96234-7530&mode=design&t=LZ783BAyUqhLzr02-4) to include more examples.
- Added extra characters to the [**GitLab Mono font test**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=455%3A18&mode=design) to make it easier to see when an old version of the font is loaded.

### Changes

- Breaking (high): The [**❖&nbsp;Alert**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95988%3A11501&mode=design) component title now has a dedicated text style that leverages the latest type scale updates. To accommodate this change, the component has been reworked to allow the title and body text to vertically align with the alert icon. The max-width variants have also been removed as they have low usage and weren't in line with current guidelines. The [previous version of the alert](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425%3A1&mode=design) has been deprecated, but will still be available for at least a milestone.
- [**❖Skeleton&nbsp;loader**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-0&mode=design) variants now reflect current heading and paragraph appearance.
  - Breaking (high): New components created for [headings](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=94794-93366&mode=design). Existing skeleton loader heading variants have been deprecated.
  - Paragraph variants (representing lines of text) updated:
    - Added [**❖&nbsp;Text/Paragraph/1&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=94992-89&mode=design).
    - Renamed **❖&nbsp;Text/Paragraph/Short** →  [**❖&nbsp;Text/Paragraph/3&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-82&mode=design).
    - Renamed **❖&nbsp;Text/Paragraph/Long** →  [**❖&nbsp;Text/Paragraph/5&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-86&mode=design).
    - Breaking (medium): Updated [**❖&nbsp;Text/Paragraph/3&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-82&mode=design) and [**❖&nbsp;Text/Paragraph/5&nbsp;line**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-86&mode=design) to use paragraph spacing and visual weight.
- Breaking (medium): [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-2&mode=design) updated to use Figma's new max-width auto layout feature — no more manually controlling width using line-breaks or resizing the component! This update changes the position of existing tooltips if they are longer than 1 line.
- Breaking (low): The [**❖&nbsp;Banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=19944%3A6&mode=design), [**❖&nbsp;Drawer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=48150%3A59274&mode=design), and [**❖&nbsp;Modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=4263%3A22&mode=design) component titles now have dedicated text styles that leverage the latest type scale updates. As a result of these changes, component instances may change height and design elements may need to be repositioned within your design files. More details for the reason behind the change in [!11014](https://gitlab.com/groups/gitlab-org/-/epics/11014). New styles:
  - `Component / Banner title (h2) / ≥xl breakpoint`
  - `Component / Banner title (h2) / ≥md breakpoint`
  - `Component / Drawer title (h2) / ≥xl breakpoint`
  - `Component / Drawer title (h2) / ≥md breakpoint`
  - `Component / Modal title (h2) / ≥xl breakpoint`
  - `Component / Modal title (h2) / ≥md breakpoint`
- The [**❖&nbsp;Tabs**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95175%3A1172&mode=design) component now uses `$blue-500` for the active state of a tab and box shadows were replaced with strokes. See [#1669](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1669) for more details.
- Layout renamed to [**Elevation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49138-75722&mode=design) to match documentation. Updated page layout to use recent documentation styles.
- Avatar text style naming updated to match convention established in [#1652](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1652).
- Updated UI kit utilities:
  - Differentiated utility styles and components that help organize content within UI kit files from styles and components that are part of the system. Components will also be published as part of the **📙&nbsp;Component&nbsp;library** so they can be used in all UI kit files. More details in [#1657](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1657).
  - Updated [**documentation utilities**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=96698-362&mode=design&t=KJPSy8hg6NhsjNDF-11) to help make inline documentation (within instances, examples, and documentation pages) more consistent and separate from the elements they address.
- Separated heading styles from the type scale visual reference in [**Typography**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=440-0&mode=design&t=XSJUqpbMl5TmttSz-11) to avoid conflating the two. More details in [#1658](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1658).

### Deprecations

- [**❖&nbsp;Alert&nbsp;(⚠️&nbsp;DEPRECATED)**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-1&mode=design). Use [**❖&nbsp;Alert**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=95988%3A11501&mode=design).
- Skeleton loader [heading variants](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=94794-93349&mode=design). Use latest [**❖Skeleton&nbsp;loader**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=2844-0&mode=design) variants.
- `Tab / Active (⚠️ DEPRECATED)` effect style. Use a bottom stroke instead.
- `Tab / Hover (⚠️ DEPRECATED)` effect style. Use a bottom stroke instead.

### Removals

- `Tooltip > Max-width` grid style removed. Use max-width auto layout rules built into [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-2&mode=design) instead. (Sorry, this accidentally skipped the deprecation process.)

## 16.2

<small>Published 2023-07-17</small>

<note>Breaking (low): GitLab Figma Organization custom fonts updated to latest version of `@gitlab/fonts` 2023-07-13. Change applied automatically to all files. Investigations found no feasible way to make this change opt in. In some situations, editing text in existing files will require updating to use the latest type styles from the [**📙&nbsp;Component&nbsp;library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440%3A0&mode=design).</note>

### Additions

- Added the following icons: [**catalog-checkmark**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~catalog-checkmark), [**check-xs**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~check-xs), [**close-xs**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~close-xs)

### Changes

- Breaking (medium): All UI kit files updated to use `@gitlab/fonts` v1.3.0.
  - To use the fonts outside the GitLab organisation in Figma, [download the fonts](https://gitlab-org.gitlab.io/frontend/fonts/).
  - The updated font versions have slightly different spacing between glyphs. When a components size is set by its content there can be a dimension change. The following components have been identified as seeing, in most instances, a ±1–4px width change.
    - [**Badge**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=60387-98708&mode=design)
    - [**❖&nbsp;Breadcrumb**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=86530-117981&mode=design)
    - [**Button**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-5&mode=design)
    - [**❖&nbsp;Form&nbsp;group**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49856-76520&mode=design) when a prefix or suffix is present
    - [**❖&nbsp;Label**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19904-3&mode=design)
    - [**Link**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=81916-116837&mode=design)
    - [**❖&nbsp;Pagination**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=48275-166113&mode=design)
    - [**❖&nbsp;Severity&nbsp;status**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=21336-4&mode=design)
    - [**❖Tabs**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-138&mode=design)
    - [**❖&nbsp;Toast**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=20171-225&mode=design)
    - [**❖&nbsp;Token**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=20182-267&mode=design)
    - [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-2&mode=design)
- Breaking (medium): Type scale for UI heading elements updated. New scale optimized to create visual heirarchy across pages. Read the Pajamas [type fundamentals](/product-foundations/type-fundamentals) and follow progress in the [implementation epic](https://gitlab.com/groups/gitlab-org/gitlab-services/-/epics/19).
  - Updated styles:
    - `UI / Display / ≥xl breakpoint`
    - `UI / Display / ≥md breakpoint`
    - `UI / h1 / ≥xl breakpoint`
    - `UI / h1 / ≥md breakpoint`
    - `UI / h2 / ≥xl breakpoint`
    - `UI / h2 / ≥md breakpoint`
    - `UI / h3 / ≥xl breakpoint`
    - `UI / h3 / ≥md breakpoint`
    - `UI / h4 / ≥xl breakpoint`
    - `UI / h4 / ≥md breakpoint`
    - `UI / h5 / ≥xl breakpoint`
    - `UI / h5 / ≥md breakpoint`
    - `UI / h6 / ≥xl breakpoint`
    - `UI / h6 / ≥md breakpoint`
  - The new heading type scale uses sizes smaller than the sizes used in the UI kit before. When a component size is set by its content there are some dimension changes. The following components have been identified as seeing, in most instances, a 1–8px height reduction.
    - [**❖&nbsp;Banner**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=19944-6&mode=design)
    - [**❖&nbsp;Drawer**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=48150-59274&mode=design)
    - [**❖&nbsp;Modal**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=4263-22&mode=design)
    - [**❖&nbsp;Empty&nbsp;state**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=74155-103184&mode=design)
- Font weight for all text styles updated to use `400`, `600` or `700`.
  - Changed styles:
    - `UI / Paragraph / Bold lg`
    - `UI / Paragraph / Bold`
    - `UI / Paragraph / Bold sm`
    - `Label / Bold`
    - `Label / Bold underlined`
    - `Label / Bold sm`
    - `Label / Bold sm underlined`
    - `Label / Mono bold`
    - `Label / Mono bold underlined`
    - `Label / Mono bold small`
    - `Label / Mono bold sm underlined`
- Optical weight and type settings changed for all text styles. Sans styles have the optical size manually set, and an updated list of enabled font features.

### Fixes

- Fix some dropdown instances using outdated text styles.
- Fix issue where dropdown documentation would break outside its container.
- Fix issue where the new fonts caused **❖&nbsp;_Base&nbsp;Button&nbsp;group** to break outside its container.

### Deprecations

- [**Navigation**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=3946%3A112&mode=design) page and all components deprecated.
- [**Documentation markdown type scale**](https://www.figma.com/file/V3HKN83B7rf2T6sseLMrxa/Type-scale---Documentation-Markdown?type=design) file and library since type scales have been updated and will only exist in the [**📙&nbsp;Component&nbsp;library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440%3A0&mode=design).
- [**Compact markdown type scale**](https://www.figma.com/file/mjAZxHkK95TlQ6L14aNp2M/Type-scale---Compact-Markdown?type=design) file and library since type scales have been updated and will only exist in the [**📙&nbsp;Component&nbsp;library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440%3A0&mode=design).

## 16.1

<small>Published 2023-06-19</small>

### Additions

- Added the following icons: [**quick-actions**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~quick-actions), [**markdown-mark**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~markdown-mark), [**markdown-mark-solid**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~markdown-mark-solid), [**tanuki-ai**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~tanuki-ai)

### Enhancements

- Updated the following icons to improve optical sizing in relation to other icons: [**comment**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment), [**comment-dots**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-dots), [**comment-lines**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-lines), [**comment-next**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-next), [**details-block**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~details-block), [**list-bulleted**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~list-bulleted), [**list-numbered**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~list-numbered)

### Changes

- Changed avatar group [**User text inline**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=1833-2791&t=I66Ypa7hnKqrP9um-11) instance to include user handle inline too in support of [!3486](https://gitlab.com/gitlab-org/gitlab-ui/-/merge_requests/3486).

### Fixes

- Fixed the pixel alignment of the [**table**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~table) icon.
- [**❖&nbsp;Menu&nbsp;item**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=50570-81619&t=l2mFoV6DmqQb81L1-4), [**❖&nbsp;_Base&nbsp;Sidebar/Flyout&nbsp;menu/Menu&nbsp;items**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=43519-45367&t=l2mFoV6DmqQb81L1-4), and [stacked avatar instances](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=36196-30381&t=l2mFoV6DmqQb81L1-4) use the correct badge component.
- [**❖&nbsp;_Base/Color&nbsp;swatch**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65858-133015&t=l2mFoV6DmqQb81L1-4) uses the correct checkbox component.

### Removals

- The following have been permanently removed. This will help streamline future updates and limit the scope of upcoming type scale work. All related pages, components, and styles are included in the removal. See [#1622](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1622) for details. Please refer to the Figma file history if you need to retrieve an old design artifact.
  - Badge (⚠️ DEPRECATED), use [**❖&nbsp;Badge**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=59780%3A92312&t=mhPqIFOuQslBIb44-1)
  - Breadcrumb (⚠️ DEPRECATED), use [**❖&nbsp;Breadcrumb**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425%3A5&t=mhPqIFOuQslBIb44-1)
  - Dropdown (⚠️ DEPRECATED), use [**❖&nbsp;Dropdown**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-14&t=mhPqIFOuQslBIb44-11)
  - Forms (⚠️ DEPRECATED), use [**Forms**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840%3A75722&t=mhPqIFOuQslBIb44-1)
  - Segmented control (⚠️ DEPRECATED), use [**❖&nbsp;Button group**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=20378-296&t=mhPqIFOuQslBIb44-11)
  - Typography (⚠️ DEPRECATED), use [**Typography**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=440-0&t=mhPqIFOuQslBIb44-11)

## 16.0

<small>Published 2023-05-22</small>

### Additions

- Added the following icons: [**cloud-pod**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~cloud-pod), [**comment-lines**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~comment-lines), [**reply**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~reply).
- Added the following illustrations: [**empty-labels-starred-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/empty-state/empty-labels-starred-md.svg), [**empty-friends-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-friends-md.svg), [**empty-groups-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-groups-md.svg), [**empty-issues-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-issues-md.svg), [**empty-merge-requests-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-merge-requests-md.svg), [**empty-pipeline-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-pipeline-md.svg), [**search-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/search-sm.svg), [**secure-sm**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/secure-sm.svg).

### Enhancements

- Added text properties to **❖&nbsp;Link&nbsp;/&nbsp;UI link** and **❖&nbsp;Link&nbsp;/&nbsp;Mention** allowing link content to be editable from the side bar.

### Changes

- Changed [link component](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=81916-116837) color for interactive states based on guidelines changes in [!3327](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3327).
  - **❖&nbsp;Link&nbsp;/&nbsp;Inline&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;UI&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Meta&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Mention**
- Changed heading style by adding "breakpoint" and clarifying the range in order to make it more clear that a heading size is chosen by breakpoint and not a preferred size.
- Updated the following illustrations: [**empty-subgroup-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/empty-state/empty-subgroup-md.svg), [**rocket-launch-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/rocket-launch-md.svg).
- Increased contrast for [label instances](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=1531-2&t=ZrpNCwtIrer1pRZo-11) that didn't meet 4.5:1.

### Fixes

- Breaking (medium): Fix height of [**❖&nbsp;Option**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65765-98174&t=zF4a3tAsVJGGuzTk-11) component (part of dropdown). Options now resize correctly in prototypes. For existing uses, it's possible that each option will shift height by up to 4px. To migrate, check if dropdown sizing needs to be increased, and if not using auto layout ensure spacing between options is correct.
- Made dropdown [empty state](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=61256-133768&t=zF4a3tAsVJGGuzTk-4) example plain text instead of an option with states.
- Removed bottom padding from last list items in some [dropdown instances](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=65182-99209&t=zF4a3tAsVJGGuzTk-11) for proper padding within the panel after scrolling to the bottom.
- The nested layer names of the following icons in the [GitLab Product Icons](https://www.figma.com/file/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?node-id=0%3A1&t=Ta7o7P5IrksrZ3r4-1) file has been changed to "icon" in order to preserve color overrides:
  - **stop**
  - **highlight**
  - **attention-solid**
  - **attention-solid-sm**
- The [**code**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~code) icon has been recreated to correct it being flipped when used in a component.
- Fixed the broken [typescale code blocks](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=72017-102904&t=7tow6e6oHv2EeFwa-11).

## 15.11

<small>Published 2023-04-18</small>

### Additions

- [Link components](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=81916-116837) are available for all four [link categories](https://design.gitlab.com/components/link#categories). A future update will add instructions for adding style overrides for inline use. Until then, copy the styles from the components, or reach out to a [Foundations designer](https://about.gitlab.com/handbook/product/categories/#foundations-group) for help.
  - **❖&nbsp;Link&nbsp;/&nbsp;Inline&nbsp;text&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;UI&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Meta&nbsp;link**
  - **❖&nbsp;Link&nbsp;/&nbsp;Mention**
- Added the [**cloud-terminal**](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~cloud-terminal) icon to represent workspace.
- Added the following illustrations: [**empty-snippets-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-snippets-md.svg), [**empty-labels-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-labels-md.svg), [**empty-todos-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations/?q=illustrations/empty-todos-md.svg), [**empty-todos-all-done-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-todos-all-done-md.svg), [**empty-embed-panel-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-embed-panel-md.svg), [**empty-projects-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-projects-md.svg), [**empty-projects-starred-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-projects-starred-md.svg), [**empty-projects-deleted-md**](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/empty-state/empty-projects-deleted-md.svg).

### Enhancements

- Breaking (medium impact): [**❖&nbsp;Sidebar**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=3946-112&t=btf6j6JBlWUFtOkp-11) `Type=Admin` now includes CI/CD as an item, matching production. Sidebar color matches production.
  - Take care when updating as this change re-attached some components that had become detached, in some instances badges will appear in the sidebar where they were originally hidden.
- Breaking (medium impact): [**❖&nbsp;Tooltip**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-142&t=btf6j6JBlWUFtOkp-11) now resizes based on the content. Turn on the layout grid to view max-width guides with <kbd>⇧</kbd>&nbsp;+&nbsp;<kbd>G</kbd> or **View&nbsp;>&nbsp;Layout&nbsp;Grids**. Instances are updated to demonstrate max-width.
  - Take care when updating as in some circumstances the tip position might move a few pixels.
  - Also, custom sizing will be lost, but auto layout should resize the tooltip to the correct size.
- Added a `Gray` variant for the [**❖&nbsp;Sticky**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=86364-117403&t=btf6j6JBlWUFtOkp-4) utility component to match todos on the Pajamas website.
- We’ve started improving component pages by including headings and descriptions. The descriptions match what’s in the component properties description field and the intent is to make them more visible. Sections are also being used to group frames, components, and instances in a way that doesn't impact component naming like a parent frame would (see [Typography](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440-0&t=VprsBTE7V7i8edGF-11) or [Links](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=81916-116837&t=VprsBTE7V7i8edGF-11) for examples).

### Changes

- Breaking (low): Addition and removal content styles have been moved to a new [**❖&nbsp;Inline&nbsp;highlight**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=84028-117530&t=btf6j6JBlWUFtOkp-11) component.
  - We expect existing instances to remain unchanged, but you will need to switch to the new component to make updates.
  - Take care when switching the component as text overrides may be lost.
- Breaking (medium impact): [**❖&nbsp;Dropdown**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-14&t=btf6j6JBlWUFtOkp-11) width has been decreased in support of the [navigation updates](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1572). Upon updating locally the dropdown width will be 8px narrower and if you've used left or right (not centered or dynamic) tip placement it will reset to a default position. As part of the update several other resizing fixes and improvements have been made that aren't breaking changes.
- Breaking (high impact): [**❖&nbsp;Breadcrumb**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-5&t=btf6j6JBlWUFtOkp-11) current page now uses bold meta link style. The previous breadcrumb component has been deprecated, but will still be available for at least a milestone. In tests, swapping the component to use the new version kept all style and content overrides intact, but take care when swapping.
- [Buttons](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=425-7) renamed to have a "Button&nbsp;/" prefix. Doing so makes them easier to locate when searching for a component. **❖&nbsp;Button&nbsp;/&nbsp;Link** description also points towards the **❖&nbsp;Link&nbsp;/&nbsp;UI&nbsp;link** components. Take care when choosing between a [link](https://design.gitlab.com/components/link) (`<a>`) and a [button](https://design.gitlab.com/components/button) (`<button>`).
  - **❖&nbsp;Button&nbsp;/&nbsp;Default**
  - **❖&nbsp;Button&nbsp;/&nbsp;Confirm**
  - **❖&nbsp;Button&nbsp;/&nbsp;Danger**
  - **❖&nbsp;Button&nbsp;/&nbsp;Loading**
  - **❖&nbsp;Button&nbsp;/&nbsp;Disabled**
  - **❖&nbsp;Button&nbsp;/&nbsp;Selected**
  - **❖&nbsp;Button&nbsp;/&nbsp;Dashed**
  - **❖&nbsp;Button&nbsp;/&nbsp;Emoji&nbsp;count**
  - **❖&nbsp;Button&nbsp;/&nbsp;Link**
  - **❖&nbsp;Button&nbsp;/&nbsp;Button&nbsp;group**
- Inline highlight component is now [**❖&nbsp;Link&nbsp;/&nbsp;Mention**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=86229-117442&t=btf6j6JBlWUFtOkp-4). Existing styles have been expanded to support interactive styles, and inline and meta variants.
- Icons page pointing to the [GitLab Product Icons](https://www.figma.com/file/h4YjjttHL5YI0mXZfQ4uuU/GitLab-Product-Icons?t=SDEcXtmjyvSgCogP-7) file has been removed since the icons file has existed separately for over two years and the notice is no longer needed.

### Fixes

- [**❖&nbsp;Button&nbsp;/&nbsp;Link**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=78884-116292&t=yMRUd34fxKLrjvpL-4) text overrides now persist when changing state.

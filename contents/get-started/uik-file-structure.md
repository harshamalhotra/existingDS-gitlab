---
name: File structure
---

The Pajamas UI Kit is comprised of multiple Figma files that organize separate, but related concepts. Each publishes a library of styles and components that can be enabled in your design files.

- [**Component library**](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library): This is the main file for design components that are used in Pajamas and in all other files. The library is published as the "📙 Component library" and enabled for all team files.
- [**Typescale - Documentation Markdown**](https://www.figma.com/file/V3HKN83B7rf2T6sseLMrxa/Typescale-Documentation-Markdown): Documentation markdown is defined as any markdown that is written outside of issuable pages, such as a README or Wiki page. Content written using markdown includes typography that contains fixed margins and increased line-heights to improve readability. Published as the "Typescale - Documentation Markdown" library.
- [**Typescale - Compact Markdown**](https://www.figma.com/file/mjAZxHkK95TlQ6L14aNp2M/Typescale-Compact-Markdown): Within certain views, the markdown type scale is decreased in order to more closely align copy with other UI components. Compact markdown is used for descriptions and comments on issue and merge request pages. Content written using markdown includes typography that contains fixed margins and increased line-heights to improve readability. Published as the "Typescale - Compact Markdown" library.
- [**Data Visualization**](https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization): Components, styles, and charts used within GitLab. Published as the "Data Visualization" library.
- [**Product pages**](https://www.figma.com/file/tzpLCamRZNr2tTPwCP2UY4/Product-Pages): Components, layouts, regions, and page templates used within GitLab. Items herein are not globally used throughout the product and not included in the main component library. Published as the "Product Pages" library.

In addition to the links above, files are available from the [GitLab Product Design](https://www.figma.com/@GitLabDesign) community page and the [project repository](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/ui-kit).

## Fonts

The UI kit files make use of GitLab Sans, based on the Inter typeface, and JetBrains Mono. The fonts are available to download in [this package](https://www.npmjs.com/package/@gitlab/fonts).

## Plugins

It may change in the future, but at the moment we don’t use plugins for critical actions or capabilities to avoid making any part of the design process reliant on plugin updates or functionality. Rather, we believe that each user should determine which plugins to use for their own workflow.

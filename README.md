# Pajamas Design System

[GitLab's design system](https://design.gitlab.com/) is our single source of truth (SSOT) for resources, components, and design guidelines. Pajamas pulls in components from [GitLab UI](https://gitlab.com/gitlab-org/gitlab-ui), which are in turn used within the product. Our [Figma UI kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit) is used as a reference for building SSOT components, but is not the SSOT itself.

To learn more about how we create, build, style, and implement components, read the [Component Lifecycle](https://design.gitlab.com/get-started/lifecycle/) documentation.

## Prerequisites

Ensure you have [Node](https://nodejs.org/en/) 12.x and [Yarn](https://yarnpkg.com/) 1.10 or newer installed.

### Start using Git on the command line

- [Start using Git](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html)
- [Command Line basic commands](https://docs.gitlab.com/ee/gitlab-basics/command-line-commands.html)
- [Technical Tutorials for Product Designers](https://www.youtube.com/playlist?list=PL05JrBw4t0Kra6RseLWXFIXtu9UPzjzbT) on Unfiltered

## Development

### Quick start

1. Clone the project with `git clone git@gitlab.com:gitlab-org/gitlab-services/design.gitlab.com.git`
1. Install [yarn](https://yarnpkg.com/en/docs/install)
1. Run `yarn install`
1. Run `yarn start` to start build & watch changes
1. Open http://localhost:2018

Alternatively, you can also [open this repository in Gitpod](https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/) to make and preview changes directly in your browser.

### Conventional commits

We use conventional commits specifications to write meaningful commit messages that are used as part of our semantic release process. [Learn how to write conventional commits](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/commits.md).

### Writing component documentation

When starting from scratch:

1. Copy the contents from `pages/components/template.md`
1. Paste the contents in an existing placeholder file in `contents/components/` or create a new file and call it `componentname.md`
1. Edit and write your documentation
1. Include your new page in the navigation. [Learn more about populating the navigation].

[learn more about populating the navigation]: /doc/navigation.md

### Component stories

Component stories use the [Component Story Format (CSF)](https://storybook.js.org/docs/react/api/csf) and are included in component docs available in the **Implementation** tab when they are associated with a documentation page. Static images aren't used to represent a final component.

We're in the process of migrating non-CSF examples to CSF so that we can use Storybook as the single source of truth without duplicating examples in this project.

[Learn how to embed component stories](/doc/embed-gitlab-ui-stories.md).

### Component labels

Each component should have a corresponding [label](https://gitlab.com/gitlab-org/gitlab/-/labels?subscribed=&search=component:) that is prefixed with 'component:'. Components that are part of a larger group in Pajamas, like form elements or dropdowns, can be also include the group name as a prefix. For example, 'component:form-checkbox'.

In the 'Contribute' tab found on a component page, issues and merge requests are automatically linked to the correct component label. However, in some instances the label may not be a 1:1 and need to be manually referenced in the component page frontmatter. To do this, add `componentLabel:` followed by the label name without 'component:' to the frontmatter. For example, `componentLabel: dropdown-disclosure` will correctly reference items using the 'component:dropdown-disclosure' label.

Communicate widely any additions or changes to these labels, as other projects and tools rely on them and may need to be updated. Such projects and tools include:
- [Pajamas Adoption Scanner](https://gitlab.com/gitlab-org/frontend/pajamas-adoption-scanner)
- [GitLab UI](https://gitlab.com/gitlab-org/gitlab-ui)
- User bookmarks
- Spreadsheets

### Foundation labels

Foundation content can have a corresponding [label](https://gitlab.com/gitlab-org/gitlab/-/labels?subscribed=&search=foundation::) that is prefixed with 'foundation::'. In the 'Contribute' tab found on a foundation page, issues and merge requests are automatically linked to the correct foundation label. To do this, add `foundationLabel:` followed by the label name without 'foundation::' to the frontmatter. For example, `foundationLabel: iconography` will correctly reference items using the 'foundation::iconography' label.

### Adding graphics and images

Add graphics and images to optionally support, but not replace, text content. Acceptable formats include JPEG, PNG, and SVG.

- Use JPEG and PNG formats for photography and complex images. Optimize images through a tool like [ImageOptim](https://imageoptim.com/mac) before uploading.
- Use SVG for illustration, iconography, small vector-based graphics, and simple UI representation. Optimize graphics through a tool like [SVGOMG](https://jakearchibald.github.io/svgomg/) or the [Advanced SVG Export](https://www.figma.com/community/plugin/782713260363070260) plugin for Figma.

When adding images to documentation, use the `<figure-img>` component to:

- Wrap the image in a `<figure>` element with a nested `<figcaption>` that explains the figure content in text form for all users.
- If using an `svg` in an `img`, add `role="img"` to the element.
- Ensure `aria-label` on the `<figure>` and `<figcaption>` are the same content.

For more background on the desired HTML structure, refer to ["How do you figure?"](https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html), by Scott O'Hara.

```js
<figure-img src="/path/to/image.png" alt="Alt text" label="Label text" width="360"></figure-img>
```

### Linting

We control code quality with automatic linting tools like `eslint` and `prettier`.

If you change something in the code, you can run `yarn test` to see if your changes are up-to-code. A lot of failures are auto-fixable, so simply run `yarn run lint:fix` to fix errors automatically.

### Reviewing

Each merge request for this repository will generate a [review app](https://docs.gitlab.com/ee/ci/review_apps/). Review apps create a new environment (dynamically) for each one of your branches. A Review App is then visible as a link when you visit the merge request relevant to the branch. That way, you are able to see live all changes introduced by the merge request changes.

## Contributing

GitLab is an open source project and we are very happy to accept community
contributions. Please refer to [CONTRIBUTING.md](/CONTRIBUTING.md) for details.

### Pajamas UI Kit

To contribute to our [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit), [review our contributing guidelines](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md).

## Why is the design system called Pajamas?

Pajamas is a nod to our fully remote culture. In addition, they are comfortable, reliable, and consistent! Read more about how we landed on the name Pajamas in the [original issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/138).

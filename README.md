# Pajamas Design System

Resources, components, and design guidelines behind GitLab. See [design.GitLab.com](https://design.gitlab.com).
Read about the [Component Lifecycle](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/master/doc/component-lifecycle.md).

## Prerequisites

Before you move on, make sure you have [Node](https://nodejs.org/en/) 12.x and [Yarn](https://yarnpkg.com/) 1.10 or newer installed.

### Start using Git on the command line

- [Start using Git](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html)
- [Command Line basic commands](https://docs.gitlab.com/ee/gitlab-basics/command-line-commands.html)
- [Technical Tutorials for Product Designers](https://www.youtube.com/playlist?list=PL05JrBw4t0Kra6RseLWXFIXtu9UPzjzbT) on Unfiltered

## Quick start

1. Clone the project with `git clone git@gitlab.com:gitlab-org/gitlab-services/design.gitlab.com.git`
1. Install [yarn](https://yarnpkg.com/en/docs/install)
1. Run `yarn install`
1. Run `yarn start` to start build & watch changes
1. Open http://localhost:2018

Alternatively, you can also [open this repository in Gitpod](https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/master/) to make and preview changes directly in your browser.

## Linting

We control this repositories code quality with automatic linting tools like `eslint` and `prettier`.

If you change something in the code, you can run `yarn test` to see if your changes are up to code.

A lot of failures are auto-fixable, so simply run `yarn run lint:fix` to fix errors automatically.

## Conventional commits

We use conventional commits specifications to write meaningful commit messages that are used as part of our semantic release process. [Learn how to write conventional commits](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/master/doc/commits.md).

## Contributing to our Pajamas UI Kit

To contribute to our UI design library in Figma, [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit), [review our contributing guidelines](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/master/doc/pajamas-ui-kit.md).

## Writing component documentation

When starting from scratch:
1. Copy the contents from `pages/components/template.md`
1. Paste the contents in an existing placeholder file in `contents/components/` or create a new file and call it `componentname.md`
1. Edit and write your documentation

## Writing component examples

Component examples can be included in component docs and are available in the **Vue component**
tab when they are associated with a documentation page.

[Learn how to write and use component examples](/doc/component-examples.md).
## Reviewing

Each merge request for this repository will generate a [review app](https://docs.gitlab.com/ee/ci/review_apps/). Review apps create a new environment (dynamically) for each one of your branches. A Review App is then visible as a link when you visit the merge request relevant to the branch. That way, you are able to see live all changes introduced by the merge request changes.

## Contributing

GitLab is an open source project and we are very happy to accept community
contributions. Please refer to [CONTRIBUTING.md](/CONTRIBUTING.md) for details.

## Why is the design system called Pajamas?

Pajamas is a nod to our fully remote culture. In addition, they are comfortable, reliable, and consistent! Read more about how we landed on the name Pajamas in the [original issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/138).

# Pajamas Design System

Resources, components, and design guidelines behind GitLab. See [design.GitLab.com](https://design.gitlab.com).

## Prerequisites

Before you move on, make sure you have [Node](https://nodejs.org/en/) 12.x and [Yarn](https://yarnpkg.com/) 1.10 or newer installed.

## Quick start

1. Clone the project with `git clone git@gitlab.com:gitlab-org/design.gitlab.com.git`
1. Install [yarn](https://yarnpkg.com/en/docs/install)
1. Run `yarn install`
1. Run `yarn start` to start build & watch changes
1. Open http://localhost:2018

## Linting

We control this repositories code quality with automatic linting tools like `eslint` and `prettier`.

If you change something in the code, you can run `yarn test` to see if your changes are up to code.

A lot of failures are auto-fixable, so simply run `yarn run lint:fix` to fix errors automatically.

## Writing component documentation

When starting from scratch:
1. Copy the contents from `pages/components/template.md`
1. Paste the contents in an existing placeholder file in `contents/components/` or create a new file and call it `componentname.md`
1. Edit and write your documentation

## Reviewing

Each merge request for this repository will generate a [review app](https://docs.gitlab.com/ee/ci/review_apps/). Review apps create a new environment (dynamically) for each one of your branches. A Review App is then visible as a link when you visit the merge request relevant to the branch. That way, you are able to see live all changes introduced by the merge request changes.

## Contributing

GitLab is an open source project and we are very happy to accept community
contributions. Please refer to [CONTRIBUTING.md](/CONTRIBUTING.md) for details.

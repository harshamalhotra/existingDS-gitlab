# GitLab Design System

You can view it at [design.gitlab.com](https://design.gitlab.com/).

## Quick start

1. Clone the project with `git clone git@gitlab.com:gitlab-org/design.gitlab.com.git`
1. Install [yarn](https://yarnpkg.com/en/docs/install)
1. Run `yarn install`
1. Run `yarn start` to start build & watch changes
1. Open http://localhost:2018

## Troubleshooting

If you are having errors while performing `yarn install`, make sure you are using node 8.12.0 (LTS) before performing that step.

## Reviewing

Each merge request for this repository will generate a [review app](https://docs.gitlab.com/ee/ci/review_apps/). Review apps create a new environment (dynamically) for each one of your branches. A Review App is then visible as a link when you visit the merge request relevant to the branch. That way, you are able to see live all changes introduced by the merge request changes.

## Contributing

GitLab is an open source project and we are very happy to accept community
contributions. Please refer to [CONTRIBUTING.md](/CONTRIBUTING.md) for details.

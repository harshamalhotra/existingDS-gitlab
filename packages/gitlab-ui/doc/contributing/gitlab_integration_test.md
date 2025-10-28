# Testing GitLab UI changes in GitLab

When introducing major, or potentially breaking changes in GitLab UI, you might want to verify that
they properly integrate in GitLab before they are released in a new `@gitlab/ui` version.

This can be done either by building the `@gitlab/ui` package locally, or by using the package that
is built every time a pipeline runs against your branch.

See [Updating GitLab UI Packages](doc/updating-gitlab-ui-packages.md) for information on how the
`@gitlab/ui` package is kept up to date in various other projects.

## Testing your changes in a local GitLab instance

During development, you can use [yalc](https://github.com/wclr/yalc) to link your local
`@gitlab/ui` package changes to the GitLab project.
This means you don't need to update `package.json`, and can easily test changes.

1. Install `yalc` with `yarn global add yalc`
1. Navigate to the `@gitlab/ui` directory and publish the package with `yalc publish`.
1. Navigate to the `gitlab` project and add published package with `yalc add @gitlab/ui`.
1. Run `yarn install --check-files` to pull package updates.

To propagate changes in the `@gitlab/ui` project automatically to all installations use
the following command `yalc publish --push`.

## Testing your changes using a remote development package

To help with this process, GitLab UI exposes a `ui:create_integration_merge_request` manual CI job
that will create (or update) an integration merge request, with the `@gitlab/ui` development build
installed.

Your development flow will look like this:

1. Push your design system changes to GitLab UI
1. Start a manual CI job to create a merge request in GitLab that uses your development package
1. Do any required migration in your GitLab branch, push your branch and open an MR
1. Get your GitLab UI _and_ GitLab MRs reviewed
1. Get your GitLab UI MR merged

### Make your GitLab UI changes locally

GitLab UI is a dynamic design system. The current `@gitlab/ui` release is often ahead of the
version being used in GitLab. Follow these steps to ensure your local GitLab only includes
your `@gitlab/ui` changes on top of what is currently used in production:

1. Review your local GitLab `package.json` file for the `@gitlab/ui` version
1. Pull the latest `main` branch in GitLab UI to ensure you have access to the current tagged release
1. Create a new feature branch by typing the following in your terminal:

   ```bash
   # If you are creating a new branch
   # NEW_BRANCH_NAME should include an issue number when possible

   git checkout -b NEW_BRANCH_NAME v{CURRENT_RELEASE_NUMBER}

   # If you created a branch previously

   git checkout YOUR_BRANCH_NAME
   git rebase v{CURRENT_RELEASE_NUMBER}
   ```

1. Make your changes and push your feature branch
1. Create a GitLab UI merge request

### Creating a remote development package

Your GitLab UI merge request will kick off a number of automatic CI tasks. When those
tasks have finished running, start the manual `ui:create_integration_merge_request` CI job. This
will create a merge request in the GitLab project using the package built by the `ui:build_package`
job.

![Create integration merge request CI job location](../images/create_integration_merge_request.png 'Create integration merge request CI job location')

After the `ui:create_integration_merge_request` CI job is complete, check the log files for a link
to the created GitLab merge request. This merge request will help you test your GitLab UI changes
and fix any test failures. Add a link to your GitLab UI merge request, so that reviewers can run
their own verifications.

![Integration merge request link location](../images/create_integration_merge_request_job_log.png 'Integration merge request link location')

The GitLab integration merge request will do a few things for you:

1. It will use the `@gitlab/ui` package built in your GitLab UI merge request.
1. It will provide a feature branch to update tests, snapshots, etc.
1. GitLab's own pipelines will run automatically and notify you of any test failures.

### After your GitLab UI changes merge

1. A new version of `@gitlab/ui` will be released when your changes are merged
1. Update your GitLab MR to use the published version of `@gitlab/ui` instead of the development
   build
1. _Recommended:_ Request maintainers not work on or merge other `@gitlab/ui` version bumps
until your GitLab MR is merged
1. _Recommended:_ Check the [dependency dashboard](https://gitlab.com/gitlab-org/gitlab/-/issues/365044)
for any existing `@gitlab/ui` MRs. Consider assigning to yourself or adding a comment linking your MR.
1. Get your GitLab MR reviewed and merged

### Making changes to GitLab on your feature branch

You may find some tests failing after the CI finishes running on your merge request. Not to worry!

1. Open your terminal and navigate to the `gdk/gitlab` repository on your local machine
1. Run the `gdk update` command
1. Check out the feature branch and rebase onto the latest `master`

   ```bash
   git fetch
   git checkout YOUR_BRANCH_NAME
   git rebase origin/master
   ```

1. Make changes as needed to get tests and snapshots passing
1. Push your changes to your feature branch up to the remote

   ```bash
   git push --set-upstream origin YOUR_BRANCH_NAME
   ```

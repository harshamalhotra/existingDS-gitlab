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

To help with this process, GitLab UI exposes a `ui:create_integration_branch` manual CI job that will
create (or update) an integration branch and install the `@gitlab/ui` development build.

You will be using the [forked workflow](https://docs.gitlab.com/user/project/repository/forking_workflow/)
to build and test your changes in a [fork](#the-gitlab-ui-integrations-fork) of GitLab. If you are not
familiar with forks, take a few minutes and read the linked article. It will give you a high-level
understanding of how forks work and make this process easier to understand.

Your development flow will look like this:

1. Push your design system changes to GitLab UI
1. Start a manual CI job to create a branch in GitLab that uses your development package
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
tasks have finished running, start the manual `ui:create_integration_branch` CI job.
This job builds a `@gitlab/ui` package and creates a branch on the forked GitLab mirror.

![Create integration branch CI job location](../images/create_integration_branch.png 'Create integration branch CI job location')

After the `ui:create_integration_branch` CI job is complete, check the log files for a
link to create a GitLab merge request. This merge request will help you test your GitLab
UI changes and fix any test failures. Once you create the integration merge request, add a
link to your GitLab UI merge request. This way, reviewers can run their own verifications.

![Integration branch link location](../images/integration_branch_job_log.png 'Integration branch link location')

Opening a GitLab merge request will do a few things for you:

1. The MR will reference your custom GitLab UI package in the mirrored frontend
1. The GitLab CI will run automatically and notify you of any test failures
1. The MR will provide a feature branch to update tests, snapshots, etc.

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

1. Open your terminal and navigate to the `gdk` repository on your local machine
1. Run the `gdk update` and `gdk reconfigure` commands
1. `cd` into the `gitlab` directory
1. Check out your mirrored feature branch

   ```bash
   git fetch
   git checkout gitlab-ui-integrations/YOUR_BRANCH_NAME
   ```

1. Make changes as needed to get tests and snapshots passing
1. Push your changes to your feature branch on the GitLab mirrored frontend

   ```bash
   git push --set-upstream gitlab-ui-integrations YOUR_BRANCH_NAME
   ```

1. Consider adding the `pipeline::tier-3` label to your MR if your GitLab UI release
is a breaking change or components are used by a large number of GitLab views. The
CI run will take significantly longer but can alert you to potential complications.

## The GitLab UI integrations fork

When running the `ui:create_integration_branch` CI job, integration branches are created
in a [fork of GitLab](https://gitlab.com/gitlab-org/frontend/gitlab-ui-integrations).
The fork is set up to mirror the `master` branch from the GitLab repository.
We are using a fork to circumvent issues where pushing directly to the GitLab repository could
time out. Therefore, keep in mind that the fork might be slightly behind the upstream branch
between mirroring schedules. When working with such branches in your GDK, also bear in mind that
changes need to be pushed to the fork, not the GitLab repository.

### How is the fork set up to mirror GitLab?

The repository mirroring is set up as a push mirror from the GitLab project. Push events
are authored by a bot user associated with a Project Access Token created in the fork.

Since Project Access Tokens eventually expire, the mirror needs to be set up again from
time to time. This requires maintainer access to both GitLab and the GitLab UI Integrations
projects. Here's how the mirroring should be configured:

1. Create a Project Access Token with the `Developer` role and `write_repository` scope in the
   [GitLab UI Integrations](https://gitlab.com/gitlab-org/frontend/gitlab-ui-integrations/-/settings/access_tokens)
   project.
1. Give the PAT's user permission to push to the `master` branch in the
   [repository settings](https://gitlab.com/gitlab-org/frontend/gitlab-ui-integrations/-/settings/repository).
1. In the [GitLab](https://gitlab.com/gitlab-org/gitlab/-/settings/repository#js-push-remote-settings)
   project, remove the outdated mirroring configuration if any. Make sure you're _only_ removing
   GitLab UI Integrations mirrors.
1. Create a new mirroring configuration with the following settings:
    * **Git repository URL**: `https://gitlab.com/gitlab-org/frontend/gitlab-ui-integrations.git`.
    * **Mirror direction**: `Push`.
    * **Username**: The PAT's username.
    * **Password**: The PAT.
    * **Mirror branches**:
        * `Mirror specific branches`: `^master$`.

# Testing GitLab UI changes in GitLab

When introducing major, or potentially breaking changes in GitLab UI, you might want to verify that
they properly integrate in GitLab before they are released in a new `@gitlab/ui` version.

This can be done either by building the `@gitlab/ui` package locally, or by using the package that
is built every time a pipeline runs against your branch.

See [Updating GitLab UI Packages](doc/updating-gitlab-ui-packages.md) for information on how the
`@gitlab/ui` package is kept up to date in various other projects.

## Testing your changes in a local GitLab instance

During development, you can use [yalc](https://github.com/wclr/yalc) to  link your local
`@gitlab/ui` package changes to the GitLab project.
This means you don't need to update `package.json`, and can easily test changes.

1. Install `yalc` with `yarn global add yalc`
1. Navigate to the `@gitlab/ui` directory and publish the package with `yalc publish`.
1. Navigate to the `gitlab` project and add published package with `yalc add @gitlab/ui`.
1. Run `yarn install --check-files` to pull package updates.

To propagate changes in the `@gitlab/ui` project automatically to all installations use
the following command `yalc publish --push`.

## Using the remote development package

This approach relies on the [development package](#the-gitlab-ui-integrations-fork) that's
built and published as an artifact by the `ui:build_package` CI job. This is especially
useful if the changes you are making in GitLab UI require some code to be migrated in
GitLab as you will be able to open a GitLab MR to preemptively integrate your changes
before they are released with a new version of `@gitlab/ui`.

You will be using the [forked workflow](https://docs.gitlab.com/user/project/repository/forking_workflow/)
to build and test your changes in a forked mirror of the GitLab
product. If you are not familiar with forks, take a few minutes and read the linked
article. It will give you a high-level understanding of how forks work and make this
process easier to understand.

Your development flow will look like this:

1. Push your dsign system changes to GitLab UI
1. Build a custom design system package using a manual CI job
1. Create a new branch in GitLab and install the development package
1. Do any required migration in your GitLab branch, push your branch and open an MR
1. Get your GitLab UI _and_ GitLab MRs reviewed
1. Get your GitLab UI MR merged

After your GitLab UI changes are merged:

1. A new version of `@gitlab/ui` containing your changes will be released
1. Update your GitLab MR to use the newly released version of `@gitlab/ui` instead of the development
   build
1. Get your GitLab MR merged

### Make your GitLab UI changes locally

GitLab UI is a dynamic design system. The current release is often ahead of the release
version being used in GitLab. Follow these steps to ensure your changeset is as close to
the production version of GitLab UI as possible:

1. Review the GitLab `package.json` file for `@gitlab/ui` version
1. Pull the latest `main` branch in GitLab UI to ensure you have access to the current tagged version
1. Create a new feature branch by typing the following in your terminal:

   ```bash
   # If you are creating a new branch
   # NEW_BRANCH_NAME should include an issue number when possible

   git checkout -b NEW_BRANCH_NAME @gitlab/ui@CURRENT_RELEASE_NUMBER

   # If you created a branch previously

   git checkout YOUR_BRANCH_NAME
   git rebase @gitlab/ui@CURRENT_RELEASE_NUMBER
   ```

1. Make your changes and push your GitLab UI branch
1. Create a merge request

### Creating a remote development package

Your GitLab UI merge request will kick off a number of automatic CI tasks. When those
tasks have finished running, create your custom GitLab UI package by starting the manual
`ui:create_integration_branch` CI job. This job builds a custom GitLab UI package and
stores it on the forked GitLab mirror.

![Create integration branch CI job location](../images/create_integration_branch.png 'Create integration branch CI job location')

After the `ui:create_integration_branch` CI job is complete, check the log files for a
link to create a GitLab merge request. This merge request will help you test your GitLab
UI changes and fix any test failures. Once you create the integration merge requst, add a
link to your GitLab UI merge request. This way, reviewers can run their own verifications.

![Integration branch link location](../images/integration_branch_job_log.png 'Integration branch link location')

Opening a GitLab merge reqeust will do a few things for you:

1. The MR will reference your custom GitLab UI package in the mirrored frontend
1. The GitLab CI will run automatically and notify you of any test failures
1. The MR will provide a feature branch to update tests, snapshots, etc.

### Making changes to GitLab on your feature branch

You may find some tests failing after the CI finishes running on your merge request. Not to worry!

1. Open your terminal and navigate to the `gdk` repository on your local machine
1. Run the `gdk update` and `gdk reconfigure` commands
1. `cd` into the `gitlab` directory
1. Add the forked mirror as a new `gitlab` remote:

   ```bash
   # SSH
   # Assume the new remote is named "fork"
   git remote add fork git@gitlab.com:gitlab-org/frontend/gitlab-ui-integrations.git

   # HTTPS
   # Assume the new remote is named "fork"
   git remote add fork https://gitlab.com/gitlab-org/frontend/gitlab-ui-integrations.git
   ```

1. Check our your mirrored feature branch

   ```bash
   git fetch
   git checkout gitlab-ui-integrations/YOUR_BRANCH_NAME
   ```

1. Make changes as needed to get tests and snapshots passing
1. Push your changes to your feature branch on the GitLab mirrored frontend

   ```bash
   git push --set-upstream fork gitlab-ui-integrations/YOUR_BRANCH_NAME
   ```

## The GitLab UI Integrations fork

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

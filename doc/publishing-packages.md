# Publishing packages with changesets

## What is changesets?

[Changesets](https://github.com/changesets/changesets) is a tool for managing versions and changelogs for monorepos. It helps to:

- Generate changelogs based on these changes
- Manage version bumps
- Publish packages to npm

## Process

If your changes warrant a new release of a package, you need to add a changeset file. A changeset file is markdown describing your changes, with frontmatter that indicates the type of version bumps to use on which packages. The description will be added to the changelog during the release process.

### 1. Make your changes

First, make the necessary code changes to the package(s).

### 2. Add a changeset file

Create a changeset file by running this command in your terminal:

```bash
yarn changeset
```

It will ask a series of questions. Use <kbd>Space</kbd> to select items, and <kb>Enter</kb> to confirm your selections and move on:

1. Select packages you want to release.
1. Select which packages should have which type of version bump.
   - `major` (breaking changes)
   - `minor` (new features, non-breaking)
   - `patch` (bug fixes, performance improvements)
1. Write a summary of the changes, suitable for a changelog entry.
1. Confirm the changeset.

A new changeset file should now be in the `.changeset` directory, with a randomly generated name.

### 3. Edit the changeset file (optional)

You can edit the generated file to add more information. Any markdown content is allowed.

### 4. Commit the changeset

Commit the changeset file along with your code changes.

Use a [suitable commit message](./commits.md).

### 5. Create a merge request

Push your changes and create a merge request.

The changeset file can be reviewed like any other file in your merge request.
Suggestions can be applied to it as needed, though for a cleaner commit
history, enable the "Squash commits" option before merging.

Once the merge request is merged, the `publish_npm_packages` job will run on the `main` branch. This will:

- bump package versions,
- update changelogs,
- commit the changes,
- tag the commit (e.g.. `@gitlab/ui@114.1.2`)
- publish the new packages to `npm`,
- create [releases](https://docs.gitlab.com/user/project/releases/) (not yet implemented),
- push the changes to `main`.

## Example changeset files

This changeset would create a minor version bump of `@gitlab/ui` package:

```md
---
'@gitlab/ui': minor
---

GlFoo: Added the `foo` prop.
```

For major version bumps, include information about the breaking changes and how to adapt to them:

```md
---
'@gitlab/ui': major
---

GlFoo: Removed component.

Use the GlBar component instead.
```

## Best Practices

1. **One changeset per feature/bug fix**: Create a separate changeset for each logical change.

2. **Be descriptive**: Write clear, detailed descriptions that will help users understand what changed. This information is shown in dependency update merge requests created by [Renovate](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot).

3. **Choose the right semver bump**: Follow semantic versioning:

   - `major`: breaking changes
   - `minor`: new features (non-breaking)
   - `patch`: bug fixes, performance improvements

4. **Include changeset files in your merge requests**: Always include the generated changeset file with your code changes.

5. **Link to issues and merge requests**: Link to relevant issues and merge requests when applicable. Use full URLs rather than shorthands.

## Not every merge request needs a changeset

If your changes don't warrant a changelog entry, there's no need to create a changeset file.

Changes which aren't observable in the package don't need a changelog entry. For example:

- refactorings which don't change behaviour,
- CI changes.

## Adding a changeset retrospectively

If a merge request is merged that didn't include a changeset but should have, create a new merge request with your changeset.

Include a link to the original merge request in the changeset description.

## Further reading

- [Changesets documentation](https://github.com/changesets/changesets/tree/main/docs)
- [Semantic versioning](https://semver.org/)

# Pajamas commit conventions

We use conventional commits specifications to write meaningful commit messages that are used as part of our semantic release process. We chose to use [semantic-release](https://github.com/semantic-release/semantic-release) to handle our versioning because it is widely used and gives easy support for managing changelogs.

For more detail on conventional commits, please read the [official specifications](https://www.conventionalcommits.org/).

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special
format that includes a **type**, a **scope**, and a **subject**:

```plaintext
<type>(<scope>): <subject>

<body - optional>

<footer - optional>
```

The header is mandatory and the scope of the header is optional.
Each line in the commit message should be no longer than 72 characters.

When opening an MR, make sure you do at least one of the following:

- Include at least one commit message that complies with the conventional commit standards.
- Ensure the MR's title itself complies with the conventional commit standards.

Following these conventions will result in a properly versioned project and clear [changelogs](./CHANGELOG.md) for every version.

## When should my MR's title follow these conventions?

It's always a good idea to follow the conventions for your MR's title as well as for commit messages. This way, if your MR is squashed
upon merge, the maintainer will be able to use its title as the final commit message, which will result in a properly formatted history.

## Is it okay that all my commits don't follow the conventions in a single MR?

It's recommended that all commits follow the conventions because we refer to those commits when generating changelogs. Imagine your MR's
history looks like this:

```
2b2b2b2 Correcting something in the awesome feature
1a1a1a1 feat: adding an awesome feature
```

When generating the changelog for the above, we will reference commit `1a1a1a1` which follows the conventions, but looking at the diff
for this commit will not give a complete overview of the feature it describes, which might be confusing. Ideally, commit `2b2b2b2` should
have been squashed in `1a1a1a1`.

It's okay to not always follow the recommendation above, as long as every meaningful change is described by one properly formatted message.

Example:

```
3c3c3c3 Apply review suggestion
1a1a1a1 feat: adding an awesome feature
```

In the example above, you might want to keep `1a1a1a1` and `3c3c3c3` separated to help in the review process and that would be fine.

> **Note:** It would NOT be all right for `3c3c3c3` to follow the conventions because it doesn't bring any meaningful change to `main`.
> Conventional commits should only be used to describe changes that will land in the main branch, NOT for changes to your own branch.

## What types can I use for my commit messages?

We use the same types as [Angular's commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type):

- **feat:** A new feature (adding a new component page, providing new variants/usage guidelines for an existing component, etc.).
- **fix:** A bug fix (correcting grammar, addressing broken links, etc.).
When updating non-dev dependencies, mark your changes with the `fix:` type.
- **docs:** Documentation-only changes. Since Pajamas is mostly documenation, the `docs:` type should be used for documentation for the Pajamas project (files in the `doc/` folder or README.md ), not Pajamas documentation.
- **style:** Changes that do not affect the meaning of the code
(whitespace, formatting, missing semicolons, etc). _Not_ to be used for CSS changes as those are
meaningful changes, consider using `feat:` of `fix:` instead.
- **refactor:** A code change that neither fixes a bug nor adds a feature.
- **perf:** A code change that improves performance.
- **test:** Adding missing tests or correcting existing tests.
- **build:** Changes that affect the build system (changing webpack or Rollup config for example).
- **ci:** Changes to our CI configuration files and scripts
(changing `.gitlab-ci.yml`, adding or changing Danger plugins, etc.).
- **chore:** Other changes that don't modify source or test files. Use this type when adding or
updating dev dependencies.
- **revert:** Reverts a previous commit.

Each commit type can have an optional scope to specify the place of the commit change: `type(scope):`.
It is up to you to add or omit a commit's scope. When a commit affects a specific component, use the
component's PascalCase name as the commit's scope. For example:

```
feat(GlButton): add secondary variant usage guidelines
```

> **Note:** Only `feat:`, `fix:`, and `perf:` types trigger a new release
> If you're introducing a breaking change, the message body should start with [`BREAKING CHANGE:`](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer),
> this will trigger a major version bump (e.g. `v1.2.3` -> `v2.0.0`)
>
> An example of a breaking change in Pajamas is changing one of our foundational
> guidelines, such as spacing or typography documentation, which would affect other components.
> Adding a new component could be considered a breaking change if the component is
> being introduced in order to replace an incorrect usage of an existing component
> (for example, toasts were introduced to replace a use case that previously used alerts).
> A new component is not a breaking change by default.

## Commitizen

https://commitizen.github.io/cz-cli/

Commitizen is a CLI tool that provides an interactive interface to help you write commit messages following conventional commits specifications.

> **Note:** We also limit the length of both the subject and the body of a commit message with Danger: [Dangerfile](./danger/semantic-commit/Dangerfile).

## Squashing and amending commits

Many times, you will need to squash or amend your commit message(s).

### Squashing

There are multipe ways to squash commits. One typical workflow is as follows:

1. For the branch you are working on, type `git rebase -i HEAD~[COMMIT NUMBER]` where `[COMMIT NUMBER]` is the number of commits in your merge request. For example, if you have 2 commits, you would type `git rebase -i HEAD~2`.
1. This will bring up a prompt that shows your commits. If using Vim, type `i` to start editing the contents of this prompt.
1. In order to squash your commits, change `pick` to `f` for all commits except your first one. `f` stands for `fixup` and will move the contents of that commit to the previous commit.
    - **Hot tip:** You can replace all lines at once by placing your cursor at the beginning of the first line you want to be squashed and:
      1. `Ctrl-cv` (Press `Ctrl-c`, release `c` and press `v`)
      1. With the arrows, select all occurrences of `pick` that you want to change to `f`
      1. Press `c`
      1. Type `f` for `fixup`
      1. Press `esc`
1. Once you have updated all commits except the first to utilize `f`, save your changes by first hitting `esc` to get out of edit mode and then `:wq` to save the changes.
1. After you have squashed your commits, you will need to force push your changes up to your branch using `git push --force-with-lease origin [BRANCH NAME]`. If your branch on GitLab has changes that your local branch does not know about, you will first need to fetch or pull the remote changes.

**Note:** It is valid to have multiple commits if there are multiple distinct changes in your merge request. Not every MR should be squashed to use only one commit.

### Amending

If you need to amend your commit in order to follow the above conventional commit guidelines, reference the [Git guidelines on rewriting history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History).

A typical workflow is as follows:

1. After squashing your commits down to the correct number of commits, type `git commit --amend` to pull up a prompt to edit your last commit message.
1. If using Vim, type `a` to start editing the contents of this prompt. From here, you can change your commit message. Adding an additional line and then more content will allow you to add a commit description, if needed.
1. Once you have updated your commit, save your changes by first hitting `esc` to get out of edit mode and then `:wq` to save the changes.
1. After amending your commit, you will need to force push your changes up to your branch using `git push --force-with-lease origin [BRANCH NAME]`. If your branch on GitLab has changes that your local branch does not know about, you will first need to fetch or pull the remote changes.

* **Hot tip:** If you need to squash and amend your commits at the same time, you can do so by using the `r` option in the interactive rebase prompt. For example, if you have five commits and you want to squash three of them and amend two of them, you can do so by utilizing `f` to fixup the commits you want to squash and `r` to indicate that you want to rewrite your commit message.

```
r f2df58f Commit 1 
f c8b3bb3 Commit 2 
r f26d071 Commit 3 
f b6bd6ae Commit 4 
f 51fa598 Commit 5 
```

After saving this, Git will automatically open editors for you to rewrite the commits marked with `r`.

## I'm seeing error upon committing changes

We're using [lefthook] to run a few lint tasks when changes are committed. This is to reduce the
likelihood of badly formatted code landing on the remote and triggering timely and costly
pipelines that would fail anyways.

If your commit command is erroring out, you likely need to fix some formatting issues manually.
Inspect the command's output to find out what needs fixing, apply and stage the required changes,
then try committing again.

If you'd like to bypass the verification step when committing, you can do so by setting the
`LEFTHOOK` env variable to `0` when running the `git` command. For example:

```sh
LEFTHOOK=0 git commit -m "chore: reticulate splines"
```

[lefthook]: https://www.npmjs.com/package/@arkweid/lefthook

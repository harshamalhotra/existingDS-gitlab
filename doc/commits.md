# Pajamas commit conventions

Follow GitLab's [commit message guidelines](https://docs.gitlab.com/development/contributing/merge_request_workflow/#commit-messages-guidelines).

## Squashing and amending commits

Many times, you will need to squash or amend your commit message(s).

### Squashing

There are multipe ways to squash commits. One typical workflow is as follows:

1. First, ensure the `main` branch is up to date.
   1. Enter `git checkout main`
   1. Enter `git pull origin main`
1. Enter `git checkout your-branch-name`. This will switch to your branch.
1. Assuming you’ve made all your commits, start by entering `git rebase -i main`.
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

If you need to amend your commit in order to follow the above commit message guidelines, reference the [Git guidelines on rewriting history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History).

A typical workflow is as follows:

1. After squashing your commits down to the correct number of commits, type `git commit --amend` to pull up a prompt to edit your last commit message.
1. If using Vim, type `a` to start editing the contents of this prompt. From here, you can change your commit message. Adding an additional line and then more content will allow you to add a commit description, if needed.
1. Once you have updated your commit, save your changes by first hitting `esc` to get out of edit mode and then `:wq` to save the changes.
1. After amending your commit, you will need to force push your changes up to your branch using `git push --force-with-lease origin [BRANCH NAME]`. If your branch on GitLab has changes that your local branch does not know about, you will first need to fetch or pull the remote changes.

- **Hot tip:** If you need to squash and amend your commits at the same time, you can do so by using the `r` option in the interactive rebase prompt. For example, if you have five commits and you want to squash three of them and amend two of them, you can do so by utilizing `f` to fixup the commits you want to squash and `r` to indicate that you want to rewrite your commit message.

```gitrebase
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
LEFTHOOK=0 git commit -m "Implement GlFoo component"
```

[lefthook]: https://www.npmjs.com/package/@arkweid/lefthook

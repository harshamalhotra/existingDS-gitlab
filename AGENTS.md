# AI Agent Instructions

## Commit Messages

**Always use full URLs** when referencing GitLab issues, MRs, or epics in commit messages.

Shorthand references (`#123`, `!456`) cause pipeline failures.

```text
# Bad
Fixes #123

# Good
Fixes https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/123
```

**Start commit messages with a capital letter** and do not use conventional commit prefixes like `fix(scope):` or `feat(scope):`.

```text
# Bad
fix(tooltip): resolve eslint errors
feat(button): add new variant

# Good
Resolve eslint errors in tooltip specs
Add new button variant
```

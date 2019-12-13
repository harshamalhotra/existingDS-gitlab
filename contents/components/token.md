---
name: Token
vueComponents:
  - GlToken
related:
  - filter
  - button
  - badge
  - labels
---

Tokens represent keywords and are used to add or filter objects. They allow users to input information, converting their text to tokens.

## Usage

A token is used in a search query in places where the user is expected to include multiple queries.

* Input tokens are used to add content. For example, these tokens are used when adding new users to a project. Multiple users can be added at once, and each inputted user is added as a token within the text field.
* Filter tokens are used to narrow down content and are attached to a qualifier. [Filters](/components/filter) inherit these tokens.

### When to use tokens

Use tokens to:

* Enable dynamic user input and verify that input by converting text into tokens.
* Allow users to manage, filter, and search options in a compact area.

### When not to use tokens

Do not use tokens to:

* Categorize an object. Use [labels](https://design.gitlab.com/components/labels/) instead.
* Highlight more generic object metadata, like an issue’s status, a member’s role, or if a branch is protected. Use [badges](/components/badge/) instead.
* Display static action items persistently. Use [buttons](https://design.gitlab.com/components/button) instead.

### Placement

Tokens can be positioned inline with the text cursor in a field, or in a stacked list. Tokens can wrap to a new row.

### Variants

#### Interactive tokens

Interactive tokens include a [remove](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~close) icon, positioned at the end of the token. When enabled, users can click the icon to remove the token from the set.

[[Example:token-basic]]

#### View-only tokens

It is also possible to display view-only tokens. View-only tokens don't include a remove icon and cannot be removed from the set. For example, you may use a view-only token when a user does not have permission to remove a token.

[[Example:token-view-only]]

#### Avatar tokens

When querying for a user, project, or group, an avatar token should be used. These can be either interactive or view-only.

[[Example:token-with-avatar]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for tokens](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tokens-spec-previews/)

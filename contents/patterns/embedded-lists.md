---
name: Embedded lists
summary: Guidelines for creating and managing lists of items within a specific context, such as project settings or configuration pages.
related:
  - empty-states
  - destructive-actions
  - saving-and-feedback
  - forms
  - button
  - table
  - pagination
---

A user often needs to manage a list of related items within a larger workflow. Allowing a user to make changes to these items from their current context can improve efficiency.

Common examples include managing access tokens from project settings, CI/CD variable management while configuring a pipeline, and webhook management while configuring an integration.

Use this pattern for managing embedded lists of items that:

- Support the main page purpose as secondary elements, but require create, read, update, and delete (CRUD) operations.
- Require visual separation from other page content for a user to properly understand them.

## Key principles

- **Contextual separation:** Separate the items from surrounding page content to create a focused workspace for list management while maintaining clear relationship to the parent context.
- **Consistent interactions:** Provide predictable patterns for creating, updating, and deleting items. Follow established conventions for actions and feedback.
- **Appropriate complexity:** Match the interface complexity to the data complexity. Simple elements need simple interfaces; complex data may require more sophisticated management tools.

## Display options

There are two ways to display related items embedded in another context:

- **List view** for items where additional content is secondary to the primary identifier.
- **Tabular data view** for items where content needs to be compared or analyzed across items.

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/3014">Create guidance and assets to assist in the creation and display of 'rich' lists of items, especially in a condensed space</todo>
<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/3013">Create guidance and assets to help create and display tabular data, especially in a condensed space</todo>

## States and feedback

Provide clear feedback for all item operations:

- Loading states during operations.
- Success confirmation for completed actions.
- Specific error messages with recovery options.
- Helpful empty states that guide users to add their first item.

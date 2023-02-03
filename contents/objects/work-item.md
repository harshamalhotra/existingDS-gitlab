---
name: Work item
---

Work Items is a new architecture created to support the various types of built and planned entities throughout the product, such as issues, requirements, and incidents. It will make these types easy to extend and customize while sharing the same core functionality.

## Conceptual model

<todo>Conceptual model</todo>

## Semantic layout

<todo>Semantic layout diagram</todo>

## Hierarchy

Hierarchy supports the product and project management work of starting from high level plans, then breaking those plans down into smaller and smaller pieces to distribute and track work toward a common goal.

- Different ways to show the Work Item 'Object' hierarchy include breadcrumbs on the item and a child tree widget.
- Keep lists and boards as 'flat' views, without nesting the UI or emphasizing the parent-child hierarchy.
- Use Grid views to effectively visualize the entire relationship tree.

### Definitions

- **List view:** Shows a single ordered list of all items that match the criteria set by the system and filtered by the user. For example an [issue list](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#filter-the-list-of-issues) shows all issues, incidents, tasks and test cases for a given project (system criteria), which can then be reduced by user filtering.
- **Board view:** Shows multiple user-defined and system-defined ordered lists of all items that match the criteria set by the system and filtered by the user. For example an [epic board](https://docs.gitlab.com/ee/user/group/epics/epic_boards.html) could show all epics filtered by a label and grouped by a series of workflow labels (user-defined), as well as open and closed (system-defined). Boards can be used to visualize the progression or status of work.
- **Roadmap view:** Shows a timeline of all items that match the criteria set by the system and filtered by the user. For example, a [roadmap](https://docs.gitlab.com/ee/user/group/roadmap/) shows all epics for a given group (system criteria) filtered by user-defined labels and milestones, and organized by start and end dates (system-defined).
- **Grid view:** (Future) shows a grid of items in user-defined and system-defined columns of all items that match the criteria set by the system and filtered by the user.
- **Saved view:** (Future) a user-customizable set of parameters that change the display and contents of one of the above views.
- **Flat presentation:** Items are treated equally, regardless of their location in any underlying structure and relationship hierarchy.
- **Nested presentation:** The underlying structure and relationship hierarchy is exposed through the visual presentation and interactions in the UI.

<todo>Add illustrations to demonstrate flat and nested presentations</todo>

## Resources

- [Work items architecture blueprint](https://docs.gitlab.com/ee/architecture/blueprints/work_items/#work-items)

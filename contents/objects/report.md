---
name: Report
---

When a user wishes to drill-down into the details of a metric or chart, the Report object is the destination, and the standard template for showing the granular data set. It allows users to scope the data set with filters, and visualize the data set with a table and chart. This works hand-in-hand with the [Generic Metrics API](https://gitlab.com/groups/gitlab-org/-/epics/3105).

## Primary workflows

### Workflow 1: Drill-down

**Job-to-be-done**: When I drill-down into the details of a metric or chart; I want to view, filter and visualize the data set; so that I can spot patterns and take action on the information.

| Stage | Description | Signal |
| ------ | ------ | ------ |
| **Awareness** | User becomes aware that the data is available | Interacts with embedded analytics, dashboard, or navigation |
| **Understanding** | User navigates to analytics page and scans the page for anything useful at a high-level | Page dwell, hover interactions, scrolling |
| **Scoping** | User scopes the content shown from the dataset to something they’re interested in | Filters |
| **Exploring** | User manipulates the visualization of the dataset and deep-dives to uncover insight | Interacts with chart & table |
| **Actioning** | User takes action on the information they uncovered | Clicks on table action buttons |

### Workflow 2: Create custom report

**Job-to-be-done**: When I have a specific data set of interest; I want to create a custom Report with saved filters, views and table columns; so that I can regularly analyze, share, or report on the information.

| Stage | Description | Signal |
| ------ | ------ | ------ |
| Todo: Add stages | Todo: Add descriptions | Todo: Add signals |

## Anatomy

### Sub-objects

- None

### Components and regions

- [Breadcrumb](/components/breadcrumb)
- Page header
- Metrics (optional)
- [Tabs](/components/tabs) (optional)
- [Filter](regions/filters) (optional)
- [Chart](/data-visualization/charts) (optional)
- [Table](/components/table)

*Note: Variants of this object can be created by adding/removing the optional components/regions*

## Entries and exits

**Typical entry-points**:
- Embedded analytics
- Dashboard object
- Project and group sidebar navigation

**Typical exit-points**:
- Individual object, for example, a Merge Request or Issue
- Page action, for example, a share chart or export table
- Back to entry-point, for example, a back to dashboard action

---
name: Dashboards
summary: Guidelines for designing interfaces that present multiple dashboard panels of content and data for analysis and decision-making.
description: A dashboard is a structured interface that organizes multiple dashboard panels, and is analysis focused. Dashboards can be built-in to GitLab features or created and customized by a user.
related:
  - dashboard-panel
---

## Structure

<figure-img alt="Numbered diagram of a dashboard structure" label="Dashboard structure" src="/img/dashboard-structure.svg"></figure-img>

1. **Title**: Displays the dashboard name and purpose.
2. **Description** (optional): Provides context about the dashboard's objectives and key questions it addresses.
3. **Configuration menu**: Enables authorized users to configure dashboard-level settings.
4. **Filters** (optional): Applies dashboard-wide filtering that affects multiple dashboard panels.
5. **Grid**: Contains all dashboard panels within a 12-column responsive grid with unlimited rows that collapses to a single column at the medium breakpoint.
6. **Actions**: Contains administrative controls (such as save, cancel, and add a panel) visible to authorized users during edit mode.

## Guidelines

### When to use

- Display dashboard panels of content and data for analysis-oriented tasks.
- Create customizable, analytical workspaces for different user roles or use cases.
- Consolidate related metrics into a unified analytical interface.

### When not to use

- If the interface is action-oriented where content is presented as a list, table, or board that requires use action, then consider a more general page layout.
- If a chart or metric doesn't benefit from the overhead or features of the dashboard framework, then it can be a standalone visualization.

### Layout

A dashboard uses a grid to arrange elements. Rows and columns are used to align and snap elements based on sequence and position.

### Content

- **Configuration menu**: Open and modify dashboard settings and utilize dashboard actions.
- **Date range**: An interval of dates defined relative to the current date or a custom range.
- **Description**: Explains the purpose of the dashboard.
- **Filter**: A selection of one or more ways to reduce the data shown to meet a specific set of criteria for the majority of dashboard panels.
- **Title**: Concisely describes the group of dashboard panels.
- **Unique ID** (required): An internal value to uniquely identify the dashboard.
- **Variable**: A placeholder for a value that could propagate through the dashboard panels. For example, a team name that could be rendered in visualizations or panel titles.
- **Version history**: Listing of historical changes that were done to the dashboard that shows dates and author. Could have the option to revert back to any point of a past change if able.
- **Grid attributes**: The number of rows and columns, margin around dashboard panels, and other grid functionality that should be applied to the whole grid.

### Dashboard categories

There are two categories of dashboard in GitLab:

- Built-in dashboard.
- Customizable dashboard.

#### Built-in dashboard

A built-in dashboard is pre-configured with fixed dashboard panel layouts and pre-defined data sources that cannot be modified by a user.

#### Customizable dashboard

A customizable dashboard allows a user to add or remove dashboard panels, adjust their size and position, and save personalized configurations.

## Behavior

Both [dashboard categories](#dashboard-categories) support the following interactions:

- **Export**: Make data available as CSV file, static image of a visualization being shown, or static PDF of a visualization/dashboard (important for data analysis and accessibility).
- **Share**: Share a dashboard through different channels.

A customizable dashboard supports these additional interactions:

- **Archive**: Remove something from a current view to be organized and managed in a separate view. This change is recorded in the versioning area.
- **Edit**: Edit the dashboard title, description, and grid composition.
- **Make a copy**: Create an identical copy of any dashboard.
- **Lock**: One or more elements are temporarily unavailable for changes to be made.
- **Remove**: Delete a dashboard.

## Considerations

- **Organize hierarchically**: Place high-level information at the top and detailed information towards the bottom.
- **Design for sharing**: Ensure a dashboard is "meeting-ready" for a screenshot and screen sharing during a call.
- **Enable quick scanning**: Prominently display the data points that a user frequently looks for.
- **Support exploration**: Start with a high-level view that allows a user to drill-down for investigation.
- **Show progression**: Display trends and a comparison over time, not just a current snapshot.
- **Facilitate exporting**: Format data and visuals for easy inclusion in presentations.
- **Maintain simplicity**: Limit a dashboard panel to one visualization for better UI scalability and easier configuration.

## Code reference

<todo>Add dashboard example</todo>

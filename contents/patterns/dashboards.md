---
name: Dashboards
description: A dashboard is a root level container that has multiple panels, and is analysis focused.
---

## Layout

- **Grid**: Rows and columns used to align and snap elements based on sequence and position.
- **Panel**: The basic building block of a dashboard. Each panel is composed of a title, description, and visualization which can be configured or modified through options. Panels can be moved and resized to arrange them within a dashboard.

<todo>Add visual examples for dashboard and panel content and concepts.</todo>

## Guidelines

### When to use

- Display panels of content and data for analysis-oriented tasks.

### When not to use

- If content is action-oriented and presented in a list, table, or board, then a general [landing page](/patterns/navigation#landing-page) may be more appropriate.

### Behavior

The following interactions are available:

- **Alerting**: Enable a panel to notify a user, so they can act on data from their existing data sources.
- **Archive**: Remove something from a current view to be organized and managed in a separate view. This change is recorded in the versioning area.
- **Duplicate**: Create an identical copy of any dashboard or panel.
- **Embed**: Insert panels into different mediums.
- **Export**: Make data available as CSV file, static image of a visualization being shown, or static PDF of a visualization/dashboard (important for data analysis and accessibility).
- **Lock**: One or more elements are temporarily unavailable for changes to be made.
- **Remove**: Delete a dashboard or panel.
- **Share**: Share a dashboard or panel through different channels.

### Content and configuration

#### Dashboard

- **[Accordion](/components/accordion)**: Show and hide content.
- **Configuration menu**: Open and modify dashboard settings and utilize dashboard actions.
- **Date range**: An interval of dates defined relative to the current date or a custom range.
- **Description**: Explains the purpose of the dashboard.
- **Filter**: A selection of one or more ways to reduce the data shown to meet a specific set of criteria across all panels.
- **Title**: Concisely describes the group of panels.
- **Unique ID** (required): An internal value to uniquely identify the dashboard.
- **Variable**: A placeholder for a value that could propagate through the panels. For example, a team name that could be rendered in visualizations or panel titles.
- **Version history**: Listing of historical changes that were done to the dashboard that shows dates and author. Could have the option to revert back to any point of a past change if able.
- **Grid attributes**: The number of rows and columns, margin around panels, and other grid functionality that should be applied to the whole grid.

#### Panel

- **Configuration menu**: Open and modify panel settings and utilize panel actions.
- **Data source**: The type of database you want to query or integrate with.
- **Description**: Explain what the panel contains or how to use the data presented.
- **Filter**: A selection of one or more ways to reduce the data shown to meet a specific set of criteria of a panel.
- **Grid attributes** (required): The width, height, and x/y coordinates for the panel on a specific dashboard.
- **Title**: Concisely describe the panel.
- **Unique ID** (required): An internal value to uniquely identify the panel.
- **Version history**: Listing of historical changes that were done to the dashboard that shows dates and author. Could have the option to revert back to any point of a past change if able.
- **Visualization** (required): A graphical representation of query results. For example, a chart, a table, or a list.

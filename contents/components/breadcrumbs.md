---
name: Breadcrumbs
vueComponents:
  - GlBreadcrumb
related:
  - navigation
---

Breadcrumbs assist users by helping them understand their current location in relation the rest of the application. Breadcrumbs use page hierarchy to facilitate discovery without taking up too much space.

## Usage

Breadcrumbs should appear on every page of the application, except for the register and profile screens. Breadcrumbs show the hierarchical progress from the highest page entity to the current page entity, one step at a time. They should not be used to replace the main navigation.

### Dos and Dont's

|Do|Don't|
|--- |--- |
|Ignore the instance name in the breadcrumb line.|Include the instance name in the breadcrumb line.|
|Keep breadcrumbs to one line by default.|Break breadcrumbs up onto separate lines.|
|Use ellipses to hide multiple subgroups when there are more than three.|Show more than three subgroups by default.|
|Use chevrons between breadcrumb items.|Use slashes or other characters to separate breadcrumb items.|

### Individual pages

For pages that present the details for an individual item (issue, merge request, snippet, pipeline, job, milestone, commit, tag, environment, cluster, pipeline schedule), the last element of the breadcrumbs should include the ID for said element.

**Example:** MR !1234 in CE becomes _'GitLab.org > GitLab Community Edition > Merge Requests > !1234'_

### Contextual pages

For contextual pages within the navigation, the breadcrumb should only include the submenu title.

**Example:** Overview > Details becomes just _'Details'_

### Truncation

Breadcrumbs should use the following rules to truncate items:

*   Use an ellipsis button to hide groups when there are three or more subgroups in the path.
*   Use an ellipsis button to hide all Wiki page breadcrumb items except the current page.
*   The top-level group and the subgroup closest to the project are never collapsed.
*   All breadcrumb items except the last one are truncated to 128px if there isn't enough horizontal space to fit them on one line.

### Special breadcrumbs

Certain pages have special breadcrumb paths to make the breadcrumb labels intuitive. These are defined as follows:

|Path|Title in breadcrumbs|
|--- |--- |
|Group > Issues > List|Group > Issues|
|Group > Issues > Boards|Group > Issue Boards|
|Group > Settings > General|Group > General Settings|
|Group > Settings > CI / CD|Group > CI / CD Settings|
|Group > Project > Repository > Files|Group > Project > Repository|
|Group > Project > Repository > Compare|Group > Project > Compare Revisions|
|Group > Project > Repository > Charts|Group > Project > Contribution Charts|
|Group > Project > Issues > List|Group > Project > Issues|
|Group > Project > Issues > Boards|Group > Project > Issue Boards|
|Group > Project > CI / CD > Charts|Group > Project > CI/CD Charts|
|Group > Project > Settings > General|Group > Project > General Settings|
|Group > Project > Settings > Integrations|Group > Project > Integration Settings|
|Group > Project > Settings > Repository|Group > Project > Repository Settings|
|Group > Project > Settings > CI / CD|Group > Project > CI/CD Settings|
|User Settings > Profile|User settings > Edit Profile|
|User Settings > Password|User settings > Edit Password|
|Admin Area > System Hooks > Edit|Admin Area > System Hooks > Edit System Hook|
|Admin Area > Label > Edit|Admin Area > Labels > Edit Label|

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for breadcrumbs](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/breadcrumbs-spec-previews/)

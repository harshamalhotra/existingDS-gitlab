---
name: Filtering
related:
  - filter
  - search
  - tabs
  - date-picker
---
## When to use filtering patterns

[Search](/components/search) and [filter](/components/filter) components in GitLab may seem similar at a first glance since the UI is similar, but their purposes are generally quite different. Search lets a user find records based on a particular value, while filters let a user display a list of records that meet a common value. The main factor for choosing between these two components should be the user’s goal:

- If the user is looking for a specific item, the search component should be used. For example, trying to find a particular group member by name, surname, or username.
- If the user is looking to narrow down a list of items based on specific parameters (single or multiple values), the filter component should be used. For example, narrowing down a list of issues for a particular team member and milestone.

However, raw text strings can still be entered into the filter component, which gives it the ability to search for specific items on top of its filtering capabilities. Consult the table below when deciding which component to use.

| User intent | Component |
|---------------|------------------|
| Searching for something specific when the search term or value is known | Search |
| Searching for something specific when only some parameters are known | Filter |
| Narrowing down a range of items based on parameters | Filter |
| Narrowing down a range of items based on parameters, while also searching for something specific | Filter |

## Data complexity and filtering patterns

The [filter](/components/filter) component, alongside [tabs](/components/tabs), [sorting](/components/sorting), [date picker](/components/date-picker), and [search](/components/search) can all be used when filtering data. The more complex the data that needs to be filtered, the more components can be used to filter it and change the view. For example, a list of members where their name, username, and join date are the data, the sorting and search components are enough to allow users to efficiently search and order the results. If the data also includes the status for each member (active or inactive), adding tabs to allow users to navigate between all, active, and inactive members would add another useful level of filtering. Consult the table below for general guidance and examples on when to use components for filtering based on data complexity.

| Data complexity from 1 (low) to 5 (high) | Data examples | Components |
|-----------------------|---------------|-----------------------------|
| 1 | Member name, username | Search |
| 1 | Member name, username, join date | Search, Sorting |
| 3 | Member name, username, join date, status | Search, sorting, tabs |
| 4 | List of project or group names | Filter |
| 5 | Lists of issues or merge requests | Filter, sorting, tabs |

<todo>Add pattern and component placement guidelines.</todo>

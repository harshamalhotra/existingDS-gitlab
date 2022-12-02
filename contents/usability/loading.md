---
name: Loading
related:
  - infinite-scroll
  - skeleton-loader
  - spinner
---

A loading indicator, such as a [spinner](/components/spinner), provides users with feedback when an interface is in an indeterminate state as a result of their action, to help manage their expectations. A loading indicator can be used to communicate:

- Content is being loaded onto the page.
- A background process is occurring.

A loading action, such as a 'Load more' [button](/components/button), gives users a sense of control when fetching more items and is used to:

- Indicate more items are available for the current list.
- Prepare the user for what is about to happen.
- Empower the user to choose when loading occurs.

In Pajamas, the following methods indicate and initiate loading:

- [Loading animation and placeholders](#loading-animation-and-placeholders)
- [Loading more](#loading-more)
- [Progressive loading](#progressive-loading)

## Loading animation and placeholders

<todo>Add details about the use of [skeleton loaders](/components/skeleton-loader) and [spinners](/components/spinner).</todo>

## Loading more

The load more interaction is [a more accessible alternative](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/1196#results) to [infinite scroll](/components/infinite-scroll). It allows a user to load more results by clicking a 'Load more' [button](/components/button). The button text can optionally include the number of items that will be loaded, for example, 'Load 20 more'.

The load more interaction can be used for a set of similar items:

- With content that updates frequently.
- Without sort or filter functionality.
- That doesn't use [pagination](/components/pagination) to provide a preset number of results per view.

### Behavior

- The 'Load more' button is present at the end of a list only when there are more items available. The button is centered within the container and uses the `default` variant and `small` size.
- Clicking the button loads more results inline and moves the button to the end of the list if there are more items that can be loaded.
- After clicking the button, the user's current position is maintained by moving focus to the first element appended to the current items.
- The number of initial results, and results that load after clicking the button, is adjustable based on the scenario. For example, it could be better to load 20 more single-line items, versus loading only 10 more multi-line items that would take more time to scan.
- Loading more is a one-way action. If _showing less_ is necessary, the expand and collapse behavior would be a better fit, like an [accordion](/components/accordion).

## Progressive loading

<todo>Add progressive loading interaction guidelines and address [infinite scroll](/components/infinite-scroll).</todo>

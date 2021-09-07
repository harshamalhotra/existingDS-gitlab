---
name: Empty States
vueComponents:
  - GlEmptyState
related:
  - banner
  - button
---

## Goals

The primary goals of an empty state region should be to:

- Increase feature adoption.
- Improve learnability and feature discovery.
- Improve usability.

## Solutions

While we do provide a [fallback solution](#fallback) for empty state regions, *first* think about how to incorporate unique features in an empty state to achieve the above goals better than we can if we simply used our fallback solution. For example:

- In an epic with 0 related issues, *suggest* a few existing issues through keyword matching or other intelligent methods that could be added with a simple click. In this case, it could make it easier to add related issues without leaving the epic. This may `Increase feature adoption` more than simply telling users that no content exists. 

This is just one example. Each case will be unique and should be thought of as a problem to solve while keeping the [3 main goals in mind](#goals). 

## Analytics & testing

All empty state solutions should include usage analytics so you and your team can measure and improve the empty state solution you've created over time. It‘s also important to think about this as a *solution*, much like any other solution being developed in your stage group, so continue to follow the [solution validation](https://about.gitlab.com/handbook/engineering/ux/ux-research-training/solution-validation-and-methods/) process.

## Use cases

### Blank content

A `Blank content` empty state serves as a placeholder when no content exists on a page. It should contain a call to action that triggers the creation of content. 

#### Specifications

- Appears when no content exists within a configured feature.
- Contains a method for creating content.

### Configuration required

A `Configuration required` empty state serves as a placeholder for features that need to be configured first, before having the ability to create content.

#### Specifications

- Contains a primary action for configuring a feature.
- Contains a secondary action for inviting a member to configure a feature. The secondary action should read as `Invite member to configure`, which should trigger the invite modal, created by the [Growth team](https://about.gitlab.com/handbook/product/categories/#growth-section).

Todo: Add link to process for implementing invite modal. 

### Higher tier feature

A `Higher tier feature` empty state serves as a placeholder when a certain feature isn‘t available under the current tier. [The Growth team](https://about.gitlab.com/handbook/product/categories/#growth-section) is the DRI for `Higher tier feature` empty state regions and should be involved in implementation of solutions for this type of empty state region.

#### Specifications

- Specifications and actions should be determined by [the Growth team](https://about.gitlab.com/handbook/product/categories/#growth-section). If implementing a solution for this empty state region, collaborate with the Growth Product Designer and Product Manager. 

Todo: Add specifications for Higher Tier empty state region.

### Empty search results

An `Empty search results` empty state serves as a placeholder when there are no search results after doing a search or filtering results.

#### Specifications

- Appears when no results are found after a search or filter.
- Should describe that a search or filter came back with no results.
- Does not contain a CTA.

## Fallback

If you're unable to come up with a solution to achieve one of the [3 goals of an empty state region](#goals), you can use the empty state fallback. Using the fallback should still achieve one of the three goals and should include a way to track conversion.

[[Example:empty-state-basic]]

## References

- [Invited users are more likely to activate new stages](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/2526#note_691364062)

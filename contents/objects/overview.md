---
name: Conceptual object model
---

A conceptual object model is a visual representation of a system’s objects, actions, and associated attributes. An object model can be used, in conjunction with a design system, to create a consistent experience across a system’s higher-level constructs such as product pages.

This model allows for proper separation of concerns: concepts (meaning) and user interface (representation; see [layouts](#layouts)).

In other words, a conceptual model is only focused on the concepts and how they relate to each other, not how it’s technically implemented or used in the UI.

For more information, see [Object Modeling for Designers](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf).

## Benefits of using an object model

Objects and the conceptual model can help:

* Identify inconsistencies and duplication in the system.
* Identify opportunities for new features or feature enhancements by analysing the existing object relationships.
* Design features that work well from a grammar (attributes and actions) point of view, regardless of the visual design. This helps create a solid foundation for the user experience we're creating.
* Improve team's communication about the objects.

## Conceptual model diagrams

A conceptual model defines the **objects** and **actions**, and enumerates the **attributes** for every object.

The language of the conceptual model diagram is meant to be as simple and accessible as possible to everyone, even if they are not familiar with these kinds of diagrams. 

As an example, see the [merge request conceptual model diagram](/objects/merge-request#conceptual-model).

## Layouts

An object itself is interacted with and represented in the UI through different layouts in the user's journey, each with a different purpose. 

A semantic layout is a visualization of the object layout, overlayed with the concepts of the object (its relationships, attributes, and actions; see [conceptual model](#conceptual-model-diagrams) for more information).

As an example, see the [merge request semantic layout](/objects/merge-request#layouts).

## How to contribute an object in Pajamas

To contribute an object to Pajamas, create an issue in the [Pajamas Design System project](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) using the `Object` issue template (TBD).

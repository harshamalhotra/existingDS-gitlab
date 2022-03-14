---
name: Objects overview
---

Objects are the building blocks of GitLab. They exist within users' mental models for our product, and are consistently referenced across all levels of the product stack: database, code, user interface (UI), documentation, customer support, sales, marketing, and more.

Examples of objects from products you may know:
* Facebook: friend, post, message, event, page, group.
* Airbnb: listing, host, guest, trip, experience.
* Slack: team, member, channel, message, reaction, thread.
* Intercom: customer, teammate, message, conversation, article.

GitLab's objects include: repository, issue, [merge request](/objects/merge-request), [job](/objects/job), and others.

## Object thinking

Thinking in terms of objects is about abstracting _concepts_ (meaning) from the _UI_ (representation). It doesn't matter how users interact with the objects to achieve their goals. We can use the same objects to build any kind of interface: a mobile app, a web app, a plugin for another app, an API, a voice-controlled app, etc.

GitLab is a large and complex product. It is sometimes difficult to understand how the experience that you are designing fits into the broader picture. Object thinking may bring clarity on how our product fits together. There are many benefits to this:

* Identify inconsistencies and duplication in the system.
* Identify opportunities for feature additions or enhancements.
* Design features that work well from a conceptual point of view, regardless of how they are represented in the UI.
* Improve communication and understanding about how the system works.

Above all, object thinking helps build a solid foundation for the user experiences we're creating.

Learn more about objects in [“The full stack design system”](https://www.intercom.com/blog/the-full-stack-design-system/), where Intercom shares the need, benefits, and how they use objects to build their product.

## Documentation

There are two main ways to document objects, each with its purpose: the [conceptual model](#conceptual-model) and [semantic layouts](#semantic-layouts).

### Conceptual model

The conceptual model is the visual representation of [object thinking](#object-thinking). It helps us visualize GitLab's objects and their relationships, and unlocks the benefits of object thinking. The result is an easy-to-navigate map of GitLab's object architecture. As an example, see the [merge request conceptual model diagram](/objects/merge-request#conceptual-model).

For each object, we document its _attributes_, _actions_, and how it relates to other objects in the system. The resulting diagram is independent of how we represent the objects in the UI or implement them in code. It should be as simple and accessible as possible, even if people aren't familiar with these kinds of diagrams. Learn more about conceptual models in [“Object Modeling for Designers”](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf).

### Semantic layouts

Objects can be presented in the UI through different visual layouts. To give meaning to each part of those visual layouts, from the smallest [components](/components/overview) to the largest regions, we can document them as “semantic layouts”. In practice, a semantic layout places the objects (and their relationships, attributes, and actions) over the layout, so we can see their meaning and purpose. As an example, see the [merge request semantic layout](/objects/merge-request#semantic-layout).

## Contribute

To add or update an object's documentation, conceptual model, or semantic layout, [create an issue with the “Object documentation” template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Object%20documentation) and follow its instructions.

## Learn more

- The role of objects in a design system: [“The full stack design system”](https://www.intercom.com/blog/the-full-stack-design-system/)
- Primer on conceptual models: [“Object Modeling for Designers”](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf)
- Deep-dive on conceptual models and their role in an interaction design framework: “UX Magic” [book](https://www.amazon.com/UX-Magic-Daniel-Rosenberg-ebook/dp/B083QJ8RZ2), [14-min overview article](https://medium.com/the-interaction-design-foundation/the-magic-of-semantic-interaction-design-1864ccafdc51), [1-hour master class](https://www.youtube.com/watch?v=CXkpjzEaHpU).

---
name: Merge request
---

A Merge request (MR) is the core object where users collaborate on proposed changes to source code.
From editing, reviewing, testing, and deploying, almost everything in GitLab flows through MRs.
[How are MRs used in the product?](https://docs.gitlab.com/ee/user/project/merge_requests/)

## Conceptual model

To focus on the essence of an MR and the concepts associated with it, below is the MR **conceptual model**.
This model allows for proper separation of concerns: concepts (meaning) and user interface (representation; see [layouts](#layouts)).
In other words, a conceptual model is only focused on the concepts and how they relate to each other, not how it’s technically implemented or used in the UI.
A conceptual model defines the **objects** and **actions**, and enumerates the **attributes** for every object.
The language of the conceptual model diagram is meant to be as simple and accessible as possible to everyone, even if they are not familiar with these kinds of diagrams (for more information, see [Object Modeling for Designers](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf).

[View conceptual model in Figma →](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=51%3A18)

<div class="figma-embed" aria-label="Conceptual diagram connecting objects, along with their attributes and actions, to the primary merge request object." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ68bePHXIN5OPWqaFFY9ri%2FConceptual-model%3Fnode-id%3D51%253A18" allowfullscreen></iframe>
</div>

## Layouts

MR attributes and actions can be embedded in related objects that rely on specific layouts. For example, an issue or pipeline. 

The MR object itself is interacted with and represented in the UI through different layouts in the user’s journey, each with a different purpose.
As an example, some of the layouts used by MRs are list/catalog, form, and record.

The main representation of an MR is the **record** layout.
Below is the **semantic layout** of the combination between the MR object and the record layout.
It's a visualization of the record layout, overlayed with the concepts of the MR object (its relationships, attributes, and actions; see [conceptual model](#conceptual-model) for more information).

[View semantic layout in Figma →](https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/Semantic-layouts?node-id=50%3A217)

<div class="figma-embed" aria-label="A layout of a merge request with overlays to highlight different sections that represent objects within the merge request." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FshVF8UZwrQtkNfMDjcrsyH%2FSemantic-layouts%3Fnode-id%3D50%253A217" allowfullscreen></iframe>
</div>

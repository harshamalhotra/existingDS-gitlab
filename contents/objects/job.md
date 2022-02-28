---
name: Job
---

A job is a basic building block of a CI/CD pipeline. A job contains the scripts and the configuration that defines when and how those scripts run as part of an automated CI/CD pipeline.
[How are Jobs used in the product?](https://docs.gitlab.com/ee/ci/jobs/)

## Conceptual model

To focus on the essence of a job and the concepts associated with it, below is the job **conceptual model**.
This model allows for proper separation of concerns: concepts (meaning) and user interface (representation; see [layouts](#layouts)).
In other words, a conceptual model is only focused on the concepts and how they relate to each other, not how it’s technically implemented or used in the UI.
A conceptual model defines the **objects** and **actions**, and enumerates the **attributes** for every object.
The language of the conceptual model diagram is meant to be as simple and accessible as possible to everyone, even if they are not familiar with these kinds of diagrams (for more information, see [Object Modeling for Designers](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf).

[View conceptual model in Figma →](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=4488%3A462)

<div class="figma-embed" aria-label="Conceptual diagram that is a reflection of the Job object actions, attributes and its object relationships." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ68bePHXIN5OPWqaFFY9ri%2FConceptual-model%3Fnode-id%3D4488%253A461" allowfullscreen></iframe>
</div>

## Layouts

Job attributes and actions can be embedded in related objects that rely on specific layouts. For example, a pipeline or [merge request](/objects/merge-request).

The job object itself is interacted with and represented in the UI through different layouts in the user’s journey, each with a different purpose.
As an example, some of the layouts used by jobs are a jobs list page, mini-pipeline graph or a merge request pipeline widget.

The main representation of a job is the **job page** layout.
Below is the **semantic layout** of the combination between the job object and the job page layout.
It's a visualization of the job page layout, overlayed with the concepts of the job object (its relationships, attributes, and actions; see [conceptual model](#conceptual-model) for more information).

[View semantic layout in Figma →](https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/?node-id=4636%3A208)

<div class="figma-embed" aria-label="A layout of a Job object with overlays to highlight different sections that represent the actions, attributes and object relationships within the Job layout." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FshVF8UZwrQtkNfMDjcrsyH%2FSemantic-layouts%3Fnode-id%3D4636%253A208" allowfullscreen></iframe>
</div>


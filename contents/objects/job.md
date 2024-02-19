---
name: Job
---

A job is a basic building block of a CI/CD pipeline. A job contains the scripts and the configuration that defines when and how those scripts run as part of an automated CI/CD pipeline.
[How are jobs used in the product?](https://docs.gitlab.com/ee/ci/jobs/)

## Conceptual model

The conceptual model diagram below shows how objects, along with their attributes and actions, are related the primary job object. [Learn more about the conceptual model](/objects/overview#conceptual-model).

[View conceptual model in Figma →](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=4488%3A462)

<div class="figma-embed" aria-label="Conceptual model diagram connecting objects, along with their attributes and actions, to the primary job object." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ68bePHXIN5OPWqaFFY9ri%2FConceptual-model%3Fnode-id%3D4488%253A461" allowfullscreen></iframe>
</div>

## Semantic layout

Job attributes and actions can be embedded in related objects, like pipeline or [merge request](/objects/merge-request).

The job object is primarily represented in the UI with the **job page** layout.
This layout is shown below, with details about the meaning and purpose of each element. [Learn more about semantic layouts](/objects/overview#semantic-layouts).

[View semantic layout in Figma →](https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/?node-id=4636%3A208)

<div class="figma-embed" aria-label="A layout of a job with overlays to highlight the actions, attributes, and object relationships within that layout." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FshVF8UZwrQtkNfMDjcrsyH%2FSemantic-layouts%3Fnode-id%3D4636%253A208" allowfullscreen></iframe>
</div>

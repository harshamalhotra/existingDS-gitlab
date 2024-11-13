---
name: Principles
---

Principles act as a reusable standard for teams to measure their work. They replace subjective ideals with a shared understanding of what the result must do for users. Just as guardrails keep you safe and on the road, principles keep teams on the path to achieving their vision. By achieving alignment, principles enable us to scale and build velocity.

There are two kinds of principles:

- The principles that guide the process, which are defined in the [handbook](https://about.gitlab.com/handbook/product/#product-principles).
- The principles that define the output, which are described on this page.

Though we take inspiration from other companies, our principles are defined by looking inward. This perspective ensures they are actionable and effective. Just like the rest of our work, we continually adjust our principles and always strive to make them better. Everyone is welcome to suggest improvements by opening an issue and creating a merge request in our [repository](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)!

## Sophisticated simplicity

GitLab is a platform that supports people in their daily work. We respect the importance of their efforts and avoid unnecessary gimmicks. To that end, we work towards [sophisticated simplicity](https://handbook.gitlab.com/handbook/product/ux/product-designer/#aiming-towards-sophisticated-simplicity) in our product: we make thoughtful choices that streamline complex workflows and functionality. These choices help the user stay focused on what matters most.

There are three principles that help support us in this work.

### Prioritize the platform

Though the platform is made of many tools, everything should function seamlessly together. Design with this mindset to ensure that you are creating a more connected and coherent experience across the product.

| Do                                                                                                                                              | Don't                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Optimize connections between capabilities. | Optimize for an isolated use of tools.  |
| Use patterns consistently across the platform. | Use different patterns based on product area.  |
| Optimize the broader user journey, even when it crosses product groups, or when you're focused on a particular step of that journey. | Optimize for individual interactions or features.  |

<!--
 1. **Bold sub principle(s) title** Explanation, plus optional reference
  - Example(s), plus link towards a reference in real-life
-->

### Support learning

Design to promote the user's learning and proficiency as they interact and explore. Seek to help them minimize mistakes.

| Do                                                                                                                                              | Don't                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Clearly explain how recommendations are generated, especially with [AI features](/usability/ai-human-interaction#be-transparent). | Omit explanations for recommendations to simplify the experience. |
| Communicate the status of processes that happen in the background. | Only communicate about processes that happen in the foreground, as a direct result of the user's actions. |
| Ensure the user has all the information needed to proceed with confidence. | Delegate key information to the documentation to minimize the UI. |

<!--
1. **Bold sub principle(s) title** Explanation, plus optional reference
  - Example(s), plus link towards a reference in real-life
-->

### Focus on outcomes

Empathy for the user starts with a deep understanding of their needs and goals. Design for the broader outcomes that the user seeks to achieve, instead of the isolated actions or discrete features used to complete specific tasks.

| Do                                                                                                                                              | Don't                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Let the user's needs and intended outcomes drive the change. | Let the popularity or impressiveness of a feature or technology drive the change. |
| Prioritize user value. | Prioritize technical feasibility or development speed. |
| Design for current essential needs. | Design to accommodate future, potential needs. |

## References

- [Design systems handbook - Design better](https://www.designbetter.co/design-systems-handbook/expanding-design-system)
- [From purpose to patterns - Alla Kholmatova](https://speakerdeck.com/craftui/from-purpose-to-patterns)
- [What are design principles - principles.design](https://principles.design/#what-are-design-principles)

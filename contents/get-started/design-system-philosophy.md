---
name: How to think about the design system
---

Understanding how to think about and work with the design system is essential to how we design and build at GitLab. This page outlines the philosophy and shared responsibilities that guide how the Pajamas Design System (referred to as Pajamas, or simply the design system)  works in partnership with product teams.

## Using Pajamas

The goal of Pajamas is to help teams create cohesive, high-quality experiences across the GitLab product. The design system gives you a strong starting point, but it’s not meant to define every detail of your work. Effective use of the system means drawing on a shared foundation to move faster and stay consistent while still designing for the unique needs of your users and product area.

- **Start from shared foundations.** Before creating something new, start with the documented components, patterns, and guidance in Pajamas. Look for existing solutions that meet your needs, and combine or adapt them when possible so your work builds on the current, shared language of GitLab’s interface.
- **Design for your context.** Not every problem will be solved by a documented component or pattern. When something new is needed, design for your users first. The design system should guide your approach, not constrain it. Once you have a solution that works well, reflect on whether it could be useful elsewhere.
- **Balance consistency and clarity.** Consistency across GitLab helps users feel oriented, but clarity within each product area is equally important. Use the system to stay aligned where it matters most: layout, spacing, interaction models. Diverge from the system when doing so clearly improves the experience.
- **Share what you learn.** When a need falls outside existing patterns, capture what you learned and share it. Those insights help the system evolve through real usage and make it easier for others to build on your work.

Pajamas is a **platform for building**, not a rigid set of rules. Like any good platform, it provides:

- Reliable foundations that handle common needs so you can focus on unique problems.
- Consistent building blocks that work together seamlessly.
- Extensibility that allows innovation while maintaining coherence.
- Shared standards that enable teams to move faster and collaborate more effectively.

The design system is your starting point, not your ending point. Begin from what exists, adapt when needed, and build new when necessary. As you build, stay mindful of how your work fits alongside existing patterns and how it might inform future improvements to Pajamas.

## Partnership model

For the GitLab platform to achieve customer success and improve quality, Pajamas works in partnership with product teams, with responsibilities distributed across several key areas.

### User-centered design remains with product teams

While the design system provides consistent building blocks, product teams bring their expertise in understanding user needs and designing appropriate solutions. The design system cannot and does not replace deep user research, domain expertise, and contextual problem-solving.

Product teams own:

- Understanding their users' specific needs and workflows.
- Designing solutions that address real user problems.
- Making informed decisions about when to use existing patterns, adapt them, or introduce new solutions.
- Validating that solutions work effectively in their domain.

### UI quality is a shared responsibility

Pajamas delivers quality components, while product teams integrate these to create cohesive user experiences across the platform. Quality emerges from both reliable building blocks and thoughtful composition.

Pajamas provides:

- Accessible, tested, and documented components.
- Clear guidance on proper usage and implementation.
- Consistent visual and interaction patterns.

Product teams ensure:

- Components are used appropriately for their context.
- Custom solutions maintain the same quality standards.
- The overall user experience feels cohesive and intentional.

### Focus on the core

Pajamas intentionally prioritizes high-value, reusable concepts that serve as shared building blocks across the GitLab product. This core layer includes foundational components, patterns, and guidelines that are broadly used across multiple domains and require consistent implementation.

This means not every UI element needs to be in the design system's core. Teams are expected to make thoughtful decisions about one-off solutions, and the system evolves based on proven patterns that emerge from real usage. Elements from the core layer should be the default choice when it meets your needs and act as a reference point when designing new solutions. It is also where stability and consistency take priority over local customization. The Design System team maintains this layer to ensure quality, accessibility, and long-term stability.

### Share emerging patterns through the extended layer

Beyond the core, Pajamas provides space for teams to share reusable components and patterns through the extended layer. These contributions capture solutions ready for production that may be valuable in more than one place but don't necessarily need to scale across the entire product. Teams who create extended contributions own them, maintaining flexibility for domain-specific needs while enabling knowledge transfer across teams.

Build beyond the core when:

- Standard patterns don't address your specific user needs.
- You're exploring new interaction models or workflows.
- Your domain has unique requirements that warrant custom solutions.

When you build new solutions, start with core patterns and understand why they don't fit. Try things out in your part of the product first, then consider contributing to the extended layer to share what you've learned and built. This knowledge transfer helps other teams facing similar challenges while keeping experimentation fast and isolated. Some extended contributions may eventually graduate to the core as they demonstrate value and stability across domains.

## Getting help

If you are unsure how to apply these principles, the design system community is here to support your work:

- Ask questions in our [slack channel (internal)](https://gitlab.slack.com/channels/g_pajamas-design-system).
- Bring us into the conversation in MRs and issues by mentioning `@gitlab-org/foundations/design-system`.
- **Share your work** for feedback and collaboration.
- **Participate in reviews** by contributing to discussions in merge requests and issues.
- **Join design system discussions** when they come up in team syncs or design system channels.
Remember: the design system is most effective when it's a collaborative effort.

## Resources

- [Contributing to Pajamas](/get-started/contributing)
- [Design principles](/get-started/principles)
- [Navigating Pajamas](/get-started/navigating-pajamas)
- [Component lifecycle](/get-started/lifecycle)

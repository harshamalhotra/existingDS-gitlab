---
name: Principles
---

Principles act as a reusable standard for teams to measure their work. They replace subjective ideals with a shared understanding of what the result must do for users. Just as guardrails keep you safe and on the road, principles keep teams on the path to achieving their vision. By achieving alignment, principles enable us to scale and build velocity.

There are two kinds of principles:

- The principles that guide the process, which are defined in the [handbook](https://about.gitlab.com/handbook/product/#product-principles).
- The principles that define the output, which are described on this page.

Though we take inspiration from other companies, our principles are defined by looking inward. This perspective ensures they are actionable and effective. Just like the rest of our work, we continually adjust our principles and always strive to make them better. Everyone is welcome to suggest improvements by opening an issue and creating a merge request in our [repository](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)!

📄 <a href="/files/gitlab-design-principles-quick-reference-guide.pdf" target="_blank" rel="noopener">**Download Design Principles Quick Reference Guide (PDF)**</a> - A condensed version of these principles for easy reference.

## Sophisticated simplicity

GitLab is a product that supports people in their daily work. We respect the importance of their efforts and avoid unnecessary gimmicks. To that end, we work towards [sophisticated simplicity](https://handbook.gitlab.com/handbook/product/ux/product-designer/#aiming-towards-sophisticated-simplicity) in our product: we make thoughtful choices that streamline complex workflows and functionality. These choices help the user stay focused on what matters most.

### Design for natural developer flow

**Enable users to move seamlessly through tasks without context switching.**

When designing any features, ask: Are we maintaining a seamless workflow without context switches?

- Prioritize workflow continuity over feature isolation
- Connect related tasks across different modules (issues > code > review > deploy)
- Maintain context as users move through their work

_Example in practice_: A developer investigating a failed pipeline can click directly from the error message to the exact line of code, see the commit that introduced it, view related issues, and create a fix all through connected interfaces. They never need to copy-paste IDs between systems or lose their place in the investigation.

### Start simple, reveal complexity gradually

**Show only what users need now, with advanced features discoverable when needed.**

When designing any feature, ask: Is the simple version immediately useful with advanced features discoverable?

- Zero-configuration setup for common use cases
- Clear pathways from beginner to advanced usage
- Hide complexity without limiting power users

_Example in practice_: A new user creates their first CI pipeline with a visual editor in a guided way, with recommendations for choices that make sense for their context. As they gain confidence, they discover YAML editing, then parallel jobs, then matrix builds, and eventually complex DAG pipelines, each capabilitiy appearing in the UI only when they start exploring features that would benefit from it.

### Make everything feel like one product

**Use consistent patterns so learning transfers across all features.**

When designing any feature, ask: Does this feel like part of one unified product?

- Unified design system across all features
- Consistent terminology and concepts
- Predictable interaction patterns

_Example in practice_: Whether someone is reviewing code, managing issues, checking deployments, or analyzing metrics, they see the same navigation structure, the same search syntax works everywhere (filtering by `author` works in MRs, issues, and commits), and keyboard shortcut `Shift+t` always goes to your ToDo list.

### Make every interaction feel instant

**Design for speed from the start.**

When designing any feature, ask: Will every interaction feel immediate, even at scale?

- Sub-second response for common actions
- Progressive loading for complex operations
- Perceived performance through optimistic UI updates

_Example in practice_: Clicking between files in a merge request feels instant because adjacent files pre-load in the background. The diff view updates immediately with optimistic rendering while calculations happen asynchronously. Large repositories feel as fast as small ones.

### Show what's happening and why

**Users should always understand system status and how to fix problems.**

When designing any feature, ask: Can users understand what's happening and why?

- Clear system status and progress indicators
- Comprehensive logs and audit trails
- Intuitive debugging interfaces

_Example in practice_: During a complex deployment, developers see a real-time visualization of which stage is running, what's queued, and estimated completion times. If something fails, they get the exact error, the last successful run for comparison, and a "View Full Log" that highlights the failure point with surrounding context automatically expanded.

### Build for teams, not just individuals

**Make sharing, discussing, and collaborating effortless.**

When designing any feature, ask: How does this facilitate collaboration and sharing?

_Example in practice_: When a developer pushes code that affects another team's service, the system automatically suggests those team members as reviewers based on code ownership rules. Comments on the MR notify relevant people, threading keeps discussions organized, and anyone can see the full context of decisions made, even months later.

### Always provide a clear next step

**Never show problems without solutions or data without actions.**

When designing any feature, ask: Is the next step always clear and obvious?

- Smart recommendations based on patterns
- Predictive suggestions that prevent problems
- Clear next steps for every state

_Example in practice_: A failing test doesn't just show "Test failed," it shows the specific assertion that failed, a diff of expected vs actual, a "Re-run Test" button, a link to recent changes that might have caused it, and suggestions like "This test failed in 3 other recent MRs, view pattern."

### Enable customization within guardrails

**Let teams work their way while maintaining platform coherence.**

When designing any feature, ask: Can teams customize this without breaking coherence?

- Flexible configuration with smart defaults
- Clean inheritance and override patterns
- Template-based standardization options

_Example in practice_: Teams can create custom issue templates and workflows that match their process (bug triage, feature requests, retrospectives), but they all inherit the organization's required fields for tracking and compliance. Teams can add stages to CI pipelines but can't remove mandated quality gates.

### Design for scale and compliance always

**Build in governance, security, and audit capabilities from the start.**

When designing any features, ask: Is governance, compliance, and scale built in?

- Role-based access control throughout
- Complete audit trails and reporting
- Multi-tenancy and data isolation

_Example in practice_: Project permissions automatically cascade correctly. Adding someone to a group gives them appropriate access to all projects, with clear visibility of what access they're getting. Audit logs capture not just what changed, but why (linking to the issue that justified the change), and reports can span from single projects to entire organizational hierarchies.

### Make it a joy to use

**Craft delightful experiences that developers will champion.**

When designing any features, ask: Will this be delightful to use daily?

- Keyboard shortcuts for power users
- Dark mode and accessibility features
- Thoughtful micro-interactions and polish

_Example in practice_: Completing a code review or merging code reveals a satisfying animation of progress toward accomplishing the user's todos. Markdown shortcuts appear as gentle hints while typing. Even routine tasks like updating dependencies feel polished with clear visual feedback and smart defaults that usually guess right.

## References

- [Design systems handbook - Design better](https://www.designbetter.co/design-systems-handbook/expanding-design-system)
- [From purpose to patterns - Alla Kholmatova](https://speakerdeck.com/craftui/from-purpose-to-patterns)
- [What are design principles - principles.design](https://principles.design/#what-are-design-principles)

---
name: AI-human interaction
summary: Design AI-powered features that balance user needs, transparency, and ethical considerations.
extendedNotice:
  owners: group::ai framework
  contacts:
    - text: '#ux-ai-integration'
      url: 'https://gitlab.slack.com/channels/ux-ai-integration'
related:
  - /patterns/contextual-help
  - /patterns/destructive-actions
  - /patterns/saving-and-feedback
  - /patterns/duo-slash-commands
---

As AI continues to advance, it brings both exciting opportunities and new challenges for product design. Although designing for AI still requires adhering to human-centered design principles, additional considerations such as ethics, privacy, trust, and transparency must be taken into account.

This page is divided into two main sections: [Guidelines](#guidelines) and [Framework](#framework) for AI.

## Guidelines

### Start with the user, not the technology

Design with a deep understanding of the user's needs, goals, and pain points. Whether building AI features or platform capabilities that enable users to create their own AI solutions, ensure you are solving real problems. If you aren't aligned with a user's need, you are building a system that does not solve a problem. Instead of asking "Can we use AI to?", ask yourself "How might we help users?". Consider not just what the AI can do, but where and how users encounter AI assistance in their existing tasks. This includes direct conversation with agents, automated flows triggered by their actions, or contextual suggestions within their existing tasks.

Design AI to be collaborative, not autonomous. AI should suggest and assist while users remain in control. Respect human judgment by ensuring AI acknowledges uncertainty and defers to user expertise when appropriate. Consider not just what the AI can do, but where and how users encounter AI assistance in their existing tasks. This includes direct conversation with agents, automated flows triggered by their actions, or contextual suggestions within their existing tasks.

### Understand when to use AI assistance

Understand if a task is a good fit for AI assistance or automation, and what level of automation is appropriate. For guidance on when to use conversational agents versus automated flows, see [Agents and Flows](/patterns/duo-agents-and-flows).

Build trust gradually. Start with small helpful actions and expand capabilities as users gain confidence with the system. Use non-threatening visual language that makes AI agents and flows feel like supportive teammates rather than autonomous systems taking control. Consider if the problem could be addressed with pre-defined rules (_if this, then that_) before adding AI.

Understand the strengths and weaknesses of AI. It can be helpful for processing large amounts of information, pattern finding, prediction, classification, and recommendations. Given good training data, AI can be more accurate and faster than a human at completing tasks. It is less helpful for tasks requiring empathy, emotional intelligence, morality, common sense, predictability, contextual understanding, intuition, and creativity.

### Understand risk

To understand the risk of an AI-powered feature, assess the _probability_ of error and _impact_ of that error, where _impact_ is a comparison of potential _cost_ and _benefits_. Costs can be financial, emotional, reputational, opportunity, time, compliance, or others.

In GitLab, an example of a _low risk_ situation is an agent providing explanations about GitLab features or helping debug configuration issues. The potential cost is low, as the user typically reviews and validates information before acting on it.

An example of a _medium risk_ situation is a flow that automatically assigns labels or milestones to work items based on content analysis. If incorrect, the cost is primarily time spent correcting the assignments.

An example of a _high risk_ situation is a flow that automatically creates merge requests with security fixes. While this helps users resolve vulnerabilities faster, incorrect changes could introduce new security issues or break functionality. The potential cost increases in high-risk applications, such as critical infrastructure.

To mitigate high risk situations:

- [Set the right expectations](#set-the-right-expectations).
- Design for potential negative impact. Consider how users can understand and manage the consequences of AI actions. Be transparent but unobtrusive. Users should always understand what AI is doing, but it shouldn't demand constant attention. Implement concrete safeguards such as requiring opt-in for high-risk actions and showing users a review step before execution. For more information, see [destructive actions](/patterns/destructive-actions).

### Communicate confidence

Users rely on the system to make decisions, but they should not trust the system entirely. Communicating confidence allows users to know how much scrutiny they should put recommendations under.

### Be transparent

Establish trust by ensuring the user always knows when they are interacting with AI, and when content or recommendations come from AI. Such disclosures are often required by third party AI services and may soon be required in the European Union ([EU AI Act](https://www.europarl.europa.eu/news/en/headlines/society/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence)).

The experience should feel unified across all agent types and automated flows.

#### Name

The "GitLab Duo" name is an extension of our brand. It acts as an umbrella for all AI capabilities across GitLab, communicates the suite of AI capabilities, and helps identify specific AI-powered features. Learn more in the [GitLab Duo Usage Guide](https://docs.google.com/presentation/d/1G849KWal8XDAEdusoR5YN8ZrZlvcgFVnqr4Nsjdy9Rc/edit#slide=id.g249996547b6_0_20).

Include "GitLab Duo" for each AI-powered feature, in their onboarding or UI text, either _before_ or _after_ the user interaction. However, to ensure concise [call-to-action labels (CTA)](/patterns/duo-calls-to-action#label) and maintain clear, user-friendly interfaces, avoid using the words "GitLab Duo" or "AI" directly in the CTA text.

For interactions within GitLab Duo Agent Platform, clearly identify the agent or flow by name so users understand what system they're interacting with. See [Agents and Flows](/patterns/duo-agents-and-flows) for detailed guidance on naming conventions and identification patterns.

For variations of the GitLab Duo name, such as features or add-ons, see the [word list](https://docs.gitlab.com/development/documentation/styleguide/word_list/).

<figure-img alt="'GitLab Duo' is used in supplemental UI copy." label="'GitLab Duo' is used in supplemental UI copy." src="/img/do-feature-maturity.svg"></figure-img>

#### Calls to action

To design buttons and links that trigger AI features, see the [CTA for GitLab Duo guidelines](/patterns/duo-calls-to-action).

For flows triggered through @ mentions and assignee actions, see [Agents and Flows](/patterns/duo-agents-and-flows).

#### Disclaimer

- You must include a disclaimer to inform the user that the feature is powered by AI. This is a legal requirement in some regions and by certain third-party AI services.
- Flag AI-generated content with the disclaimer `<Verb> by AI`. For example: “Generated by AI” or “Summarized by AI”.
- Clearly identify agents and flows as AI-powered to ensure users understand they are interacting with artificial intelligence, whether through GitLab agents, external agents, or custom user-built agents and flows.
- Close to that disclaimer, show a message to encourage the user to verify the AI-generated content. If space allows, show the following directly in the UI or in a [popover](/components/popover): “Content generated by AI should be seen as a starting point and verified before use. It may be incorrect, inappropriate, or diverge from your organization’s standards.” Or, if space is a concern, just “Verify before use.”
- Show the disclaimer only once per context, and preferably _under_ the AI-generated content, in a way that is clear that it applies to all content within that context.

#### Illustration

The [`tanuki-ai-md`](/product-foundations/illustration-directory?q=illustrations/tanuki-ai-md.svg) and [`tanuki-ai-sm`](/product-foundations/illustration-directory?q=illustrations/tanuki-ai-sm.svg) illustrations serve the purpose of promoting and associating AI related features within the UI.

For agent and flow avatars, see [Agents and Flows](/patterns/duo-agents-and-flows).

### Set the right expectations

The interface should clearly communicate AI capabilities, limitations, and the scope of its decision-making authority. Users need to understand a system's capabilities and limits to understand how much trust to put into the system. To help the user build a mental model of the system:

- Clearly highlight if a feature is an [experiment or beta](/patterns/feature-management#highlighting-feature-versions).
- Follow the [disclaimer guidelines](#disclaimer).
- Use clear, simple language to explain what the system is doing and how it arrived at its recommendations.
- Provide natural language interaction options when appropriate and allow users to interact with AI conversationally when they prefer this method of communication.
- Clearly distinguish between agents and flows and help users understand when they're engaging with conversational agents for iterative problem-solving versus automated flows that execute specific tasks.

### Give the user control

Customers should retain control over their deployment processes and governance frameworks. There should be an easy way to undo system actions. Do not collect user data without asking the user's permission. Also, clearly state in the UI whether there are any privacy considerations, such as whether or not inputs that contain personal data will go to third-parties and whether third-parties will use inputted personal data in unexpected ways.

GitLab's AI features are designed around collaborative decision-making, where AI suggests and assists while users maintain final authority over their work. AI acknowledges its limitations and defers to user expertise when appropriate. Users can interact conversationally with AI when they prefer natural language, and they have full control over their automated processes, such as viewing, pausing, canceling, or modifying running flows as needed.

Users control their AI experience by selecting which agents to use and when, choosing the most appropriate assistance for their specific needs. They also maintain complete control over data privacy, determining what information agents can access while setting clear security boundaries. Automation levels are customizable, allowing users to choose anything from minimal assistance to comprehensive automated workflows based on their preferences and working style.

### Fail gracefully

When your system is not certain of the user's intent or has low confidence, make sure there is a path forward that does not rely on AI. Explain why the system was not able to provide a recommendation. Errors are also opportunities to learn more about your user's mental models and improve the system's ability to make recommendations. Consider designing a feedback mechanism that presents as a cue for adjustment rather than an error state.

When agents cannot understand requests or flows encounter errors, provide clear explanations and alternative paths forward. Agent conversations should gracefully handle misunderstandings, while flows should offer users the ability to retry, manually intervene, or fall back to manual processes.

### Encourage feedback

Design mechanisms to collect implicit and explicit feedback to improve the system. Support feedback across different DAP interactions. This includes conversational agent interfaces, flow completion states, and contextual triggers like @ mentions and assignments. Use collected feedback to continuously refine system performance while keeping feedback collection unobtrusive to avoid disrupting workflows.

### Keep UI text consistent

GitLab AI features primarily use third-person voice following GitLab standards. For example, "Use GitLab Duo to find vulnerabilities in your application," "Ask Amazon Q to upgrade Java," or "Troubleshoot your pipeline."

**Exception for conversational agents:** When users directly interact with any agent (GitLab Duo Chat, Amazon Q, or custom agents), the agent's responses use first person to maintain a natural conversational experience:

- "I'm working on your request."
- "I could not find an answer to your question."
- "I am GitLab Duo Chat. How can I help you today?"

UI elements that describe or invoke these agents continue to use third person. This applies consistently across all agent types—GitLab agents, external agents, and custom user-built agents.

## Framework

To help you put the [guidelines](#guidelines) into practice, the framework materializes them into standard patterns that address the most common UX challenges.

### Dimensions

These dimensions can assist you in choosing the most appropriate pattern for the problem you are solving.

- **Interaction Type**: How do users engage with AI assistance?
  - Conversational: Direct chat-based interactions with agents for iterative problem-solving
  - Contextual triggers: AI invoked through @ mentions, assignments, or contextual buttons
  - Automated flows: Multi-step processes that execute with minimal user intervention
- **Agent Source**: What type of AI system is providing assistance?
  - GitLab agents: Built-in GitLab Duo agents with platform integration
  - External agents: Third-party agents like Amazon Q integrated into GitLab
  - Custom agents: User-built or organization-specific agents
- **Mode**: What's the emphasis and persistence of the AI-human interaction relative to the main context?
  - Focused: AI is the main context, with dedicated interface (e.g., chat)
  - Supportive: AI complements the main context within existing workflows
  - Integrated: AI is blended into specific workflow moments for discrete tasks
- **Interactivity**: How does the system surface AI to engage with the user?
  - Proactive: AI suggests actions or provides information automatically
  - Reactive: AI responds to explicit user requests or triggers

### Patterns

Documented patterns are in development. For specific agent and flow patterns, see [Agents and Flows](/patterns/duo-agents-and-flows).

## References

- [Conversational Experience Design, SAP](https://experience.sap.com/conversational-ux/)
- [Designing Intelligent Systems, Fiori for Web Design Guidelines, SAP](https://experience.sap.com/fiori-design-web/designing-intelligent-systems/)
- [Human-AI eXperience (HAX) Toolkit, Microsoft](https://www.microsoft.com/en-us/haxtoolkit/)
- [People + AI Guidebook, Google](https://pair.withgoogle.com/guidebook)
- [Responsible bots: 10 guidelines for developers of conversational AI, Microsoft](https://www.microsoft.com/en-us/research/uploads/prod/2018/11/Bot_Guidelines_Nov_2018.pdf)

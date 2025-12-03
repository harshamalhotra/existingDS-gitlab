---
name: Agents and Flows
summary: Interface patterns for GitLab's specialized AI assistance - Agents for domain-specific conversational help, and Flows for automated, repeatable processes.
extendedNotice:
  owners: group::workflow catalog
  contacts:
    - text: "#ux-ai-integration"
      url: "https://gitlab.slack.com/channels/ux-ai-integration"
related:
  - /patterns/ai-human-interaction
  - /patterns/duo-calls-to-action
  - /patterns/duo-slash-commands
---

These patterns define how to design interfaces for GitLab's specialized AI assistance. Agents for domain-specific conversational help, and flows for automated, repeatable processes.

Duo Agent Platform is in development. Design guidance on this page is subject to change and suggestions for improvement are encouraged.

## Agents

Agents provide specialized AI assistance through conversational interfaces within Duo Chat. Agents are domain-focused AI specialists that offer more predictable responses than general Duo, while maintaining conversational flexibility.

### When to use agents

Use the agents when designing for:

- Domain-specific AI assistance that requires specialized knowledge
- Tasks that vary in complexity, but share common patterns within a domain
- Workflows where users benefit from expert guidance through conversation and interaction
- Features where predictable, efficient responses are preferred over general flexibility

### When not to use agents

Don't use the agents when designing for:

- Fully automated processes that don't require user conversation (use Flows pattern)
- Simple, single-response interactions that don't benefit from specialization
- When Duo Agentic Chat already works well for the user goal

### Agent behavior

#### Chat-exclusive interaction model

Agents are currently only accessible through the Duo Chat interface due to current technical constraints, though future iterations may expand interaction models to other aspects of the platform. When designing agent experiences, prioritize conversational patterns that minimize the number of decisions users need to make by predicting their needs and delegating decisions to the AI where it performs well.
Design agent experiences around multi-turn dialogues that allow users to refine their requests and build context over time.

#### Agent selection and identification

Currently, users must explicitly select an agent to begin specialized assistance, due to technical constraints. However, the ideal experience would allow agents to volunteer when they recognize conversations within their domain expertise.

- Current state: Design clear agent selection experiences that communicate the agent's domain expertise, capabilities, and limitations.
- Future ideal: Design for proactive agent suggestions where specialized agents can volunteer to join conversations when they detect relevant topics, reducing cognitive load on users while maintaining user control over the interaction.

### Agent anatomy

#### Agent selector interface

- Agent cards: Display agent name, handle (`@agent_name`), avatar and capability description
- Search functionality: Enable filtering agents by name or capability

#### Agent identification in chat

- Agent avatar: Distinct visual representation for each agent type
- Agent name and handle: Consistent labeling (e.g., "Security Agent @duo-security-agent")

### Agent content guidelines

#### Naming and identification

**Foundational agents (GitLab-built):**

- Prefix convention: Use duo- prefix for foundational agent account names
- Handle format: @duo-[function]-agent (e.g., @duo-developer-agent, @duo-security-agent)
- Display names: Human-readable names (e.g., "Developer Agent", "Security Agent")

**Custom agents (user/team-created):**

- Prefix convention: Use ai- prefix for custom agent account names
- Handle format: @ai-[purpose]-agent-[namespace] (e.g., @ai-onboarding-buddy-agent-acme)
- Flexible naming: Team-specific display names while maintaining consistent handle structure

This naming system differentiates foundational GitLab entities, custom team entities, and automated flows, helping users understand the source and reliability of responses.

#### Conversation guidance

- Specialized prompts: Empty-state placeholders tailored to agent capabilities
- Example interactions: Show typical use cases for the agent

### Agent appearance

#### Visual differentiation

- Specialized avatars: Unique visual identity for different agent types

## Flows

Flows enable automated, repeatable processes that execute predetermined sequences with minimal user interaction. Flows integrate directly into GitLab platform workflows through specific interaction points.

### When to use flows

Use flows when designing for:

- High-volume, repeatable processes that should execute consistently every time
- Workflows requiring compliance, audit trails, or regulatory adherence
- Complex sequences that orchestrate multiple tools, APIs, and data sources
- Tasks where consistency and accuracy are prioritized over speed
- Processes that combine deterministic steps with strategic AI assistance

Note: While flows optimize for consistency and cost efficiency, they may take longer to complete than agent-based interactions due to their comprehensive, multi-step nature.

### When not to use flows

Don't use flows when designing for:

- Exploratory tasks requiring conversational refinement (use Agents or Duo chat)
- Processes where the user needs to guide and direct the AI through each step
- Simple, single-step actions that don't require orchestration
- Workflows where variability and human judgment are more important than consistency

Note: The key distinction is interaction control, agents require user guidance throughout the process, while flows operate autonomously with minimal user direction after initiation.

### Flow behavior

#### Platform-native integration

Flows integrate directly into GitLab interfaces through specific trigger mechanisms:

- @ Mention: @[flow_name]` in issues, merge requests
- Work item assignment: Assigning flows to issues, epics, or tasks for automated processing
- Contextual triggers: Platform events or conditions that automatically initiate relevant flows

In the future, flows will be expanded into chat and be usable via a slash command.

#### Non-conversational execution

Flows operate without chat interfaces. Design around:

- Immediate execution: Flows begin processing as soon as triggered
- Predetermined sequences: Fixed steps with minimal runtime variation
- Automated completion: Flows run to completion without ongoing back and forth user interaction, though some flows require approval from users between actions

### Flow anatomy

#### Flow initiation interfaces

**@ Mention interfaces:**

- Flow selection dropdown: List of available flows relevant to the work item type
- Description: Clear description of what the flow is to achieve

**Work item assignment:**

- Flow selection dropdown: List of available flows relevant to the work item type
- Assignment confirmation: Clear indication that a flow is being assigned

**Contextual triggers:**

- Smart suggestions: Proactive flow recommendations based on current context
- Action buttons: Direct flow launch buttons in relevant platform locations

#### Flow execution

**Progress indication:**

- Step visualization: Clear representation of current progress through flow sequence visualized through the sessions panel or work item comments
- Status messaging: Real-time updates about current actions being performed through the sessions panel or work item comments

It is currently not possible to cancel or stop flows, but this will be a capability added in the near future.

**Results presentation:**

- Completion summaries: Clear overview of all actions taken and outcomes achieved visualized through the sessions panel or work item comments
- Generated artifacts: Links to any files, issues, or other items created by the flow
- Next steps: Recommended follow-up actions or related flows to consider
- Audit trail: Detailed log of all actions taken by the flow through the sessions panel

### Flow content guidelines

#### Flow naming and description

- Suffix requirement: All flow accounts use -flow suffix
- Handle format: @[process-name]-flow-[namespace] (e.g., @issue-triage-flow-acme)
- Namespace inclusion: Include team/group namespace for clarity and organization

**Display naming:**

- Action-oriented names: "Security Triage Flow", "Release Preparation Flow"
- Process descriptions: Clear explanation of what the flow accomplishes

## Shared considerations

### Accessibility

#### Discovery and identification

- Clear labeling: Distinguish agents from flows with descriptive names and purposes
- Contextual help: Provide guidance on when to use agents vs flows

## External agents

External agents extend GitLab's AI capabilities through external services and integrations. Unlike GitLab's native agents and flows, external agents have varied interaction models and implementation patterns that depend on their source and capabilities.

### External agents

The design guidance above doesn't apply to external agents. External agents are a different feature enabling GitLab to provide users with integrations to external services.
They vary significantly based on:

- Provider specifications: Each external service defines its own interaction model
- Integration capabilities: Different levels of GitLab platform integration
- Authentication requirements: Varied auth flows and permission models
- Interface patterns: May use chat, platform-native, or hybrid interaction models

#### Design considerations

When designing for external agent integration:

- Provider identification: Clearly indicate the external service and its capabilities
- Integration boundaries: Communicate what data and features are available through the integration
- Security transparency: Clearly communicate data sharing and privacy implications

## Related patterns

- [AI-human interaction](/patterns/ai-human-interaction) - For general AI interaction guidelines
- [Duo calls to action](/patterns/duo-calls-to-action) - For AI feature triggers
- [Duo slash commands](/patterns/duo-slash-commands) - For command interfaces

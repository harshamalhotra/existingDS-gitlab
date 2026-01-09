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
*Design agent experiences around multi-turn dialogues that allow users to refine their requests and build context over time.*

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

Note: The key distinction is interaction control, *agents require user guidance throughout the process, while flows operate autonomously with minimal user direction after initiation*.

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

### Flow state communication

**Agents** operate exclusively through [Duo Chat](/patterns/duo-chat) and don't have separate working states outside the chat interface. Their interactions are conversational and contained within the chat experience.

**Flows** are triggered to execute automated, multi-step processes. These flows have distinct working states we must communicate across multiple UI locations to keep users informed of progress, request input when needed, and provide completion status.

Display flow states across four primary UI locations

1. **Comments and activity timeline** - When flows are triggered from a work item or merge request
2. **Session panel** - Detailed progress and activity log for all flows
3. **Sessions indicator** - Persistent status display on work items and merge requests showing the current state of flow sessions
4. **Notifications** - To-do items, toasts and other alerts to bring user attention to state changes

#### On flow creation

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Makes flow activity visible to all collaborators on the item, provides a persistent record beyond the sessions UI, establishes an initial comment that will be updated as flow progresses

UI Action: Post an initial comment indicating flow is working (will be updated with final output when flow completes), display new activity timeline item

Content:

- Initial comment: Informs the user that the flow has begun work, link to session panel
- Activity timeline: "[Flow name] started Session [session ID] triggered by [user]", timestamp (e.g., "Just now", "2 minutes ago")

**Session panel**

Goal: Provide real-time progress and activity log

UI Action: Display session start and initialize activity stream

Content:

- Flow name
- Session ID
- Timestamp
- Status: "In Progress"
- Link back to work item or MR (if applicable)
- Real-time activity stream (initially empty)

**Sessions indicator**

Goal: Provide at-a-glance status of flow activity directly on the work item or MR

UI Action: Display sessions indicator with initial state

Content:

- "Session #[session number] [session name] created"
- Status icon (neutral/gray)
- Tooltip: "Triggered by @username"
- Link to session panel on click

**Notifications**

Goal: Confirm that flow has started, regardless of where user is in the app

UI Action: Display a toast

Content:

- "Started: [Flow name]"
- Session ID and link to session panel

#### On flow execution

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Provides a clean, consolidated view of flow progress, prevents work items and MRs from becoming cluttered with updates

UI Action: Update the initial comment when flow completes first significant step

Content:

- Progress update or milestone reached
- Any new work items or MRs created

**Important:** Update the initial comment; don't replace it

**Session panel**

Goal: Provide detailed, real-time progress of flow execution

UI Action: Display real-time activity log

Content:

- Timestamps for each action
- Status: "In Progress"
- Detailed step-by-step progress
- Tool invocations and responses
- Reasoning and decision-making process
- Live updates as actions are taken

**Sessions indicator**

Goal: Show real-time flow execution status on the work item or MR

UI Action: Update status indicator to show running state

Content:

- "Session #[session number] [session name] running"
- Status icon (blue/in-progress indicator)
- Link to session panel on click

**Notifications**

*Skip notifications during normal execution to avoid excessive noise*

#### Flow needs input from user

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Signals a clear transition from "flow working" to "human action required", ensures critical decision points don't get lost

UI Action: Update the initial comment with input request

Content:

- Clearly state what input is needed and why
- Provide links to relevant context (e.g., plan, affected files)
- @mention the user whose input is required

**Session panel**

Goal: Request user input with clear action options

UI Action: Display input request with interactive controls

Content:

- Status: "Awaiting User Input"
- Detailed explanation of what decision is needed
- Context for the decision (link to relevant plan or data)
- Action buttons: "Approve", "Deny", "Modify" (or similar based on flow needs)

**Sessions indicator**

Goal: Alert users that flow requires their input directly from the work item or MR

UI Action: Update status indicator to show input needed state with action button

Content:

- "Session #[session number] [session name] awaiting your input"
- Status icon (warning/orange indicator)
- "Review" button - brings user to where action is needed
- Link to session panel on click

**Notifications**

Goal: Immediately alert user that their action is required for flow to continue

UI Action: Create a to-do item (high priority)

Content:

- "Action required: [Flow name]"
- "Needs input" badge
- First line of what's being requested
- Link to session panel or work item

#### Flow is paused

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Document that flow execution has been paused

UI Action: Add activity log item

Content:

- "[Flow name] Session [session ID] paused by [user]"
- Timestamp

**Session panel**

Goal: Show paused state and preserve execution context

UI Action: Display "Paused" status with details

Content:

- Status indicator: "Paused"
- Reason for pause (user-initiated, awaiting input, system issue)
- Last action completed before pause
- Duration paused (live counter)
- "Resume" button or action

**Sessions indicator**

Goal: Show paused state on the work item or MR

UI Action: Update status indicator to show paused/stopped state

Content:

- "Session #[session number] [session name] stopped"
- Status icon (paused/gray indicator)
- Link to session panel on click

**Notifications**

Goal: Inform user of paused state (low priority unless paused for input)

UI Action: Update existing to-do if present

Content:

- "Paused: [Flow name]"
- Pause reason
- Duration paused

**Note:** If paused due to needing input, use "Flow needs input" notification pattern instead

#### Flow is restarted

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Confirm that flow execution has resumed

UI Action: Add activity log item

Content:

- "[Flow name] Session [session ID] resumed by [user]"
- Timestamp

**Session panel**

Goal: Show continuation of work with clear restart indicator

UI Action: Add restart marker to activity timeline and resume activity stream

Content:

- Restart timestamp with visual marker/divider
- Status: "In Progress (Resumed)"
- Reference to pause duration (e.g., "Paused for 15 minutes")
- Activity stream continues below marker

**Sessions indicator**

Goal: Show resumed state on the work item or MR

UI Action: Update status indicator to show running state

Content:

- "Session #[session number] [session name] running"
- Status icon (blue/in-progress indicator)
- Link to session panel on click

**Notifications**

*Don't send a notification when the user resumes a flow*

##### Flow is complete

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Provide a clear summary of what the flow accomplished

UI Action: Update the initial comment with final output

Content:

- High-level summary of results
- Links to anything newly created (issues, MRs, files)
- @mention user for completion confirmation

**Important:** This is the final update to the initial comment

**Session panel**

Goal: Provide complete record of successful execution

UI Action: Mark session as complete with final summary

Content:

- Status indicator: "Completed Successfully"
- Complete chronological activity log
- Summary of final outputs and artifacts
- Performance metrics (execution time, steps completed)
- Links to all created items (issues, MRs, files, commits)

**Sessions indicator**

Goal: Show successful completion on the work item or MR

UI Action: Update status indicator to show completed state

Content:

- "Session #[session number] [session name] complete"
- Status icon (green checkmark/success indicator)
- Link to session panel on click

**Notifications**

Goal: Alert user that flow has finished and results are ready

UI Action: Create to-do item (dismissable after viewing)

Content:

- "Completed: [Flow name]"
- Success indicator/checkmark
- Brief summary of key results
- Link to session panel or work item
- Auto-dismiss option after acknowledgment

#### Flow failed

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Document that flow execution failed

UI Action: Add activity log item

Content:

- "[Flow name] Session [session ID] failed"
- Timestamp
- List of completed actions before failure (e.g., "Created: Issue #123, Issue #124, Issue #125")
- Failed action with error details (e.g., "Failed to create: Issue for [task name] - [error reason]")

**Session panel**

Goal: Document failure and preserve diagnostic information for troubleshooting

UI Action: Mark session as failed with error details

Content:

- Status indicator: "Failed"
- Error message or failure reason
- Timestamp of failure
- Work completed before failure
- Complete activity log up to failure point
- Troubleshooting suggestions (if available)
- "Retry" or "Start new session" button

**Sessions indicator**

Goal: Show failure state and provide quick access to error details

UI Action: Update status indicator to show failed state with action button

Content:

- "Session #[session number] [session name] failed"
- Status icon (red error indicator)
- "Review" button - brings user to session panel with error details
- Link to session panel on click

**Notifications**

Goal: Alert user to failure and provide path to resolution

UI Action: Create to-do item (high priority, urgent styling)

Content:

- "Failed: [Flow name]"
- Failure indicator (error icon/badge)
- Brief error description
- Link to session panel for full details
- "Retry" or "Get help" action

#### Flow is cancelled by user

**Comments and activity timeline** *(Only appears when flow is triggered from a work item or MR)*

Goal: Provide clear record of user-initiated cancellation

UI Action: Add activity log item

Content:

- "[Flow name] Session [session ID] cancelled by [user]"
- Timestamp

**Session panel**

Goal: Preserve record of work completed before cancellation

UI Action: Mark session as cancelled with final snapshot

Content:

- Status indicator: "Cancelled"
- Who cancelled (username)
- Timestamp of cancellation
- Complete activity log up to cancellation
- Partial outputs/results (if any)

**Note:** No resume option available - user must start new session

**Sessions indicator**

Goal: Show cancellation state on the work item or MR

UI Action: Update status indicator to show cancelled state

Content:

- "Session #[session number] [session name] canceled"
- Status icon (neutral/gray indicator with cancel symbol)
- Link to session panel on click

**Note:** The sessions indicator persists on the work item or MR, continuously updating to reflect the current state of any flow session that has been triggered.

**Notifications**

Goal: Confirm cancellation to user

UI Action: Update existing to-do (dismissable)

Content:

- "Cancelled: [Flow name]"
- Cancelled by [user]
- Partial progress completed (if applicable)
- "Start new session" action
- Link to session panel for review of partial work

#### How users trigger flows

Users can start flows through multiple entry points:

- **@Mention**: Type `@[flow-name]` in work item or MR comments
- **Assignment**: Assign a flow to a work item or epic
- **Buttons**: Direct action buttons in relevant UI locations
- **Contextual triggers**: Automated triggers based on platform events (future)
- **Slash commands**: In Duo Chat (future capability)

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
- [Duo Chat](/patterns/duo-chat) - Chat interface patterns (where agents operate)

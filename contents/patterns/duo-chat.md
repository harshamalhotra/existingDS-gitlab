---
name: GitLab Duo Chat Interface
summary: The chat interface pattern enables conversational AI experiences within GitLab workflows, providing a familiar messaging interface for multi-turn interactions with AI agents.
extendedNotice:
  owners: group::duo chat
  contacts:
    - text: '#ux-ai-integration'
      url: 'https://gitlab.slack.com/channels/ux-ai-integration'
related:
  - /patterns/ai-human-interaction
  - /patterns/duo-calls-to-action
  - /patterns/duo-feedback
  - /patterns/duo-slash-commands
figma: https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=43494-1
---

## Overview

The chat interface pattern enables conversational AI experiences within GitLab workflows, providing a familiar messaging interface for multi-turn interactions with AI agents.

## When to use

Use the chat interface pattern when:

- Users need to have multi-turn conversations with AI agents
- The interaction requires context from previous exchanges
- Users benefit from seeing conversation history
- Different AI agents with specialized capabilities are available
- The task is complex enough to warrant iterative refinement through dialogue

## When not to use

Don't use the chat interface pattern when:

- A single input/output interaction is sufficient
- Traditional form controls would be more efficient
- The AI response doesn't require conversational context
- Users need to perform bulk operations or data manipulation

## Behavior

### Conversation flow

The chat interface follows a standard messaging pattern where users and AI agents exchange messages in chronological order. Each message is clearly attributed to its sender with the user being on the right and the agent being on the left.

### Agent selection

Users can choose from different specialized AI agents depending on their needs. The agent selection happens at the start of a new conversation and cannot be switched during an ongoing chat.

### Message persistence

Conversations are saved and can be resumed for a set period of time, allowing users to return to previous discussions and build upon earlier exchanges.

### Context awareness

The chat interface maintains memory of the entire conversation thread, enabling it to reference previous messages and build upon established information throughout the chat session.

## Anatomy

### Chat container

The chat interface consists of a contained panel with distinct sections for different functionality:

- **Header**: Contains thread identification, active agent information, and primary actions such as minimize and maximize.
- **Message area**: Scrollable region displaying conversation.
- **Input area**: Text input field with send controls and additional options, such as the ability to change models and toggle to classic chat.

### Message structure

Individual messages follow consistent patterns based on sender:

- **User messages**: Right-aligned with colored styling
- **AI messages**: Left-aligned with agent attribution and neutral styling
- **System messages**: Center-aligned for status updates and notifications

### Interactive elements

- **Message actions**: Hover-revealed controls for copying, providing feedback and other actions to take on a specific message.
- **Agent switcher**: Modal overlay for selecting different AI agents, which in turn starts a new chat.
- **Model selector**: Dropdown for choosing different AI models, which when selected starts a new chat.
- **Input controls**: Send button

## Content

### Message content types

The chat interface supports various content formats:

- **Plain text**: Standard conversational responses.
- **Code blocks**: Syntax-highlighted code with copy functionality.
- **Structured data**: Tables, lists, and formatted information.
- **Action buttons**: Interactive elements for quick responses or next steps.
- **Session widgets**: Details around a session that has started from chat.

### Agent identification

AI agents are clearly identified with:

- **Agent name**: Human-readable name (e.g., "Duo Developer Agent")
- **Handle**: Unique identifier (e.g., "@duo_developer")
- **Avatar**: Visual representation of the agent
- **Capabilities description**: Brief explanation of the agent's specialization

### Placeholder text

Input areas use contextual placeholder text like "Let's work through this together..." to encourage natural conversation.

## Accessibility

### Keyboard navigation

- **Enter key**: Sends message (Shift+Enter for line breaks)
- **Escape key**: Closes modal overlays and dropdowns

### Screen reader support

- **ARIA labels**: All interactive elements have descriptive labels
- **Live regions**: New messages announce to screen readers
- **Semantic markup**: Proper heading hierarchy and conversational structure
- **Message attribution**: Clear identification of message senders

## Resources

- [Figma: SSOT Chat Panel](https://www.figma.com/design/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=43494-1)

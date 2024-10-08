---
name: Slash commands in GitLab Duo Chat
summary: A method for communicating with and discovering GitLab Duo Chat functionality.
related:
  - /usability/ai-human-interaction
---

## Overview

Slash commands provide a way for the user to efficiently communicate their intent to GitLab Duo Chat. They also allow the user to discover the functionality that GitLab Duo Chat offers. Slash commands are prefixed with `/` and followed by a specific keyword from a predefined list.

## Add slash commands

Be deliberate before you add new slash commands. The list of available commands should be curated to highlight the most valuable interactions.

To avoid unnecessary commands, assess these questions before you implement a new slash command:

- Does the proposed slash command represent a frequently repeated action?
  - What evidence supports this?
- What benefit does the proposed command provide to the user?
- What alternative solutions have you explored?
- Can the action be incorporated into the [existing slash commands](https://gitlab.com/groups/gitlab-org/-/epics/13947#slash-commands-available-in-duo-chat)?

When you plan to add a slash command, inform the [Duo Chat group](https://handbook.gitlab.com/handbook/product/categories/#duo-chat-group) so they can help you answer these questions.

[UX research](https://gitlab.com/gitlab-org/ux-research/-/issues/3098) is ongoing to better understand user needs for slash commands.

## Naming convention and syntax

Slash commands should not be tied to specific features. Try to start slash commands with a verb that can apply to multiple contexts.

- Use the same command for different use cases to keep the list small and learnable, instead of a command for a specific feature.
  - **Do**: `/troubleshoot <URL>` Suggest a fix to a vulnerability, code, or pipeline.
  - **Don't**: `/troubleshoot_pipeline <URL>` Suggest a fix for a failing pipeline.
- When a command is more than one word, use an underscore to denote spaces. For example, `/new_conversation`.
- Some commands accept optional arguments, or additional information such as a link, reference, or free text. The syntax of the commands follows this structure: `/<action verb> <optional reference> <optional instructions>`. For example, `/summarize #14023 in 5 bullet points`.

## Menu layout

<figure-img alt="Example of the slash command menu" label="Example of the slash command menu" src="/img/slash-command-arguments.svg"></figure-img>

The slash command menu displays the command keyword, optional argument formats, and a brief explanation of the command's application.

## Behavior

- The slash command menu opens by typing `/` in the Duo Chat text input.
- The menu opens above the text input.
- The menu filters as the user types in the input.
- To select a menu item with the keyboard, the user can press <kbd>return</kbd> when the item is focused.
- After a menu item is selected:
  - If the command accepts arguments, it fills in the text input.
  - If the command does not accept arguments, it is sent to GitLab Duo Chat.

### Commands are context-aware

- By default, commands should apply to the page the user currently has open, unless specified otherwise by additional arguments. Commands should always work without arguments, as they refer to the current context. Do not require the user to input additional information, as it increases mental load to learn the syntax and potential to make mistakes.
- Any command can be used on any page, with the appropriate arguments. However, the menu should only show commands applicable to the page the user is currently viewing. Do not present commands in the menu that would not work on the current page.

| Do                                                                                                                                                           | Don't                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Menu of slash commands for an issue or epic page, with just the summarize command." src="/img/slash-commands-conditional.svg"></figure-img> | <figure-img alt="Menu with various slash commands that don't belong to the same context. Includes commands to summarize an issue, troubleshoot a pipeline, improve code, or explain a vulnerability." src="/img/slash-commands-not-conditional.svg"></figure-img> |
| On issue or epic pages, display only context-specific slash commands, such as `/summarize`.                                                                  | On issue or epic pages, hide slash commands that are not applicable, such as those intended for code.                                                                                                                                                             |

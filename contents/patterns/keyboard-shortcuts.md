---
name: Keyboard shortcuts
summary: Improve user productivity and accessibility by optimizing flows with a keyboard.
related:
  - button
  - tooltip
---

Keyboard shortcuts can help improve accessibility and the user's productivity. While not every action needs a keyboard shortcut, consider if it could optimize a frequent workflow.

## Guidelines

- Look for patterns or potential conflicts in list of [GitLab keyboard shortcuts](https://docs.gitlab.com/ee/user/shortcuts/).
- Consider any reserved keybindings in operating systems ([Linux](https://help.ubuntu.com/stable/ubuntu-help/shell-keyboard-shortcuts.html.en), [macOS](https://support.apple.com/en-us/HT201236), [Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec)) and in the [supported web browsers](https://docs.gitlab.com/ee/install/requirements.html#supported-web-browsers).
- When the user has keyboard shortcuts turned on, show a shortcut near its action or through a [tooltip](/components/tooltip). If there are multiple shortcuts for the same action, only show one shortcut.
- For modifier keys, show symbols rather than text labels. This ensures consistency across operating systems, locales, and keyboards. For example, show <kbd>⌘</kbd> instead of <kbd>Command</kbd>.

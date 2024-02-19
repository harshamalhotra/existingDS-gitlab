---
name: Destructive actions
---

Friction in the user interface is often regarded as something to avoid or resolve. However, it can be useful to prevent a user from completing a destructive action when the consequences may be unknown.

In cases where we prioritize error prevention, we can take steps to:

- Assist a user from accidentally clicking a destructive action.
- Help a user understand what happens after confirming a destructive action.
- Provide alternative options to potentially resolve a problem without resorting to destructive action.

## Severity guidelines

Depending on the severity of destructiveness, consider the following friction patterns.

### High severity

If a destructive action is difficult to undo or data will be lost permanently, strongly consider implementing a [modal](/components/modal) to confirm the action or guide the user to an alternative route.

- A [modal](/components/modal) used for confirming a destructive action should use the danger [button](/components/button/#variants) variant to confirm the action.
- Require input confirmation of the deleted object's name when the action removes additional resources within. For example, when deleting a project.
- All caps text should not be used in the modal header or body, unless the all caps styling is typical in the context (for example, README).
- Body content can use [bold styling](/product-foundations/type-fundamentals/#font-weight) to draw attention to the consequences of the destructive action.
- Avoid using [alerts](/components/alert) to emphasize the content inside a modal.

<todo>Add an example of a high severity modal confirmation.</todo>

### Medium severity

Destructive actions may be frustrating to a user when performed unintentionally. Recovering from these actions is difficult and can have an emotional impact. Consider introducing an additional step to prevent a user from accidentally completing a medium-severity destructive action. For example, put the action within a dropdown requiring a minimum of two clicks to complete it.

### Low severity

The destructive action can easily be undone and no actual data is lost. Consider adding no friction at all in order to streamline the interface, especially in places where an action needs to be performed in bulk. These kinds of destructive actions can be exempt of using the [danger](/components/button#variants) button variant and use the [default](/components/button#variants) variant instead.

## References

- [10 Usability Heuristics for User Interface Design - Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/)

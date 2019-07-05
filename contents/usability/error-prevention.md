---
name: Error prevention
---

Friction in the user interface is often regarded as something to avoid or resolve. However, it can be useful when preventing a user from completing a destructive action when the consequences may be unknown.

In cases where we are prioritizing error prevention, we can take steps to:

* Assist users from accidentally clicking a destructive action.
* Help users to understand what happens after they confirm their destructive action.
* Provide alternative options to potentially resolve their problem without resorting to destructive action.

## Severity guidelines

Depending on the severity of destructiveness, we can implement the following friction patterns.

### High severity

If a destructive action is difficult to undo or data will be lost permanently, strongly consider implementing a [modal](/components/modals) to confirm the action or guide the user to an alternative route.

### Medium severity

Destructive actions can introduce annoyance to the user when performed unintentionally. Recovering from these actions are difficult and will, therefore, have an emotional impact on the user. Consider assisting the user with an additional step to prevent accidentally clicking this action. A real example would be to put this action within a dropdown requiring a minimum of two clicks.

### Low severity

The destructive action can easily be undone and no actual data was lost. Consider adding no friction at all in order to streamline the interface, especially in places where the action needs to be performed in bulk. These kinds of destructive actions can be exempt of being [elementary](/components/buttons/#elementary) styled and can instead be [neutral](/components/buttons/#neutral) styled buttons.

## References

- [10 Usability Heuristics for User Interface Design - Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/)

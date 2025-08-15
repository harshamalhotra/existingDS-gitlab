---
name: Feedback
related:
  - /components/button
  - /components/link
---

## Overview

AI output is not entirely predictable. It's important to monitor it to understand its quality and if it satisfies user needs. Additionally, the user should be able to report AI output they find harmful or malicious.

User-provided feedback should always be aggregated with other data, such as user interviews, to form a complete picture.

## Guidelines

Use `GlDuoUserFeedback` from [Duo UI](https://gitlab-org.gitlab.io/duo-ui/?path=/docs/duo-user-feedback--docs) to collect feedback from the user on AI output.

<figure-img alt="Modal with multiple checkboxes, a disclaimer about visibility, and a free text field." label="Example of the feedback form with generic content." src="/img/duo-feedback-modal.png"></figure-img>

A user's experience of AI output is more than just "good" or "bad". To capture additional details and nuance, the user can give feedback in their own words. The free text questions in the form can be modified to be specific to an individual feature, if necessary.

Since the verbatim AI output is not stored for legal and privacy reasons, encourage the user to provide as much context as possible to ensure their feedback is actionable.

### Call-to-action (CTA)

Ensure the CTA reinforces that the user should only provide feedback on the AI outputs, not the entire feature.

Examples:

- Give feedback to improve this answer
- How was this response?

The CTA should be shown on each instance of AI output.

You can use a **quick feedback** mechanism like the thumbs up 👍 or thumbs down 👎 buttons, but there must always be an option to provide **detailed feedback** on the AI output with `GlDuoUserFeedback`.

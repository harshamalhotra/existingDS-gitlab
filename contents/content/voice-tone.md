---
name: Voice and tone
---

Copy and messaging are meaningful aspects of the GitLab experience and the conversation with our users.

The copy for GitLab is clear and direct. We strike a balance between professional and friendly. We can empathize with users (such as celebrating completing all items on the To-Do List) while remaining respectful to the importance of their work. We are a trusted, friendly, helpful, and understanding coworker.

## Active voice

Whenever possible, write in [active voice](https://www.grammarly.com/blog/active-vs-passive-voice/), instead of passive voice. Active voice is easier for users to understand and often results in shorter content.

- Passive voice: _Files are added by developers._
- Active voice: _Developers add files._

Sometimes, using passive voice is appropriate. Make sure it’s an intentional choice that communicates the idea more clearly than active voice would&mdash;for example, when the system is the actor, rather than a person.

| Do  | Don’t |
| --- |  ---  |
| **(Active voice)** Ask someone with write access to this repository to merge this request. | This request can be merged by someone with write access to this repository. |
| **(Passive voice)** The Kubernetes cluster is being created on Google Kubernetes Engine. | We are creating the Kubernetes cluster on Google Kubernetes Engine. |

## Brevity

Users will skim content, rather than read text carefully. Copy should be concise and short whenever possible. A long message or label is a red flag hinting at a design that needs improvement.

When familiar with a web app, users rely on muscle memory and may read even less when moving quickly. A good experience should quickly orient a user, regardless of their experience, to the purpose of the current screen. Understanding should happen without the user having to consciously read long strings of text.

In general, text is burdensome and adds cognitive load. This load is even more pronounced in a powerful productivity tool such as GitLab. We shouldn’t rely on words as a crutch to explain the purpose of a screen. Instead, the current navigation and composition of on-screen elements should get the user 95% there, with the remaining 5% being specific elements such as text.

Brevity is especially important for:

- Headers
- Button text
- Field labels
- Error messages

For each of these content types, look for ways you might rephrase text that seems too long. Also, eliminate unnecessary phrases like “in order to” and extra articles like “the” when they don’t add clarity.

| Do  | Don’t |
| --- |  ---  |
| To link Sentry to GitLab, enter your Sentry URL and Auth Token. | In order to link Sentry to GitLab, enter your Sentry URL and Auth Token. |
| Use this token to validate received payloads. | Use this token to validate the received payloads. |

### Customer perspective

Instead of talking about how GitLab has implemented a feature, write about the action the user wants to take.

| Do  | Don’t |
| --- |  ---  |
| Users can request access | Allow users to request access |
| Users can request access | Prevent users from requesting access |
| Users must be verified to commit | Reject unverified users |
| Users must have a GitLab account to commit | Check whether the commit author is a GitLab user |

### Avoid Latin abbreviations

While we aim to brief, we also avoid Latin abbreviations as they can be easily misinterpreted.

- Instead of “i.e.”, use “that is.”
- Instead of “e.g.”, use “for example.”
- Instead of “etc.”, either use “and so on” or consider editing it out, since it can be vague.

## Clear error messages

When something goes wrong, it's important for us to be clear about what happened, why it happened, and what the next steps to take may be. Vague messages frustrate users and can even block them from completing their task.

When writing an error message, leave out extraneous words like *sorry* and *please*. This makes errors easier to read and understand.

| Do  | Don’t |
| --- |  ---  |
| Unable to complete your request. Enter a valid email address. | 400 Bad Request |
| Enter your email address to sign up with GitLab. | Please enter your email address to sign up with GitLab. |

## Parallelism

[Parallel structure](https://writingcenter.gmu.edu/guides/parallel-structure) ensures that related content takes the same grammatical form; for example, all related items in a list are either a noun or a verb, not a mixture of both. Maintaining parallelism is important, because it’s grammatically correct and much easier to read.

<table>
  <thead>
    <tr>
      <th>Do</th>
      <th>Don’t</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>A project is where you:</p>
        <ul>
          <li>House your files</li>
          <li>Plan your work</li>
          <li>Publish your documentation</li>
        </ul>
      </td>
      <td>
        <p>A project is where you:</p>
        <ul>
          <li>House your files</li>
          <li>Plan your work</li>
          <li>Publishing your documentation</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Objective focused

When users engage with our product, they’re focused on getting tasks done, thinking first in terms of the problem they’re trying to solve, and then how to solve it.
Objective-focused content that starts with the task first and then offers the solution can make it easier for users to quickly find and understand the information they need.

| Do | Don’t |
| --- | --- |
| Monitor your errors by integrating with Sentry | Integrate with Sentry to monitor your errors |
| To see what’s changed, choose a branch or enter a commit. | Choose a branch or enter a commit to see what's changed. |

## Point of view

In most cases, it’s appropriate to use the [second-person](https://www.quickanddirtytips.com/education/grammar/first-second-and-third-person?page=1) point of view, because it’s friendly and easy to understand.

The words “you,” “your,” and “yours” indicate that you’re writing in second person. It’s important to note that in UI copy, the “you” is often implied rather than stated. For example, instead of “You can track time with quick actions,” you might instruct users to “Track time with quick actions.”

To write in second person, focus on eliminating words like “can” or “will” from content.

| Do | Don’t |
| --- | --- |
| To get started, link this page to your Jaeger server. | Users can get started by linking this page to their Jaeger server. |

## Verb tenses

### Recent past (instant feedback)

For a status update on something that has just happened in response to a user action or when a user is otherwise watching for an update, use the **present perfect** tense. This is ideal for toast messages and terminal output.

There are two options:

- When brevity is the priority, use only the noun and verb (omitting articles and prepositions); for example, “Pipeline scheduled.”
- When you want to use a full phrase for a human feel, use a complete sentence; for example, “The pipeline has been scheduled.”

### Distant past (earlier than instant feedback)

Use **past tense**.

| Do | Don’t |
| --- | --- |
| The pipeline was last run on October 3. | The pipeline has been run on October 3. |

### State

Use **present tense**.

| Do | Don’t |
| --- | --- |
| The pipeline is scheduled to run on October 3. | The pipeline will be run on October 3. |

### Instructions

Use the **present tense** with an imperative form (also known as a command).

| Do | Don’t |
| --- | --- |
| Click the Designs tab. | You will need to click the Designs tab. |
| To see what’s changed, choose a branch or enter a commit. | Choosing a branch or entering a commit will show you what’s changed. |

## Contractions

Contractions are encouraged and can create a friendly and informal tone, especially in tutorials, instructional documentation, and user interfaces. To learn more about when to avoid contractions, please check the [GitLab Documentation Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/index.html#contractions).

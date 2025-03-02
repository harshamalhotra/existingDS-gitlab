---
name: Verb tenses
summary: Select the appropriate verb tense for UI text to convey timing accurately and provide clear instructions across different scenarios.
---

Depending on when you show a status or error message, you might use one of many different verb tenses.

## Use recent past for instant feedback

For a status update on something that has just happened in response to a user action or when a user is otherwise watching for an update, use the **present perfect** tense. This is ideal for toast messages and terminal output.

There are two options:

- When brevity is the priority, use only the noun and verb (omitting articles and prepositions); for example, “Pipeline scheduled.”
- When you want to use a full phrase for a human feel, use a complete sentence; for example, “The pipeline has been scheduled.”

## Use distant past for earlier feedback

For a status update about something that happened in the more distant past, use **past tense**.

<grid>
  <do>The pipeline was last run on October 3.</do>
  <dont>The pipeline has been run on October 3.</dont>
</grid>

## Use present tense for future state

For a status update about something that's slated to happen in the future, use **present tense**.

<grid>
  <do>The pipeline is scheduled to run on October 3.</do>
  <dont>The pipeline will be run on October 3.</dont>
</grid>

## Use present tense for instructions

For instructions, use **present tense** with an imperative verb.

<grid>
  <do>Select the Designs tab.</do>
  <dont>You will need to select the Designs tab. </dont>
  <do>To see what’s changed, choose a branch or enter a commit.</do>
  <dont>Choosing a branch or entering a commit will show you what’s changed.</dont>
</grid>

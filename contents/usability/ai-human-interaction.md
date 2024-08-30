---
name: AI-human interaction
related:
  - /usability/contextual-help
  - /usability/destructive-actions
  - /usability/saving-and-feedback
  - /patterns/duo-slash-commands
---

As AI continues to advance, it brings both exciting opportunities and new challenges for product design. Although designing for AI still requires adhering to human-centered design principles, additional considerations such as ethics, privacy, trust, and transparency must be taken into account.

This page is divided into two main sections: [Guidelines](#guidelines) and [Framework](#framework) for AI.

## Guidelines

### Start with the user, not the technology

AI technology should be leveraged to enhance the user experience, rather than be the primary focus. Design with a deep understanding of the user's needs, goals, and pain points. If you aren't aligned with a user's need, you are building a system that does not solve a problem. Instead of asking "Can we use AI to **\_**?", ask yourself "How might we help users **\_**?".

### Understand when to automate

Understand if a task is a good fit for AI or if it is better done by a human. First, understand if a user's need will be helped by automation. Users may not want automation in [high risk tasks](#understand-risk) where they will be held responsible for the result, or tasks that they enjoy doing. Tasks that are a good fit for automation are tedious, error-prone, boring, low risk, and free up the user's time. If a user benefits from automation, consider if the problem could be addressed with pre-defined rules (_if this, then that_). Understand the strengths and weaknesses of AI. It can be helpful for processing large amounts of information, pattern finding, prediction, classification, and recommendations. Given good training data, AI can be more accurate and faster than a human at completing tasks. It is less helpful for tasks requiring empathy, emotional intelligence, morality, common sense, predictability, contextual understanding, intuition, and creativity.

### Understand risk

To understand the risk of an AI-powered feature, assess the _probability_ of error and _impact_ of that error, where _impact_ is a comparison of potential _cost_ and _benefits_. Costs can be financial, emotional, reputational, opportunity, time, compliance, or others.

In GitLab, an example of a _low risk_ situation is an AI-generated issue summary, which quickly gives context to the user about the issue. The potential cost is low, as the user usually does not take action based on the summary alone.

An example of a _high risk_ situation is an AI-generated fix for a security vulnerability, which helps the user resolve it faster.
To mitigate the risk and ensure the vulnerability is resolved, the user should be encouraged to review the suggested fix and run all security checks before they accept it.
But if the fix unintentionally worsens the security, the cost might outweight the benefit. The potential cost increases in high-risk applications, such as critical infrastructure.

To mitigate high risk situations:

- [Set the right expectations](#set-the-right-expectations).
- Design for potential negative impact. For example, a user should explicitly opt in to a high risk AI-powered feature. For more information, see [destructive actions](/usability/destructive-actions).

### Communicate confidence

Users rely on the system to make decisions, but they should not trust the system entirely. Communicating confidence allows users to know how much scrutiny they should put recommendations under.

### Be transparent

Establish trust by ensuring the user always knows when they are interacting with AI, and when content or recommendations come from AI. Such disclosures are often required by third party AI services and may soon be required in the European Union ([EU AI Act](https://www.europarl.europa.eu/news/en/headlines/society/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence)).

#### Name

The [GitLab Duo](https://docs.google.com/presentation/d/1G849KWal8XDAEdusoR5YN8ZrZlvcgFVnqr4Nsjdy9Rc/edit#slide=id.g249996547b6_0_20) name is an extension of our brand. It acts as an umbrella for all AI capabilities across GitLab, communicates the suite of AI capabilities, and helps identify specific AI-powered features. Include the GitLab Duo name for each AI-powered feature in onboarding or UI text, either _before_ or _after_ the user interaction. However, to ensure concise [call-to-action labels (CTA)](/patterns/duo-calls-to-action#label) and maintain clear, user-friendly interfaces, avoid using the words "GitLab Duo" or "AI" directly in the CTA text. For variations of the GitLab Duo name, such as features or add-ons, see the technical writing [word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html).

<figure-img alt="'GitLab Duo' is used in supplemental UI copy." label="'GitLab Duo' is used in supplemental UI copy." src="/img/do-feature-maturity.svg"></figure-img>

#### Disclaimer

- Flag AI-generated content with the disclaimer `<Verb> by AI`. For example: “Generated by AI” or “Summarized by AI”.
- Close to that disclaimer, show a message to encourage the user to verify the AI-generated content. If space allows, show the following directly in the UI or in a [popover](/components/popover): “Content generated by AI should be seen as a starting point and verified before use. It may be incorrect, inappropriate, or diverge from your organization’s standards.” Or, if space is a concern, just “Verify before use.”
- Show the disclaimer only once per context, and preferably _under_ the AI-generated content, in a way that is clear that it applies to all content within that context.

#### Illustration

The [`tanuki-ai-md`](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/tanuki-ai-md.svg) and [`tanuki-ai-sm`](https://gitlab-org.gitlab.io/gitlab-svgs/illustrations?q=illustrations/tanuki-ai-sm.svg) illustrations serve the purpose of promoting and associating AI related features within the UI.

_The illustration is currently a [work in progress](https://gitlab.com/gitlab-org/gitlab-svgs/-/issues/400), and its final version is still in development._

### Set the right expectations

The interface should clearly communicate AI capabilities, limitations, and the scope of its decision-making authority. Users need to understand a system's capabilities and limits to understand how much trust to put into the system. To help the user build a mental model of the system:

- Clearly highlight if a feature is an [experiment or beta](/usability/feature-management#highlighting-feature-versions).
- Follow the [disclaimer guidelines](#disclaimer).
- Use clear, simple language to explain what the system is doing and how it arrived at its recommendations.
- Explain what data the system is trained on and what it's optimized for.
- Tell the user how their data is used and processed.

### Give the user control

The user should be able to decide whether to follow the AI's recommendations or not. There should be an easy way to undo system actions. Do not collect user data without asking the user's permission.

### Fail gracefully

When your system is not certain of the user's intent or has low confidence, make sure there is a path forward that does not rely on AI. Explain why the system was not able to provide a recommendation. Errors are also opportunities to learn more about your user's mental models and improve the system's ability to make recommendations. Consider designing a feedback mechanism that presents as a cue for adjustment rather than an error state.

### Encourage feedback

Design mechanisms to collect implicit and explicit feedback to improve the system.

## Framework

To help you put the [guidelines](#guidelines) into practice, the framework materializes them into standard patterns that address the most common UX challenges. Follow the progress in the [framework epic](https://gitlab.com/groups/gitlab-org/-/epics/10334).

### Dimensions

These dimensions can assist you in choosing the most appropriate pattern for the problem you are solving.

- **Mode**: What's the emphasis and persistence of the AI-human interaction relative to the main context and the user journey?
  - Focused: AI is the main context, with a dedicated focus.
  - Supportive: AI complements the main context and accompanies users along their journey to help them achieve their goals.
  - Integrated: AI is blended into specific moments of the users flow to help them complete small, discrete tasks.
- **Approach**: What should AI focus on improving?
  - Automate tasks: improve _efficiency_ by replacing human decision-making and actions, always done with human awareness and consent.
  - Augment capabilities: improve _effectiveness_ by supporting and improving human decision-making and actions.
- **Interactivity**: How does the system surface AI to engage with the user?
  - Proactive: triggered without user interaction.
  - Reactive: triggered by user interaction.
- **Task**: What's the user task that AI can assist with?
  - Classification: categorize, suggest, rank, match.
  - Generation: summarize, explain, create.
  - Prediction (or regression): forecast continuous, non-categorical data, like numerical values.

### Patterns

<todo>Add documented patterns. Follow the progress in the [framework epic](https://gitlab.com/groups/gitlab-org/-/epics/10334).</todo>

While we don't have documented patterns, we share some potential patterns in this [video](https://youtu.be/UXCz2xst_zg) ([slides](https://docs.google.com/presentation/d/1rO2BpI2WZC9Dxhv7oVR6XHk8GMb77AswESYcDANnQhA/edit?usp=sharing) and [internal Figma file](https://www.figma.com/file/s4TP1i2Akd1VTh4jhbg234/AI-prioritized-prototypes?type=design&node-id=2766-82606&t=zllXY21ifWzgeCq1-4)).

As inspiration for **integrated** mode patterns, you can find some explorations in [this Figma file](https://www.figma.com/file/s32hZcNQ0mQupGuEB5jUMH/Integrated-mode-AI-UX-patterns-design.gitlab.com%231615?type=design&node-id=1-2&mode=design):

<div class="figma-embed" aria-label="Examples of integrated mode patterns, showing how the AI-human interaction guidelines could be applied to a button, form, or static content." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fs32hZcNQ0mQupGuEB5jUMH%2FIntegrated-mode-AI-UX-patterns-design.gitlab.com%25231615%3Ftype%3Ddesign%26node-id%3D1%253A2%26mode%3Ddesign%26t%3DeWpvomQy7PhbCp4J-1" allowfullscreen></iframe>
</div>

## References

- [Conversational Experience Design, SAP](https://experience.sap.com/conversational-ux/)
- [Designing Intelligent Systems, Fiori for Web Design Guidelines, SAP](https://experience.sap.com/fiori-design-web/designing-intelligent-systems/)
- [Human-AI eXperience (HAX) Toolkit, Microsoft](https://www.microsoft.com/en-us/haxtoolkit/)
- [People + AI Guidebook, Google](https://pair.withgoogle.com/guidebook)
- [Responsible bots: 10 guidelines for developers of conversational AI, Microsoft](https://www.microsoft.com/en-us/research/uploads/prod/2018/11/Bot_Guidelines_Nov_2018.pdf)

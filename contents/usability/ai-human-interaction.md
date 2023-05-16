---
name: AI-human interaction
---

As Artificial Intelligence (AI) continues to advance, it brings both exciting opportunities and new challenges for product design. Although designing for AI still requires adhering to human-centered design principles, additional considerations such as ethics, privacy, trust, and transparency must be taken into account.

This page is divided into two main sections: [Guidelines](#guidelines) and [Framework](#framework) for AI.

## Guidelines

### Start with the user, not the technology

AI technology should be leveraged to enhance the user experience, rather than be the primary focus. Design with a deep understanding of the user's needs, goals, and pain points. If you aren't aligned with a user's need, you are building a system that does not solve a problem. Instead of asking "Can we use AI to _____?", ask yourself "How might we help users _____?".

### Understand when to automate

Understand if a task is a good fit for AI or if it is better done by a human. First, understand if a user's need will be helped by automation. Users may not want automation in high stakes tasks, tasks where they will be held responsible for the result, or tasks that they enjoy doing. Tasks that are a good fit for automation are tedious, error-prone, boring, low stakes, and free up the user's time. If users will benefit from automation, consider if the problem could be addressed with pre-defined rules (_if this, then that_). Understand the strengths and weaknesses of AI. AI can be helpful for processing large amounts of information, pattern finding, prediction, classification, and recommendations. Given good training data, AI can be more accurate and faster than a human at completing tasks. AI is less helpful for tasks requiring empathy, emotional intelligence, morality, common sense, predicability, contextual understanding, intuition, and creativity.

### Understand risk

Understand the consequences to users if the system's recommendation is incorrect. Clarify the system's limitations in high stakes situations. If a high stakes feature is powered by AI, design for potential negative impact. For example, a user should explicitly opt-in to a high stakes AI-powered feature.

### Communicate confidence

Users rely on the system to make decisions, but they should not trust the system entirely. Communicating confidence allows users to know how much scrutiny they should put recommendations under.

### Be transparent

Establish trust by ensuring the user always knows when they are interacting with AI, and when content or recommendations come from AI. Some third party AI services require us to disclose that a user is interacting with an AI system.

In the UI, use active phrases such as:
* AI created this summary.
* AI explained this code.
* AI generated this content.

Users need to understand a system's capabilities and limits to understand how much trust to put into the system.

Help the user build a mental model of the system:
* Use clear, simple language to explain what the system is doing and how it arrived at its recommendations. 
* Explain what data the system is trained on and what it's optimized for. 
* Tell the user how their data is used and processed.

### Set the right expectations

The interface should clearly communicate the AI's capabilities, limitations, and the scope of its decision-making authority. If a feature is experimental or beta, [clearly communicate that in the UI](/usability/feature-management#highlighting-feature-versions).

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

<todo>Add content about each pattern. In the meantime, you can see some of the patterns we have identified in this [video](https://youtu.be/UXCz2xst_zg) ([slides](https://docs.google.com/presentation/d/1rO2BpI2WZC9Dxhv7oVR6XHk8GMb77AswESYcDANnQhA/edit?usp=sharing) and [internal Figma file](https://www.figma.com/file/s4TP1i2Akd1VTh4jhbg234/AI-prioritized-prototypes?type=design&node-id=2766-82606&t=zllXY21ifWzgeCq1-4)).</todo>

## Related patterns

- [Destructive actions](/usability/destructive-actions)
- [Saving and feedback](/usability/saving-and-feedback)
- [Contextual help and info](/usability/contextual-help)

## References

- [Conversational Experience Design, SAP](https://experience.sap.com/conversational-ux/)
- [Designing Intelligent Systems, Fiori for Web Design Guidelines, SAP](https://experience.sap.com/fiori-design-web/designing-intelligent-systems/)
- [Human-AI eXperience (HAX) Toolkit, Microsoft](https://www.microsoft.com/en-us/haxtoolkit/)
- [People + AI Guidebook, Google](https://pair.withgoogle.com/guidebook)
- [Responsible bots: 10 guidelines for developers of conversational AI, Microsoft](https://www.microsoft.com/en-us/research/uploads/prod/2018/11/Bot_Guidelines_Nov_2018.pdf)

<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Helping users</h1>
      <p>Help content should be used as a fallback to help users complete and better understand tasks, with the primary method of understanding being the UI itself. Embedding help content directly within the feature it serves is the best way to assist users who have hit a roadblock. Affordance is higher when help content is available in context.</p>
      <p>Help comes in the form of various types of content designed to:</p>
      <ul>
        <li>Assist users unable to complete a task.</li>
        <li>Help users to understand a concept in more detail.</li>
        <li>Provide additional technical details not available in the UI.</li>
      </ul>
      <h2>Formatting help content</h2>
      <dl>
        <dt class="p-b-5"><p>If the most relevant information can be summarized succinctly, put the summary directly in the UI instead of using a Help link. However, you can use a Help link to provide supplemental information.</p></dt>
        <dd class="p-t-5 p-b-5"><p><strong>Example:</strong> User cohorts show how active users are in the last 12 months. <a href="#">More information</a></p></dd>
        <dt class="p-t-5 p-b-5"><p>Don't use "Learn more about," "Tell me more about," or "Get help with this" phrasing. Phrase help links to indicate assistance and predict the results of the link. Help links should never read like action links, e.g., “Open documentation.” As an exception, you can use "More information" to supplement instructions that are directly in the UI, especially if providing specific information in the Help link leads to unnecessary repetition or makes the link less compelling.</p></dt>
        <dd class="p-t-5 p-b-5"><p><strong>Example:</strong> <a href="#"> What are user cohorts?</a></p></dd>
        <dt class="p-t-5 p-b-5"><p>If there isn't space available for a Help link text, use a circle question mark icon (?) linked to the Help content, with a tooltip phrased in terms of the primary question answered by the help content.</p></dt>
        <dd class="p-t-5 p-b-5"><p class="todo">Todo: Add live component block with code example</p></dd>
        <dt class="p-t-5 p-b-5"><p>If the help content is outside of the GitLab instance (e.g. content at about.gitlab.com), make that clear in the link text. Doing so helps make the result of the links predictable. This is often not possible due to space limitations. An external link icon can be added in place of more copy.</p></dt>
        <dd class="p-t-5 p-b-5"><p><strong>Example:</strong> For more integrations, go to <a href="#">GitLab’s website</a>.</p></dd>
      </dl>
    </div>
  </div>
</template>

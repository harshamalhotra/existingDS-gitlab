<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Search</h1>
      <p>Search patterns enable users to trigger a search to find certain information or filter down a list of information that is already displayed.</p>
      <h2>Usage</h2>
      <p>We have three reusable search patterns but they fall into two groups. They’re separated by the way users interact with them and how the search action gets triggered:</p>
      <ul>
        <li>Search by typing</li>
        <li>Search by confirmation</li>
      </ul>
      <p>Both patterns can be used for filtering or searching for information but the <a href="#placeholder">placeholder</a> should be adapted accordingly.</p>
      <h3>Search by typing</h3>
      <p>This pattern doesn’t have a button and the magnifying glass icon is placed inside and in the left corner of the search box. The search action is triggered immediately after users start typing. The fact that the search is happening in the background needs to be communicated by showing the spinner in the right corner of the search box. A clear icon needs to be present if the search box isn’t empty and when there is no search activity in the background. Clicking it clears the search box, focuses the input field (if not already focused) and hides itself.</p>
      <p class="todo">Todo: Add live component block with code example (search by typing)</p>
      <h3>Search by confirmation</h3>
      <p>This pattern is visually different from the one above because the users interact with it differently. The magnifying glass icon is inside the button which triggers the search action. The presence of the button indicates the need for confirmation to trigger the search. Pressing ”Enter” must also trigger it. A clear icon needs to be present in the right corner if the search box isn’t empty. Clicking it clears the search box, focuses the input field (if not already focused) and hides itself.</p>
      <p class="todo">Todo: Add live component block with code example (search by confirmation)</p>
      <p>This pattern is commonly used throughout our application in the following form:</p>
      <p class="todo">Todo: Add live component block with code example (search by confirmation with history dropdown)</p>
      <h3 id="placeholder">Placeholder</h3>
      <p>The placeholder in a search box should ideally be just “Search” because it should be clear what the user is searching through from the placement of the search box on the page. For example, a search box placed under a title “Labels” searches through labels. If that’s not possible, a more specific ”Search labels” placeholder can be used. The search patterns are one of those exceptions where the input field labels aren’t present at all. Because of that, a placeholder should always be there to clearly indicate to users that this is a search box.</p>
      <h3>Positioning</h3>
      <p>It’s a common practice to place the search box on the top right of the page, it’s where Internet users learned to expect it. When the search box is a simple search or filter, it should positioned on the top right and limited in width. More complex search boxes can be wider and positioned elsewhere.</p>
      <h2>Design specification</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/search-spec-previews/">Sketch Measure Preview for search patterns</a>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/forms">Forms</a></li>
        <li><a href="/components/spinner">Spinner</a></li>
      </ul>
    </div>
  </div>
</template>

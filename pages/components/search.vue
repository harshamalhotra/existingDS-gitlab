<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Search</h1>
      <p>Search patterns enable users to find certain information by adding criteria that match their query.</p>
      <h2>Usage</h2>
      <p>Our search patterns fall into two groups:</p>
      <ul>
        <li>Search by typing</li>
        <li>Search by confirmation</li>
      </ul>
      <h3>Search by typing</h3>
      <p>This pattern doesn't use a button to trigger the search. The search action is triggered immediately after users start typing. In order to communicate that a search is being performed, a spinner is added in the right corner of the search box. A clear icon appears in the right corner when the search box contains content and there is no search activity happening in the background. Clicking the clear icon removes the content, focuses the input field (if not already), and hides itself. A magnifying glass icon is placed in the left corner of the search box to indicate to the user that the input is a search field.</p>
      <p>Narrowing down a large list of results as a user types can create performance issues. Consider using the Search by confirmation pattern if performance is a concern.</p>
      <p class="todo">Todo: Add live component block with code example (search by typing)</p>
      <h3>Search by confirmation</h3>
      <p>This pattern is visually different from the one above because users interact with it differently. The magnifying glass icon is inside the button which triggers the search action. The presence of the button indicates the need for confirmation to trigger the search. Pressing “Enter” also triggers the action. A clear icon appears in the right corner when the search box contains content. Clicking the clear icon removes the content, focuses the input field (if not already), and hides itself.</p>
      <p class="todo">Todo: Add live component block with code example (search by confirmation)</p>
      <p>A history dropdown is commonly used as an addition to the search by confirmation pattern:</p>
      <p class="todo">Todo: Add live component block with code example (search by confirmation with history dropdown)</p>
      <h3 id="placeholder">Placeholder</h3>
      <p>The placeholder in a search box should ideally be just “Search” because it should be clear what the user is searching through from the placement of the search box on the page. For example, a search box placed under a title “Labels” searches through labels. If that’s not possible, a more specific ”Search labels” placeholder can be used. The search patterns are one of those exceptions where the input field labels aren’t present at all. Because of that, a placeholder should always be there to clearly indicate to users that this is a search box.</p>
      <p>Even though the search patterns can be used for either filtering or searching for information, the placeholder should always used the word “Search”. This is another small detail that makes the pattern easier to recognize.</p>
      <h3>Positioning</h3>
      <p>It’s a common practice to place the search box on the top right of the page, it’s where Internet users learned to expect it. When the search box is a simple search or filter, it should positioned on the top right and limited in width. More complex search boxes can be wider and positioned elsewhere.</p>
      <h2>Design specification</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/search-spec-previews/">Sketch Measure Preview for search patterns</a>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/filters">Filters</a></li>
        <li><a href="/components/forms">Forms</a></li>
        <li><a href="/components/spinner">Sorting</a></li>
        <li><a href="/components/spinner">Spinner</a></li>
      </ul>
    </div>
  </div>
</template>

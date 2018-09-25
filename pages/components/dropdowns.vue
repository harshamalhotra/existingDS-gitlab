<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Dropdowns</h1>
      <p>Dropdowns lists (or simply dropdowns) are used to provide the user with a list of options, which can be either actions or input values. Dropdown lists are triggered by dropdown <a href="/components/buttons">buttons</a> or <a href="/components/forms">form inputs</a>.</p>
      <h2>Usage</h2>
      <p>There are two main types of dropdowns:</p>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Type</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plain dropdowns</td>
            <td><p>These dropdowns usually present a list of actions. They can be thought of as a collection of buttons.</p></td>
          </tr>
          <tr>
            <td>Checkmark dropdowns</td>
            <td>
              <p>These dropdowns are used as inputs. The individual rows in these dropdowns can show a checkmark to indicate that they have been selected or enabled. They are a collection of checkmarks. A dash (<code>–</code>) should be used instead of a checkmark when the row's value is present in some of the elements the dropdown is modifying but not others.</p>
          </td>
          </tr>
        </tbody>
      </table>
      <h3>Behavior</h3>
      <p>Dropdowns are placed below the element they stem from. However, when there isn’t enough space in the viewport, the dropdown is moved above.</p>
      <p>If there are more rows than fit the dropdown, an overlay with a fade effect will be added at the top or bottom of the dropdown to indicate there are more rows to be scrolled. When reaching the end of the scrollable area, the overlay will be removed.</p>
      <h3>Accessories</h3>
      <p>There are some special elements that can be included in dropdowns to better adapt them to different situations.</p>
      <h4>Dropdown header</h4>
      <p>A header can be added to make the dropdown's purpose clear. For example, the header <i>Assign milestone</i> can be added to make it clear that selecting an option will modify an issue's milestone instead of applying a filter.</p>
      <p class="todo">An example of a dropdown with a header.</p>
      <h4>Section headers</h4>
      <p>Section headers are used to categorize the options in a dropdown. A separator must always be included in between sections.</p>
      <p class="todo">An example of a dropdown with section headers.</p>
      <h4>Filter box</h4>
      <p>If there are more than 20 elements in the list, it may be necessary to include a filter box.</p>
      <p class="todo">An example of a dropdown with a filter box.</p>
      <h4>Fixed rows</h4>
      <p>A limited amount of rows that don't scroll can be fixed at the bottom of a dropdown. For example, the dropdown used to switch between issue boards has two fixed options at the bottom: <i>Create new board</i> and <i>Delete board</i>.</p>
      <p class="todo">An example of a dropdown with fixed rows.</p>
      <!--
        DEMO, keep this section for all patterns, the code block demo will be added at a later date
      -->
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout-specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/dropdown-spec-previews/">Sketch Measure Preview for Dropdowns</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/forms">Forms</a></li>
      </ul>
    </div>
  </div>
</template>

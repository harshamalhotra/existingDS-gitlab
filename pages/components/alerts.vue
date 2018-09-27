<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Alerts</h1>
      <p>Alerts allow the application to pass along relevant information to the user without impeding their journey. Alerts are not error validations and should not be used as a substitute for errors.</p>
      <h2>Usage</h2>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Component type</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Danger alerts</td>
            <td>To be used for critical warnings that require the user's attention.</td>
          </tr>
          <tr>
            <td>Warning alerts</td>
            <td>To be used for other non-critical warnings that require the users attention.</td>
          </tr>
          <tr>
            <td>Information alerts</td>
            <td>To be used to display important information to the user related to their task.</td>
          </tr>
          <tr>
            <td>Tip alerts</td>
            <td>To be used to display tips on using GitLab, new/unused features, and other marketing information.</td>
          </tr>
          <tr>
            <td>Success alerts</td>
            <td>To be used to alert the user that the action they have completed was successful.</td>
          </tr>
        </tbody>
      </table>
      <h2>Demo</h2>
      <p>The alert pattern is designed to be flexible and accounts for as many use cases as possible.</p>
      <p class="todo">An example of a live alert related to a usage guideline.</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/alerts-spec-previews/"> Sketch Measure Preview for Alerts</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/broadcast-messages">Broadcast messages</a></li>
        <li><a href="/components/toasts">Toasts</a></li>
      </ul>
    </div>
  </div>
</template>

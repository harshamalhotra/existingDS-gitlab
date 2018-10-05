<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Toasts</h1>
      <p>Toasts are used to display system messages. The messages are short and straightforward. It may contain a dismiss button, and an action button depending on the situation.</p>
      <h2>Usage</h2>
      <p>Toasts appear with an ease-in animation from the bottom and display at the left-bottom of the screen. Users can exit the toast by clicking the “Dismiss” button. If left alone, toasts will automatically disappear after a short length of time. This is true for all toasts, including those with action buttons. Hovering over a disappearing toast will cause it to remain until the cursor is moved.</p>
      <h3>Dos and Dont's</h3>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Show only one toast at a time.</td>
            <td>Show a second toast before the first has timed out or been dismissed.</td>
          </tr>
          <tr>
            <td>Add a "Dismiss" button and an additional action button if appropriate.</td>
            <td>Add more than one extra button in addition to the "Dismiss" button.</td>
          </tr>
          <tr>
            <td>Always show a dismiss button.</td>
            <td>Remove a user's ability to manually dismiss the message.</td>
          </tr>
          <tr>
            <td>Avoid using for irreversible actions.</td>
            <td>Use for actions that will result in permanent deletion.</td>
          </tr>
          <tr>
            <td>Avoid using more than 2 lines of text for the toast message.</td>
            <td>Use toast messages for messages that are longer than 3 lines of text.</td>
          </tr>
        </tbody>
      </table>
      <h3>Mobile toasts</h3>
      <p>There are some adjustments necessary for toasts displayed on smaller screens.</p>
      <p class="todo">Todo: Add an example of a live component related to mobile guidelines</p>
      <ul>
          <li>The width of the toast is full (100%).</li> 
          <li>The toast does not have rounded corners.</li>
          <li>If the message has only one line and the only action is to dismiss, the toasts retain the dismiss icon.</li>
          <li>If the message wraps onto another line, place the action buttons below the message, aligned to the right, with the “Dismiss” action first.</li>
      </ul>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/toasts-spec-previews/">Sketch Measure Preview for toasts</a></p>
      <h2>Animation Specifications</h2>
      <p>Specs: Ease-in(Show up) / Ease-out (Disappear) Time: 200 milliseconds Direction: Comes up from the bottom-left side of the screen.</p>
       <p class="todo">Todo: Add link to animation example</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/modals">Modals</a></li>
        <li><a href="/foundations/motion">Motion</a></li>
        <li><a href="/components/popovers">Popovers</a></li>
        <li><a href="/components/tooltips">Tooltips</a></li>
      </ul>
    </div>
  </div>
</template>

<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Interactions</h1>

      <h2 id="drag-and-drop">Drag and drop</h2>

      <p>To move and reorder items in a collection or across similar collections, users can press and drag them to a new position.</p>
      <p>There is a clear affordance that distinguishes draggable items from non-draggable ones:</p>
      <ul>
        <li><strong>Draggable</strong> items have rounded corners and a shadow.</li>
        <li><strong>Non-draggable</strong> items look like a plain list.</li>
      </ul>

      <p>Use <a href="#cursors">system cursors</a> to indicate when an element is draggable. The <code>grab</code> cursor appears on hover when an element is draggable. Once it’s dragged, the cursor will change to <code>grabbing</code>. For areas where an element cannot be dropped, use the <code>not-allowed</code> cursor.

      </p><h3>Usage</h3>
      <p>This interaction model is used to transform the position of elements. Usually, these are items in collections with other similar items. When moving items across collections, the collections should be similar in content.</p>
      <p>Drag and drop should be disabled if the collection is sorted by a specific attribute, as the logic of either contradicts the other. Example: you cannot manually reorder issues if they are sorted by popularity.</p>
      <p>Be cautious when allowing drag and drop in a large collection with dozens or hundreds of items. It’s mainly intended for quick reordering of items in short collections where the user can comprehend the collection’s size and scope. This is usually possible by being able to view all of the items at the same time. If the user might spend a long time going through, prioritizing, and reordering hundreds of items, consider a different design.</p>

      <h3>Demo</h3>
      <p class="todo">Todo: Add live component block with code example</p>

      <h3>Design specifications</h3>
      <p class="todo">Todo: Add design specs link</p>

      <h3>Related patterns</h3>
      <ul>
        <li><a href="/components/data-tables">Data tables</a></li>
        <li><a href="/components/lists">Lists</a></li>
      </ul>

      <h2 id="cursors">Cursors</h2>
      <p>The mouse cursor is key in helping users understand how to interact with elements on the screen.</p>
      <table>
        <thead>
          <tr>
            <th>CSS value</th>
            <th>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>default</code></td>
            <td align="center"><img src="~/assets/images/foundations/cursors/cursors-default.svg" /></td>
            <td>The platform-dependent default cursor. Typically an arrow.</td>
          </tr>
          <tr>
            <td><code>pointer</code></td>
            <td align="center"><img src="~/assets/images/foundations/cursors/cursors-pointer.svg" /></td>
            <td>Indicates that you can click on an element to invoke a command or navigate, such as links and buttons.</td>
          </tr>
          <tr>
            <td><code>grab</code></td>
            <td align="center"><img src="~/assets/images/foundations/cursors/cursors-grab.svg" /></td>
            <td>Indicates that you can grab and move an element around the screen.</td>
          </tr>
          <tr>
            <td><code>grabbing</code></td>
            <td align="center"><img src="~/assets/images/foundations/cursors/cursors-grabbing.svg" /></td>
            <td>Indicates that you are actively moving an element around the screen.</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td align="center"><img src="~/assets/images/foundations/cursors/cursors-text.svg" /></td>
            <td>Indicates that this is either text that you can select and copy, or a text field that you can click into to enter text.</td>
          </tr>
          <tr>
            <td><code>not-allowed</code></td>
            <td align="center"><img src="~/assets/images/foundations/cursors/cursors-notallowed.svg" /></td>
            <td>Indicates that an item may not be dropped at the current location or that the requested action will not be carried out.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

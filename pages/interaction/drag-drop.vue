<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Drag and drop</h1>

      <p>To move and reorder items in a collection or across similar collections, users can press and drag them to a new position.</p>
      <p>There is a clear affordance that distinguishes draggable items from non-draggable ones:</p>
      <ul>
        <li><strong>Draggable</strong> items have rounded corners and a shadow.</li>
        <li><strong>Non-draggable</strong> items look like a plain list.</li>
      </ul>

      <p>Use <a href="/styles/cursors">system cursors</a> to indicate when an element is draggable. The <code>grab</code> cursor appears on hover when an element is draggable. Once it’s dragged, the cursor will change to <code>grabbing</code>. For areas where an element cannot be dropped, use the <code>not-allowed</code> cursor.

      <h2>Usage</h2>
      <p>This interaction model is used to transform the position of elements. Usually, these are items in collections with other similar items. When moving items across collections, the collections should be similar in content.</p>
      <p>Drag and drop should be disabled if the collection is sorted by a specific attribute, as the logic of either contradicts the other. Example: you cannot manually reorder issues if they are sorted by popularity.</p>
      <p>Be cautious when allowing drag and drop in a large collection with dozens or hundreds of items. It’s mainly intended for quick reordering of items in short collections where the user can comprehend the collection’s size and scope. This is usually possible by being able to view all of the items at the same time. If the user might spend a long time going through, prioritizing, and reordering hundreds of items, consider a different design.</p>

      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>

      <h2>Design specifications</h2>
      <p class="todo">Todo: Add design specs link</p>

      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/data-tables">Data tables</a></li>
        <li><a href="/components/lists">Lists</a></li>
      </ul>
    </div>
  </div>
</template>

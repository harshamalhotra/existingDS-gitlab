<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="typography md">
      <h1>Empty states</h1>
      <p>An empty state is our way of communicating to the user that there is no content to load and what action they should take next. They are vital in making the experience feel more approachable and understandable.</p>
      <h2>Usage</h2>
      <p>Empty states are composed of 3 elements: the illustration, description, and call to action. The illustration is optional but strongly recommended as it adds personality and aides the user in understanding the situation.</p>
      <strong>1. Illustration</strong>
      <p>The illustration should compliment the need for the empty state and help the user understand the situation.</p>
      <strong>2. Description</strong>
      <p>The title and message should be clear, concise, and explain why the user is seeing this screen.</p>
      <strong>3. Call to action</strong>
      <p>Taking the form of a primary button with the option to add a secondary button, the text within should be direct and actionable.</p>
      <p><a href="/components/buttons">See buttons for more usage information</a></p>     
      <h3>When to use an empty state</h3>
      <p>Empty states can be employed to:</p>
      <ul>
        <li>Make users aware that a feature is not configured for use.</li>
        <li>Act as a placeholder for regions in the app left blank intentionally.</li>
        <li>Convey an error state, which will depend on the nature of the error and should be used judiciously. An example of this would be a server response error, i.e., 404 or 500.</li>
        <li>Display empty search results.</li>
      </ul>
      <p>Empty states differ from banners in that they are not intended to promote or advertise new features or functionality.</p>
      <p><a href="/components/banners">See banners for more usage information</a></p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <h3>Illustration Style</h3>
      <p><a href="/foundations/illustration">See illustration guidelines</a></p>
      <h3>Size</h3>
      <p>Max size on empty state illustrations is <strong>512px wide by 512px tall</strong>. Do not scale smaller illustrations up to this size as they will look too large. Instead use the original size of the illustration if it has already been drawn.</p>
      <h3>Fonts</h3>
      <ul>
        <li>Header title: UI H4 style</li>
        <li>Description: UI paragraph style</li>
      </ul>
      <h3>Description</h3>
      <ul>
        <li>If the description needs to wrap on desktop, align it to the left.</li>
        <li>If the title needs to wrap on desktop, align both the title and description to the left.</li>
        <li>If the title and description do not wrap on desktop, center them horizontally.</li>
      </ul>
      <h3>Call to action</h3>
      <ul>
        <li>The call to action button in the empty state should be a primary button.</li>
        <li>There is only one primary button since there can only be one primary button per form. If there is a need for more than one button, the other should be a secondary button.</li>
      </ul>
      <h3>Mobile</h3>
      <p>On mobile, the layout is same as the one on desktop. It only scales down the illustrations and changes the width of paragraph.</p>
      <p class="todo">Add Sketch Measure Preview for empty states</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/banners">Banners</a></li>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/foundations/illustration">Illustration</a></li>
      </ul>
    </div>
  </div>
</template>

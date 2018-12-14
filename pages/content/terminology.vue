<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Terminology</h1>
      <p>The following are common terms you will find throughout GitLab. For clear and consistent communication, it is important to use the correct terms.</p>
      <h2>Nouns</h2>
      <h3>Projects &amp; Groups</h3>
      <h4>Project</h4>
      <p>A project is where you house your files (repository), plan your work (issues), and publish your documentation (wiki).</p>
      <h4>Group</h4>
      <p>Groups allow you to assemble related projects together and grant members access to several projects at once. Groups can also be nested in subgroups.</p>
      <h4>Members</h4>
      <p>Use the term members when discussing the people who are a part of a project or a group. Don't use the term users.</p>
      <h4>Roles</h4>
      <p>Users have different abilities depending on the access level they have in a particular group or project. These permission levels are defined under a set of roles. These roles include administrator, owner, master, developer, reporter, and guest.</p>
      <h3>Comments &amp; Discussions</h3>
      <h4>Comment</h4>
      <p>A comment is a written piece of text that users of GitLab can create. Comments have author and timestamp meta data. Comments can be added in a variety of contexts, such as issues, merge requests, and discussions.</p>
      <h4>Discussion</h4>
      <p>A discussion is a group of 1 or more comments. A discussion can include subdiscussions. Some discussions have the special capability of being able to be resolved. Both the comments in the discussion and the discussion itself can be resolved.</p>
      <h3>Issues &amp; Merge Requests</h3>
      <h4>Issues</h4>
      <p>Issues can have endless applications. They allow you, your team, and your collaborators to share and discuss proposals before and while implementing them.</p>
      <h4>Merge Requests</h4>
      <p>Merge requests allow you to exchange changes you made to source code and collaborate with other people on the same project.</p>
      <h4>Milestones</h4>
      <p>Milestones in GitLab are a way to track issues and merge requests created to achieve a broader goal in a certain period of time. Milestones allow you to organize issues and merge requests into a cohesive group, with an optional start date and an optional due date.</p>
      <h4>Activity</h4>
      <p>Activity refers to any action taken by a user that results in the creation of a system note. Commenting, resolving/opening an issue, resolving/opening a merge request, and creating/deleting a branch are all considered to be an activity.</p>
      <h2>Verbs and adjectives</h2>
      <p>When using verbs or adjectives:</p>
      <dl>
        <dt class="p-b-5"><p>If the context clearly refers to the object, use them alone.</p></dt>
        <dd class="p-t-5 p-b-5"><p><strong>Example:</strong> Edit or Closed</p></dd>
        <dt class="p-t-5 p-b-5"><p>If the context isn’t clear enough, use them with the object.</p></dt>
        <dd class="p-t-5 p-b-5"><p><strong>Example:</strong> Edit issue or Closed issues</p></dd>
        <dt class="p-t-5 p-b-5"><p>Destruction buttons should be clear and always say what they are destroying.</p></dt>
        <dd class="p-t-5 p-b-5"><p><strong>Example:</strong> Delete page instead of just Delete</p></dd>
      </dl>
      <p class="todo">Todo: Add comprehensive list of terminology Do/Don't</p>
      <!-- TODO: Resolve the rukes below into one master list
      <h3>Search</h3>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Search</td>
            <td>When using all metadata to add criteria that match/don't match. Search can also affect ordering, by ranking best results.</td>
          </tr>
          <tr>
            <td>Filter</td>
            <td>When taking a single criteria that removes items within a list that match/don't match. Filters do not affect ordering.</td>
          </tr>
          <tr>
            <td>Sort</td>
            <td>Orders a list based on a single or grouped criteria</td>
          </tr>
        </tbody>
      </table>
      <h3>Issues</h3>
      <h4>Adjectives (states)</h4>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Don’t</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open</td>
            <td>Don’t use <em>Pending</em> or <em>Created</em></td>
          </tr>
          <tr>
            <td>Closed</td>
            <td>Don’t use <em>Archived</em></td>
          </tr>
          <tr>
            <td>Deleted</td>
            <td>Don’t use <em>Removed</em> or <em>Trashed</em></td>
          </tr>
        </tbody>
      </table>
      <h4>Verbs (actions)</h4>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Use</th>
            <th>Don’t</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New</td>
            <td>Although it’s not a verb, <em>New</em> is a common standard and used for entering the creation mode of a non-existent issue</td>
            <td>Don’t use <em>Create</em>, <em>Open</em>, or <em>Add</em></td>
          </tr>
          <tr>
            <td>Create</td>
            <td>Only to indicate when or who created an issue</td>
            <td></td>
          </tr>
          <tr>
            <td>Add</td>
            <td>Associate an existing issue with an item or a list of items</td>
            <td>Don’t use <em>New</em> or <em>Create</em></td>
          </tr>
          <tr>
            <td>View</td>
            <td>Open the detail page of an issue</td>
            <td>Don’t use <em>Open</em> or <em>See</em></td>
          </tr>
          <tr>
            <td>Edit</td>
            <td>Enter the editing mode of an issue</td>
            <td>Don’t use <em>Change</em>, <em>Modify</em> or <em>Update</em></td>
          </tr>
          <tr>
            <td>Submit</td>
            <td>Finalize the <em>creation</em> process of an issue</td>
            <td>Don’t use <em>Add</em>, <em>Create</em>, <em>New</em>, <em>Open</em>, <em>Save</em> or <em>Save changes</em>
            </td>
          </tr>
          <tr>
            <td>Save</td>
            <td>Finalize the <em>editing</em> process of an issue</td>
            <td>Don’t use <em>Edit</em>, <em>Modify</em>, <em>Update</em>, <em>Submit</em>, or <em>Save changes</em>
            </td>
          </tr>
          <tr>
            <td>Cancel</td>
            <td>Cancel the <em>creation</em> or <em>editing</em> process of an issue</td>
            <td>Don’t use <em>Back</em>, <em>Close</em>, or <em>Discard</em></td>
          </tr>
          <tr>
            <td>Close</td>
            <td>Close an open issue</td>
            <td>Don’t use <em>Archive</em></td>
          </tr>
          <tr>
            <td>Re-open</td>
            <td>Re-open a closed issue</td>
            <td>Don’t use <em>Open</em></td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>Permanently remove an issue from the system</td>
            <td>Don’t use <em>Remove</em></td>
          </tr>
          <tr>
            <td>Remove</td>
            <td>Remove the association an issue with an item or a list of items</td>
            <td>Don’t use <em>Delete</em></td>
          </tr>
        </tbody>
      </table>
      <h3>Merge Requests</h3>
      <h4>Adjectives (states)</h4>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open</td>
          </tr>
          <tr>
            <td>Merged</td>
          </tr>
        </tbody>
      </table>
      <h4>Verbs (actions)</h4>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Use</th>
            <th>Don’t</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add</td>
            <td>Add a merge request</td>
            <td>Do not use <em>create</em> or <em>new</em></td>
          </tr>
          <tr>
            <td>View</td>
            <td>View an open or merged merge request</td>
            <td></td>
          </tr>
          <tr>
            <td>Edit</td>
            <td>Edit an open or merged merge request</td>
            <td>Do not use <em>update</em></td>
          </tr>
          <tr>
            <td>Approve</td>
            <td>Approve an open merge request</td>
            <td></td>
          </tr>
          <tr>
            <td>Remove approval, unapproved</td>
            <td>Remove approval of an open merge request</td>
            <td>Do not use <em>unapprove</em> as that is not an English word</td>
          </tr>
          <tr>
            <td>Merge</td>
            <td>Merge an open merge request</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      -->
    </div>
  </div>
</template>

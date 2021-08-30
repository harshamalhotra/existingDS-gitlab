---
name: Tree
description: Trees provide a clear overview of a structure, apply parent-child hierarchy between elements, and use the concept of progressive disclosure to display this structure to users.
docs: in-progress
related:
- accordion
- breadcrumb
---

Just like [accordions](/components/accordion), trees are vertically stacked. Trees are composed of a main container (tree trunk) which groups related elements (branches), and their related items (leaves). Trees should visually reflect the hierarchy and relationship differences between its elements. See tree [specifications](#specifications) for more details.

## Usage

Consider using a tree as a navigation pattern to map out the relationship and hierarchy between multiple items. For example, a set of projects that are within the same group.

### When to use trees

Use trees to:
- Create hierarchical structure to help users form a mental model of the relationship between elements.

### When not to use trees

Do not use trees to:
- Provide additional information about a specific element of the page, use an [accordion](/components/accordion) instead.
- To display a navigation location, use [breadcrumb](/components/breadcrumb) instead.

### Dos and Dont's

| Dos | Donts |
| ------ | ------ |
| Even if the structure is complex, keep the depth of the hierarchy to 4 levels maximum. (for example, Tree trunk > Branch > Sub-branch > Leaf) | Nest more than 4 levels of hierarchy, as it can make part of the content harder to access. In this case, use a [list](https://design.gitlab.com/components/list). |
| Use a logical order to sort branches/leaves within a tree (for example, start with the most valuable item from a user standpoint or use alphabetical order). | Leave the hierarchy structure unsorted. |
| Visually differentiate the relationship between elements using margin and padding to create the hierarchy structure. | Align branches and leaves right under the tree trunk. |
| Group related content as leaves under the same branch. (for example, Design > Research > Interviews - Personas - Experience Map) | Multiply branches if the content is similar and could be grouped as leaves under a same branch. |

### Specifications

Tree trunks, branches, and leaves all possess a title. Additionally, they may also contain other descriptive elements such as a paragraph or label. Tree trunks and collapsible branches (branches that contain a leaf) should be paired with an icon that clearly signifies the change of state (expand/collapse). This state can be triggered by clicking either the icon, the title, or the row. Trees should visually reflect the hierarchy and relationship differences between its elements using spacing (margin/padding) and/or lines.

#### Tree trunk

The tree trunk is the starting point of the tree. Tree trunks' title informs the user of the content within the related branches and leaves. If the tree represents a navigation structure with anchors (for example, Group Link > Link project 1, Link project 2), clicking the title will navigate to the linked page.

#### Branch

Branches are directly related to tree trunks. Expanding a branch element would unveil a leaf, if leaves are present.

#### Leaf

Leaves are the smallest element possible within the tree. The title should be as specific as possible about the underlying content (for example, "Charts"). Leaves should remain tied to a branch.

## Demo

Using the hierarchy structure set up above, our overall tree should look like the following:

Todo: add tree example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=6175%3A17)

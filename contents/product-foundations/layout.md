---
name: Layout
---

Layout defines how content and design system elements are organized and respond in the GitLab interface. A good layout creates clear hierarchy, predictability, and utility. To effectively use layout, you'll need to understand:

- **The Framework:** Rules and scaffolding that govern the layout system
- **Building blocks:** The things you build with to compose a layout
- **Behaviors:** How things in the layout act and respond

## Framework

The framework establishes the foundational structure and rules that govern how layouts are composed and behave. It defines the relationships between interface layers, how content adapts to different contexts, and the systematic approach to spacing and organization.

### Page composition

A page is everything visible in the viewport — the complete interface a user sees at any moment. It combines the application chrome with panels and their content to create a unified experience.

The application chrome provides the constant foundation while panels adapt to context and user needs. Content within panels works harmoniously with the application chrome elements and other visible panels. Consider how information flows between these layers and how the user navigates through them.

Effective page composition establishes clear visual hierarchy while maintaining parity with the DOM structure. Visual presentation should reinforce, not contradict, the underlying document order to ensure the interface works predictably for all users. When content reflows due to space constraints, maintain these structural relationships to avoid disorienting rearrangements.

<figure-img alt="Wireframe of a typical GitLab application page composition" label="Application page composition" src="/img/layout-cover.svg"></figure-img>

### Application chrome

The application chrome is the lowest layer of the interface. It integrates several elements directly, and panels are a layer above to create depth and hierarchy in the layout. The application chrome is themeable, making it easier to differentiate instances or satisfy user preference. The following items are strategically organized and integrated into the application chrome:

<figure-img alt="Wireframe with markers to identify where application chrome elements reside" label="Application chrome" src="/img/layout-app-chrome.svg"></figure-img>

1. **Global navigation and search:** Wayfinding across the entire application context
1. **User actions:** User-specific actions and authentication options
1. **Application navigation:** Access to features in the application that impact the static panel contents
1. **AI navigation:** Actions that intelligently control and interact with the AI panel

### Panel-based layout

Panels help a user navigate complex workflows by organizing related content and functionality into focused, manageable areas. This structure maintains clear context and relationships between different tasks, allowing a user to work more efficiently. The interface is organized into three distinct panel types. Up to one panel of each type can be open simultaneously, for a total of 1–3 panels at any time:

<figure-img alt="Wireframe with markers to identify the three possible panels" label="Panels" src="/img/layout-panels.svg"></figure-img>

1. **Static panel** for the primary context
1. **Dynamic panel** (optional) that adapts to the primary context
1. **AI panel** (collapsible) for intelligent features

A dynamic panel is tied to the static panel and only appears while viewing that page. When the static panel updates, the dynamic panel updates or is removed accordingly. Navigating away removes the dynamic panel.

#### Names for external communication

Use these names to refer to parts of the UI in UI text messages, documentation, and marketing materials:

<figure-img alt="Wireframe of a typical GitLab application page composition" label="Application names for external use" src="/img/layout-external-names.svg"></figure-img>

1. **Top bar**
1. **Left sidebar**
1. **{currentContext} panel** based on the primary context, for example, if the context is a merge request, refer to it as the "merge request panel"
1. **Details panel** supports the primary context
1. **GitLab Duo panel** to match and enforce a user's mental model; it's not just any AI
1. **GitLab Duo sidebar**

With the exception of **GitLab Duo**, use lowercase for all terms.

Do not use the following terms externally as they're less descriptive and could cause confusion:

- AI panel
- Nav (or navigation)
- Chrome

### Media and container queries

The layout system uses different parameters to determine when and how content should adapt to varying contexts and constraints.

- **Media queries** conditionally apply CSS styles to an element based on the current user environment. For example viewport size, system light or dark mode, and input device.
- **Container queries** conditionally apply CSS styles to an element based on certain attributes of the parent container. For example, the parent's size, applied styles, or scroll state.

The layout system typically uses media queries to support major layout changes to the application chrome and panels based on viewport width, and container queries to support major layout changes to panel content based on panel width.

### Design tokens and spacing rules

<todo>Add relevant design tokens (constants, semantic, contextual) and general spacing rules.</todo>

## Building blocks

Building blocks work together to create organized, intuitive interfaces that help a user find and use what they need. A user can quickly understand and navigate content when related items are grouped through proximity, similar elements show clear relationships, and boundaries create distinct areas. Primary content should be immediately visible, secondary content easily accessible, and supporting information available through progressive disclosure.

The building blocks that follow provide the tools to create this clarity: alignment creates structure and order while containers define relationships between content. Each building block serves a specific purpose in making a user's workflow more organized and efficient.

### Alignment

Alignment supports a natural reading pattern, primarily the F-pattern where a user scans horizontally across the top, then down the left side, and across again. Alignment determines how elements relate to each other visually, providing invisible structure for organizing content.

Rather than apply uniform alignment rules across all elements, consider how each element should align based on its relationship to surrounding content and the general reading pattern. Alignment can flow from one element to the next to create better visual hierarchy and scannability.

Choose alignment based on content characteristics:

- **Similar-sized elements:** Often work well with centered alignment.
- **Varied content heights:** Typically benefit from top alignment for better visual anchoring.
- **Common edges:** Establish consistent left or right edges to create visual order and strengthen relationships.
- **User's task:** Consider whether the content requires comparison or sequential reading.
- **Content type:** Data tables, forms, and prose each have different alignment needs.
- **Natural flow:** Respect natural pauses versus continuity in the content.
- **Visual weight:** Balance heavier elements with appropriate alignment choices.
- **Responsive behavior:** Ensure alignment choices work across different viewport sizes.

<figure-img alt="Common edge alignment example" label="Example with common edges established." src="/img/layout-alignment-2.svg"></figure-img>

<figure-img alt="Cascading alignment example" label="Example of each element aligning with the previous one for ideal visual flow and anchoring." src="/img/layout-alignment-1.svg"></figure-img>

### Content containers

Content containers define content boundaries within a layout. They group related content using background surfaces, [borders](/product-foundations/border), and whitespace to create clear groupings that help a user understand content relationships and navigate complex interfaces. Because content is already within a panel, use content containers sparingly to avoid the effect of too many nested boxes. There's a range of container types and visual presentation. The two container categories are:

- **Generic (presentational):** Establish visual hierarchy without specific meaning.
- **Semantic:** Associated with a container's purpose in the interface.

#### Generic (presentational)

Presentational containers create varying degrees of visual emphasis, from subtle organization to strong prominence, letting you choose the appropriate attention level for content groupings. Presentational intent remains consistent across modes, meaning that a strong container in light mode will also be strong in dark mode.

- **Default:** Provide standard visual separation without drawing excessive attention. Use default when you need clear content boundaries that don't compete with the other content for focus.
- **Subtle:** Create minimal visual presence while still defining content areas. Use subtle when grouping is helpful but shouldn't be visually prominent, or when you need to establish hierarchy without adding visual weight.
- **Strong:** Create pronounced emphasis and draw attention to important content. Use strong sparingly to highlight key information or critical interface areas that need to stand out from surrounding content.

Acceptable combinations (background + border):

```html
<!-- live-example -->
<div class="gl-text-base gl-grid gl-grid-cols-3 gl-gap-5">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-default">default + default</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-subtle">default + subtle</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-strong">default + strong</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-subtle gl-border gl-border-subtle">subtle + subtle</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-strong gl-border gl-border-strong">strong + strong</div>
</div>
```

#### Semantic

Semantic containers indicate their purpose in the interface through meaningful attributes that convey function rather than just visual hierarchy. Unlike generic containers, semantic containers may have different presentation goals between modes. For example, an overlap in light mode relies more on a border for visual distinction, while in dark mode it relies more on the background color. Refer to the [color design principles](/product-foundations/color#design-principles) for more details about color and mode.

- **Section:** Create complete content enclosures that are visually distinct from the panel background. Use sections to group major content areas that need clear boundaries.
- **Overlap:** Define content that appears above other interface elements. Use overlap for components and sticky elements that need to visually layer over existing content.
- **Disabled:** Indicate unavailable or non-interactive content areas. Use disabled containers to visually communicate that content or functionality is temporarily unavailable.

##### Section

A section encloses its content to literally create a visually defined _section_ that is distinct from the default panel background and other content. A section must:

- Be entirely enclosed in a section border.
- Only include section borders within its boundaries.
- Not include nested sections.
- Use the section background color at the parent level.

A section can also include nested containers that:

- Use a subtle background when visual hierarchy is needed.
- Use feedback or status backgrounds for feedback and status regions.
- Have no background or border applied.

```html
<!-- live-example -->
<div class="gl-border gl-border-section gl-rounded-lg gl-overflow-hidden gl-text-base gl-mb-4">
  <div class="gl-border-b gl-border-b-section gl-bg-section gl-p-5">
    section + section
  </div>
  <div class="gl-bg-subtle gl-p-5">
    subtle + section
  </div>
</div>
<div class="gl-border gl-border-section gl-rounded-lg gl-overflow-hidden gl-text-base gl-mb-4">
  <div class="gl-border-b gl-border-b-section gl-bg-section gl-p-5">
    section + section
  </div>
  <div class="gl-bg-feedback-success gl-p-5">
    feedback success + section
  </div>
</div>
<div class="gl-border gl-border-section gl-rounded-lg gl-overflow-hidden gl-text-base">
  <div class="gl-border-b gl-border-b-section gl-bg-status-warning gl-p-5">
    status warning + section
  </div>
  <div class="gl-bg-section gl-p-5">
    section + section
  </div>
</div>
```

##### Overlap

An overlap container is useful for components and content that overlaps other content. For example, a [popover](/components/popover), [drawer](/components/drawer), [modal](/components/modal), or sticky header. Any generic border can be used in combination, but isn't required. Overlap is combined with [shadows](/product-foundations/elevation#shadows) to increase the perception of depth.

```html
<!-- live-example -->
<div class="gl-text-base">
 <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-border gl-border-default">overlap + default</div>
</div>
```

##### Disabled

A disabled container is visually subdued to infer unavailability or non-interaction. Consider pairing with other disabled styles and a subtle border.

```html
<!-- live-example -->
<div class="gl-text-base">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-disabled gl-border gl-border-subtle gl-text-subtle">disabled + subtle</div>
</div>
```

## Behaviors

Behaviors define how layout elements respond to user interactions, content changes, and viewport variations. These dynamic aspects ensure layouts remain functional and accessible across different contexts and user needs.

### Responsive adaptation

Content should reflow gracefully when space constraints change, adapting to different viewport and container sizes while maintaining usability. Use the framework's media and container queries to ensure content remains functional across all contexts.

### Content truncation and overflow

Content should be fully visible whenever possible. Only truncate content when length or wrapping would break a component, negatively impact surrounding content, or cause content to flow off screen.

When truncation is necessary, provide clear methods for a user to access the full information. Use a [tooltip](/components/tooltip) for non-critical reference content, or [ellipsis button](/components/button#ellipsis) when a user needs access to complete text for comparison or critical tasks.

For scrollable content areas, provide visual indication when content extends beyond the visible area. Use scrims (gradient overlays) or other visual cues to signal scrollable content or additional information that a user can access.

### Sticky and anchored elements

Sticky and anchored elements remain visible during scrolling to keep relevant actions accessible. Use sparingly and with [elevation](/product-foundations/elevation) to clearly indicate the sticky behavior. Avoid crowding the interface or significantly reducing content area.

### Focus management

Layout should support clear focus indication and logical tab order. Interactive elements need sufficient space for focus indicators, and related actions should be grouped to create predictable navigation patterns.

When panels or content areas change dynamically, manage focus appropriately. If a user action opens a panel or modal, focus should move to the new content. When closing panels, return focus to the element that triggered the action, maintaining the user's place in the interface.

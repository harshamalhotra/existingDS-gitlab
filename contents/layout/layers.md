---
name: Layers
---

Layers addresses dimensional hierarchy and content relationships — not just top-down or scale, but also depth (z-index) and dynamic changes based on state or overflow. Visual styles and affordance that indicate depth, content boundaries, and state are also encompassed within layers.

## Shadows

### Small

<figure class="figure" role="figure" aria-label="Small shadow example with elevation">
  <img class="figure-img gl-mb-5" src="/img/layers/layers-shadow-small.png" alt="Small shadow example with elevation" role="img" />
  <figcaption class="figure-caption">Small shadow example with elevation</figcaption>
</figure>

#### Definition

Surfaces that need an indication they can be manually interacted with. For example, cards in issue boards.

#### Components

* [Card](/components/card)
* *Components with shadow boundaries*

#### Attributes

* Passive, defines surface bounds when on a white backgrounds.
* Indicates surface can be interacted with.

#### Style

`box-shadow:`<br>`0px 1px 2px rgba(0, 0, 0, 0.1)`

### Medium

<figure class="figure" role="figure" aria-label="Medium shadow example with elevation">
  <img class="figure-img gl-mb-5" src="/img/layers/layers-shadow-medium.png" alt="Medium shadow example with elevation" role="img" />
  <figcaption class="figure-caption">Medium shadow example with elevation</figcaption>
</figure>

#### Definition

Surfaces that need boundary definition and appear on hover. For example, [popovers](/components/popover).

#### Components

* [Popover](/components/popover)
* [Date picker](/components/date-picker)
* Dropdown
    * [Disclosure](/components/dropdown-disclosure)
    * [Listbox](/components/dropdown-listbox)
    * [Combobox](/components/dropdown-combobox)
    * [Menu](/components/dropdown-menu)
* *Nagivation: Flyout Menus*
* *Stacked elevation components*
* *Cards when dragged*

#### Attributes

* Surfaces that appear on hover.
* Components layered above other components. Stacked layers and static components that have content that scrolls beneath.

#### Style

`box-shadow:`<br>`0px 2px 8px rgba(0, 0, 0, 0.16),`<br>`0px 0px 2px rgba(0, 0, 0, 0.16);`

### Large

<figure class="figure" role="figure" aria-label="Large shadow example with elevation">
  <img class="figure-img gl-mb-5" src="/img/layers/layers-shadow-large.png" alt="Large shadow example with elevation" role="img" />
  <figcaption class="figure-caption">Large shadow example with elevation</figcaption>
</figure>

#### Definition

Large surfaces that present additional context to the user. 

#### Components

* [Modal](/components/modal)
* [Drawer](/components/drawer)

#### Attributes

* Passive, defines large surfaces presented as additional context to the user.

#### Style

`box-shadow:`<br>`0px 4px 12px rgba(0, 0, 0, 0.16),`<br>`0px 0px 4px rgba(0, 0, 0, 0.16);`

## Stacking & overflowing layers

Layers that need to appear above a layer with an existing elevation should follow the stacking guidelines. By default, these stacked layers will use the md-shadow.

### Use case

- Content scrolls beneath static elements

<figure class="figure" role="figure" aria-label="Stacking layers example with elevation">
  <img class="figure-img gl-mb-5" src="/img/layers/layers-scrolling.png" alt="Stacking layers example with elevation" role="img" />
  <figcaption class="figure-caption">Stacking layers example with elevation</figcaption>
</figure>

## Interactive layers

Layers that can be moved or dragged by the user use the large shadow to create a greater sense of depth in the UI and define the element from other elements that may have an existing elevation.

### Use case 

<figure class="figure" role="figure" aria-label="Interactive layers example with elevation">
  <img class="figure-img gl-mb-5" src="/img/layers/layers-interactive.png" alt="Interactive layers example with elevation" role="img" />
  <figcaption class="figure-caption">Interactive layers example with elevation</figcaption>
</figure>

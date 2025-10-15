---
name: Elevation
---

Elevation addresses dimensional hierarchy and content relationships — not just top-down or scale, but also depth (z-index) and dynamic changes based on state or overflow. Visual styles and affordance that indicate depth, content boundaries, and state are also encompassed within layers.

## Shadows

```html
<!-- live-example -->
<div class="gl-grid md:gl-grid-cols-3 gl-gap-5 gl-text-base gl-p-8 gl-bg-subtle">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-shadow-sm">
    sm
  </div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-shadow-md">
    md
  </div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-shadow-lg">
    lg
  </div>
</div>
```

### Small

Surfaces that need an indication they can be manually interacted with. For example, cards in issue boards.

* Passive, defines surface bounds when on a default background.
* Indicates surface can be interacted with.

```html
<div class="gl-shadow-sm">…</div>
```

**Used in:** Elements with shadow boundaries

### Medium

Surfaces that need boundary definition and appear on hover. For example, [popovers](/components/popover).

* Surfaces that appear on hover.
* Components layered above other components. Stacked layers and static components that have content that scrolls beneath.

```html
<div class="gl-shadow-md">…</div>
```

**Used in:** [popover](/components/popover), [date picker](/components/date-picker), [dropdown disclosure](/components/dropdown-disclosure), [dropdown combobox](/components/dropdown-combobox)
, navigation flyouts, stacked elevation components, cards when dragged

### Large

Large surfaces that present additional context to the user.

* Passive, defines large surfaces presented as additional context to the user.

```html
<div class="gl-shadow-lg">…</div>
```

**Used in:** [modal](/components/modal), [drawer](/components/drawer)

## Stacking & overflowing layers

A layer that appears above another with an existing elevation should follow the stacking guidelines. By default, a stacked layer will use the medium shadow when content scrolls beneath it.

<figure-img label="Stacking layers example with elevation" src="/img/layers/layers-scrolling.png"></figure-img>

## Interactive layers

A layer that's being moved or dragged uses the large shadow to create a greater sense of depth in the UI and differentiates the element from other elements that may have an existing elevation.

<figure-img label="Interactive layers example with elevation" src="/img/layers/layers-interactive.png"></figure-img>

## Code reference

A shadow can be applied with either `box-shadow` or `filter: drop-shadow()` CSS properties. `gl-shadow-*` utilities apply the `box-shadow` property, and `gl-drop-shadow-*` utilities apply the `filter` property.

A `gl-shadow-*` class is preferred unless the shadow is required on a pseudo element. In these cases `gl-drop-shadow-*` can be used, for example the tip on [dropdown](/components/dropdown-overview), [tooltip](/components/tooltip), and [popover](/components/popover).

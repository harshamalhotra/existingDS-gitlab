---
name: Glossary of terms
---

## Terms

### Adoption

The measure of how widely and consistently the design system is being used in GitLab products and teams. Adoption includes both the integration of design system components in new features and the migration of existing interfaces to use standardized patterns.

### Component

A component is a UI element that serves a singular purpose or function. Two or more simple components can combine to form a composite component that still has a single function. Components exist in three forms:

- Design Component: The Figma representation including all variants and states.
- Vue Component: The coded implementation for Vue applications.
- Rails Component: The coded implementation for Rails applications (ViewComponents).

### Composition

Building complex UI by combining simpler components together, rather than creating monolithic components.

### Core

Components and patterns that are fully documented, tested, and approved for general use across GitLab.

### Design System

The complete ecosystem of design and code resources that ensure consistent user experiences across GitLab. Includes [foundations](/product-foundations), [components](/components), [patterns](/patterns), and many other guidelines.

### Design Token

A design decision stored as data, representing visual properties like color, typography, spacing, or shadow. Always use "design token" instead of simply "token" since there is a [token](/components/token) component in the design system.

### Directive

A [directive](/directives) is a reusable Vue.js instruction that provides HTML elements with custom behavior. They provide common functionality like detecting clicks outside elements, preloading resources on hover, or sanitizing HTML content.

### Element

A generic term for any HTML element, DOM node, or brand building block. To avoid confusion, use more specific terms when possible like "component," "foundation," or "HTML element."

### Extended

Experimental or product-specific components, patterns, or concepts that extend the core system. These may be promoted to core after validation or remain specialized.

### Extension (component)

Adding functionality or modifying behavior of an existing component through props, slots, or composition rather than creating a new component.

### Foundation (design system category)

[Foundational items](/product-foundations) communicate the opinionated way in which basic visual design attributes, elements, and concepts come together to create a distinct GitLab personality that's expressed in the UI. For example, [color](/product-foundations/color), [typography](/product-foundations/type-fundamentals), and [iconography](/product-foundations/iconography).

### GitLab UI

The Vue.js library that provides design system utilities, components, and assets.

### Object

An [object](/objects) is a conceptual building block or concept that defines how we think about something independent of its visual representation or interaction model. For example, a job, merge request, or repository.

### Pajamas

GitLab's design system. The name refers to the overall system, not individual parts.

### Pattern

A [pattern](/patterns) is a repeatable solution to a common design problem, typically combining multiple components and/or foundations to achieve a specific user goal (for example, [empty states](/patterns/empty-states), [forms](/patterns/forms), and [progressive disclosure](/patterns/progressive-disclosure)).

### Props (properties)

Options passed to components that control their appearance, behavior, or content.

### Slot

A placeholder within a component where custom content can be inserted. A slot enables flexibility without modifying the component's structure, commonly used for composing complex components from simpler ones.

### State

The condition an element can be in (like hover, active, disabled, focus, invalid). Unlike variants, states are usually a result of user interaction or a predetermined condition.

### UI Kit

The collection of official [GitLab Figma Design files](https://www.figma.com/files/972612628770206748/project/3802635) that represent GitLab user interface elements.

### Variant

A predefined visual or behavioral configuration of a component, typically controlled by props (for example, `variant="danger"` for a button).

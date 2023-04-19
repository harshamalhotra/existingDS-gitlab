---
name: Annotation
---

We use three primary methods to add descriptive, helper content for components and design assets in Figma.

1. **Layer**
   - Audience: designers and users of the design file.
   - Use text layers for headings to categorize variants and instances.
   - Use the **Utility/Sticky** component to add a visible note in relation to the design. There are plugins that do similar, but we don’t want to rely on them staying up-to-date. Notes like these should be temporary in nature, and not need to persist.
1. **Comment**
   - Audience: everyone.
   - Use comments to engage with others in a conversation about the design. These conversations can be resolved and will persist as part of the history of the design file.
   - Use comments for annotations on instances, where descriptions are not possible.
   - Use comments when the intended audience may not have edit permissions, since component descriptions are limited to editors at the point of use. This would be beneficial for developer handoff.
1. **Component description**
   - Audience: designers who are referencing or using final components in new designs.
   - Use descriptions to identify the purpose and intended use of the component.
   - Consider using keywords in the description as meta for search. For example, “Keywords: wrench, tool, admin” used for a wrench icon that is used to represent admin in the product.
   - Consider mentioning where the component is used in the product, or for what purpose.
   - Include usage notes that are applicable at the point of use.
   - Keep descriptions short, when possible.
   - Add a documentation link (to Pajamas) when possible.

| **Component description and link in library** | **Description and link when inspecting** |
| ------ | ------ |
| ![Editing component description in Figma properties panel](/img/component-desc.png) | ![Reading component description in Figma inspect panel](/img/component-inspect.png) |

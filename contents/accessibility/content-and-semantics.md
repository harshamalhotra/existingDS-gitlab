---
name: Content and semantics
---

**Principle:** Content should be structured, understandable, and appropriately written for the audience.

Clear, well-structured content benefits all users, whether they're temporarily distracted, have visual or cognitive disabilities, or varying comprehension levels. By focusing on clarity and providing alternative formats, we create content that's more accessible to everyone.

Content refers to information conveyed through text, graphics, audio, and video. In some instances, the content can be provided in multiple ways, like an image with alt text. Semantics refers to the logical and meaningful structure of content, particularly how elements are organized hierarchically, like properly nested headings, and the use of appropriate HTML elements to convey the correct meaning and relationships between different parts of the content.

**Sections**

- [Plain language](#plain-language)
- [Content structure](#content-structure)
- [Resources](#resources)

## Plain language

Plain language ensures communication is understood the first time users read or hear it. As defined by the [Plain Writing Act of 2010](https://www.gpo.gov/fdsys/pkg/PLAW-111publ274/content-detail.html), plain language is "writing that is clear, concise, well-organized, and follows other best practices appropriate to the subject or field and intended audience".

### Expected behavior

- Content is organized logically with the reader in mind.
- Content matches the audience's needs and comprehension level.
- Writing follows our [UI text guidelines](/content/ui-text).
- Text uses common, everyday words.
- Design features support easy reading.

### Identifying problems

- Complex or technical language without explanation:
  - Define technical terms on first use.
  - Provide a glossary for frequently used terms.
  - Use simpler alternatives when possible.
- Long, complicated sentences:
  - Break into shorter, clearer sentences.
  - Use bullet points to communicate complex ideas.
  - Keep paragraphs focused on single topics.
- Use of passive voice:
  - Use active voice (see [documentation style guide](https://docs.gitlab.com/ee/development/documentation/styleguide/#active-voice)).
  - Restructure sentences to lead with the subject.
  - Review for and replace passive constructions.
- Ambiguous calls to action:
  - Replace generic phrases like "click here" with specific actions. Also, learn [how calls to action impact a screen reader user](/accessibility/screen-readers#calls-to-action).
  - Include clear destinations in link text.
  - Describe specific outcomes of actions.

## Content structure

Well-structured content helps users find and understand information quickly, whether they're scanning visually or using assistive technology.

### Expected behavior

- Headings create a clear, scannable outline of content and accurately preview the content that follows.
- Heading hierarchy follows correct semantic structure (level 1–6 sequentially).
- Content is presented in a logical sequence on the page.

### Identifying problems

- Incorrect heading hierarchy:
  - Ensure heading levels don't skip and are nested correctly.
  - Use headings to represent actual section structure.
- Unclear section organization:
  - Add descriptive headings for each section.
  - Ensure logical content grouping.
  - Use appropriate semantic HTML elements. Also, learn [how headings and semantic elements impact a screen reader user](/accessibility/screen-readers#page-structure).
- Poor content flow:
  - Ensure smooth transitions between topics.

## Resources

- [Readability Analyzer](https://datayze.com/readability-analyzer.php)
- [Federal Plain Language Guidelines](https://web.archive.org/web/20250930000635/https://plainlanguage.gov/guidelines/)
- [Plain Writing Page Template](https://web.archive.org/web/20250919222225/https://www.plainlanguage.gov/law/page-template/)
- [Plain Language Checklists](https://web.archive.org/web/20250919222218/https://www.plainlanguage.gov/resources/checklists/)
- [WebAIM Screen Reader Survey Results](https://webaim.org/projects/screenreadersurvey10/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)

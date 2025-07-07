---
name: Example page contents
---

## Content

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

The p HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

Paragraphs can contain inline elements such as <a href="#">links</a>, <abbr title="abbreviation">abbr</abbr>, <strong>strong</strong>, <em>emphasis</em>, <del>delete</del>, <u>underline</u>, <b>bold</b>, <i>italic</i>, <s>strikethrough</s>,<mark>mark</mark>, <kbd>key</kbd>, <code>code</code>, <q>quotation</q>, <small>small</small>, <sub>subscript</sub>, <sup>superscript</sup>, and <var>variable</var> elements.

```js
javascript:(function() { document.documentElement.classList.toggle('gl-dark'); })();
```

The p HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

> The blockquote HTML element indicates that the enclosed text is an extended quotation.
> Usually, this is rendered visually by indentation.
> A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the cite element.

The p HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

<todo>To do something soon</todo>

<note>Noting something important</note>

### Lists

- Unordered list item
  - Child unordered list item
    - Grandchild unordered list item
    - Grandchild unordered list item
  - Child unordered list item
- Unordered list item
- Unordered list item

1. Unordered list item
   1. Child unordered list item
      1. Grandchild unordered list item
      1. Grandchild unordered list item
   1. Child unordered list item
1. Unordered list item
1. Unordered list item

### Table

| Table header | Table header | Table header |
| ------------ | ------------ | ------------ |
| Table cell   | Table cell   | Table cell   |
| Table cell   | Table cell   | Table cell   |
| Table cell   | Table cell   | Table cell   |

### Live example

```html
<!-- live-example -->
<gl-alert
  title="Example"
  variant="info"
  primary-button-text="Okay"
  secondary-button-text="Cancel"
>
  Here's an example informational alert.
</gl-alert>
```

### Syntax highlighting

```js
// Single line comment
import { module } from 'library';

/* Multi-line comment */
const CONSTANT = 'value';
let variable = null;

// Class definition
class Example {
  constructor(param) {
    this.property = param;
  }

  async method(arg = 42) {
    try {
      const result = await func(`template ${this.property}`);
      return result.data;
    } catch (error) {
      console.log('Error:', error);
      return false;
    }
  }
}

// Function with regex
const validate = (input) => {
  const pattern = /^[a-z]+$/;
  return pattern.test(input);
};
```

## Components

### Figure image

<figure-img src="https://placehold.co/640x320" alt="Alt text" label="Label text"></figure-img>

#### Figure image grid

<grid>
  <figure-img src="https://placehold.co/640x320" alt="Alt text" label="Label text" width="320"></figure-img>
  <figure-img src="https://placehold.co/640x320" alt="Alt text" label="Label text" width="320"></figure-img>
</grid>

### Do and don't

<do>Do this</do>
<dont>Don't do this</dont>

#### Do and don't Grid

<grid>
  <do>Do this</do>
  <dont>Don't do this</dont>
  <do>Do this</do>
  <dont>Don't do this</dont>
  <do>Do this</do>
  <dont>Don't do this</dont>
</grid>

### Figma embed

<figma-embed label="Figma embed label" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fsd0mmLWaejswQUSJ3ei3kj%2FComponent-Lifecycle%3Fpage-id%3D0%253A1%26node-id%3D77%253A2122%26viewport%3D-2283%252C1047%252C0.36993077397346497%26scaling%3Dscale-down"></figma-embed>

### Story viewer

<story-viewer component="tokens-color-constant" story="blue" title="Tokens"></story-viewer>

### Vimeo player

<vimeo-player title="Illustration" video-id="791344150"></vimeo-player>

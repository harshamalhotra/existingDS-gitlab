---
name: Punctuation
summary: Apply punctuation marks consistently and purposefully to enhance clarity and readability in UI text and documentation.
---

## Periods

A period signals to a speaker or reader that a sentence has come to an end, and it assists users in visually breaking up content.

- Do **not** use periods:
  - For the label of a UI element. For example, for the label associated with a checkbox, text box, or button.
  - For the title of a UI element. For example, for the title of a banner, warning, broadcast message, dialog box, or modal.
  - In tooltips that are not complete sentences.
- Use periods:
  - For additional help text. For example, for text in banners, warnings, popovers, and for the extra description below a checkbox or text box.

Follow these additional guidelines:

Use periods with links that are full sentences.

<grid>
<do>

Mention someone to notify them. [Learn more](https://docs.gitlab.com). This is another sentence.

</do>
<dont>

Mention someone to notify them. [More](https://docs.gitlab.com).

</dont>
</grid>

Use a period after every bullet point that is a sentence.

<grid>
<do>

- This is a complete sentence.
- This is also a complete sentence.

</do>
<dont>

- This is a complete sentence, it needs a period
- This is also a complete sentence, it also needs a period

</dont>
</grid>

Use a period after every bullet point that completes the introductory stem.

<grid>
<do>

This is an introductory stem:

- Completed by this sentence.
- Also completed by this sentence.

</do>
<dont>

This is an introductory stem:

- Completed by this sentence
- Also completed by this sentence.

</dont>
</grid>

Use no punctuation after bullets that are not sentences and do not complete the stem.

<grid>
<do>

These are just words in a list:

- One item
- Two item

</do>
<dont>

These are just words in a list:

- One item.
- Two item.

</dont>
</grid>

Use all sentences or all fragments in a bulleted list, not a mixture.

<grid>
<do>

- Consistency is key here.
- Item.
- Don’t mix sentences and individual items in a list.

</do>
<dont>

- Consistency is key here.
- Item
- Don’t mix sentences and individual items in a list.

</dont>
</grid>

## Numbers

Use “1, 2, 3” instead of “one, two, three” for numbers. One exception is when mixing uses of numbers, such as “Enter two 3s.”

<grid>
  <do>3 new commits</do>
  <dont>Three new commits</dont>
  <do>Enter two 3s.</do>
  <dont>Enter 2 3s.</dont>
</grid>

## Punctuation overview

Use punctuation to add clarity or be grammatically correct.

<table>
  <thead>
    <tr>
      <th>Punctuation mark</th>
      <th>Copy and paste</th>
      <th>HTML entity</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Period</td>
      <td><strong>.</strong></td>
      <td></td>
      <td>Use in lists or modals with full and multiple sentences, and any sentence followed by a link or inline code.<br /><br />Place inside quotation marks, unless you’re telling the reader what to enter and it’s ambiguous whether to include the period.</td>
    </tr>
    <tr>
      <td>Comma</td>
      <td><strong>,</strong></td>
      <td></td>
      <td>Place inside quotation marks.<br /><br />Use a <a
        href="https://en.wikipedia.org/wiki/Serial_comma"
        title="“Serial comma” in Wikipedia"
      >serial comma</a> in lists of three or more terms.</td>
    </tr>
    <tr>
      <td>Exclamation point</td>
      <td><strong>!</strong></td>
      <td></td>
      <td>Avoid exclamation points, as they tend to come across as shouting. Some exceptions include greetings or congratulatory messages.</td>
    </tr>
    <tr>
      <td>Colon</td>
      <td><strong>:</strong></td>
      <td><code>&amp;#58;</code></td>
      <td>Omit from form labels.</td>
    </tr>
    <tr>
      <td>Apostrophe</td>
      <td><strong>’</strong></td>
      <td><code>&amp;rsquo;</code></td>
      <td>Use for contractions (I’m, you’re, ’89) and to show possession.<br /><br />To show possession, add an <em>’s</em> to all singular common nouns and names, even if they already end in an <em>s</em>: “Look into this worker process’s log.” For singular proper names ending in <em>s</em>, use only an apostrophe: “James’ commits.” For plurals of a single letter, add an <em>’s</em>: “Dot your i’s and cross your t’s.”<br /><br />Omit for decades or acronyms: “the 1990s”, “MRs.”</td>
    </tr>
    <tr>
      <td>Quotation marks</td>
      <td>
        <strong>“</strong><br /><br /><strong>”</strong><br /><br /><strong>‘</strong><br /><br /><strong>’</strong>
      </td>
      <td>
        <code>&amp;ldquo;</code><br /><br /><code>&amp;rdquo;</code><br /><br /><code>&amp;lsquo;</code><br /><br /><code>&amp;rsquo;</code>
      </td>
      <td>Use proper quotation marks (also known as smart quotes, curly quotes, or typographer’s quotes) for quotes. Single quotation marks are used for quotes inside of quotes.<br /><br />The right single quotation mark symbol is also used for apostrophes.<br /><br />Don’t use primes, straight quotes, or free-standing accents for quotation marks.</td>
    </tr>
    <tr>
      <td>Straight quotes and accents</td>
      <td>
        <strong>"</strong><br /><br /><strong>'</strong><br /><br /><strong>`</strong><br /><br /><strong>´</strong>
      </td>
      <td></td>
      <td>Don’t use straight quotes or free-standing accents for primes or quotation marks.<br /><br />Proper typography never uses straight quotes. They are left over from the age of typewriters, and their only modern use is for code.</td>
    </tr>
    <tr>
      <td>Ellipsis</td>
      <td><strong>…</strong></td>
      <td><code>&amp;hellip;</code></td>
      <td>Use to indicate an action in progress (“Downloading…”), incomplete or truncated text, or where an action continues on a subsequent step (for example, in a <a href="/components/button/#labels">button label</a>). No space before the ellipsis.</td>
    </tr>
    <tr>
      <td>Chevrons</td>
      <td>
        <strong>«</strong><br /><br /><strong>»</strong><br /><br /><strong>‹</strong><br /><br /><strong>›</strong><br /><br /><strong>&lt;</strong><br /><br /><strong>&gt;</strong>
      </td>
      <td>
        <code>&amp;#171;</code><br /><br /><code>&amp;#187;</code><br /><br /><code>&amp;#8249;</code><br /><br /><code>&amp;#8250;</code><br /><br /><code>&amp;lt;</code><br /><br /><code>&amp;gt;</code>
      </td>
      <td>Omit from links or buttons that open another page or move to the next or previous step in a process. Also known as angle brackets, angular quote brackets, or guillemets. We use <a href="/product-foundations/iconography">icons</a> in place of written chevrons.</td>
    </tr>
    <tr>
      <td>Em dash</td>
      <td><strong>—</strong></td>
      <td><code>&amp;mdash;</code></td>
      <td>Avoid using dashes to separate text. If you must use dashes for this purpose — like this — use an em dash surrounded by spaces.</td>
    </tr>
    <tr>
      <td>En dash</td>
      <td><strong>–</strong></td>
      <td><code>&amp;ndash;</code></td>
      <td>Use an en dash without spaces instead of a hyphen to indicate a range of values, such as numbers, times, and dates: “3–5 kg”, “8:00 AM–12:30 PM”, “10–17 Jan”</td>
    </tr>
    <tr>
      <td>Hyphen</td>
      <td><strong>-</strong></td>
      <td></td>
      <td>Use to represent negative numbers, or to avoid ambiguity in adjective-noun or noun-participle pairs. Example: “anti-inflammatory”; “5-mile walk.”<br /><br />Omit in commonly understood terms and adverbs that end in <em>ly</em>: “frontend”, “greatly improved performance.”<br /><br />Omit in the term “open source.”</td>
    </tr>
    <tr>
      <td>Parentheses</td>
      <td><strong>( )</strong></td>
      <td></td>
      <td>Use only to define acronyms or jargon: “Secure web connections are based on a technology called SSL (the secure sockets layer).”<br /><br />Avoid other uses, and instead rewrite the text or use dashes or commas to set off the information. If parentheses are required: If the parenthetical is a complete, independent sentence, place the period inside the parentheses; if not, the period goes outside.</td>
    </tr>
  </tbody>
</table>

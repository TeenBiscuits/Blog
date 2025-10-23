---
id: 'test'
title: 'TEST IN ENGLISH'
description: |
  This document is designed to exercise a wide range of Markdown features to help you validate a website’s Markdown implementation. It includes headings, emphasis, lists, links, images, tables, code, blockquotes, horizontal rules, footnotes, task lists, definition lists, math, and more. It follows the specified formatting rules for tables, math LaTeX delimiters, and indentation.
pubDate: 'Oct 16 2025'
coverImageCredit: 'Foto de Caleb Miller en, Unsplash'
---

This document is designed to exercise a wide range of Markdown features to help you validate a website’s Markdown implementation. It includes headings, emphasis, lists, links, images, tables, code, blockquotes, horizontal rules, footnotes, task lists, definition lists, math, and more. It follows the specified formatting rules for tables, math LaTeX delimiters, and indentation.

---

## Headings

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

---

## Paragraphs and Line Breaks

This is a standard paragraph with several sentences to test wrapping and spacing.
This line uses two spaces at the end to force a line break.
Another forced line break here.

A new paragraph after a blank line.

---

## Emphasis

- Italic: _text_ or _text_
- Bold: **text** or **text**
- Bold Italic: **_text_** or **_text_**
- Combined: This is **bold**, this is _italic_, and this is **_both_**.

---

## Inline Elements

- Inline code: `console.log("Hello, world!")`
- Escaped characters: \*, \_, \`, \|, \\, \[, \], \(, \)
- Superscript style: E = mc^2^ (plain text caret)
- Subscript style: H2O (plain text)

---

## Links

- Inline link: [Raycast](https://www.raycast.com)
- Inline with title: [OpenAI](https://www.openai.com 'OpenAI Homepage')
- Reference-style link: [Search Engine][g]
- Autolink: <https://example.com>

[g]: https://google.com 'Google'

---

## Images

- Inline image with alt text: ![Alt text describing the image](https://placehold.co/300x120.png?text=Markdown+Test 'Placeholder')
- Image as a link: [![Badge](https://placehold.co/100x30?text=Badge)](https://example.com)

---

## Tables

| Feature     | Supported | Notes                     |
| :---------- | :-------- | :------------------------ |
| Headings    | Yes       | H1–H6                     |
| Emphasis    | Yes       | Bold, italic, bold-italic |
| Links       | Yes       | Inline and reference      |
| Images      | Yes       | Alt text and title        |
| Tables      | Yes       | Alignment and headers     |
| Code        | Yes       | Inline and fenced         |
| Blockquotes | Yes       | Nested support            |
| Lists       | Yes       | Ordered and unordered     |
| Task Lists  | Yes       | Checkboxes                |
| Footnotes   | Yes       | References and list       |
| Math        | Maybe     | Depends on site support   |

| Center | Right | Left  |
| :----: | ----: | :---- |
|   A    |     1 | alpha |
|   B    |     2 | beta  |
|   C    |     3 | gamma |

---

## Lists

- Unordered list
  - Nested item level 2
    - Nested item level 3
  - Back to level 2
- Another top-level item

1. Ordered list item one
   1. Nested ordered item 1.1
      1. Nested ordered item 1.1.1
   2. Nested ordered item 1.2
2. Ordered list item two

- Mixed list
  1. Number inside bullets
  2. Another one
- Continue bullets

---

## Task Lists

- [x] Completed task
- [ ] Incomplete task
  - [x] Subtask done
  - [ ] Subtask pending
- [ ] Final item

---

## Blockquotes

> This is a simple blockquote to test rendering.
>
> - It can contain lists
> - And other inline elements like `code` and **bold** text
>
> Nested quote:
>
> > Level 2 quote
> >
> > > Level 3 quote

---

## Code

- Inline: `let x = 42;`

- Fenced code blocks:

  ```javascript
  // JavaScript example
  function greet(name) {
  	console.log(`Hello, ${name}!`)
  }
  greet('World')
  ```

  ```python
  # Python example
  from math import sqrt

  def hypotenuse(a, b):
      return sqrt(a*a + b*b)

  print(hypotenuse(3, 4))
  ```

  ```bash
  # Bash example
  set -euo pipefail
  echo "Testing Markdown"
  mkdir -p build && cd build
  ```

- Indented code block (4 spaces):

  if (true) {
  return "Indented code block";
  }

---

## Horizontal Rules

---

---

---

---

## Footnotes

Here is a statement with a footnote reference.[^1] And another one here.[^note]

[^1]: This is the first footnote. It can contain multiple sentences and even links like [Example](https://example.com).

[^note]: Second footnote with additional details.

---

## Definition List

Term
: Definition for the term with a short explanation.

Longer Term
: A more detailed definition
: With multiple definition lines.

---

## Special Characters and Escapes

- Pipes in tables: use \| inside cells.
- Backticks in code: ``Use `like this` or triple backticks for blocks``.
- Brackets: \[escaped\] \(escaped\) \{escaped\}
- Em dashes — and en dashes – (plain text)
- Quotes: "double", 'single'

---

## Math (LaTeX)

- Inline math: \(E = mc^2\), \(a^2 + b^2 = c^2\), \(\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\)

- Display math:

\[y = x^2 + 3x + c\]

\[\int\_{0}^{\infty} e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}\]

\[\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}\]

---

## HTML Passthrough (if allowed)

Note: Some Markdown engines sanitize HTML. This section tests whether raw HTML is permitted.

<div style="padding:8px;border:1px solid #ccc;">
    <strong>Raw HTML block:</strong> This is a styled div with <em>emphasis</em> and <code>inline code</code>.
</div>

---

## Long Text Wrapping

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, nisl non rutrum iaculis, lorem elit vulputate lorem, at egestas purus libero nec mauris. Cras dictum, risus vitae feugiat rhoncus, augue orci imperdiet nunc, non sollicitudin arcu orci quis arcu. Mauris congue, urna in viverra ultricies, justo ex commodo neque, et rhoncus massa urna id turpis.

---

## Edge Cases

- Trailing spaces at end of line to trigger line breaks.
- Multiple blank lines below:

- Lines starting with numbers that are not lists:
  1984 is a novel.
  2025-10-20 is a date.

- Backslash escapes test: \* \_ \` \# \! \> \<

---

## Mixed Content Table

| Item  | Description        | Example                                              |
| :---- | :----------------- | :--------------------------------------------------- |
| Text  | Emphasis and links | **Bold** and [link](https://example.org)             |
| Code  | Inline and block   | `sum(a,b)` and see block below                       |
| Math  | Inline and display | \(x^2\) and \[\sum\_{i=1}^{n} i = \frac{n(n+1)}{2}\] |
| Image | Render check       | ![Tiny](https://placehold.co/40?text=Tiny)           |

---

## Performance/Overflow Test

A very long unbroken string:
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

A long URL to test wrapping:
https://example.com/this/is/a/very/long/url/that/might/not/wrap/well/in/some/renderers/and/should/be-tested-for-overflow-or-horizontal-scrolling

---

## Final Checklist

- Headings H1–H6 render correctly
- Paragraphs and line breaks are respected
- Emphasis styles work
- Links and images load
- Tables render with alignment
- Lists and nested lists appear with proper indentation
- Task lists render checkboxes
- Blockquotes and nested blockquotes render
- Code fences with language highlighting
- Horizontal rules show as separators
- Footnotes work with references
- Definition lists render if supported
- Math renders for inline and display if supported
- Raw HTML is handled as per policy
- Special characters and escapes are displayed correctly

End of Markdown test file.

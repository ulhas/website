---
title: "Formatting Showcase"
date: 2025-01-20
tags: ["meta", "documentation", "examples"]
description: "A comprehensive showcase of all formatting options available in posts"
---

This post demonstrates all the formatting options available for writing content on this site.

# Heading 1

This is the largest heading level. Use it sparingly for major sections.

## Heading 2

This is the most common section heading. Perfect for organizing content.

### Heading 3

Subsection headings for more detailed organization.

#### Heading 4

Further subdivision when needed.

##### Heading 5

Getting pretty granular here.

###### Heading 6

The smallest heading level available.

## Text Formatting

You can make text **bold** or *italic*. You can also ***combine them*** for emphasis.

Here's some ~~strikethrough text~~ for showing corrections or changes.

## Links

[External link to GitHub](https://github.com)

[Internal link to another post](/posts/simple-code/)

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item
  - Another nested item
    - Even deeper nesting
- Back to top level

### Ordered Lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task Lists

- [x] Completed task
- [ ] Pending task
- [ ] Another todo item

## Blockquotes

> This is a blockquote. Use it for citations or to highlight important information.
>
> It can span multiple paragraphs.

> "The best way to predict the future is to invent it."
> — Alan Kay

## Code

### Inline Code

Use `backticks` for inline code snippets like `const x = 42;` or file names like `config.json`.

### Code Blocks

```javascript
// JavaScript example
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

```python
# Python example
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

```bash
# Shell commands
npm install
npm run build
npm test
```

## Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown | ✅ | Full support |
| HTML | ⚠️  | Limited support |
| LaTeX | ❌ | Not supported |

## Horizontal Rules

Use three dashes for a horizontal rule:

---

Like the one above.

## HTML Elements

While we prefer Markdown, sometimes HTML is useful:

<details>
<summary>Click to expand</summary>

This is hidden content that can be revealed by clicking the summary.

You can put any content here:
- Lists
- Code blocks
- Even more HTML

</details>

## Images

![Alt text for accessibility](https://via.placeholder.com/600x300?text=Placeholder+Image)

## Embeds

### YouTube Videos

You can embed YouTube videos using an iframe:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Tweets

For tweets, you can use the Twitter embed code:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">just setting up my twttr</p>&mdash; jack (@jack) <a href="https://twitter.com/jack/status/20?ref_src=twsrc%5Etfw">March 21, 2006</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Mathematical Notation

If LaTeX support is enabled, you can write equations:

Inline math: $E = mc^2$

Block math:
$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content that appears at the bottom of the page.

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Keyboard Keys

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

## Abbreviations

The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium

## Emoji

You can use emoji directly: 🚀 🎯 💡 ✨

## Custom HTML/CSS

<div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <p style="margin: 0; color: #333;">This is a custom styled box using inline CSS.</p>
</div>

## Conclusion

This post covers most of the formatting options available. The key is to use these features judiciously to enhance readability without overwhelming the reader. Remember: content is king, formatting is just the crown.
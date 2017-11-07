---
title: "Code"
date: 2017-11-07T12:57:32+01:00
slug: "code"
---

# Code

## Inline Code

To display inline code, use the `<code>` element. Make sure to escape HTML angle brackets.
{{% infoblock class="example" %}}
An example of `some inline` code.
{{% /infoblock %}}

```html
<p>An example of <code>some inline</code> code.</p>
```

## Code Blocks

If you wish to display the code in a block instead, wrap the `<code>` element inside a `<pre>` element:

{{% infoblock class="example" %}}
```
.body {
  display: none;
}
```
{{% /infoblock %}}

```html
<pre><code>.body {
  display: none;
}</code><pre>
```

{{% infoblock class="customize" %}}
`$color-bg-code` Background-Color for pre blocks and inline code.

`$color-border-code` Color for the pre block border.

`$color-code` Font color for inline code elements.

`$monospace` Font family that is used in code blocks.
{{% /infoblock %}}

### Code Block Header

You can also preprend the optional header to the code block like we've done in this documentation:

{{% infoblock class="example" %}}
```css
.title {
  font-size: 1.8rem;
}
```
{{% /infoblock %}}

```html
<div class="code-header">
  <span class="code-header-icon"><i class="mdi mdi-code-tags"></i></span>
</div>
<pre><code>.title {
  font-size: 1.8rem;
}</code><pre>
```

{{% infoblock class="customize" %}}
`$color-bg-code-header` Background-Color for the header bar.
{{% /infoblock %}}


---
title: "Helpers"
date: 2018-07-23T13:30:37+02:00
slug: "helpers"
---

# Helpers / Utilities

A bunch of helper classes are included in Luma:

## Positioning

A helpful class to position elements next to each other and align them vertically is the `.flex-group` class:

```html
<div class="flex-group">
    <h2>Invoices</h2>
    <button class="button is-primary is-right">Create Invoice</button>
</div>
```

Here's what the class does:

```css
.flex-group {
  align-items: center;
  display: flex;
}
```

There is also a `.is-right` class available that's helpful for positioning elements inside a `.flex-group`.

```css
.is-right {
  margin-left: auto;
}
```

This will position the element to the far right.


{{% infoblock class="example" %}}
<div class="flex-group">
    <h2>Invoices</h2>
    <button class="button is-primary is-right">Create Invoice</button>
</div>
{{% /infoblock %}}

## Visibility

To hide elements, apply the `.is-hidden` class:

```css
.is-hidden {
  display: none !important;
}
```

## Text helpers

There are some helper classes to apply the contextual colors to text elements:

```html
<p class="text-primary">Text in primary color</p>
<p class="text-info">Text in info color</p>
<p class="text-success">Text in success color</p>
<p class="text-warning">Text in warning color</p>
<p class="text-danger">Text in danger color</p>
```

{{% infoblock class="example" %}}
<p class="text-primary">Text in primary color</p>
<p class="text-info">Text in info color</p>
<p class="text-success">Text in success color</p>
<p class="text-warning">Text in warning color</p>
<p class="text-danger">Text in danger color</p>
{{% /infoblock %}}



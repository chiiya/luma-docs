---
title: "Breadcrumbs"
date: 2017-11-08T15:37:18+01:00
slug: "breadcrumbs"
---

# Breadcrumbs
Use breadcrumbs to indicate navigation hierarchy. Separators are automatically added with the `::after` pseudo-class.

{{% infoblock class="example" %}}
<nav aria-label="breadcrumbs">
    <ul class="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li class="is-active"><a href="#" aria-current="page">The Luma Framework</a></li>
    </ul>
</nav>
{{% /infoblock %}}

```html
<nav aria-label="breadcrumbs">
    <ul class="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li class="is-active"><a href="#" aria-current="page">The Luma Framework</a></li>
    </ul>
</nav>
```

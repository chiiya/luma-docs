---
title: "Pagination"
date: 2017-11-08T13:36:45+01:00
slug: "pagination"
---

# Pagination
Luma comes with a pagination component. We use the Bootstrap syntax with custom styling since some frameworks
(such as Laravel) generate Bootstrap compliant pagination by default.

{{% infoblock class="example" %}}
<nav aria-label="pagination">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">← Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next →</a></li>
  </ul>
</nav>
{{% /infoblock %}}

```html
<nav aria-label="pagination">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">← Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next →</a></li>
  </ul>
</nav>
```

## Active state
Add the `active` class to a `page-item` to indicate it is the currently active page:

{{% infoblock class="example" %}}
<nav aria-label="pagination">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">← Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item active"><a class="page-link" href="#" aria-current="page">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next →</a></li>
  </ul>
</nav>
{{% /infoblock %}}

```html
<nav aria-label="pagination">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">← Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item active"><a class="page-link" href="#" aria-current="page">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next →</a></li>
  </ul>
</nav>
```

## Alignment
Use the `is-center` class to horizontally center the pagination:

{{% infoblock class="example" %}}
<nav aria-label="pagination">
  <ul class="pagination is-center">
    <li class="page-item"><a class="page-link" href="#">← Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item active"><a class="page-link" href="#" aria-current="page">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next →</a></li>
  </ul>
</nav>
{{% /infoblock %}}

```html
<nav aria-label="pagination">
  <ul class="pagination is-center">
    <li class="page-item"><a class="page-link" href="#">← Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item active"><a class="page-link" href="#" aria-current="page">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next →</a></li>
  </ul>
</nav>
```

{{% infoblock class="customize" %}}
`$pagination-color-bg-active` Background color of active pagination item

`$pagination-color-bg-hover` Background color of pagination items on hover state

`$pagination-color-border` Pagination border color

`$pagination-color-link` Text color of pagination item

`$pagination-color-link-active` Text color of active pagination item
{{% /infoblock %}}


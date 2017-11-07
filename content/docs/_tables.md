---
title: "Tables"
date: 2017-11-08T00:33:44+01:00
slug: "tables"
---

# Tables

Tables in Luma come with some simple default styling:

{{% infoblock class="example" %}}
| Name    | Age | Location        |
|---------|-----|-----------------|
| Steven  | 24  | Los Angeles, CA |
| Michael | 35  | Seattle, WA     |
|         |     |                 |
{{% /infoblock %}}

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Steven</th>
      <th>24</th>
      <th>Los Angeles, CA</th>
    </tr>
    <tr>
      <th>Michael</th>
      <th>35</th>
      <th>Seattle, WA</th>
    </tr>
  </tbody>
</table>
```

{{% infoblock class="customize" %}}
`$color-hover-table` Background color for row hover

`$color-border-table` Border color for tables
{{% /infoblock %}}



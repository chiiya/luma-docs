---
title: "Lists"
date: 2017-11-07T13:23:31+01:00
slug: "lists"
---

# Lists

There are 3 types of lists available: unordered `ul` lists where your items will be marked with bullets,
ordered `ol` lists where your items will be numbered and description `dl` lists where your items will not be marked.

{{% infoblock class="example" %}}
{{< row >}}
{{% column class="is-4" %}}
<ul><li>Unordered List Item 1</li>
<li>Unordered List Item 2</li></ul>
{{% /column %}}
{{% column class="is-4" %}}
<ol><li>Ordered List Item 1</li>
<li>Ordered List Item 2</li></ol>
{{% /column %}}
{{% column class="is-4" %}}
<dl><dt>Description list item 1</dt>
<dd>Description list item 1.1</dd></dl>
{{% /column %}}
{{< /row >}}
{{% /infoblock %}}

```html
<ul>
  <li>Unordered List Item 1</li>
  <li>Unordered List Item 2</li>
</ul>

<ol>
  <li>Ordered List Item 1</li>
  <li>Ordered List Item 2</li>
</ol>

<dl>
  <dt>Description list item 1</dt>
  <dd>Description list item 1.1</dd>
</dl>
```

## Collections
Lists can also be formatted as collections:

{{% infoblock class="example" %}}
<ul class="collection">
    <li class="item">Peter</li>
    <li class="item">Marvin</li>
    <li class="item">Anabelle</li>
    <li class="item">Peatrice</li>
</ul>
{{% /infoblock %}}

```html
<ul class="collection">
  <li class="item">Peter</li>
  <li class="item">Marvin</li>
  <li class="item">Anabelle</li>
  <li class="item">Peatrice</li>
</ul>
```

If you wish, you can display some additional information for each list item, such as an image or description:

{{% infoblock class="example" %}}
<div class="collection">
    <div class="item has-image">
        <img src="/images/soranowoto.jpg" alt="Sora No Woto" />
        <a href="https://myanimelist.net/anime/6802/So_Ra_No_Wo_To"><span class="item-title">Sora No Woto</span></a>
        <p><em>Slice of Life, Drama, Music, Military</em>
        <span>Watched 8 months ago, scored <strong>9/10</strong></span></p>
    </div>
    <div class="item has-image">
        <img src="/images/erased.jpg" alt="Erased" />
        <a href="https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi"><span class="item-title">Erased</span></a>
        <p><em>Drama, Thriller, Seinen</em>
        <span>Watched 10 months ago, scored <strong>9/10</strong></span></p>
    </div>
    <div class="item has-image">
        <img src="/images/poco.jpg" alt="Poco's Udon World" />
        <a href="https://myanimelist.net/anime/32673/Udon_no_Kuni_no_Kiniro_Kemari"><span class="item-title">Poco's Udon World</span></a>
        <p><em>Slice of Life, Fantasy, Seinen</em>
        <span>Watched 2 months ago, scored <strong>9/10</strong></span></p>
    </div>
    <div class="item has-image">
        <img src="/images/demichan.jpg" alt="Demi-chan wa Kataritai" />
        <a href="https://myanimelist.net/anime/33988/Demi-chan_wa_Kataritai"><span class="item-title">Demi-chan wa Kataritai</span></a>
        <p><em>Slice of Life, Fantasy, Seinen</em>
        <span>Watched 5 days ago, scored <strong>9/10</strong></span></p>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="collection">
    <div class="item has-image">
        <img src="/images/soranowoto.jpg" alt="Sora No Woto">
        <a href="https://myanimelist.net/anime/6802/So_Ra_No_Wo_To"><span class="item-title">Sora No Woto</span></a>
        <p><em>Slice of Life, Drama, Music, Military</em>
        <span>Watched 8 months ago, scored <strong>9/10</strong></span></p>
    </div>
    <div class="item has-image">
        <img src="/images/erased.jpg" alt="Erased">
        <a href="https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi"><span class="item-title">Erased</span></a>
        <p><em>Drama, Thriller, Seinen</em>
        <span>Watched 10 months ago, scored <strong>9/10</strong></span></p>
    </div>
    <div class="item has-image">
        <img src="/images/poco.jpg" alt="Poco's Udon World">
        <a href="https://myanimelist.net/anime/32673/Udon_no_Kuni_no_Kiniro_Kemari"><span class="item-title">Poco's Udon World</span></a>
        <p><em>Slice of Life, Fantasy, Seinen</em>
        <span>Watched 2 months ago, scored <strong>9/10</strong></span></p>
    </div>
    <div class="item has-image">
        <img src="/images/demichan.jpg" alt="Demi-chan wa Kataritai">
        <a href="https://myanimelist.net/anime/33988/Demi-chan_wa_Kataritai"><span class="item-title">Demi-chan wa Kataritai</span></a>
        <p><em>Slice of Life, Fantasy, Seinen</em>
        <span>Watched 5 days ago, scored <strong>9/10</strong></span></p>
    </div>
</div>
```


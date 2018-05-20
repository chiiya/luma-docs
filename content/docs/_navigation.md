---
title: "Navigation"
date: 2017-11-18T21:56:35+01:00
slug: "navigation"
---

# Navigation

Luma comes with a simple to use navigation component.

{{% infoblock class="example" %}}
<nav class="nav has-depth nav-example">
    <div class="nav-left">
        <a class="nav-item nav-brand" href="#!"><img src="/images/luma.png">Luma</a>
        <a class="nav-item" href="#!">Nav Item 1</a>
        <a class="nav-item" href="#!">Nav Item 2</a>
    </div>
    <div class="nav-right">
        <div class="nav-item">
            <input type="text" placeholder="Search...">
        </div>
        <div class="nav-item">
            <button class="button is-success">Search</button>
        </div>
    </div>
</nav>
{{% /infoblock %}}

```html
<nav class="nav has-depth">
    <div class="nav-left">
        <a class="nav-item nav-brand" href="#!"><img src="/images/luma.png">Luma</a>
        <a class="nav-item" href="#!">Nav Item 1</a>
        <a class="nav-item" href="#!">Nav Item 2</a>
    </div>
    <div class="nav-right">
        <div class="nav-item">
            <input type="text" placeholder="Search...">
        </div>
        <div class="nav-item">
            <button class="button is-success">Search</button>
        </div>
    </div>
</nav>
```

Just give your `nav` component a `nav` class to turn it into a navigation bar. In the example above we also used
the helper class `has-depth` to give it some shadow.

## Sections
The navigation can be separated into three different sections that you can populate with items: `nav-left`, `nav-center`
and `nav-right`. Just wrap your items inside a div with class `nav-{left, center, right}` to properly position them.
See them in action here:

{{% infoblock class="example" %}}
<nav class="nav has-depth nav-example">
    <div class="nav-left">
        <a class="nav-item" href="#!">Left 1</a>
        <a class="nav-item" href="#!">Left 2</a>
    </div>
    <div class="nav-center">
        <a class="nav-item" href="#!">Center</a>
    </div>
    <div class="nav-right">
        <div class="nav-item">
            <button class="button is-primary">Download</button>
        </div>
    </div>
</nav>
{{% /infoblock %}}

```html
<nav class="nav has-depth nav-example">
    <div class="nav-left">
        <a class="nav-item" href="#!">Left 1</a>
        <a class="nav-item" href="#!">Left 2</a>
    </div>
    <div class="nav-center">
        <a class="nav-item" href="#!">Center</a>
    </div>
    <div class="nav-right">
        <div class="nav-item">
            <button class="button is-primary">Download</button>
        </div>
    </div>
</nav>
```

Each navigation item should be wrapped inside or given the class `nav-item`, as seen in the examples above.

## Brand
Since it's such a common use case to have your brand (logo + optional text) in your navigation, feel free to use
the `nav-brand` class to provide some default styling:

```html
<a class="nav-item nav-brand" href="#!"><img src="/images/luma.png">Luma</a>
```

## Modifiers
Use the `is-transparent` class on the `.nav` element to have a transparent background. You can also use the `has-depth`
helper class like we've done in these examples to add a shadow effect.

## Responsive
Add a new navigation with the `is-responsive` class to use as a mobile navigation. The reason for this is that
you might want your mobile navigation to have a custom layout, different from your desktop layout. For example, you might
want to arrange items in a different order, or omit/add some items. On this site, for instance, we combined both the
top navigation as well as the sidebar navigation into one on mobile.

```html
<!-- Desktop navigation -->
<nav class="nav is-desktop">
    <div class="nav-left">
        <a class="nav-item" href="#!">Left 1</a>
        <a class="nav-item" href="#!">Left 2</a>
    </div>
    <div class="nav-center">
        <a class="nav-item" href="#!">Center</a>
    </div>
    <div class="nav-right">
        <div class="nav-item">
            <button class="button is-primary">Download</button>
        </div>
    </div>
</nav>

<!-- Top bar with toggle button and the site logo -->
<div class="nav is-toggle">
  <div class="nav-left">
    <a class="nav-item" href="/"><img src="/images/luma.png"></a>
  </div>
  <div class="nav-right">
    <button class="nav-item hamburger hamburger--spin" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</div>

<!-- Responsive navigation -->
<nav class="nav is-responsive">
    <ul>
        <li><img src="logo.png"></li>
        <li><a href="#!">Left 1</a></li>
        <li><a href="#!">Left 2</a></li>
        <li><a href="#!">Center</a></li>
        <li><button class="button is-primary">Download</button></li>
    </ul>
</nav>
```

### Javascript
To initialize the responsive navigation, call `luma.nav()`. We've also included a the option to
open the mobile navigation by swiping in from the left side of the screen (like often the case
in mobile applications). To initialize this behaviour, call `luma.navSlideOut()`.




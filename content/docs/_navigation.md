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
While our navigation is not responsive by default, here's an (opinionated) example of how you could accomplish that in your
application (assuming you're using ES6+ Javascript and SCSS):


#### Create a mobile nav menu
Create a separate `nav-mobile` navigation for display on mobile devices. By default, Luma hides this element
on larger devices.
The reason we're creating a separate navigation just for mobile is that you might want your mobile navigation to have
a custom layout, different from your desktop layout. For example, you might want to arrange items in a different order,
or omit/add some items. On this site, for instance, we combined both the top navigation as well as the sidebar navigation
into one on mobile.

```html
<nav class="nav">
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
<nav class="nav-mobile" id="menu">
    <ul>
        <li><a href="#!">Left 1</a></li>
        <li><a href="#!">Left 2</a></li>
        <li><a href="#!">Center</a></li>
        <li><button class="button is-primary">Download</button></li>
    </ul>
</nav>
<main id="panel">
    ...
</main>
```

#### Add a toggle button
You can create your own button or just use one of the many available on the internet. Here, we're using [these](https://jonsuh.com/hamburgers/).
We want to use the spin version as our toggle button, so let's go ahead and install the library first:
```shell
npm install hamburgers
```
Let's require the SCSS source files next and overwrite the `$hamburger-types` variable so that we only use the spin
variant. While we're at, let's also customize it a little:
In your `_variables.scss` or equivalent:
```scss
$hamburger-layer-width: 25px;
$hamburger-layer-height: 3px;
$hamburger-layer-spacing: 4px;
$hamburger-layer-color: #6c778e;
$hamburger-types: (
        spin,
);
```
In your `main.scss` or equivalent:
```scss
@import 'variables';
...
// Or whatever your path would be
@import '../../node_modules/hamburgers/_sass/hamburgers/hamburgers';
```
Next, lets add the button to our page:
```html
<button class="hamburger hamburger--spin" type="button">
    <span class="hamburger-box">
        <span class="hamburger-inner"></span>
    </span>
</button>
```
And add some styles so it only shows up on mobile:
```scss
.hamburger {
  @include tablet {
    display: none;
  }
}
```

#### Add behaviour
For this, we're using [this](https://slideout.js.org/) library, but you could of course also do it yourself.
```shell
npm install slideout
```
```javascript
const slideout = new Slideout({
  panel: document.getElementById('panel'),
  menu: document.getElementById('menu'),
  padding: 256,
  tolerance: 70,
});
document.querySelector('.hamburger').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('is-active');
  slideout.toggle();
});
```

Now you'd just need to style your mobile navigation however wish. As an example, resize this window to check out our
mobile navigation.




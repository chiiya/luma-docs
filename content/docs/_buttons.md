---
title: "Buttons"
date: 2017-11-11T16:35:58+01:00
slug: "buttons"
---

# Buttons

Buttons in Luma come in two basic styles: outlined and filled. As with many other components they are available in 4
different color variations: `primary`, `info`, `success` and `danger`.

## Outlined Buttons
In addition to the aforementioned color styles, outlined buttons also come with a default light style.
{{% infoblock class="example" %}}
<div class="button-group">
    <button class="button is-outline" disabled>Submit</button>
    <button class="button is-outline is-primary" disabled>Primary</button>
    <a class="button is-outline is-info">Information</a>
    <a class="button is-outline is-success">Success</a>
    <a class="button is-outline is-danger">Danger</a>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <a class="button is-outline">Submit</a>
    <a class="button is-outline is-primary">Primary</a>
    <a class="button is-outline is-info">Information</a>
    <a class="button is-outline is-success">Success</a>
    <a class="button is-outline is-danger">Danger</a>
</div>
```

On dark backgrounds, you may use the `is-light` color modifier:
{{% infoblock class="example is-dark" %}}
<button class="button is-outline is-light">Submit</button>
{{% /infoblock %}}

```html
<button class="button is-outline is-light">Submit</button>
```


## Filled Buttons
Filled buttons have a default black style that is used when no color modifier is applied.

{{% infoblock class="example" %}}
<div class="button-group">
    <a class="button">Submit</a>
    <a class="button is-primary">Primary</a>
    <a class="button is-info">Information</a>
    <a class="button is-success">Success</a>
    <a class="button is-warning">Warning</a>
    <a class="button is-danger">Danger</a>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <a class="button">Submit</a>
    <a class="button is-primary">Primary</a>
    <a class="button is-info">Information</a>
    <a class="button is-success">Success</a>
    <a class="button is-warning">Warning</a>
    <a class="button is-danger">Danger</a>
</div>
```

The additional `has-depth` helper class also works great with buttons, and makes them stand out from the rest of
the page:

{{% infoblock class="example" %}}
<div class="button-group">
    <a class="button has-depth">Submit</a>
    <a class="button is-primary has-depth">Primary</a>
    <a class="button is-info has-depth">Information</a>
    <a class="button is-success has-depth">Success</a>
    <a class="button is-warning has-depth">Warning</a>
    <a class="button is-danger has-depth">Danger</a>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <a class="button has-depth">Submit</a>
    <a class="button is-primary has-depth">Primary</a>
    <a class="button is-info has-depth">Information</a>
    <a class="button is-success has-depth">Success</a>
    <a class="button is-warning has-depth">Warning</a>
    <a class="button is-danger has-depth">Danger</a>
</div>
```

### Disabled Buttons
Add the `disabled` attribute to indicate a button is disabled. Since this property isn't valid on `a` tags,
you'll need to add a `is-disabled` class on those. What we do in that case is apply `pointer-events: none` which disables
all cursor interactions on that element.

Keep in mind that this is an experimental property not supported in all
browsers. It also does **not** completely disable interaction with that element. Users can still use their keyboard
to activate the link. The best solution would be to use some custom Javascript behaviour (e.g. `e.preventDefault()`)
to disable _all_ interactions.

{{% infoblock class="example" %}}
<div class="button-group">
    <button class="button is-primary" disabled>Primary</button>
    <a class="button is-success is-disabled" href="http://google.com">Save</a>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <button class="button is-primary" disabled>Primary</button>
    <a class="button is-success is-disabled">Save</a>
</div>
```

## Buttons Groups
As you've probably noticed, all buttons in these examples have been wrapped in a `button-group` `div`. This container is
useful when you're placing multiple buttons next to each other, and wraps nicely on mobile. Try resizing your window
to see it in action.

## Icons
Feel free to use any icon in conjunction with a button. They work nicely on either side of the text:

{{% infoblock class="example" %}}
<div class="button-group">
    <a class="button is-outline">
        <span class="icon">
            <i class="mdi mdi-play"></i>
        </span>
        <span>Watch Now</span>
    </a>
    <a class="button is-outline">
        <span>Watch Now</span>
        <span class="icon">
            <i class="mdi mdi-play"></i>
        </span>
    </a>
    <a class="button is-outline is-danger">
        <span>Delete</span>
        <span class="icon">
            <i class="mdi mdi-close"></i>
        </span>
    </a>
    <a class="button is-outline">
        <span>Follow</span>
        <span class="icon">
            <i class="mdi mdi-account-plus"></i>
        </span>
    </a>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <a class="button is-outline">
        <span class="icon">
            <i class="mdi mdi-play"></i>
        </span>
        <span>Watch Now</span>
    </a>
    <a class="button is-outline">
        <span>Watch Now</span>
        <span class="icon">
            <i class="mdi mdi-play"></i>
        </span>
    </a>
    <a class="button is-outline is-danger">
        <span>Delete</span>
        <span class="icon">
            <i class="mdi mdi-close"></i>
        </span>
    </a>
    <a class="button is-outline">
        <span>Follow</span>
        <span class="icon">
            <i class="mdi mdi-account-plus"></i>
        </span>
    </a>
</div>
```

There is also a special `is-animated` class that you can apply to icon buttons:

{{% infoblock class="example" %}}
<div class="button-group">
    <a class="button is-outline is-animated">
        <span>Submit</span>
        <span class="icon">
            <i class="mdi mdi-chevron-right"></i>
        </span>
    </a>
    <a class="button is-outline is-animated">
        <span>Follow</span>
        <span class="icon">
            <i class="mdi mdi-account-plus"></i>
        </span>
    </a>
    <a class="button is-danger has-depth is-animated">
        <span>Delete</span>
        <span class="icon">
            <i class="mdi mdi-close"></i>
        </span>
    </a>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <a class="button is-outline is-animated">
        <span>Submit</span>
        <span class="icon">
            <i class="mdi mdi-chevron-right"></i>
        </span>
    </a>
    <a class="button is-outline is-animated">
        <span>Follow</span>
        <span class="icon">
            <i class="mdi mdi-account-plus"></i>
        </span>
    </a>
    <a class="button is-danger has-depth is-animated">
        <span>Delete</span>
        <span class="icon">
            <i class="mdi mdi-close"></i>
        </span>
    </a>
</div>
```

## Loading Buttons
Use the `is-loading` class to add a loading spinner to your buttons:

{{% infoblock class="example" %}}
<div class="button-group">
    <button class="button is-success is-loading">Saving...</button>
    <button class="button is-outline is-loading">Saving...</button>
    <button class="button is-outline is-primary is-loading">Saving...</button>
    <button class="button is-primary is-loading is-empty"></button>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <button class="button is-success is-loading">Saving...</button>
    <button class="button is-outline is-loading">Saving...</button>
    <button class="button is-outline is-primary is-loading">Saving...</button>
    <button class="button is-primary is-loading is-empty"></button>
</div>
```

## Narrow Buttons
Sometimes, you need smaller, narrower icons. For those occasions you can use the `is-narrow` class:

{{% infoblock class="example" %}}
<div class="button-group">
    <button class="button is-outline is-narrow">Edit</button>
    <button class="button is-primary is-narrow">Visit</button>
</div>
{{% /infoblock %}}

```html
<div class="button-group">
    <button class="button is-outline is-narrow">Edit</button>
    <button class="button is-primary is-narrow">Visit</button>
</div>
```

## Customization

{{% infoblock class="customize" %}}
`$color-button` font-color for default buttons (no color modifier class)

`$color-button-bg` background-color for default buttons (no color modifier class)

`$color-button-outline-border` border-color for default outlined buttons (no color modifier class)

`$color-button-outline` font-color for default outlined buttons (no color modifier class)


Of course, all color variables are also relevant:
`$color-primary`, `$color-primary-inverted`, `$color-light`, `$color-dark`, `$color-info`, `$color-success,`
`$color-warning`, `$color-danger`
{{% /infoblock %}}



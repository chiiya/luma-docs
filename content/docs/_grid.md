---
title: "Grid"
date: 2017-11-08T00:41:06+01:00
slug: "grid"
---

# Grid

Luma is based on a Flexbox-Grid, which means that your are no longer bound by annoying float-based layouts.
Simply specify a row and add as many columns as you need. They will automatically take up all the available space.
You can of course also define fixed width percentages in the classic 12-grid system.
A `column is-4` will take up exactly one third of the available space. You're also free to define an offset.

On mobile, all columns will automatically be displayed on top of each other.

Additionally to its grid system, Luma also comes with a helpful `container` class that you can use to horizontally
center and limit your content. Its width depends on the viewport size:

| Viewport    | Container width |
|---------|-----|
| Small (<768px)  | 100%  |
| Medium (<992px) | 750px |
| Large (<1225px) | 960px |
| Widescreen (>1225px) | 1152px |

```html
<div class="container">
    <!-- Your content -->
</div>
```


{{% infoblock class="example" %}}
<div class="row">
    <div class="column is-4">
        <p class="col-example is-red"><code>column is-4</code></p>
    </div>
    <div class="column is-8">
        <p class="col-example is-red"><code>column is-8</code></p>
    </div>
</div>
<div class="row">
    <div class="column is-6">
        <p class="col-example is-red"><code>column is-6</code></p>
    </div>
    <div class="column is-2">
        <p class="col-example is-red"><code>column is-2</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
</div>
<div class="row">
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
       <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="row">
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-8">
        <p><code>column is-8</code></p>
    </div>
</div>
<div class="row">
    <div class="column is-6">
        <p><code>column is-6</code></p>
    </div>
    <div class="column is-2">
        <p><code>column is-2</code></p>
    </div>
    <div class="column">
        <p><code>column</code></p>
    </div>
</div>
<div class="row">
    <div class="column">
        <p><code>column</code></p>
    </div>
    <div class="column">
       <p><code>column</code></p>
    </div>
    <div class="column">
        <p><code>column</code></p>
    </div>
    <div class="column">
        <p><code>column</code></p>
    </div>
</div>
```

## Offsets
You can use the `is-offset-*` class to add an offset to a column:

{{% infoblock class="example" %}}
<div class="row">
    <div class="column is-4">
        <p class="col-example is-red"><code>column is-4</code></p>
    </div>
    <div class="column is-4 is-offset-4">
        <p class="col-example is-red"><code>column is-4 is-offset-4</code></p>
    </div>
</div>
<div class="row">
    <div class="column is-8 is-offset-4">
        <p class="col-example is-red"><code>column is-8 is-offset-4</code></p>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="row">
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-4 is-offset-4">
        <p><code>column is-4 is-offset-4</code></p>
    </div>
</div>
<div class="row">
    <div class="column is-8 is-offset-4">
        <p><code>column is-8 is-offset-4</code></p>
    </div>
</div>
```

## Gutters
By default, Luma uses a gutter width of `1rem` (10px) as the spacing between columns. You can remove this by
adding the `no-gutters` class to a row:

{{% infoblock class="example" %}}
<div class="row no-gutters">
    <div class="column is-3">
        <p class="col-example is-red"><code>column is-3</code></p>
    </div>
    <div class="column is-3">
        <p class="col-example is-red"><code>column is-3</code></p>
    </div>
    <div class="column is-6">
        <p class="col-example is-red"><code>column is-6</code></p>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="row no-gutters">
    <div class="column is-3">
        <p><code>column is-3</code></p>
    </div>
    <div class="column is-3">
        <p><code>column is-3</code></p>
    </div>
    <div class="column is-6">
        <p><code>column is-6</code></p>
    </div>
</div>
```

## Alignment
You can use flexbox alignment utilities to vertically and horizontally align columns.

{{% infoblock class="example" %}}
<div class="row row-example is-top no-gutters">
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
</div>
<div class="row row-example is-center no-gutters">
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
</div>
<div class="row row-example is-bottom no-gutters">
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
</div>
{{% /infoblock %}}

In this example, the first row has an additional `is-top` class, the second row `is-center` and the third
row `is-bottom`.

```html
<div class="row is-center no-gutters">
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
</div>
```

You can always override this for each column individually using the same classes, but this time applied to the
column itself:

{{% infoblock class="example" %}}
<div class="row row-example is-top no-gutters">
    <div class="column">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column is-center">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
    <div class="column is-bottom">
        <p class="col-example is-blue"><code>column</code></p>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="row is-top no-gutters">
    <div class="column">
        <p><code>column</code></p>
    </div>
    <div class="column is-center">
        <p><code>column</code></p>
    </div>
    <div class="column is-bottom">
        <p><code>column</code></p>
    </div>
</div>
```

## Column Breaks
By adding a `is-multiline` class to your row, you can add more columns than would normally fit in a 12 grid system.
They will automatically break onto the next line:

{{% infoblock class="example" %}}
<div class="row is-multiline">
    <div class="column is-4">
        <p class="col-example is-red"><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p class="col-example is-red"><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p class="col-example is-red"><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p class="col-example is-red"><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p class="col-example is-red"><code>column is-4</code></p>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="row is-multiline">
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
    <div class="column is-4">
        <p><code>column is-4</code></p>
    </div>
</div>
```

## Nesting
You can nest rows for more flexibility. Simply add another row inside your column:

{{% infoblock class="example" %}}
<div class="row has-no-margins">
    <div class="column is-4">
        <p class="col-example is-red"><code>First column</code></p>
        <div class="row">
            <div class="column">
                <p class="col-example is-blue"><code>column</code></p>
            </div>
            <div class="column">
                <p class="col-example is-blue"><code>column</code></p>
            </div>
        </div>
    </div>
    <div class="column is-8">
        <p class="col-example is-red"><code>Second column</code></p>
        <div class="row">
            <div class="column">
                <p class="col-example is-blue"><code>column</code></p>
            </div>
            <div class="column">
                <p class="col-example is-blue"><code>column</code></p>
            </div>
        </div>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="row">
    <div class="column is-4">
        <p><code>First column</code></p>
        <div class="row">
            <div class="column">
                <p><code>column</code></p>
            </div>
            <div class="column">
                <p><code>column</code></p>
            </div>
        </div>
    </div>
    <div class="column is-8">
        <p><code>Second column</code></p>
        <div class="row">
            <div class="column">
                <p><code>column</code></p>
            </div>
            <div class="column">
                <p><code>column</code></p>
            </div>
        </div>
    </div>
</div>
```


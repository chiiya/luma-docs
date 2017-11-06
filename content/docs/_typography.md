---
title: "Typography"
date: 2017-11-06T13:16:11+01:00
slug: "typography"
---

# Typography

All font-sizes are defined in `rem`, relative to the root element. Since we define the body to have a font-size of 62.5%
we can assume that in most browsers this equates to `1.0rem = 10px`.

Luma uses the default system font-stack by default. This ensures that your text looks good on any OS and device:
```scss
$sans-serif: (
  -apple-system,
  system-ui,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  Oxygen,
  Ubuntu,
  Cantarell,
  'Open Sans',
  'Helvetica Neue',
  sans-serif
);
```

If you wish to use your own font, simply import it and add it on top of this stack.
{{% infoblock class="customize" %}}
`$font-text` Default font-family

`$color-text` Default font color
{{% /infoblock %}}

## Headings
All HTML headings, h1 through h6, have some default styling applied:
{{% infoblock class="example" %}}
# Heading One
## Heading Two
### Heading Three
#### Heading Four
##### Heading Five
###### Heading Six
{{% /infoblock %}}

If you place an element with the class `subtitle` directly after a heading,
it will be positioned closer to the heading, acting as a subtitle.

{{% infoblock class="example" %}}
## Some Heading <h5 class="subtitle">With a subtitle</h2>
{{% /infoblock %}}

```html
<h2>Some Heading</h2>
<h5 class="subtitle">With a subtitle</h5>
```

{{% infoblock class="customize" %}}
`$font-size-h1` - `$font-size-h6` Default font sizes.

`$font-heading` Font family for headings.
{{% /infoblock %}}

## Inline Text Elements

##### Marked Text / Highlight

Use the `mark` element or class to <mark>highlight</mark> text with a marker pen effect.

```html
<!-- Highlighted text: -->
Some <mark>highlighted</mark> text.
<!-- This also works: -->
Some <span class="mark">highlighted</span> text.
```

{{% infoblock class="customize" %}}
`$color-highlight` Highlight background color.
{{% /infoblock %}}

##### Links

By default, links will the displayed <a>like this</a>. If you wish, you can add the special `link` class to add
an <a class="link">underline</a> or even use the special `highlight` class to add a background-color effect: <a class="highlight">Example</a>.
You can easily customize the color with the `$color-link-highlight` variable.

```html
<!-- Simple link: -->
Just a simple <a href="#">link</a>.
<!-- Underline: -->
A link with <a class="link">underline</a>.
<!-- Highlight effect: -->
Some <a class="highlight">fancy hightlight</a> effect.
```

{{% infoblock class="customize" %}}
`$color-link` Default link color.

`$color-link-border` Default link border color.

`$color-link-highlight` The link highlight effect color.

`$color-link-highlight-hover` The font color on `link` highlight effect hover.
{{% /infoblock %}}

##### Other Inline  Elements

Feel free to use any of the other available inline elements:

```html
<em>Emphasis</em>
<strong>Strong</strong>
<small>Small</small>
```

##### Helpers

There are a number of helper classes available that you can use:

{{% infoblock class="example" %}}
<p class="text-right">Aligned right</p>
<p class="text-left">Aligned left</p>
<p class="text-center">Aligned center</p>
<p class="text-justify">Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="text-lowercase">All letters are transformed to lowercase</p>
<p class="text-uppercase">All letters are transformed to uppercase</p>
<p class="text-capitalize">First letter of all words will be capitalized</p>
<p class="text-fade">Decreased size and opacity.</p>
{{% /infoblock %}}

```html
<p class="text-right">Aligned right</p>
<p class="text-left">Aligned left</p>
<p class="text-center">Aligned center</p>
<p class="text-justify">Justified text</p>
<p class="text-lowercase">All letters are transformed to lowercase</p>
<p class="text-uppercase">All letters are transformed to uppercase</p>
<p class="text-capitalize">First letter of all words will be capitalized</p>
<p class="text-fade">Decreased size and opacity. As an example see the sans-serif Example above.</p>
```

##### Blockquote

For quoting blocks of content from another source within your document.

{{% infoblock class="example" %}}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{{% /infoblock %}}

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```

{{% infoblock class="customize" %}}
`$color-blockquote-border` Defines the Blockquote border color.
{{% /infoblock %}}

##### Custom Selection

Custom selection color is turned off by default, but you can turn it on in the `/utilities/_Config.scss` if you wish. As an example, try selecting this text with your mouse. You will see that it has a custom background color instead of the default blue.

{{% infoblock class="configure" %}}
`$selection-on` If set to true, all user selections on the site will have a custom background color.
{{% /infoblock %}}

{{% infoblock class="customize" %}}
`$color-selection-bg` Selection background color

`$color-selection` Selection font color
{{% /infoblock %}}
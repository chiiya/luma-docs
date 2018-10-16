---
title: "Customization"
date: 2018-01-16T21:02:48+01:00
slug: "customization"
---

# Customization

As you'll see on the individual documentation pages, there are a lot of variables in Luma that can be customized to change
the color, size, etc. of all components. All you'll need to do in order to change these in your projects is to create a file
with the new variable values and then import it before importing the luma source files.
So let's say you have a file `_variables.scss` with the following content:

```scss
$color-primary: #efd1c6;
$color-primary-inverted: #000;
$color-light: #fff;
```

Your `main.scss` (or whatever your entry point is) where you import your files should now look somewhat like this:

```scss
@import 'abstracts/variables';
@import '~lumacss';
```
Now, Luma will use the values that you have set in your `_variables.scss` file instead of the default values.


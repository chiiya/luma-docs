---
title: "Structure"
date: 2018-01-16T20:46:05+01:00
slug: "structure"
---

# Structure
Once you clone or download luma, you'll see the following structure:

```
luma/
├── dist/
├── src/
│   └── js/
│   └── scss/
```

In the `dist` folder you'll find the precompiled CSS and Javascript assets. These are ready to be used in your project.
If you prefer to use the source code and compile it yourself (necessary for customization), you'll need to use the `src`
folder. Take a look into the `src` folder:

```
src/
├── js/
├── scss/
│   └── abstracts/
│       └── _Mixins.scss # SCSS mixins used in multiple places
│       └── _Variables.scss # You can find all available Luma variables in here. Overwrite these in your project for customization
│   └── base/
│       └── _Base.scss # Some general basic site styles
│       └── _normalize.scss # Reset styles so that your site looks the same on all browsers
│       └── _Typography.scss
│       └── _Utilities.scss # Some general utility styles such as has-depth
│   └── components/ # Here you'll find the actual Luma components (buttons, cards, etc.)
│   └── layouts/ # Grid & Navigation
```

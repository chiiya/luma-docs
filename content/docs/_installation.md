---
title: "Installation"
date: 2017-09-06T10:07:21+02:00
slug: "installation"
aliases: 
  - /docs
---

# Installation

You can install Luma multiple ways:

## Include compiled files
The simplest option would be to just include the compiled .css (and optionally .js) files. This way, you can immediately
start using Luma without worrying about any of the compilation or bundling. To include Luma on your site:

```html
<link rel="stylesheet" href="/css/luma.min.css">
<!-- Or using CDN -->
<link rel="stylesheet" href="https://unpkg.com/lumacss/dist/luma.min.css">

<!-- Optionally, you can include the javascript at the end of your body -->
<script src="/js/luma.min.js">
<!-- Or using CDN -->
<script src="https://unpkg.com/lumacss/dist/luma.min.js">
</body>
```

## Include source files
If you wish to customize Luma, or just want to include it in your bundling process, you can install the npm package or
clone the repository:

```shell
$ npm install lumacss
# Or alternatively:
$ yarn add lumacss
```

If you include Luma in your project, make sure to include `autoprefixer` somewhere in your build process. Check out our
`gulpfile.js` for an example configuration.

## Javascript
You only need to include our javascript if you intend to use any of these features:

- Alerts: adds ability to dismiss and close alerts.
- Textareas: automatically resize textareas on input.
- Selects: custom styling for selects (we provide a fallback default style in case you don't want to use this).
- File Upload: display uploaded file name.
- Responsive navigation.

Check out the respective documentation pages for more details.

---
title: "Luma - Lightweight, Flexible"
---

## Overview
Luma is a modern, flexbox-based CSS framework.

### Customization
Luma was written in SCSS, which means you can easily customize it.

The most relevant files for customization are `src/utilities/_config.scss` and `src/utilities/_variables.scss`. Here you can easily switch out color values (such as the `$color-primary`) and customize other configuration values.

After having done all your changes, you should recompile the source files. This is necessary because Luma uses Autoprefixer to increase browser support for some of its features (mainly Flexbox). The easiest way to do this is to just use our provided `gulpfile.js`. Simply run `gulp build` in the main folder and everything will compile into the `dist/` folder again. You can also integrate Autoprefixer into your own build process if you simply wish to include our SCSS files.
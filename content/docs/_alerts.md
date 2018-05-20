---
title: "Alerts"
date: 2017-11-11T18:58:35+01:00
slug: "alerts"
---

# Alerts
Use alerts to provide users with contextual feedback. An `is-*` class must be specified since there is no default styling.

{{% infoblock class="example" %}}
<div class="alert is-info">
    <a href="#">Info</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="alert is-success">
    <a href="#">Success</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="alert is-warning">
    <a href="#">Warning</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="alert is-danger">
    <a href="#">Danger</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
{{% /infoblock %}}

```html
<div class="alert is-info">
    Info. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="alert is-success">
    Success. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="alert is-warning">
    Warning. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="alert is-danger">
    Danger. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
```

## Close Button
You can optionally add a close button to your alerts:

{{% infoblock class="example" %}}
<div class="alert is-danger can-close">
    Danger. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet.
    <span class="alert__close" data-dismiss="alert"></span>
</div>
<div class="alert is-warning can-close">
    Warning. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span class="alert__close" data-dismiss="alert"></span>
</div>
{{% /infoblock %}}

```html
<div class="alert is-danger can-close">
    Danger. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet.
    <span class="alert__close" data-dismiss="alert"></span>
</div>
<div class="alert is-warning can-close">
    Warning. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span class="alert__close" data-dismiss="alert"></span>
</div>
```

## Javascript

The Luma Javascript includes an API for adding behaviour to alerts and actually fading them out and removing them from
the DOM once the close button is pressed. Use
```html
<script>
luma.alert('.alert')
</script>
```
at the end of your body to add this behaviour. You can also pass a specific DOM element (useful for example when
creating additional alert components after the page has loaded):
```js
import luma from 'luma'

...
const alert = document.createElement('div');
alert.className = 'alert is-danger can-close';
alert.textContent = 'The action you requested could not be executed';
const closeButton = document.createElement('span');
closeButton.className = 'alert__close';
alert.appendChild(closeButton);
someParentElement.appendChild(alert);

luma.alert(alert);
```

You can of course also write this behaviour yourself, all you'd need to to is attach a click listener to the close button
which adds a `is-fading` class to the alert component and removes it from the DOM after .3 seconds.

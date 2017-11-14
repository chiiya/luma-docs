---
title: "Cards"
date: 2017-11-14T22:43:06+01:00
slug: "cards"
---

# Cards

Cards are a great way of displaying blocks of content

{{% infoblock class="example" %}}
{{< row >}}
{{% column class="is-6" %}}
<div class="card">
    <div class="card-content">
        <span class="card-title">Card Title</span>
        <div class="card-meta">
            <span>Some additional information</span>
        </div>
        <p>I am a basic card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, vitae.</p>
    </div>
    <div class="card-action">
        <a><i class="mdi mdi-bookmark"></i> 20 Saves</a>
    </div>
</div>
{{% /column %}}
{{% column class="is-6" %}}
<div class="card is-primary has-white-text">
    <div class="card-content">
        <span class="card-title">Card Title</span>
        <div class="card-meta">
            <span>Some additional information</span>
        </div>
        <p>I am a basic card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, vitae.</p>
    </div>
    <div class="card-action">
        <a><i class="mdi mdi-bookmark"></i> 20 Saves</a>
    </div>
</div>
{{% /column %}}
{{< /row >}}
{{% /infoblock %}}

```html
<!-- Default card style -->
<div class="card">
    <div class="card-content">
        <span class="card-title">Card Title</span>
        <div class="card-meta">
            <span>Some additional information</span>
        </div>
        <p>I am a basic card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, vitae.</p>
    </div>
    <div class="card-action">
        <a><i class="mdi mdi-bookmark"></i> 20 Saves</a>
    </div>
</div>

<!-- Primary card with white text -->
<div class="card is-primary has-white-text">
    <div class="card-content">
        <span class="card-title">Card Title</span>
        <div class="card-meta">
            <span>Some additional information</span>
        </div>
        <p>I am a basic card. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, vitae.</p>
    </div>
    <div class="card-action">
        <a><i class="mdi mdi-bookmark"></i> 20 Saves</a>
    </div>
</div>
```

## Image Cards
Cards can have images too.

{{% infoblock class="example" %}}
{{< row >}}
{{% column class="is-6" %}}
<div class="card">
    <div class="card-image">
        <img src="/images/affinity.png" alt="Affinity" />
    </div>
    <div class="card-content">
        <span class="card-title">Affinity</span>
        <div class="card-meta">
            <span class="label is-primary">Drama</span>
            <span class="label is-primary">Sentimental</span>
            <span class="label is-primary">Character Profile</span>
        </div>
        <p>She And Her Cat: Everything Flows.</p>
    </div>
    <div class="card-action">
        <a href="https://www.youtube.com/watch?v=D4x9EyiH2HI" class="button is-outline is-narrow">Watch Now</a>
        <a class="is-right">
            <i class="mdi mdi-heart"></i>
            10
        </a>
    </div>
</div>
{{% /column %}}
{{< /row >}}
{{% /infoblock %}}

```html
<div class="card">
    <div class="card-image">
        <img src="/images/affinity.png" alt="Affinity" />
    </div>
    <div class="card-content">
        <span class="card-title">Affinity</span>
        <div class="card-meta">
            <span class="label is-primary">Drama</span>
            <span class="label is-primary">Sentimental</span>
            <span class="label is-primary">Character Profile</span>
        </div>
        <p>She And Her Cat: Everything Flows.</p>
    </div>
    <div class="card-action">
        <a href="https://www.youtube.com/watch?v=D4x9EyiH2HI" class="button is-outline is-narrow">Watch Now</a>
        <a class="is-right">
            <i class="mdi mdi-heart"></i>
            10
        </a>
    </div>
</div>
```

## Horizontal Cards
They can also be horizontal:

{{% infoblock class="example" %}}
{{< row >}}
{{% column class="is-8" %}}
<div class="card horizontal">
    <div class="card-image">
        <img src="/images/reliance.png" alt="Reliance" />
    </div>
    <div class="card-body">
        <div class="card-content">
            <span class="card-title">Reliance</span>
            <div class="card-meta">
                Drama - Sentimental
            </div>
            <p>Sora No Woto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div class="card-action">
            <a href="https://www.youtube.com/watch?v=DTAYxBIeU14" class="button is-outline is-narrow">Watch Now</a>
            <a class="is-right">
                <i class="mdi mdi-heart"></i>
                10
            </a>
        </div>
    </div>
</div>
{{% /column %}}
{{< /row >}}
{{% /infoblock %}}

```html
<div class="card horizontal">
    <div class="card-image">
        <img src="/images/reliance.png" alt="Reliance" />
    </div>
    <div class="card-body">
        <div class="card-content">
            <span class="card-title">Reliance</span>
            <div class="card-meta">
                Drama - Sentimental
            </div>
            <p>Sora No Woto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div class="card-action">
            <a href="https://www.youtube.com/watch?v=DTAYxBIeU14" class="button is-outline is-narrow">Watch Now</a>
            <a class="is-right">
                <i class="mdi mdi-heart"></i>
                10
            </a>
        </div>
    </div>
</div>
```

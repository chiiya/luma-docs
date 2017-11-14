---
title: "Forms"
date: 2017-11-14T00:22:38+01:00
slug: "forms"
---

# Forms
Why should forms be ugly? Luma provides custom styling for all common input elements.

## Basic Layout
Use `fieldset` or a div with class `field` to group input elements:

{{% infoblock class="example" %}}
<form>
    <div class="field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name">
    </div>
    <div class="field">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Send me a message"></textarea>
    </div>
    <div class="field">
        <input type="checkbox" id="terms" name="terms">
        <label for="terms">I accept all the evil terms and conditions.</label>
    </div>

    <input type="submit" class="button is-outline" value="Submit">
</form>
{{% /infoblock %}}

```html
<form>
    <div class="field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name">
    </div>
    <div class="field">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Send me a message"></textarea>
    </div>
    <div class="field">
        <input type="checkbox" id="terms" name="terms">
        <label for="terms">I accept all the evil terms and conditions.</label>
    </div>

    <input type="submit" class="button is-outline" value="Submit">
</form>
```

## Alignment

You can make forms horizontal by using our grid system:

{{% infoblock class="example" %}}
<form>
    <div class="field row">
        <label for="name2" class="column is-2">Name</label>
        <div class="column is-10">
          <input type="text" id="name2" name="name" placeholder="Your Name">
        </div>
    </div>
    <div class="field row">
        <label for="message2" class="column is-2">Message</label>
        <div class="column is-10">
            <textarea id="message2" name="message" placeholder="Send me a message"></textarea>
        </div>
    </div>
    <div class="field">
        <input type="checkbox" id="terms2" name="terms">
        <label for="terms2">I accept all the evil terms and conditions.</label>
    </div>

    <input type="submit" class="button is-outline" value="Submit">
</form>
{{% /infoblock %}}

```html
<form>
    <div class="field row">
        <label for="name" class="column is-2">Name</label>
        <div class="column is-10">
          <input type="text" id="name" name="name" placeholder="Your Name">
        </div>
    </div>
    <div class="field row">
        <label for="message" class="column is-2">Message</label>
        <div class="column is-10">
            <textarea id="message" name="message" placeholder="Send me a message"></textarea>
        </div>
    </div>
    <div class="field">
        <input type="checkbox" id="terms" name="terms">
        <label for="terms">I accept all the evil terms and conditions.</label>
    </div>

    <input type="submit" class="button is-outline" value="Submit">
</form>
```

Add the `is-centered` class to a `field` to make all elements inside vertically centered:
{{% infoblock class="example" %}}
<form>
    <div class="field is-centered row">
        <label class="column is-4">Details</label>
        <div class="column is-3">
            <input type="text" id="name3" placeholder="Order No.">
        </div>
        <div class="column is-2">
            <input type="checkbox" id="terms3">
            <label for="terms3">Term 0</label>
        </div>
        <div class="column is-2">
            <input type="checkbox" id="terms4">
            <label for="terms4">Term 1</label>
        </div>
    </div>
</form>
{{% /infoblock %}}

```html
<form>
    <div class="field is-centered row">
        <label class="column is-4">Details</label>
        <div class="column is-3">
            <input type="text" id="name" placeholder="Order No.">
        </div>
        <div class="column is-2">
            <input type="checkbox" id="terms3">
            <label for="terms-zero">Term 0</label>
        </div>
        <div class="column is-2">
            <input type="checkbox" id="terms4">
            <label for="terms-one">Term 1</label>
        </div>
    </div>
</form>
```

## Form Elements

### Text Inputs

{{% infoblock class="example" %}}
<div class="field">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" placeholder="Title">
</div>
<div class="field">
    <label for="title-disabled">Disabled</label>
    <input type="text" id="title-disabled" name="title-disabled" placeholder="Help! I'm Disabled!" disabled>
</div>
{{% /infoblock %}}

```html
<div class="field">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" placeholder="Title">
</div>
<div class="field">
    <label for="title-disabled">Disabled</label>
    <input type="text" id="title-disabled" name="title-disabled" placeholder="Help! I'm Disabled!" disabled>
</div>
```

If you use the Luma Javascript, you can automatically resize `textareas` (shrink / expand) on user input by using
`luma.textarea('textarea');`.
All elements with the `data-resize="textarea"` attribute will be initialized on page load. Later added elements will need
to be initialized using the aforementioned API call.
{{% infoblock class="example" %}}
<textarea data-resize="textarea" placeholder="I've got big plans to expand!"></textarea>
{{% /infoblock %}}

```html
<textarea data-resize="textarea" placeholder="I've got big plans to expand!"></textarea>
```

### Checkboxes
Luma uses custom CSS checkboxes. Check them out:

{{% infoblock class="example" %}}
<div class="field">
    <input type="checkbox" id="check" name="check">
    <label for="check">Check 123</label>
</div>
<div class="field">
    <input type="checkbox" id="check-disabled" name="check-disabled" disabled>
    <label for="check-disabled">Disabled Checkbox</label>
</div>
{{% /infoblock %}}

```html
<div class="field">
    <input type="checkbox" id="check" name="check">
    <label for="check">Check 123</label>
</div>
<div class="field">
    <input type="checkbox" id="check-disabled" name="check-disabled" disabled>
    <label for="check-disabled">Disabled Checkbox</label>
</div>
```

### Radios
Luma also uses custom CSS radios:

{{% infoblock class="example" %}}
<div class="field">
    <input type="radio" id="radio1" name="radios">
    <label for="radio1">Option 1</label>
</div>
<div class="field">
    <input type="radio" id="radio2" name="radios">
    <label for="radio2">Option 2</label>
</div>
<div class="field">
    <input type="radio" id="radio3" name="radios" disabled>
    <label for="radio3">Disabled Option 3</label>
</div>
{{% /infoblock %}}

```html
<div class="field">
    <input type="radio" id="radio1" name="radios">
    <label for="radio1">Option 1</label>
</div>
<div class="field">
    <input type="radio" id="radio2" name="radios">
    <label for="radio2">Option 2</label>
</div>
<div class="field">
    <input type="radio" id="radio3" name="radios" disabled>
    <label for="radio3">Disabled Option 3</label>
</div>
```

### Selects
For selects, we offer two variants. Without any javascript some default styling is applied:
{{% infoblock class="example" %}}
<select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option disabled>Option 3 Disabled</option>
</select>
{{% /infoblock %}}

```html
<select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option disabled>Option 3 Disabled</option>
</select>
```

If you choose to use the Luma Javascript (or include [style-select](http://mikemaccana.github.io/styleselect/)
on your own) the select boxes come in a nice custom styling:

{{% infoblock class="example" %}}
<div class="row">
    <div class="column is-3">
        <select data-style="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option disabled>Option 3 Disabled</option>
        </select>
    </div>
</div>
{{% /infoblock %}}

```html
<div class="row">
    <div class="column is-3">
        <select data-style="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option disabled>Option 3 Disabled</option>
        </select>
    </div>
</div>
```

To apply this styling, call `luma.select('select')` or with any other selector. By default, all selects with
attribute `data-style="select"` will be initialized this way. Later added elements will need to be initialized again using
the aforementioned API call

### File Uploads
You can replace the default file select button with a custom button using the following syntax. Apply any of our button
classes to the label to style your file upload button.

{{% infoblock class="example" %}}
<div class="file">
    <label for="file" class="file__label">
        <input type="file" id="file" class="file__input">
        <span class="button is-outline">
            <span class="icon">
                <i class="mdi mdi-cloud-upload"></i>
            </span>
            <span>Upload</span>
        </span>
    </label>

</div>
{{% /infoblock %}}

```html
<div class="file">
    <label for="file" class="file__label">
        <input type="file" id="file" class="file__input">
        <span class="button is-outline">
            <span class="icon">
                <i class="mdi mdi-cloud-upload"></i>
            </span>
            <span>Upload</span>
        </span>
    </label>
</div>
```

If you want, you can also include an additional box next to the button to display the selected file name.
{{% infoblock class="example" %}}
<div class="file has-name">
    <label for="file2" class="file__label">
        <input type="file" id="file2" class="file__input" data-display="file">
        <span class="button is-outline">
            <span class="icon">
                <i class="mdi mdi-cloud-upload"></i>
            </span>
            <span>Upload</span>
        </span>
        <span class="file__name">Choose file...</span>
    </label>
</div>
{{% /infoblock %}}

```html
<div class="file has-name">
    <label for="file" class="file__label">
        <input type="file" id="file" class="file__input" data-display="file">
        <span class="button is-outline">
            <span class="icon">
                <i class="mdi mdi-cloud-upload"></i>
            </span>
            <span>Upload</span>
        </span>
        <span class="file__name">Choose file...</span>
    </label>
</div>
```

For actually displaying the filename you'll require some javascript. If you're using the Luma Javascript simply call
`luma.file('.file__input');` or using a similar selector. All file inputs with attribute `data-display="file"` will
automatically be initialized at page load.
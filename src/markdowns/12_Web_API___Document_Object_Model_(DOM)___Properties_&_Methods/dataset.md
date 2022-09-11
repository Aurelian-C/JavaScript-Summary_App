## Data attributes

HTML5 is designed with extensibility in mind for _data that should be associated with a particular element_ but need not have any defined meaning. `data-*` attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

## HTML syntax

The syntax is simple. Any attribute on any element whose attribute name starts with `data-` is a data attribute. Say you have an article and you want to store some extra information that doesn't have any visual representation. Just use data attributes for that:

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"
>
  ...
</article>
```

## JavaScript access/setting values (HTMLElement.dataset)

Reading the values of these attributes out in JavaScript is also very simple. You could use `getAttribute()` with their full HTML name to read them, but the standard defines a simpler way: a DOMStringMap you can read out via a ==**dataset**== property.

The `dataset` ==read-only== property of the HTMLElement interface provides ==**read/write**== access to custom data attributes (`data-*`) on elements. It exposes a map of strings (DOMStringMap) with an entry for each `data-*` attribute.

> **Note**: The dataset property itself can be read, but ==not directly written==. Instead, all writes must be to the individual properties within the dataset, which in turn represent the data attributes.

### Accessing values

To get a data attribute through the dataset object, get the property by the part of the attribute name after `data-` (note that dashes are converted to camelCase).

```js
const article = document.querySelector('#electric-cars');
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

==Each property is a **string** and can be **read** and **written**==. In the above case setting `article.dataset.columns = 5` would change that attribute to `"5"`.

### Setting values

When the attribute is set, its value is always converted to a string. For example: `element.dataset.example = null` is converted into `data-example="null"`.

## CSS access

Note that, as data attributes are plain HTML attributes, you can even access them from CSS. For example to show the parent data on the article you can use generated content in CSS with the `attr()` function:

```css
article::before {
  content: attr(data-parent);
}
```

You can also use the attribute selectors in CSS to change styles according to the data:

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

## Reference

1. [Using data attributes - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
2. [HTMLElement.dataset - MDN](https://developer.mozilla.org/en-US/docs/web/api/htmlelement/dataset)

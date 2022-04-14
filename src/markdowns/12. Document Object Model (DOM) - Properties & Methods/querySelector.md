# Document.querySelector()

The `Document` method `querySelector()` takes as parameter any **CSS selectors** (e.g. `#some-id`, `.some-class` or `div p.some-class`) and returns the **first matching** `Element` in the DOM. Returns `null` if no matching element could be found.

> **Note**: You may also call `querySelector()` on any element; it will return only element which is descendant of the specified root element with the given CSS selectors.

## Syntax

```js
element = document.querySelector('CSS selectors');
```

## Parameters

`'CSS selectors'` (required): A DOMString containing one or more CSS selectors. CSS selectors select HTML elements based on id, classes, types, attributes, values of attributes etc. This string must be a valid **CSS selector string**; if it isn't, a `SyntaxError` exception is thrown.

## Return value

An `Element` object representing the first element in the document that matches the specified set of CSS selectors, or `null` is returned if there are no matches.

## Examples

```js
// First element in the document with the class "myclass" is returned
const el = document.querySelector('.myclass');

// Returns the first element that is the last <li> tag in the HTML
const el = document.querySelector('li:last-of-type');

// Selectors can also be really powerful
const el = document.querySelector("div.user-panel.main input[name='login']");

// As all CSS selector strings are valid, you can also negate selectors
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']"
);
// This code above will select an input with a parent div with the user-panel class but not the main class.
```

## Reference

1. [Document.querySelector() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

2. [Document querySelector() - w3schools](https://www.w3schools.com/jsref/met_document_queryselector.asp)

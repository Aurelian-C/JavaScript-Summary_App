# Document.createElement()

In an HTML document, the `document.createElement()` method ==creates== the ==HTML element== specified by ==tagName==, or an `HTMLUnknownElement` if tagName isn't recognized.

## Syntax

```js
const element = document.createElement(tagName[, options]);
```

## Parameters

**tagName** - a ==string== that _specifies the ==type of element== to be created_. The nodeName of the created element is _initialized with the value of tagName_. Don't use qualified names (like "html:a") with this method. When called on an HTML document, `createElement()` converts tagName to lower case before creating the element. In Firefox, Opera, and Chrome, `createElement(null)` works like `createElement("null")`.

**options** (optional) - an optional `ElementCreationOptions` object, containing a single property named is, whose value is the tag name of a custom element previously defined via `customElements.define()`.

## Return value

The new `Element`.

> **Note**: A new `HTMLElement` is returned if the document is an `HTMLDocument`, which is the most common case. Otherwise a new Element is returned.

## Reference

1. [Document.createElement() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
2. [createElement() - w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)

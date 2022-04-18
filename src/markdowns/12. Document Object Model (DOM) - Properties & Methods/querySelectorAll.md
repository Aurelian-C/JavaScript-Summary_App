# Document.querySelectorAll()

The `Document` method `querySelectorAll()` takes as parameter any **CSS selectors** (e.g. `#some-id`, `.some-class` or `div p.some-class`) and **returns all matching elements** in the DOM as a **static (non-live)** `NodeList`. Returns and empty `NodeList` if no matching element could be found.

> Note: You may also call `querySelectorAll()` on any element; it will return only elements which are descendants of the specified root element with the given CSS selectors.

## Syntax

```js
element = document.querySelectorAll('CSS selectors');
```

## Parameters

`'CSS selectors'` (required): A DOMString containing one or more CSS selectors. CSS selectors select HTML elements based on id, classes, types, attributes, values of attributes etc. This string must be a valid **CSS selector string**; if it isn't, a `SyntaxError` exception is thrown.

## Return value

A **non-live** `NodeList` containing one `Element` object for each element that matches at least one of the specified selectors or an empty `NodeList` in case of no matches.

## Examples

```js
// Returns a NodeList of all of the <p> elements in the document
const matches = document.querySelectorAll('p');

// Returns a list of all <div> elements within the document with a class of either note or alert
const matches = document.querySelectorAll('div.note, div.alert');

// You can use an attribute selector to return a list of the <iframe> elements in the document that contain an attribute named data-src
const matches = document.querySelectorAll('iframe[data-src]');
```

## The Difference Between an `HTMLCollection` and a `NodeList`

A `NodeList` and an `HTMLcollection` is very much the same thing.

- Both are **array-like collections** (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
- Both have a **length** property that returns the number of elements in the list (collection).
- An HTMLCollection is a collection of **document elements**.
- A NodeList is a collection of **document nodes** (element nodes, attribute nodes, and text nodes).
- HTMLCollection items can be accessed by their name, id, or index number.
- NodeList items can only be accessed by their index number.
- An HTMLCollection is always a **live** collection. Example: If you add a `<li>` element to a list in the DOM, the list in the HTMLCollection will also change.
- A NodeList is most often a **static** collection. Example: If you add a `<li>` element to a list in the DOM, the list in NodeList will not change.
- The `getElementsByClassName()` and `getElementsByTagName()` methods return a live HTMLCollection.
- The `querySelectorAll()` method returns a static NodeList.
- The `childNodes` property returns a live NodeList.

## Reference

1. [Document.querySelectorAll() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

2. [Document querySelectorAll() - w3schools](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

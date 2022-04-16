# Document.getElementById()

The `Document` method `getElementById()` takes as parameter an ID (without `#`, just the id name) and returns the element that has that id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns `null` if no element with the specified ID could be found.

> **Note**: Any id should be unique, but if two or more elements with the same id exist, `getElementById()` returns the first.

## Syntax

```js
const element = document.getElementById(id);
```

## Parameters

`id` (required): The ID of the element to locate but without `#`. The ID is case-sensitive string which is unique within the document; only one element may have any given ID.

## Return value

An `Element` object describing the DOM element object matching the specified ID, or `null` if no matching element was found in the document.

## Reference

1. [Document.getElementById() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

2. [Document getElementById() - w3schools](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)

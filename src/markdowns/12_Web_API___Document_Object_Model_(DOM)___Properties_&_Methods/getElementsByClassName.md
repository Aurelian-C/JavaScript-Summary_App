# Document.getElementsByClassName()

The `getElementsByClassName` method of `Document` interface takes as parameter a CSS class g (e.g. 'some-class') and returns a **live** `HTMLCollection` of matched elements in your DOM. Returns an empty `HTMLCollection` if not matching elements were found.
The `HTMLCollection` is an **array-like** object of all child elements which have all of the given class name(s).

When called on the `document` object, the complete document is searched, including the root node. You may also call `getElementsByClassName()` on any element; it will return only elements which are descendants of the specified root element with the given class name(s).

> **Note**: This is a **live** `HTMLCollection`. Changes in the DOM will reflect in the array-like object as the changes occur. If an element selected by this array-like objet no longer qualifies for the selector, it will automatically be removed. Be aware of this for iteration purposes.

## Syntax

```js
const elements = document.getElementsByClassName(classname);

// or
const elements = rootElement.getElementsByClassName(classname);
```

- _elements_ is a **live** `HTMLCollection` of found elements
- _names_ is a string representing the class name(s) to match; multiple class names are separated by whitespace
- `getElementsByClassName` can be called on any element, not only on the `document`. The element on which it is called will be used as the root of the search.

## HTMLCollection

- An HTMLCollection is an **array-like** collection (list) of HTML elements.
- The elements in a collection can be accessed by **index** (starts at 0).
- The **length** property returns the number of elements in the collection.

## Example

```js
// Get all elements that have a class of 'test'
document.getElementsByClassName('test');

// Get all elements that have both the 'red' and 'test' classes
document.getElementsByClassName('red test');

// Get all elements that have a class of 'test', inside of an element that has the ID of 'main'
document.getElementById('main').getElementsByClassName('test');
```

## Reference

1. [Document.getElementsByClassName() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

2. [getElementsByClassName() - w3schools](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)

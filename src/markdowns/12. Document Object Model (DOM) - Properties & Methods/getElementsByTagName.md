# Document.getElementsByTagName()

The `getElementsByTagName` method of `Document` interface takes as parameter an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

The `Document.getElementsByTagName()` method returns a **live** HTMLCollection of elements with the given tag name.

The complete document is searched, including the root node. The returned HTMLCollection is **live**, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call `document.getElementsByTagName()` again.

## Syntax

```js
const elements = document.getElementsByTagName(tagName);
```

- _elements_ is a **live** HTMLCollection (but see the note below) of found elements in the order they appear in the tree.
- _tagName_ is a **string** representing the name of the elements. The special string `'*'` represents all elements.

> **Note**: The latest W3C specification says elements is an HTMLCollection; however, this method returns a NodeList in WebKit browsers.

## Reference

1. [Document.getElementsByTagName() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)

2. [getElementsByTagName() - w3schools](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)

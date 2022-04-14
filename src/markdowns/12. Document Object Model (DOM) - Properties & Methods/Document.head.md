# Document.head

The `head` property returns the `<head>` element of the document.

> **Note**: If there are no `<head>` element, HTML adds an empty one. If there are more than one `<head>` element, this property returns the first.

`document.head` is **read-only**. Trying to assign a value to this property will fail silently or, in Strict Mode, throws a `TypeError`.

## Syntax

```js
document.head;
```

## Return Value

The head element of the document (an `HTMLHeadElement`).

## Reference

1. [Document head - w3schools](https://www.w3schools.com/jsref/prop_doc_head.asp)

2. [Document.head - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/head)

# Element.children

The ==read-only== `children` property returns a ==live== `HTMLCollection` which contains all of the ==child elements== of the element upon which it was called. If the element has no element children, then `children` is an empty list with a `length` of `0`.

> **Note**: `Element.children` includes ==only element nodes==. To get all child nodes, including non-element nodes like text and comment nodes, use `Node.childNodes`.

## Syntax

```js
element.children;
```

## Example

```js
// Get a collection of the <body> element's children
const collection = document.body.children;
```

## HTML Nodes vs Elements

- In the **HTML DOM** (Document Object Model), an HTML document is a collection of nodes with (or without) child nodes
- **Nodes** are ==element== nodes, ==text== nodes, and ==comment== nodes
- **Whitespace** between elements are also **text nodes**
- **Elements** are only element nodes.

## childNodes vs children

- **childNodes** returns child **nodes** (**element** nodes, **text** nodes, and **comment** nodes).
- **children** returns child **elements** (not text and comment nodes).

## Siblings vs Element Siblings

- **Siblings** are "brothers" and "sisters".
- **Siblings** are nodes with the ==same parent== (in the same **childNodes** list).
- **Element Siblings** are elements with the ==same parent== (in the same **children** list)

## Reference

1. [Element.children - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/children)
2. [children - w3schools](https://www.w3schools.com/jsref/prop_element_children.asp)

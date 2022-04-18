# Element.firstElementChild

The `Element.firstElementChild` ==read-only== property returns the first child element of the specified `Element`, or `null` if there are no child elements.

> Note: `Element.firstElementChild` includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use `Node.firstChild`.

The `firstElementChild` property returns the same as `children[0]`.

## Syntax

```js
element.firstElementChild;
```

## Nodes vs Elements

- **Nodes** are all nodes (element nodes, text nodes, and comment nodes)
- **Whitespace** between elements are also text nodes
- **Elements** are only element nodes

## childNodes vs children

- **childNodes** returns child **nodes** (element nodes, text nodes, and comment nodes)
- **children** returns child **elements** (not text and comment nodes)

## firstChild vs firstElementChild

- **firstChild** returns the first child **node** (an element node, a text node or a comment node). Whitespace between elements are also text nodes
- **firstElementChild** returns the first child **element** (not text and comment nodes)

## lastChild vs lastElementChild

- **lastChild** returns the last child **node** (an element node, a text node or a comment node). Whitespace between elements are also text nodes
- **lastElementChild** returns the last child **element** (not text and comment nodes)

## Reference

1. [Element.firstElementChild - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/firstelementchild)
2. [firstElementChild - w3schools](https://www.w3schools.com/jsref/prop_element_firstelementchild.asp)

# Node.lastChild

The ==read-only== `lastChild` property of the Node interface returns the last child node of a node. If its parent is an element, then the child is generally an element node, a text node, or a comment node. It returns `null` if there are no child nodes.

> **Note**: `lastChild` returns the last child node: an element node, a text node, or a comment node. Whitespace between elements are also text nodes.
>
> > If you want to get the last Element that is a last child of another element, consider using `Element.lastElementChild`. The `lastElementChild` property returns the last child element (ignores text and comment nodes).

## Syntax

```js
element.lastChild;

// or
node.lastChild;
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

1. [Node.lastChild - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild)
2. [lastChild - w3schools](https://www.w3schools.com/jsref/prop_node_lastchild.asp)

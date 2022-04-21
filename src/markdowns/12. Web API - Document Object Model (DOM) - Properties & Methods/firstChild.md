# Node.firstChild

The ==read-only== `firstChild` property of the Node interface returns the first child node of a node, or `null` if the node has no children.

If the node is a `Document`, this property returns the first node in the list of its direct children.

> **Note**: `firstChild` returns the first child node: an element node, a text node, or a comment node. Whitespace between elements are also text nodes.
>
> If you want to get the first Element that is a child of another element, consider using `Element.firstElementChild`. The `firstElementChild` property returns the first child element (ignores text and comment nodes).

The `firstChild` property is the same as `childNodes[0]`.

## Syntax

```js
element.firstChild;

// or
node.firstChild;
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

1. [Node.firstChild - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
2. [firstChild - w3schools](https://www.w3schools.com/jsref/prop_node_firstchild.asp)

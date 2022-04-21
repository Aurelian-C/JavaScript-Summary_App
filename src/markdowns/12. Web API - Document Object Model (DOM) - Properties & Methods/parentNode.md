# Node.parentNode

The ==read-only== `parentNode` property of the Node interface returns the parent of the specified node in the DOM tree.

> **Note**: `Document` and `DocumentFragment` nodes can never have a parent, so `parentNode` will always return `null`. It also returns `null` if the node has just been created and is not yet attached to the tree.

## Syntax

```js
element.parentNode;

// or
node.parentNode;
```

## Return Value

- The parent node.
- `null` if the node has no parent.

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

1. [Node.parentNode - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
2. [parentNode - w3schools](https://www.w3schools.com/Jsref/prop_node_parentnode.asp)

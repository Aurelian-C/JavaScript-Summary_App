# Node.appendChild()

The `appendChild()` method of the Node interface **adds a node to the end of the list of children of a specified parent node**.

If the given child is a reference to an existing node in the document, `appendChild()` **moves** it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node). This means that **a node can't be in two points of the document simultaneously**.

> **Note**: Unlike this method, the `Element.append()` method supports multiple arguments and appending strings. You can prefer using it if your node is an element.

## Syntax

```js
element.appendChild(node);

// or
node.appendChild(node);
```

## Parameters

**aChild** - the node to append to the given parent node (commonly an element).

## Return Value

The appended node.

## Example

```js
// Create a new paragraph element, and append it to the end of the document body
let p = document.createElement('p');
document.body.appendChild(p);
```

## Reference

1. [Node.appendChild() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
2. [appendChild() - MDN](https://www.w3schools.com/Jsref/met_node_appendchild.asp)

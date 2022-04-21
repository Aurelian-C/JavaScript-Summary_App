# Node.replaceChild()

The `replaceChild()` method of the Node element ==replaces a child node within the given (parent) node==.

## Syntax

```js
node.replaceChild(newNode, oldNode);
```

## Parameters

**newNode** (required) - The node to insert.

> **Note**: If the new node is already present somewhere else in the DOM, it is first removed from that position.

**oldNode** (required) - The node to remove.

> **Note**: The parameter order, new before old, is unusual.

`Element.replaceWith()`, applying only to nodes that are elements, may be easier to read and use.

## Examples

```js
const newNode = document.createTextNode('Water');
const element = document.getElementById('myList').children[0];

element.replaceChild(newNode, element.childNodes[0]);
```

## Reference

1. [Node.replaceChild() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
2. [replaceChild() - w3schools](https://www.w3schools.com/jsref/met_node_replacechild.asp)

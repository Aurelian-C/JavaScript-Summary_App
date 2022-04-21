# Node.insertBefore()

The `insertBefore()` method ==inserts== a ==child node== ==before== an existing ==child==.

If the given node already exists in the document, `insertBefore()` moves it from its current position to the new position. (That is, it will automatically be removed from its existing parent before appending it to the specified new parent). This means that ==a node cannot be in two locations of the document simultaneously==.

> **Note**: The `Node.cloneNode()` can be used to make a copy of the node before appending it under the new parent. Note that the copies made with `cloneNode()` will not be automatically kept in sync.

## Syntax

```js
element.insertBefore(newNode, referenceNode);

// or
node.insertBefore(newNode, referenceNode);
```

## Parameters

**newNode** - the node (element) to be inserted.

**referenceNode** - the node before which `newNode` is inserted. If this is `null`, then `newNode` is inserted at the end of node's child nodes. `referenceNode` is not an optional parameter. You must explicitly pass a `Node` or `null`.

## Reference

1. [Node.insertBefore() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
2. [insertBefore() - w3schools](https://www.w3schools.com/jsref/met_node_insertbefore.asp)

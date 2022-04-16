# Node.cloneNode()

The `cloneNode()` method of the Node interface returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not.

Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners. It does not copy event listeners added using `addEventListener()` or those assigned to element properties (e.g., `node.onclick = someFunction`).

> Warning: `cloneNode()` may lead to duplicate element IDs in a document! If the original node has an `id` attribute, and the clone will be placed in the same document, then you should modify the clone's ID to be unique.
>
> Also, `name` attributes may need to be modified, depending on whether duplicate names are expected.

The `cloneNode()` method:

- creates a copy of a node, and returns the clone.
- clones all attributes and their values.

Set the _deep_ parameter to `true` if you also want to clone descendants (children).

## Syntax

```js
node.cloneNode(deep);
```

## Parameters

**deep** (optional):

- `false` - Default. Clone only the node and its attributes. The subtree, including any text that the node contains, is not cloned.
- `true` - Clone the node, its attributes, and its descendants, including text that may be in child Text nodes, is also copied.

> **Note**: deep parameter has no effect on empty elements, such as the `<img>` and `<input>` elements.

## Return value

The new Node cloned. The cloned node has no parent and is not part of the document, _until_ it is added to another node that is part of the document, using `Node.appendChild()` or a similar method.

## Example

```js
let p = document.getElementById('para1');
let p_prime = p.cloneNode(true);
```

## Reference

1. [Node.cloneNode() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
2. [cloneNode() - w3schools](https://www.w3schools.com/Jsref/met_node_clonenode.asp)

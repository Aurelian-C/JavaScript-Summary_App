# Document.importNode()

The Document object's `importNode()` method creates a ==**copy**== of a Node or DocumentFragment from another document, to be inserted into the current document later.

The imported node is not yet included in the document tree. To include it, you need to call an insertion method such as `appendChild()` or `insertBefore()` with a node that is currently in the document tree.

Unlike `document.adoptNode()`, the original node is not removed from its original document. The imported node is a clone of the original.

The `importNode()` method:

- imports a node from another document;
- Whith the second parameter set to `true`, child nodes will also be imported;
- imported node is not removed from the original document;
- imported node is a copy of the original.

## Syntax

```js
document.importNode(node);
document.importNode(node, deep);
```

## Parameters

==**node**== (required) - The external Node or DocumentFragment to import into the current document.

==**deep**== (required):

- `false`: only the node itself is imported;
- `true`: child nodes (descendants) are also imported.

## Return Value

The copied importedNode in the scope of the importing document.

## Notes

Before they can be inserted into the current document, nodes from external documents should either be:

- cloned using `document.importNode()`; or
- adopted using `document.adoptNode()`.

## Reference

1. [Document importNode() - w3schools](https://www.w3schools.com/jsref/met_document_importnode.asp)
2. [Document.importNode() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode)

# Node.nodeValue

The `nodeValue` property **_sets_ or _returns_ the value of a node**. If the node is an element node, the `nodeValue` property will return `null`.

> **Note**: If you want to return the text of an element, remember that text is always inside a Text node, and you will have to return the Text node's node value (`element.childNodes[0].nodeValue`).

For other node types, the nodeValue property will return different values for different node types.

## Syntax

```js
// Return the node value:
node.nodeValue;

// Set the node value:
node.nodeValue = value;
```

## Return Value

- The node value.
- `null` for element and document nodes.
- The attribute value for attribute nodes.
- The text content for text nodes.
- The text content for comment nodes.

A string containing the value of the current node, if any. For the document itself, `nodeValue` returns `null`. For text, comment, and CDATA nodes, `nodeValue` returns the content of the node. For attribute nodes, the value of the attribute is returned.

The following table shows the return values for different types of nodes.

|          Node           |         Value of nodeValue          |
| :---------------------: | :---------------------------------: |
|     `CDATASection`      |    Content of the CDATA section     |
|        `Comment`        |       Content of the comment        |
|       `Document`        |               `null`                |
|   `DocumentFragment`    |               `null`                |
|     `DocumentType`      |               `null`                |
|        `Element`        |               `null`                |
|     `NamedNodeMap`      |               `null`                |
| `ProcessingInstruction` | Entire content excluding the target |
|         `Text`          |      Content of the text node       |

## References

1. [Node.nodeValue - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue)

2. [HTML DOM nodeValue Property - w3schools](https://www.w3schools.com/jsref/prop_node_nodevalue.asp)

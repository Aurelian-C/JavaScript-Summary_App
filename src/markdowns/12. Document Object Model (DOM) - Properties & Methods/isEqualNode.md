# Node.isEqualNode()

The `isEqualNode()` method **tests whether two nodes are equal**. Two nodes are equal when they have the same **type**, defining **characteristics** (for elements, this would be their ID, number of children, and so forth), its attributes match, and so on. The specific set of data points that must match varies depending on the **types of the nodes**.

The `isEqualNode()` returns `true` if two elements (or nodes) are equal. Two nodes are equal if all of the following conditions are true:

- They have the same **nodeType**
- They have the same **nodeName**
- They have the same **nodeValue**
- They have the same **nameSpaceURI**
- They have the same **childNodes with all the descendants**
- They have the same **attributes** and **attribute values**
- They have the same **localName** and **prefix**

## Syntax

```js
isEqualNode(otherNode);
```

## Parameters

`otherNode`: The `Node` to compare equality with. This parameter is not optional, but can be set to `null`.

## Return value

A boolean value that is `true` if the two nodes are equals, or `false` if not. If `otherNode` is `null`, `isEqualNode()` always return false.

## References

1. [Node.isEqualNode() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode)

2. [HTML DOM Element isEqualNode() - w3schools](https://www.w3schools.com/jsref/met_node_isequalnode.asp)

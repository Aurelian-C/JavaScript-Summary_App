# Element.attributes

The `Element.attributes` property returns a ==**LIVE** collection== of ==**all attributes**== in an element.

The `attributes` property returns a `NamedNodeMap`, not an `Array`, so it has ==no Array methods==. To be more specific, `attributes` is a ==**key/value** pair of strings== that represents any information regarding that attribute.

A `NamedNodeMap` is an **==array-like== unordered collection** of an element's attributes. In other words a `NamedNodeMap` is a list of **Attr objects** and the `Attr` nodes indexes may differ among browsers. A `NamedNodeMap` has a `length` property that returns the number of nodes. The nodes can be accessed by name or index numbers. The index starts at 0.

## Syntax

```js
node.attributes;
```

## Return Value

A `NamedNodeMap` object (a collection of attribute objects).

## References

1. [Element.attributes - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

2. [HTML DOM Element attributes - w3school](https://www.w3schools.com/jsref/prop_node_attributes.asp)

## Node.childNodes

The ==read-only== `childNodes` property returns a ==live== `NodeList` of ==child nodes of the given element== where the first child node is assigned index 0 (`childNodes[0]` is the same as `firstChild`). 

Child nodes include **Elements**, **Text** and **Comments**. The items in the collection of nodes are objects, not strings.

> **Note**: The `NodeList` being ==live== means that its ==content is changed each time new children are added or removed==.

>  It is important to keep in mind that `childNodes` includes all child nodes, including non-element nodes like text (whitespace between Elements are also Text Nodes) and Comment. To get a collection containing only elements, use `Element.children` instead.

## HTML Nodes vs Elements

- In the HTML DOM (Document Object Model), an HTML document is a ==collection of nodes== with (or without) child nodes;
- **Nodes** are ==Element== nodes, ==Text== nodes, and ==Comment== nodes;
- **Whitespace** between elements are also ==Text== Nodes;
- **Elements** are only Element nodes.

## childNodes vs children

- **childNodes** returns child ==nodes== (**Element** nodes, **Text** nodes, and **Comment** nodes);
- **children** returns child ==Elements== (not Text and Comment nodes).

## Siblings vs Element Siblings

- **Siblings** are "brothers" and "sisters";
- **Siblings** are nodes with the ==same parent== (in the same **childNodes** list);
- **Element Siblings** are elements with the ==same parent== (in the same **children** list).

## Reference

1. [Node.childNodes - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
2. [childNodes - w3schools](https://www.w3schools.com/jsref/prop_node_childnodes.asp)

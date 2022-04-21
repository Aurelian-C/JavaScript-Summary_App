# Node.parentElement

The ==read-only== `parentElement` property of Node interface returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element.

> **Note**: The `parentElement` property returns the parent element of the specified element. The difference between `parentElement` and `parentNode`, is that `parentElement` returns `null` if the parent node is not an element node.
>
> ```js
> document.body.parentNode; // Returns the <html> element
> document.body.parentElement; // Returns the <html> element
>
> document.documentElement.parentNode; // Returns the Document node
> document.documentElement.parentElement; // Returns null (<html> does not have a parent ELEMENT node)
> ```

## Syntax

```js
node.parentElement;
```

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

1. [Node.parentElement - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
2. [parentElement Property - w3schools](https://www.w3schools.com/Jsref/prop_node_parentelement.asp)

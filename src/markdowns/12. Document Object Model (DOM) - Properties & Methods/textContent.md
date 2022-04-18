# Node.textContent

The `textContent` property ==sets== or ==returns== the ==text content== of the specified node, and ==all its descendants==.

> **Note**: When you set the `textContent` property, all child nodes are removed and replaced by only one new text node.

> **Note**: `innerText` is easily confused with `Node.textContent`, but there are important differences between the two. Basically, `innerText` is ==aware of the rendered appearance of text==, while `textContent` is not.

## Syntax

```js
// Return the text content of a node
element.textContent;
node.textContent;

// Set the text content of a node
element.textContent = text;
node.textContent = text;
```

## Return Value

- **String** - the text content of the element and all its descendants.
- `null` if the element is a document, a document type, or a notation.

## Differences from `innerText`

Don't get confused by the differences between `Node.textContent` and `HTMLElement.innerText`. Although the names seem similar, there are important differences:

- `textContent` gets the content of all elements, including `<script>` and `<style>` elements. In contrast, `innerText` only shows "human-readable" elements.
- `textContent` returns every element in the node. In contrast, `innerText` is aware of styling and won't return the text of "hidden" elements.
  Moreover, since `innerText` takes CSS styles into account, reading the value of `innerText` triggers a reflow to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)
- Both `textContent` and `innerText` remove child nodes when altered, but altering `innerText` in Internet Explorer (version 11 and below) also _permanently destroys_ all descendant text nodes. It is impossible to insert the nodes again into any other element or into the same element after doing so.

## Differences from `innerHTML`

`Element.innerHTML` returns HTML, as its name indicates. Sometimes people use `innerHTML` to retrieve or write text inside an element, but `textContent` has better performance because its value is not parsed as HTML. Moreover, using `textContent` can prevent XSS attacks.

## Reference

1. [Node.textContent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
2. [textContent - w3schools](https://www.w3schools.com/jsreF/prop_node_textcontent.asp)

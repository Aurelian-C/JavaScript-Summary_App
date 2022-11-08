# HTMLElement.innerText

The `innerText` property ==sets== or ==returns== the ==text content== of an ==element==.

> **Note**: When you set the `innerText` property, all child nodes are removed and replaced by only one new text node.

> **Note**: `innerText` is easily confused with `Node.textContent`, but there are important differences between the two. Basically, `innerText` is ==aware of the rendered appearance of text==, while `textContent` is not.

## Syntax

```js
// Return the text content of an element or node
element.innerText;
node.innerText;

// Set the text content of an element or node
element.innerText = text;
node.innerText = text;
```

## Return Value

**String** -The text content of the element and all descendants, except for `<script>` and `<style>` elements.

## The Differences Between `innerHTML`, `innerText` and `textContent`

|                                         innerHTML                                          |                                                                         innerText                                                                         |                                                     textContent                                                     |
| :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| returns the text content of the element, including ==all spacing== and ==inner HTML tags== | returns ==just the text content== of the element and all its children, without CSS hidden text spacing and tags, except `<script>` and `<style>` elements | returns the text content of the element and all descendaces, ==with spacing and CSS hidden text, but without tags== |

## References

1. [HTMLElement.innerText - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
2. [innerText - w3schools](https://www.w3schools.com/jsref/prop_node_innertext.asp)

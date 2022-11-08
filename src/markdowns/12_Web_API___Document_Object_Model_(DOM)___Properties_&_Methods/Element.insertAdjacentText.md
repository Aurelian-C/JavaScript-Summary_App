# Element.insertAdjacentText()

The `insertAdjacentText()` method of the Element interface, given a relative ==position== and a ==string==, inserts a new text node at the given position relative to the element it is called from, so `insertAdjacentText()` inserts a a text into a specified position.

## Syntax

```js
element.insertAdjacentText(position, text);

// or
node.insertAdjacentText(position, text);
```

## Parameters

**position** - a string representing the position relative to the element the method is called from. Must be one of the following strings:

|   String    |                   Description                   |
| :---------: | :---------------------------------------------: |
| beforebegin |            Before the element itself            |
| afterbegin  | Just inside the element, before its first child |
|  beforeend  |  Just inside the element, after its last child  |
|  afterend   |            After the element itself             |

> **Note**: The _beforebegin_ and _afterend_ positions work only if the node is in a tree and has an element parent.

**text** - the string (text) to insert.

We can visualize the possible positions for the inserted content as follows:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

## Reference

1. [Element.insertAdjacentText() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText)
2. [insertAdjacentText() - w3schools](https://www.w3schools.com/jsref/met_node_insertadjacenttext.asp)

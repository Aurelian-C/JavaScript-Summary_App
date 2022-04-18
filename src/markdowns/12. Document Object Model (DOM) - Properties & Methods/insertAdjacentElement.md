# Element.insertAdjacentElement()

The `insertAdjacentElement()` method of the `Element` interface ==inserts== a given ==element node== at a given ==position== relative to the element it is invoked upon.

## Syntax

## Syntax

```js
targetElement.insertAdjacentElement(position, element);

// or
targetNode.insertAdjacentElement(position, element);
```

## Parameters

**position** - a string representing the position relative to the `targetElement`/`targetNode`. Must be one of the following strings:

|   String    |                       Description                       |
| :---------: | :-----------------------------------------------------: |
| beforebegin |            Before the `targetElement` itself            |
| afterbegin  | Just inside the `targetElement`, before its first child |
|  beforeend  |  Just inside the `targetElement`, after its last child  |
|  afterend   |            After the `targetElement` itself             |

> **Note**: The _beforebegin_ and _afterend_ positions work only if the node is in a tree and has an element parent.

**element** - the element to be inserted into the tree.

We can visualize the possible positions for the inserted element as follows:

```js
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

## Return value

The element that was inserted, or `null`, if the insertion failed.

## Errors

|   Exception   |                    Explanation                     |
| :-----------: | :------------------------------------------------: |
| `SyntaxError` | The `position` specified is not a recognized value |
|  `TypeError`  |   The `element` specified is not a valid element   |

## Examples

```js
const span = document.getElementById('mySpan');
const h2 = document.getElementById('myH2');
h2.insertAdjacentElement('afterbegin', span);
```

## Reference

1. [Element.insertAdjacentElement() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
2. [insertAdjacentElement() - w3schools](https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp)

# Node.removeChild()

The `removeChild()` method of the Node interface ==removes a child node from the DOM== and ==returns the removed node==.

> **Note**: As long as a reference is kept on the removed child, it still exists in memory, but is no longer part of the DOM. It can still be reused later in the code. If the return value of `removeChild()` is not stored, and no other reference is kept, it will be automatically deleted from memory after a short time.
>
> Unlike `Node.cloneNode()` the return value preserves the EventListener objects associated with it.

## Syntax

```js
element.removeChild(childNode);

// or
node.removeChild(childNode);
```

## Parameters

**childNode** (required) - a Node that is the child node to be removed from the DOM.

## Return Value

The removed node (element). `null` if the child does not exist.

## Examples

```js
const list = document.getElementById('myList');
list.removeChild(list.firstElementChild);
```

## Remove object from DOM & memory leaks

​	If you delete/remove an object from the DOM and you have no reference to that object in your code anymore , then JavaScript or the browser will automatically clear everything that is related to that DOM object including any event listeners, so it will clear the event listeners for you automatically.

## Reference

1. [Node.removeChild() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
2. [removeChild() - w3schools](https://www.w3schools.com/jsref/met_node_removechild.asp)

# Element.replaceWith()

The `Element.replaceWith()` method ==replaces== the `Element` in the children list of its parent with a set of Node or DOMString objects. DOMString objects are inserted as equivalent Text nodes.

## Syntax

```js
element.replaceWith(nodeOrDOMString);
```

## Parameters

**nodeOrDOMString** - a set of Node or DOMString objects to replace.

## Examples

```js
const div = document.createElement('div');
const p = document.createElement('p');
div.appendChild(p);
const span = document.createElement('span');

p.replaceWith(span);

console.log(div.outerHTML); // "<div><span></span></div>"
```

## Reference

1. [Element.replaceWith() - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/replacewith)

# Element.append()

The `Element.append()` method inserts a set of **Node** objects or **DOMString** objects **after the last child** of the `Element`. DOMString objects are inserted as equivalent Text nodes.

Differences from `Node.appendChild()`:

- `Element.append()` allows you to also append **DOMString** objects, whereas `Node.appendChild()` only accepts **Node** objects.
- `Element.append()` has **no return value**, whereas `Node.appendChild()` **returns** the appended Node object.
- `Element.append()` can append **several nodes and strings**, whereas `Node.appendChild()` can only append **one node**.

## Syntax

```js
element.append(...nodesOrDOMStrings);
```

## Parameters

**nodesOrDOMStrings** - a set of **Node** or **DOMString** objects to insert.

## Example

```js
let div = document.createElement('div');
let p = document.createElement('p');

// Appending an element
div.append(p);

// Appending text
div.append('Some text');

// Appending an element and text
div.append('Some text', p);
```

## Reference

1. [Element.append() - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/append#appending_an_element)

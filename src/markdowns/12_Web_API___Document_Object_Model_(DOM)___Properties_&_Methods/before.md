# Element.before()

The `Element.before()` method ==inserts== a set of ==Node== or ==DOMString== objects in the ==children list== of the `Element`'s parent, just ==before== the `Element`.

DOMString objects are inserted as equivalent Text nodes.

## Syntax

```js
element.before(nodesOrDOMString);
```

## Parameters

**nodesOrDOMString** - a set of Node or DOMString objects to insert.

## Examples

Inserting an element:

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);
let span = document.createElement('span');

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

Inserting text:

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);

p.before('Text');

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

Inserting an element and text:

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);
let span = document.createElement('span');

p.before(span, 'Text');

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

## Reference

1. [Element.before() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/before)

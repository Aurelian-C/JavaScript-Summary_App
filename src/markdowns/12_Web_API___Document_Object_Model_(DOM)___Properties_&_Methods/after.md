# Element.after()

The `Element.after()` method ==inserts== a set of ==Node== or ==DOMString== objects ==in the children list of Element's parent==, just ==after== the Element.

DOMString objects are inserted as equivalent Text nodes.

## Syntax

```js
element.after(nodesOrDOMString);
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

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

Inserting text:

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);

p.after('Text');

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

Inserting an element and text:

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);
let span = document.createElement('span');

p.after(span, 'Text');

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
```

## Reference

1. [Element.after() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/after)

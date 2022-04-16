# Element.prepend()

The `Element.prepend()` method ==inserts== a set of ==Node objects== or ==DOMString objects== ==before the first child== of the Element. DOMString objects are inserted as equivalent Text nodes.

## Syntax

```js
element.prepend(...nodesOrDOMStrings);
```

## Parameters

**nodesOrDOMStrings** - a set of Node or DOMString objects to insert.

## Examples

Prepending an element

```js
let div = document.createElement('div');
let p = document.createElement('p');
let span = document.createElement('span');
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

Prepending text

```js
let div = document.createElement('div');
div.append('Some text');
div.prepend('Headline: ');

console.log(div.textContent); // "Headline: Some text"
```

Prepending an element and text

```js
let div = document.createElement('div');
let p = document.createElement('p');
div.prepend('Some text', p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

## Reference

1. [Element.prepend() - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/prepend)

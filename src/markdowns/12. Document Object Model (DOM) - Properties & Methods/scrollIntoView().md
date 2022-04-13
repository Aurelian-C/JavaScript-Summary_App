# Element.scrollIntoView()

The `scrollIntoView()` method **scrolls an element into the visible area of the browser window**.

> **Note**: Depending on the layout of other elements, some elements may not be scrolled completely to the top or to the bottom.

## Syntax

```js
element.scrollIntoView();
element.scrollIntoView(alignToTop); // Boolean parameter
element.scrollIntoView(scrollIntoViewOptions); // Object parameter
```

### Parameters

`alignToTop` (optional): Is a boolean value:

- If `true`, the top of the element will be aligned to the top of the visible area of the scrollable ancestor. Corresponds to `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is the default value.
- If `false`, the bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor. Corresponds to `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

`scrollIntoViewOptions` (optional): Is an Object with the following properties:

- `behavior` (optional): Defines the transition animation. One of `auto` or `smooth`. Defaults to `auto`.

- `block` (optional): Defines vertical alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `start`.

- `inline` (optional): Defines horizontal alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `nearest`.

### Example:

```js
const element = document.getElementById('box');

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: 'end' });
element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
```

## Reference

1. [Element scrollIntoView - w3schools](https://www.w3schools.com/jsreF/met_element_scrollintoview.asp)

2. [Element.scrollIntoView() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

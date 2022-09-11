# Window.scrollY

The `scrollY` property returns the **pixels a document has scrolled from the upper left corner of the window**.

The `scrollY` property is **read-only**.

The read-only `scrollY` property of the `Window` interface **returns the number of pixels that the document is currently scrolled vertically**. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number.

> **Note**: The `scrollY` property is equal to the `pageYOffset` property. The `pageYOffset` property is an alias for the `scrollY` property:
>
> ```js
> window.pageYOffset == window.scrollY; // always true
> ```
>
> For cross-browser compatibility, use `window.pageYOffset` instead of `window.scrollY`.

## Syntax

```js
window.scrollY;

// or just
scrollY;
```

## Return Value

A number. If the document isn't scrolled at all up or down, then `scrollY` is 0.

In more technical terms, `scrollY` returns the Y coordinate of the top edge of the current viewport. If there is no viewport, the returned value is 0.

## Reference

1. [Window scrollY - w3schools](https://www.w3schools.com/jsref/prop_win_scrolly.asp)

2. [Window.scrollY - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)

3. [Window pageYOffset - w3schools](https://www.w3schools.com/jsref/prop_win_pageyoffset.asp)

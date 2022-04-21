# Window.scrollX

The `scrollX` property returns the **pixels a document has scrolled from the upper left corner of the window**.

The `scrollX` property is **read-only**.

The read-only `scrollX` property of the `Window` interface **returns the number of pixels that the document is currently scrolled horizontally**. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number.

> **Note**: The `scrollX` property is equal to the `pageXOffset` property. The `pageXOffset` property is an alias for the `scrollX` property:
>
> ```js
> window.pageXOffset == window.scrollX; // always true
> ```
>
> For cross-browser compatibility, use `window.pageXOffset` instead of `window.scrollX`.

## Syntax

```js
window.scrollX;

// or just
scrollX;
```

## Return Value

A number. If the document isn't scrolled at all left or right, then `scrollX` returns 0.

In more technical terms, `scrollX` returns the X coordinate of the left edge of the current viewport. If there is no viewport, the returned value is 0.

## Reference

1. [Window scrollX - w3schools](https://www.w3schools.com/jsref/prop_win_scrollx.asp)

2. [Window.scrollX - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX)

3. [Window pageXOffset - w3schools](https://www.w3schools.com/jsref/prop_win_pagexoffset.asp)

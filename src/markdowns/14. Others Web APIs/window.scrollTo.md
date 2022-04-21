# Window.scrollTo()

The `scrollTo()` method **scrolls the document to specified coordinates**.

> **Note**: For the `scrollTo()` method to work, the document must be larger than the screen, and the scrollbar must be visible.

## Syntax

```js
window.scrollTo(x, y);
window.scrollTo(options);
```

## Parameters

- `x` (required). The coordinate to scroll to (horizontally), in pixels.
- `y` (required). The coordinate to scroll to (vertically), in pixels.

`options`: A dictionary containing the following parameters:

- `top`: Specifies the number of pixels along the Y axis to scroll the window or element.
- `left`: Specifies the number of pixels along the X axis to scroll the window or element.
- `behavior`: Specifies whether the scrolling should animate smoothly (`smooth`), or happen instantly in a single jump (`auto`, the default value).

## Return Value

none

## Examples

```js
window.scrollTo(0, 1000);

// Using options:
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth',
});
```

## Reference

1. [Window scrollTo() - w3schools](https://www.w3schools.com/jsref/met_win_scrollto.asp)

2. [Window.scrollTo() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)

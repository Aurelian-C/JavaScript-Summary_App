# HTMLElement.hidden

The HTMLElement property `hidden` is a boolean value which is `true` if the element is hidden; otherwise the value is `false`. This is quite different from using the CSS property `display` to control the visibility of an element.

The `hidden` property applies to all presentation modes and should not be used to hide content that is meant to be directly accessible to the user.

Appropriate use cases for `hidden` include:

- Content that isn't yet relevant but may be needed later
- Content that was previously needed but is not any longer
- Content that is reused by other parts of the page in a template-like fashion
- Creating an offscreen canvas as a drawing buffer

Inappropriate use cases include:

- Hiding panels in a tabbed dialog box
- Hiding content in one presentation while intending it to be visible in others

> **Note**: Elements that are not `hidden` must not link to elements which are.

## Syntax

```js
element.hidden = booleanValue;
```

## Property Value

**booleanValue** - a Boolean which is `true` if the element is hidden from view; otherwise, the value is `false`.

## Reference

1. [HTMLElement.hidden - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden)

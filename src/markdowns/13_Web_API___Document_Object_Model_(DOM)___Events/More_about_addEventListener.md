# More on `addEventListener()`

The **`addEventListener()`** method of the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface sets up a function that will be called whenever the specified event is delivered to the target.

Common targets are [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), or its children, [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), and [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window), but the target may be any object that supports events (such as [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)).

> **Note:** The `addEventListener()` method is the *recommended* way to register an event listener. The benefits are as follows:
>
> - it allows adding more than one handler for an event
> - in contrast to using an `onXYZ` property, it gives you finer-grained control of the phase when the listener is activated (capturing vs. bubbling)
> - it works on any event target, not just HTML or SVG elements

The `addEventListener()` method:

- attaches an event handler to the specified element
- attaches an event handler to an element without overwriting existing event handlers
- makes it easier to control how the event reacts to bubbling

When using the `addEventListener()` method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

## Syntax

```js
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```



## References

1. [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
2. [DOM EventListener - w3schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
3. [HTML DOM Element addEventListener() - w3schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
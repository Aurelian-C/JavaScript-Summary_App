# removeEventListener()

If you've added an event handler using `addEventListener()`, you can remove it again using the `removeEventListener()` method. For example, this would remove the changeBackground() event handler:

```js
btn.removeEventListener('click', changeBackground);
```

## Syntax

```js
removeEventListener(type, listener);
removeEventListener(type, listener, options);
removeEventListener(type, listener, useCapture);
```

- The **first parameter** is a string which specifies the type of event for which to remove an event listener.
- The **second parameter** the function of the event handler to remove from the event target.
- The **third parameter** is an _object that specifies characteristics about the event listener_ or a _boolean value_ specifying whether to use event bubbling or event capturing.

## Matching event listeners for removal

Given an event listener previously added by calling `addEventListener()`, you may eventually come to a point at which you need to remove it. Obviously, you need to specify the same type and `listener` parameters to `removeEventListener()`. But what about the `options` or `useCapture` parameters?

While `addEventListener()` will let you add the same listener more than once for the same type if the options are different, the only option `removeEventListener()` checks is the `capture/useCapture` flag. Its value must match for `removeEventListener()` to match, but the other values don't.

For example, consider this call to `addEventListener()`:

```js
element.addEventListener('mousedown', handleMouseDown, true);
```

Now consider each of these two calls to `removeEventListener()`:

```js
element.removeEventListener('mousedown', handleMouseDown, false); // Fails
element.removeEventListener('mousedown', handleMouseDown, true); // Succeeds
```

The first call fails because the value of `useCapture` doesn't match. The second succeeds, since `useCapture` matches up.

Now consider this:

```js
element.addEventListener('mousedown', handleMouseDown, { passive: true });
```

Here, we specify an `options` object in which `passive` is set to `true`, while the other options are left to the default value of `false`. Now look at each of these calls to `removeEventListener()` in turn. Any of them in which `capture` or `useCapture` is `true` fail; all others succeed.

Only `the` capture setting matters to `removeEventListener()`.

```js
element.removeEventListener('mousedown', handleMouseDown, { passive: true }); // Succeeds
element.removeEventListener('mousedown', handleMouseDown, { capture: false }); // Succeeds
element.removeEventListener('mousedown', handleMouseDown, { capture: true }); // Fails
element.removeEventListener('mousedown', handleMouseDown, { passive: false }); // Succeeds
element.removeEventListener('mousedown', handleMouseDown, false); // Succeeds
element.removeEventListener('mousedown', handleMouseDown, true); // Fails
```

It's worth noting that some browser releases have been inconsistent on this, and unless you have specific reasons otherwise, it's probably wise to use the same values used for the call to `addEventListener()` when calling `removeEventListener()`.

> Notes:
>
> - If a listener is registered twice, one with the capture flag set and one without, you must remove each one separately. Removal of a capturing listener does not affect a non-capturing version of the same listener, and vice versa.
> - For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.

## References

1. [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

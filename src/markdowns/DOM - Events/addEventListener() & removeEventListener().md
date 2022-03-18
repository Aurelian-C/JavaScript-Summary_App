# addEventListener():

The recommended mechanism for adding event handlers in web pages is the `addEventListener()` method. Inside the `addEventListener()` function, we specify two parameters: the name of the event we want to register this handler for, and the code that comprises the handler function we want to run in response to it.

It is fine to make the handler function a separate named function, like this:

```js
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', changeBackground);
```

- The `addEventListener()` method attaches an event handler to the specified element.
- The `addEventListener()` method attaches an event handler to an element without overwriting existing event handlers.
- You can add many event handlers to one element.
- You can add many event handlers of the same type to one element, i.e two "click" events.
- You can add event listeners to any DOM object not only HTML elements. i.e the window object.
- The `addEventListener()` method makes it easier to control how the event reacts to bubbling.

When using the `addEventListener()` method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup. You can easily remove an event listener by using the `removeEventListener()` method.

The `addEventListener()` method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

If you've added an event handler using `addEventListener()`, you can remove it again using the `removeEventListener()` method. For example, this would remove the changeBackground() event handler:

```js
btn.removeEventListener('click', changeBackground);
```

For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.

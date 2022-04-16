# addEventListener()

The recommended mechanism for adding event handlers in web pages is the `addEventListener()` method.

The `addEventListener()` method of the `EventTarget` interface sets up a function that will be called whenever the specified event is delivered to the target. Common targets are `Element`, or its children, `Document`, and `Window`, but the target may be any object that supports events (such as `XMLHttpRequest`).

- The `addEventListener()` method attaches an event handler to the **specified element**.
- The `addEventListener()` method attaches an event handler to an element **without overwriting** existing event handlers.
- You can add **many event handlers to one element**.
- You can add **many event handlers of the same type to one element**, i.e two "click" events.
- You can add event listeners to **any DOM object not only HTML elements**. i.e the `window` object.
- The `addEventListener()` method makes it easier to control how the event reacts to **bubbling**.

When using the `addEventListener()` method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

## Syntax

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

- The **first parameter** is the type of the event (like "click" or "mousedown" or any other event type.)
- The **second parameter** is the function we want to call when the event occurs.
- The **third parameter** is an _object that specifies characteristics about the event listener_ or a _boolean value_ specifying whether to use event bubbling or event capturing. This parameter is optional.

> Note: The `addEventListener()` method allows you to add event listeners on any HTML DOM object such as `HTML elements`, the `HTML document`, the `window` object, or other objects that support events, like the `xmlHttpRequest` object.

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

## Event listener with an arrow function

This example demonstrates a simple event listener implemented using arrow function notation.

HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

Javascript

```js
// Function to change the content of t2
function modifyText(new_text) {
  const t2 = document.getElementById('t2');
  t2.firstChild.nodeValue = new_text;
}

// Add event listener to table with an arrow function
const el = document.getElementById('outside');
el.addEventListener(
  'click',
  () => {
    modifyText('four');
  },
  false
);
```

Please note that while anonymous and arrow functions are similar, they have different `this` bindings. While anonymous (and all traditional JavaScript functions) create their own `this` bindings, **arrow functions inherit the `this` binding of the containing function**. _That means that the variables and constants available to the containing function are also available to the event handler when using an arrow function_.

## The value of `this` within the handler

It is often desirable to reference the element on which the event handler was fired, such as when using a generic handler for a set of similar elements. When attaching a handler function to an element using `addEventListener()`, the value of **`this` inside the handler will be a reference to the element**. It will be the same as the value of the `currentTarget` property of the event argument that is passed to the handler.

```js
my_element.addEventListener('click', function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

> Note: arrow functions do not have their own `this` context.

```js
my_element.addEventListener('click', e => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

## Getting data into an event listener using `this`

You can use `Function.prototype.bind()` to pass a value to an event listener via the `this` reference variable.

```js
const myButton = document.getElementById('my-button-id');
const someString = 'Data';

myButton.addEventListener(
  'click',
  function () {
    console.log(this); // Expected Value: 'Data'
  }.bind(someString)
);
```

This method is suitable when _you don't need to know which HTML element the event listener fired_ on programmatically from within the event listener. The primary benefit to doing this is that the event listener receives the data in much the same way that it would if you were to actually pass it through its argument list.

## References

1. [DOM EventListener - w3schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
2. [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
3. [DOM Element addEventListener() - w3schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)

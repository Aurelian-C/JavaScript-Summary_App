# Event handling

Events are signals fired inside the browser window that notify of changes in the browser or operating system environment. ==Programmers can create **event handler code that will run when an event fires**==, allowing web pages to respond appropriately to change.

There are 3 ways of registering event handlers:

- `addEventListener()` method;
- event handler properties;
- inline event handlers.

## Registering event listeners: [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

The recommended mechanism for adding event handlers in web pages is the `addEventListener()` method. ==This approach **allows multiple listeners to be assigned to an element**, and for listeners to be *removed* if needed (using [`EventTarget.removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener))==.

```js
const btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
   console.log('greet:', event);
});

// or

// It is fine to make the handler function a separate named function
function greet(event) {
  console.log('greet:', event);
};
btn.addEventListener('click', greet);
```

==Inside the `addEventListener()` function, we specify **two parameters**:==

- ==the **name of the event** we want to register this handler for, _and_==
- ==**the code that comprises the handler function** we want to run in response to it==

You can have multiple handlers for a single event by making more than one call to `addEventListener()`, providing different handlers:

```js
// Both functions would now run when the element is clicked
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

### Other event listener mechanisms: two ways NOT to add event listeners

==We recommend that you use `addEventListener()` to register event handlers==. It's the most powerful method and scales best with more complex programs. However, there are two other ways of registering event handlers that you might see: **event handler properties** and **inline event handlers**.

#### Event handler properties

_By convention, JavaScript objects that fire events have a corresponding `onevent` property (named by prefixing "on" to the name of the event)_. These property is called to run associated handler code when the event is fired, and may also be called directly by your own code. _With event handler property, you can't add more than one handler for a single event_. If needed the handler can be replaced by assigning another function to the same property. 

```js
const btn = document.querySelector('button');

function greet(event) {
  console.log('greet:', event);
}

btn.onclick = greet;
// or
btn.onclick = function(event) {
   console.log('greet:', event);
}
```

With event handler properties, you can't add more than one handler for a single event. For example, you can call `addEventListener('click', handler)` on an element multiple times, with different functions specified in the second argument:

```js
element.addEventListener('click', function1);
element.addEventListener('click', function2);
```

This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:

```js
element.onclick = function1;
element.onclick = function2;
```

#### Inline event handlers

You might also see a pattern like this in your code:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

The earliest method of registering event handlers found on the Web involved [*event handler HTML attributes*](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#event_handler_attributes) (or *inline event handlers*) like the one shown above — the attribute value is literally the JavaScript code you want to run when the event occurs. The above example invokes a function defined inside a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element on the same page, but you could also insert JavaScript directly inside the attribute, for example:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

==You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient. For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to read. Keeping your JavaScript separate is a good practice, and if it is in a separate file you can apply it to multiple HTML documents==. 

Even in a single file, inline event handlers are not a good idea. One button is fine, but what if you had 100 buttons? You'd have to add 100 attributes to the file; it would quickly turn into a maintenance nightmare. With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:

```js
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', bgChange);
}
```

Finally, many common server configurations will disallow inline JavaScript, as a security measure. ==**You should never use the HTML event handler attributes** — those are outdated, and using them is bad practice==.

## Removing event listeners: [`EventTarget.removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

If you've added an event handler using `addEventListener()`, you can remove it again using the `removeEventListener()` method:

```js
btn.removeEventListener('click', greet);
```

> **Note**: For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.

## References

1. [Introduction to events - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
2. [Event handling (overview) - MDN](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers)